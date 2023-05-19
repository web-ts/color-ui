import { describe, expect, it } from "vitest";
import {
  colorSet,
  darkenColor,
  accesibleTextColor,
  hexToRgb,
  lightenColor,
  colorTextSet,
  colorTextSetToStyleObject,
  colorOptionsToStyleObject,
} from ".";
import { Color } from "./types";

describe("hexToRgb", () => {
  it("should convert hex to rgb", () => {
    expect(hexToRgb("#000000")).toEqual({ r: 0, g: 0, b: 0 });
    expect(hexToRgb("#ffffff")).toEqual({ r: 255, g: 255, b: 255 });
    expect(hexToRgb("#238d2a")).toEqual({ r: 35, g: 141, b: 42 });
  });

  it("should throw an error if the hex is invalid", () => {
    expect(() => hexToRgb("#00000")).toThrow();
    expect(() => hexToRgb("#0000000")).toThrow();
    expect(() => hexToRgb("#00000000")).toThrow();
    expect(() => hexToRgb("#000000000")).toThrow();
  });

  it("should throw an error if the hex is not a string", () => {
    // @ts-expect-error
    expect(() => hexToRgb(0)).toThrow();
    // @ts-expect-error
    expect(() => hexToRgb({})).toThrow();
    // @ts-expect-error
    expect(() => hexToRgb([])).toThrow();
    // @ts-expect-error
    expect(() => hexToRgb(null)).toThrow();
    // @ts-expect-error
    expect(() => hexToRgb(undefined)).toThrow();
  });
});

describe("lightenColor", () => {
  it("should lighten a color", () => {
    expect(lightenColor({ r: 0, g: 0, b: 0 }, 0.1)).toEqual({
      r: 25,
      g: 25,
      b: 25,
    });
    expect(lightenColor({ r: 35, g: 141, b: 42 }, 0.1)).toEqual({
      r: 60,
      g: 166,
      b: 67,
    });
    expect(lightenColor({ r: 255, g: 255, b: 255 }, 0.1)).toEqual({
      r: 255,
      g: 255,
      b: 255,
    });
  });

  it("should throw an error if the amount is invalid", () => {
    expect(() => lightenColor({ r: 0, g: 0, b: 0 }, -0.1)).toThrow();
    expect(() => lightenColor({ r: 0, g: 0, b: 0 }, 1.1)).toThrow();
  });
});

describe("darkenColor", () => {
  it("should darken a color", () => {
    expect(darkenColor({ r: 0, g: 0, b: 0 }, 0.1)).toEqual({
      r: 0,
      g: 0,
      b: 0,
    });
    expect(darkenColor({ r: 255, g: 255, b: 255 }, 0.1)).toEqual({
      r: 230,
      g: 230,
      b: 230,
    });
    expect(darkenColor({ r: 35, g: 141, b: 42 }, 0.1)).toEqual({
      r: 10,
      g: 116,
      b: 17,
    });
  });

  it("should throw an error if the amount is invalid", () => {
    expect(() => darkenColor({ r: 0, g: 0, b: 0 }, -0.1)).toThrow();
    expect(() => darkenColor({ r: 0, g: 0, b: 0 }, 1.1)).toThrow();
  });
});

describe("colorSet", () => {
  it("should create a color set", () => {
    expect(colorSet({ r: 35, g: 141, b: 42 })).toEqual({
      base: { r: 35, g: 141, b: 42 },
      light: { r: 60, g: 166, b: 67 },
      lighter: { r: 86, g: 192, b: 93 },
      lightest: { r: 111, g: 217, b: 118 },
      dark: { r: 10, g: 116, b: 17 },
      darker: { r: 0, g: 90, b: 0 },
      darkest: { r: 0, g: 65, b: 0 },
    });
  });
});

describe("accesibleTextColor", () => {
  it("should generate the right text for a given color", () => {
    const textColor: { light: Color; dark: Color } = {
      light: { r: 255, g: 255, b: 255 },
      dark: { r: 0, g: 0, b: 0 },
    };

    expect(accesibleTextColor({ r: 255, g: 0, b: 0 }, textColor)).toEqual({
      r: 0,
      g: 0,
      b: 0,
    });
    expect(accesibleTextColor({ r: 255, g: 255, b: 255 }, textColor)).toEqual({
      r: 0,
      g: 0,
      b: 0,
    });
    expect(accesibleTextColor({ r: 20, g: 30, b: 40 }, textColor)).toEqual({
      r: 255,
      g: 255,
      b: 255,
    });
    expect(accesibleTextColor({ r: 128, g: 128, b: 128 }, textColor)).toEqual({
      r: 0,
      g: 0,
      b: 0,
    });
  });
});

