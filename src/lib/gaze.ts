export type GazePoint = { x: number; y: number; ok: boolean };

type Landmark = { x: number; y: number; z?: number };

const LEFT_IRIS = 468;
const RIGHT_IRIS = 473;
const LEFT_INNER = 133;
const LEFT_OUTER = 33;
const RIGHT_INNER = 362;
const RIGHT_OUTER = 263;
const LEFT_TOP = 159;
const LEFT_BOTTOM = 145;
const RIGHT_TOP = 386;
const RIGHT_BOTTOM = 374;

export function cameraAvailable() {
  return typeof navigator !== "undefined" && Boolean(navigator.mediaDevices?.getUserMedia);
}

function ratio(iris: Landmark | undefined, a: Landmark | undefined, b: Landmark | undefined) {
  if (!iris || !a || !b) return 0.5;
  const span = b.x - a.x;
  if (Math.abs(span) < 1e-4) return 0.5;
  return (iris.x - a.x) / span;
}

function ratioY(iris: Landmark | undefined, top: Landmark | undefined, bottom: Landmark | undefined) {
  if (!iris || !top || !bottom) return 0.5;
  const span = bottom.y - top.y;
  if (Math.abs(span) < 1e-4) return 0.5;
  return (iris.y - top.y) / span;
}

export async function startGaze(video: HTMLVideoElement, onPoint: (sample: { nx: number; ny: number; ok: boolean }) => void) {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: { facingMode: "user", width: { ideal: 640 }, height: { ideal: 480 } },
    audio: false,
  });
  video.srcObject = stream;
  video.playsInline = true;
  video.muted = true;
  await video.play();

  const loader = new Function("u", "return import(u)") as (u: string) => Promise<{
    FilesetResolver: { forVisionTasks: (p: string) => Promise<unknown> };
    FaceLandmarker: {
      createFromOptions: (
        files: unknown,
        options: Record<string, unknown>,
      ) => Promise<{
        detectForVideo: (video: HTMLVideoElement, now: number) => { faceLandmarks?: Landmark[][] };
        close: () => void;
      }>;
    };
  }>;
  const vision = await loader("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.17/+esm");
  const files = await vision.FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.17/wasm",
  );
  const landmarker = await vision.FaceLandmarker.createFromOptions(files, {
    baseOptions: {
      modelAssetPath:
        "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task",
      delegate: "GPU",
    },
    runningMode: "VIDEO",
    numFaces: 1,
    outputFacialTransformationMatrixes: true,
  });

  let live = true;
  let last = 0;
  const tick = () => {
    if (!live) return;
    const now = performance.now();
    if (now - last > 50 && video.readyState >= 2) {
      last = now;
      const result = landmarker.detectForVideo(video, now);
      const face = result.faceLandmarks?.[0] as Landmark[] | undefined;
      if (!face) {
        onPoint({ nx: 0, ny: 0, ok: false });
      } else {
        const rx =
          (ratio(face[LEFT_IRIS], face[LEFT_INNER], face[LEFT_OUTER]) +
            ratio(face[RIGHT_IRIS], face[RIGHT_INNER], face[RIGHT_OUTER])) /
          2;
        const ry =
          (ratioY(face[LEFT_IRIS], face[LEFT_TOP], face[LEFT_BOTTOM]) +
            ratioY(face[RIGHT_IRIS], face[RIGHT_TOP], face[RIGHT_BOTTOM])) /
          2;
        onPoint({
          nx: Math.max(-1.4, Math.min(1.4, (0.5 - rx) * 3.2)),
          ny: Math.max(-1.4, Math.min(1.4, (ry - 0.5) * 3.6)),
          ok: true,
        });
      }
    }
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);

  return () => {
    live = false;
    landmarker.close();
    stream.getTracks().forEach((track) => track.stop());
    video.srcObject = null;
  };
}

export function mapGazeToRect(
  nx: number,
  ny: number,
  rect: DOMRect,
): { x: number; y: number } {
  return {
    x: rect.left + rect.width * (0.5 + nx * 0.42),
    y: rect.top + rect.height * (0.5 + ny * 0.42),
  };
}

export function nearestWord(x: number, y: number, root: HTMLElement): HTMLElement | null {
  const words = root.querySelectorAll<HTMLElement>("[data-gaze-word]");
  let best: HTMLElement | null = null;
  let dist = Infinity;
  words.forEach((node) => {
    const box = node.getBoundingClientRect();
    const cx = box.left + box.width / 2;
    const cy = box.top + box.height / 2;
    const d = (cx - x) ** 2 + (cy - y) ** 2;
    if (d < dist) {
      dist = d;
      best = node;
    }
  });
  return best;
}
