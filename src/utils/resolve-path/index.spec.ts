import { it, expect, describe } from "vitest";

import resolvePath from ".";

describe("resolvePath", () => {
  it("should return undefined if the path does not exist", () => {
    const object = { a: { b: 1 } };
    const path = "a.b.c";

    const result = resolvePath(object, path);

    expect(result).toBe(undefined);
  });

  it("should return the value at the path", () => {
    const object = { a: { b: 1 } };
    const path = "a.b";

    const result = resolvePath(object, path);

    expect(result).toBe(object.a.b);
  });

  it("should return the value for a deeply nested path", () => {
    const object = { a: { b: { c: 1 } } };
    const path = "a.b.c";

    const result = resolvePath(object, path);

    expect(result).toBe(object.a.b.c);
  });

  it("should handle null values", () => {
    const object = { a: { b: null } };
    const path = "a.b";

    const result = resolvePath(object, path);

    expect(result).toBe(object.a.b);
  });

  it("should handle undefined values", () => {
    const object = { a: { b: undefined } };
    const path = "a.b";

    const result = resolvePath(object, path);

    expect(result).toBe(object.a.b);
  });

  it("should handle empty object", () => {
    const object = undefined;
    const path = "a.b";

    // @ts-expect-error
    const result = resolvePath(object, path);

    expect(result).toBe(undefined);
  });
});