describe("colorTextSet", () => {
  it("should generate the right set", () => {
    const textColor: { light: Color; dark: Color } = {
      light: { r: 255, g: 255, b: 255 },
      dark: { r: 0, g: 0, b: 0 },
    };
    expect(colorTextSet(colorSet({ r: 35, g: 141, b: 42 }), textColor)).toEqual(
      {
        base: {
          color: { r: 35, g: 141, b: 42 },
          text: { r: 255, g: 255, b: 255 },
        },
        light: {
          color: { r: 60, g: 166, b: 67 },
          text: { r: 0, g: 0, b: 0 },
        },
        lighter: {
          color: { r: 86, g: 192, b: 93 },
          text: { r: 0, g: 0, b: 0 },
        },
        lightest: {
          color: { r: 111, g: 217, b: 118 },
          text: { r: 0, g: 0, b: 0 },
        },
        dark: {
          color: { r: 10, g: 116, b: 17 },
          text: { r: 255, g: 255, b: 255 },
        },
        darker: {
          color: { r: 0, g: 90, b: 0 },
          text: { r: 255, g: 255, b: 255 },
        },
        darkest: {
          color: { r: 0, g: 65, b: 0 },
          text: { r: 255, g: 255, b: 255 },
        },
      }
    );
  });
});

describe("colorTextSetToStyleObject", () => {
  it("generates the right style object", () => {
    const set = colorTextSet(colorSet({ r: 35, g: 141, b: 42 }), {
      light: { r: 255, g: 255, b: 255 },
      dark: { r: 0, g: 0, b: 0 },
    });
    expect(colorTextSetToStyleObject(set, "primary")).toEqual({
      "--color-primary-base": "35, 141, 42",
      "--color-primary-base-text": "255, 255, 255",
      "--color-primary-light": "60, 166, 67",
      "--color-primary-light-text": "0, 0, 0",
      "--color-primary-lighter": "86, 192, 93",
      "--color-primary-lighter-text": "0, 0, 0",
      "--color-primary-lightest": "111, 217, 118",
      "--color-primary-lightest-text": "0, 0, 0",
      "--color-primary-dark": "10, 116, 17",
      "--color-primary-dark-text": "255, 255, 255",
      "--color-primary-darker": "0, 90, 0",
      "--color-primary-darker-text": "255, 255, 255",
      "--color-primary-darkest": "0, 65, 0",
      "--color-primary-darkest-text": "255, 255, 255",
    });
  });
});

