import { describe, expect, it } from "vitest";

import buildColorStyle from "./";

describe("buildColorStyle", () => {
  it("should return the correct style", () => {
    expect(buildColorStyle("red", "tertiary")).toMatchSnapshot();
  });
});
