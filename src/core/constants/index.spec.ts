import { it, expect, describe } from "vitest";
import { DEFAULT_COLORS, DEFAULT_COLOR_UI_OPTIONS, DEFAULT_ICONS } from ".";

describe("constants", () => {
  it("constants are matching the defaults", () => {
    expect(DEFAULT_COLORS).toMatchSnapshot();
    expect(DEFAULT_ICONS).toMatchSnapshot();
    expect(DEFAULT_COLOR_UI_OPTIONS).toMatchSnapshot();
  });
});