describe("colorOptionsToStyleObject", () => {
  it("should create a style object from  color Options", () => {
    const options = {
      primary: "#000000",
      secondary: "#000000",
      tertiary: "#000000",
      success: "#000000",
      info: "#000000",
      warning: "#000000",
      danger: "#000000",
      background: "#000000",
      text: {
        light: "#ffffff",
        dark: "#000000",
      },
    };

    const styleObject = colorOptionsToStyleObject(options);

    expect(styleObject).toEqual({
      "--color-primary-base": "0, 0, 0",
      "--color-primary-base-text": "255, 255, 255",
      "--color-primary-light": "25, 25, 25",
      "--color-primary-light-text": "255, 255, 255",
      "--color-primary-lighter": "51, 51, 51",
      "--color-primary-lighter-text": "255, 255, 255",
      "--color-primary-lightest": "76, 76, 76",
      "--color-primary-lightest-text": "255, 255, 255",
      "--color-primary-dark": "0, 0, 0",
      "--color-primary-dark-text": "255, 255, 255",
      "--color-primary-darker": "0, 0, 0",
      "--color-primary-darker-text": "255, 255, 255",
      "--color-primary-darkest": "0, 0, 0",
      "--color-primary-darkest-text": "255, 255, 255",
      "--color-secondary-base": "0, 0, 0",
      "--color-secondary-base-text": "255, 255, 255",
      "--color-secondary-light": "25, 25, 25",
      "--color-secondary-light-text": "255, 255, 255",
      "--color-secondary-lighter": "51, 51, 51",
      "--color-secondary-lighter-text": "255, 255, 255",
      "--color-secondary-lightest": "76, 76, 76",
      "--color-secondary-lightest-text": "255, 255, 255",
      "--color-secondary-dark": "0, 0, 0",
      "--color-secondary-dark-text": "255, 255, 255",
      "--color-secondary-darker": "0, 0, 0",
      "--color-secondary-darker-text": "255, 255, 255",
      "--color-secondary-darkest": "0, 0, 0",
      "--color-secondary-darkest-text": "255, 255, 255",
      "--color-tertiary-base": "0, 0, 0",
      "--color-tertiary-base-text": "255, 255, 255",
      "--color-tertiary-light": "25, 25, 25",
      "--color-tertiary-light-text": "255, 255, 255",
      "--color-tertiary-lighter": "51, 51, 51",
      "--color-tertiary-lighter-text": "255, 255, 255",
      "--color-tertiary-lightest": "76, 76, 76",
      "--color-tertiary-lightest-text": "255, 255, 255",
      "--color-tertiary-dark": "0, 0, 0",
      "--color-tertiary-dark-text": "255, 255, 255",
      "--color-tertiary-darker": "0, 0, 0",
      "--color-tertiary-darker-text": "255, 255, 255",
      "--color-tertiary-darkest": "0, 0, 0",
      "--color-tertiary-darkest-text": "255, 255, 255",
      "--color-success-base": "0, 0, 0",
      "--color-success-base-text": "255, 255, 255",
      "--color-success-light": "25, 25, 25",
      "--color-success-light-text": "255, 255, 255",
      "--color-success-lighter": "51, 51, 51",
      "--color-success-lighter-text": "255, 255, 255",
      "--color-success-lightest": "76, 76, 76",
      "--color-success-lightest-text": "255, 255, 255",
      "--color-success-dark": "0, 0, 0",
      "--color-success-dark-text": "255, 255, 255",
      "--color-success-darker": "0, 0, 0",
      "--color-success-darker-text": "255, 255, 255",
      "--color-success-darkest": "0, 0, 0",
      "--color-success-darkest-text": "255, 255, 255",
      "--color-info-base": "0, 0, 0",
      "--color-info-base-text": "255, 255, 255",
      "--color-info-light": "25, 25, 25",
      "--color-info-light-text": "255, 255, 255",
      "--color-info-lighter": "51, 51, 51",
      "--color-info-lighter-text": "255, 255, 255",
      "--color-info-lightest": "76, 76, 76",
      "--color-info-lightest-text": "255, 255, 255",
      "--color-info-dark": "0, 0, 0",
      "--color-info-dark-text": "255, 255, 255",
      "--color-info-darker": "0, 0, 0",
      "--color-info-darker-text": "255, 255, 255",
      "--color-info-darkest": "0, 0, 0",
      "--color-info-darkest-text": "255, 255, 255",
      "--color-warning-base": "0, 0, 0",
      "--color-warning-base-text": "255, 255, 255",
      "--color-warning-light": "25, 25, 25",
      "--color-warning-light-text": "255, 255, 255",
      "--color-warning-lighter": "51, 51, 51",
      "--color-warning-lighter-text": "255, 255, 255",
      "--color-warning-lightest": "76, 76, 76",
      "--color-warning-lightest-text": "255, 255, 255",
      "--color-warning-dark": "0, 0, 0",
      "--color-warning-dark-text": "255, 255, 255",
      "--color-warning-darker": "0, 0, 0",
      "--color-warning-darker-text": "255, 255, 255",
      "--color-warning-darkest": "0, 0, 0",
      "--color-warning-darkest-text": "255, 255, 255",
      "--color-danger-base": "0, 0, 0",
      "--color-danger-base-text": "255, 255, 255",
      "--color-danger-light": "25, 25, 25",
      "--color-danger-light-text": "255, 255, 255",
      "--color-danger-lighter": "51, 51, 51",
      "--color-danger-lighter-text": "255, 255, 255",
      "--color-danger-lightest": "76, 76, 76",
      "--color-danger-lightest-text": "255, 255, 255",
      "--color-danger-dark": "0, 0, 0",
      "--color-danger-dark-text": "255, 255, 255",
      "--color-danger-darker": "0, 0, 0",
      "--color-danger-darker-text": "255, 255, 255",
      "--color-danger-darkest": "0, 0, 0",
      "--color-danger-darkest-text": "255, 255, 255",
      "--color-background-base": "0, 0, 0",
      "--color-background-base-text": "255, 255, 255",
      "--color-background-light": "25, 25, 25",
      "--color-background-light-text": "255, 255, 255",
      "--color-background-lighter": "51, 51, 51",
      "--color-background-lighter-text": "255, 255, 255",
      "--color-background-lightest": "76, 76, 76",
      "--color-background-lightest-text": "255, 255, 255",
      "--color-background-dark": "0, 0, 0",
      "--color-background-dark-text": "255, 255, 255",
      "--color-background-darker": "0, 0, 0",
      "--color-background-darker-text": "255, 255, 255",
      "--color-background-darkest": "0, 0, 0",
      "--color-background-darkest-text": "255, 255, 255",
    });
  });
});
