export type RemoteErrorKind =
  | "abort"
  | "timeout"
  | "offline"
  | "not-found"
  | "rate-limit"
  | "http"
  | "parse"
  | "empty";

const RETRYABLE: Record<RemoteErrorKind, boolean> = {
  abort: false,
  timeout: true,
  offline: true,
  "not-found": false,
  "rate-limit": true,
  http: true,
  parse: false,
  empty: false,
};

export class RemoteError extends Error {
  readonly kind: RemoteErrorKind;
  readonly status?: number;
  readonly retryable: boolean;

  constructor(
    kind: RemoteErrorKind,
    message: string,
    options?: { status?: number; retryable?: boolean; cause?: unknown },
  ) {
    super(message, options?.cause !== undefined ? { cause: options.cause } : undefined);
    this.name = "RemoteError";
    this.kind = kind;
    this.status = options?.status;
    this.retryable = options?.retryable ?? RETRYABLE[kind];
  }
}

export function isRemoteError(error: unknown): error is RemoteError {
  return error instanceof RemoteError;
}

export function isAbortError(error: unknown): boolean {
  if (isRemoteError(error) && error.kind === "abort") return true;
  if (error instanceof DOMException && error.name === "AbortError") return true;
  return error instanceof Error && error.name === "AbortError";
}

export function asRemoteError(error: unknown, fallback = "Something went wrong."): RemoteError {
  if (isRemoteError(error)) return error;
  if (isAbortError(error)) return new RemoteError("abort", "Cancelled.");
  return new RemoteError("http", error instanceof Error ? error.message : fallback, { cause: error });
}

const DEFAULT_TIMEOUT_MS = 12_000;
const USER_AGENT = "NeuroLens/1.0 (adaptive reader)";

export interface FetchJsonOptions {
  signal?: AbortSignal;
  timeoutMs?: number;
  headers?: Record<string, string>;
  accept?: string;
}

function isOffline(): boolean {
  return typeof navigator !== "undefined" && navigator.onLine === false;
}

/** JSON GET with timeout, abort, 404/429, parse, and offline handling. */
export async function fetchJson<T>(url: string, options: FetchJsonOptions = {}): Promise<T> {
  if (isOffline()) {
    throw new RemoteError("offline", "You appear to be offline.");
  }

  const timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;
  const parent = options.signal;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort("timeout"), timeoutMs);
  const onParentAbort = () => controller.abort(parent?.reason ?? "abort");
  parent?.addEventListener("abort", onParentAbort);

  try {
    let response: Response;
    try {
      response = await fetch(url, {
        signal: controller.signal,
        headers: {
          Accept: options.accept ?? "application/json",
          ...(typeof navigator === "undefined" ? { "User-Agent": USER_AGENT } : {}),
          ...options.headers,
        },
      });
    } catch (error) {
      if (controller.signal.aborted) {
        if (parent?.aborted) throw new RemoteError("abort", "Cancelled.");
        throw new RemoteError("timeout", "That request took too long.");
      }
      if (isOffline()) throw new RemoteError("offline", "You appear to be offline.");
      throw new RemoteError("http", "Could not reach that service.", { cause: error });
    }

    if (response.status === 404) {
      throw new RemoteError("not-found", "Nothing was found.", { status: 404 });
    }
    if (response.status === 429) {
      throw new RemoteError("rate-limit", "Too many requests. Wait a moment, then retry.", {
        status: 429,
      });
    }
    if (!response.ok) {
      throw new RemoteError("http", `The service returned ${response.status}.`, {
        status: response.status,
        retryable: response.status >= 500,
      });
    }

    const text = await response.text();
    if (!text.trim()) {
      throw new RemoteError("empty", "The service returned nothing.");
    }
    try {
      return JSON.parse(text) as T;
    } catch {
      throw new RemoteError("parse", "The response could not be read.");
    }
  } finally {
    clearTimeout(timer);
    parent?.removeEventListener("abort", onParentAbort);
  }
}

export function remoteMessage(error: unknown, fallback = "Could not load that."): string {
  if (isAbortError(error)) return "";
  if (isRemoteError(error)) return error.message;
  if (error instanceof Error && error.message) return error.message;
  return fallback;
}
