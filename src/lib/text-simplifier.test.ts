import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { simplifyText } from "./text-simplifier.ts";

describe("simplifyText", () => {
  it("replaces a single occurrence of a dense word", () => {
    const result = simplifyText("NeuroLens utilizes a recursive method.");
    assert.ok(result.replacements >= 1);
    assert.match(result.simplified, /uses/i);
    assert.doesNotMatch(result.simplified, /\butilizes\b/i);
  });

  it("rewrites academic samples into plainer wording", () => {
    const result = simplifyText(
      "This study investigates how adaptive formatting reduces visual entropy and has significant implications for neurodivergent learners.",
    );
    assert.ok(result.replacements >= 2);
    assert.ok(result.simplified.length > 20);
    assert.notEqual(result.simplified, result.original);
  });

  it("returns the original when the page is already plain", () => {
    const result = simplifyText("The cat sat on the mat.");
    assert.equal(result.replacements, 0);
    assert.match(result.simplified, /cat sat/);
  });

  it("keeps a period when a long sentence is split on a clause", () => {
    const result = simplifyText(
      "Readers who already work harder to hold attention, decode letterforms, or recover after a pause pay it more often, and they pay it in shorter sessions.",
    );
    assert.match(result.simplified, /sessions\./);
    assert.doesNotMatch(result.simplified, /sessions [A-Z]/);
  });
});
