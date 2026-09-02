import type { Transition } from "motion/react";

/**
 * Apple WWDC 2018 *Designing Fluid Interfaces* maps onto Motion springs.
 *
 * Apple designers set two knobs:
 *   - damping ratio (1.0 = no bounce, ~0.8 = a little overshoot)
 *   - response (seconds to the target — not a CSS duration)
 *
 * Motion's `bounce` + `duration` is the same idea. `bounce: 0` is critically
 * damped. The mass-spring form (`stiffness` / `damping`) is what you want when
 * handing off finger velocity.
 */

export const springs = {
  /** Default UI. Apple: damping 1.0, response 0.3 */
  ui: { type: "spring", bounce: 0, duration: 0.3 } satisfies Transition,
  /** Move / reposition. Apple: damping 1.0, response 0.4 */
  move: { type: "spring", bounce: 0, duration: 0.4 } satisfies Transition,
  /** Icon swap. Emil: bounce 0, duration 0.3 */
  icon: { type: "spring", bounce: 0, duration: 0.3 } satisfies Transition,
  /** Drawer / thrown objects. Apple: damping 0.8, response 0.3 */
  sheet: { type: "spring", bounce: 0.2, duration: 0.3 } satisfies Transition,
  /** Soft settle */
  soft: { type: "spring", bounce: 0.12, duration: 0.45 } satisfies Transition,
} as const;

export const reducedFade: Transition = {
  duration: 0.16,
  ease: [0.23, 1, 0.32, 1],
};

export function motionTransition(reduce: boolean | null, spring: Transition): Transition {
  return reduce ? reducedFade : spring;
}

/** Exponential-decay projection Apple ships for flick landings. */
export function projectMomentum(velocityPxPerSec: number, decelerationRate = 0.998): number {
  return (velocityPxPerSec / 1000) * decelerationRate / (1 - decelerationRate);
}

/**
 * Convert Apple damping-ratio + response into a Motion physics spring.
 * Use this when you need to pass initial velocity from a gesture.
 */
export function appleSpring(dampingRatio: number, response: number, mass = 1) {
  const omega = (2 * Math.PI) / Math.max(response, 0.05);
  const stiffness = mass * omega * omega;
  const damping = 2 * dampingRatio * Math.sqrt(mass * stiffness);
  return { type: "spring" as const, stiffness, damping, mass };
}

export function isCriticallyDamped(dampingRatio: number): boolean {
  return Math.abs(dampingRatio - 1) < 1e-6;
}
