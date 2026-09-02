import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { plainTextFromBionic, processBionicText } from "./bionic.ts";

describe("bionic accessible text", () => {
  it("wraps fixation without changing the spoken string", () => {
    const source = "The quick brown fox.";
    const html = processBionicText(source, 0.6, true);
    assert.ok(html.includes('class="fixation"'));
    assert.equal(plainTextFromBionic(html), source);
  });

  it("leaves plain text alone when strength is zero", () => {
    const source = "Unchanged sentence.";
    assert.equal(processBionicText(source, 0), source);
    assert.equal(plainTextFromBionic(source), source);
  });
});
