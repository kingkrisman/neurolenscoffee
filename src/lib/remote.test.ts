import { afterEach, describe, it } from "node:test";
import assert from "node:assert/strict";
import { asRemoteError, fetchJson, isAbortError, RemoteError } from "./remote.ts";

const originalFetch = globalThis.fetch;

afterEach(() => {
  globalThis.fetch = originalFetch;
});

describe("RemoteError", () => {
  it("marks timeouts and rate limits as retryable", () => {
    assert.equal(new RemoteError("timeout", "slow").retryable, true);
    assert.equal(new RemoteError("rate-limit", "wait", { status: 429 }).retryable, true);
    assert.equal(new RemoteError("not-found", "missing", { status: 404 }).retryable, false);
    assert.equal(new RemoteError("parse", "bad json").retryable, false);
  });

  it("wraps abort errors", () => {
    const abort = new DOMException("Aborted", "AbortError");
    assert.equal(isAbortError(abort), true);
    assert.equal(asRemoteError(abort).kind, "abort");
  });
});

describe("fetchJson", () => {
  it("throws not-found on 404", async () => {
    globalThis.fetch = (async () => new Response("missing", { status: 404 })) as typeof fetch;
    await assert.rejects(() => fetchJson("https://example.test/x"), (error: unknown) => {
      assert.ok(error instanceof RemoteError);
      assert.equal(error.kind, "not-found");
      assert.equal(error.status, 404);
      return true;
    });
  });

  it("throws rate-limit on 429", async () => {
    globalThis.fetch = (async () => new Response("slow down", { status: 429 })) as typeof fetch;
    await assert.rejects(() => fetchJson("https://example.test/x"), (error: unknown) => {
      assert.ok(error instanceof RemoteError);
      assert.equal(error.kind, "rate-limit");
      assert.equal(error.retryable, true);
      return true;
    });
  });

  it("throws parse when the body is not JSON", async () => {
    globalThis.fetch = (async () => new Response("<html></html>", { status: 200 })) as typeof fetch;
    await assert.rejects(() => fetchJson("https://example.test/x"), (error: unknown) => {
      assert.ok(error instanceof RemoteError);
      assert.equal(error.kind, "parse");
      return true;
    });
  });

  it("throws empty on a blank payload", async () => {
    globalThis.fetch = (async () => new Response("  ", { status: 200 })) as typeof fetch;
    await assert.rejects(() => fetchJson("https://example.test/x"), (error: unknown) => {
      assert.ok(error instanceof RemoteError);
      assert.equal(error.kind, "empty");
      return true;
    });
  });

  it("throws timeout when the request is aborted by the timer", async () => {
    globalThis.fetch = (async (_url, init) => {
      await new Promise((_, reject) => {
        init?.signal?.addEventListener("abort", () => {
          reject(new DOMException("Aborted", "AbortError"));
        });
      });
      return new Response("{}");
    }) as typeof fetch;
    await assert.rejects(
      () => fetchJson("https://example.test/x", { timeoutMs: 20 }),
      (error: unknown) => {
        assert.ok(error instanceof RemoteError);
        assert.equal(error.kind, "timeout");
        return true;
      },
    );
  });
});
