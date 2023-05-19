import { it, expect, describe } from "vitest";
import attribufy from ".";

describe("attribufy", () => {
  it("should return an object with the same props as the first argument, but with the keys from the second argument omitted", () => {
    const object = { a: 1, b: 2, c: 3 };
    const result = attribufy(object)("a", "b");

    expect(result).toEqual({ c: 3 });
  });

  it("should not mutate the original object", () => {
    const object = { a: 1, b: 2, c: 3 };
    attribufy(object)("a", "b");

    expect(object).toEqual({ a: 1, b: 2, c: 3 });
  });

  it("should return an empty object if all keys are omitted", () => {
    const object = { a: 1, b: 2, c: 3 };
    const result = attribufy(object)("a", "b", "c");

    expect(result).toEqual({});
  });

  it("should return the original object if no keys are omitted", () => {
    const object = { a: 1, b: 2, c: 3 };
    const result = attribufy(object)();

    expect(result).toEqual(object);
  });
});
