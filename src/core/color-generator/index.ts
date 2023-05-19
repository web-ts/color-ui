import { ColorOptions } from "../config/types";
import { Color, ColorSet, ColorTextSet } from "./types";

/**
 * Convert hex color to RGB
 */
export function hexToRgb(hex: string): Color {
  if (typeof hex !== "string") {
    throw new Error("hex must be a string");
  }

  const regex = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;
  if (!regex.test(hex)) {
    throw new Error("hex must be a valid hex color");
  }

  let r = hex.slice(1, 3);
  let g = hex.slice(3, 5);
  let b = hex.slice(5, 7);

  const intR = parseInt(r, 16);
  const intG = parseInt(g, 16);
  const intB = parseInt(b, 16);

  return { r: intR, g: intG, b: intB };
}

export function lightenColor(color: Color, amount: number): Color {
  const { r, g, b } = color;

  if (amount < 0 || amount > 1) {
    throw new Error("amount must be between 0 and 1");
  }

  const lightenAmount = Math.floor(amount * 255);

  return {
    r: r + lightenAmount > 255 ? 255 : r + lightenAmount,
    g: g + lightenAmount > 255 ? 255 : g + lightenAmount,
    b: b + lightenAmount > 255 ? 255 : b + lightenAmount,
  };
}

export function darkenColor(color: Color, amount: number): Color {
  const { r, g, b } = color;

  if (amount < 0 || amount > 1) {
    throw new Error("amount must be between 0 and 1");
  }

  const darkenAmount = Math.floor(amount * 255);

  return {
    r: r - darkenAmount < 0 ? 0 : r - darkenAmount,
    g: g - darkenAmount < 0 ? 0 : g - darkenAmount,
    b: b - darkenAmount < 0 ? 0 : b - darkenAmount,
  };
}

export function colorSet(color: Color): ColorSet {
  return {
    base: color,
    light: lightenColor(color, 0.1),
    lighter: lightenColor(color, 0.2),
    lightest: lightenColor(color, 0.3),
    dark: darkenColor(color, 0.1),
    darker: darkenColor(color, 0.2),
    darkest: darkenColor(color, 0.3),
  };
}

export function accesibleTextColor(
  color: Color,
  text: { light: Color; dark: Color }
): Color {
  let r = color.r / 255;
  let g = color.g / 255;
  let b = color.b / 255;
  r = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
  g = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
  b = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);
  let luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  if (luminance > 0.21) {
    return text.dark;
  } else {
    return text.light;
  }
}

export function colorTextSet(
  colorSet: ColorSet,
  text: { light: Color; dark: Color }
): ColorTextSet {
  const { base, light, lighter, lightest, dark, darker, darkest } = colorSet;

  return {
    base: { color: base, text: accesibleTextColor(base, text) },
    light: { color: light, text: accesibleTextColor(light, text) },
    lighter: { color: lighter, text: accesibleTextColor(lighter, text) },
    lightest: { color: lightest, text: accesibleTextColor(lightest, text) },
    dark: { color: dark, text: accesibleTextColor(dark, text) },
    darker: { color: darker, text: accesibleTextColor(darker, text) },
    darkest: { color: darkest, text: accesibleTextColor(darkest, text) },
  };
}

export function colorTextSetToStyleObject(
  colorTextSet: ColorTextSet,
  name: string
): Record<string, string> {
  const styleObject: Record<string, string> = {};

  Object.entries(colorTextSet).forEach(([key, value]) => {
    const { color, text } = value;
    const { r, g, b } = color;
    const { r: tR, g: tG, b: tB } = text;

    styleObject[`--color-${name}-${key}`] = `${r}, ${g}, ${b}`;
    styleObject[`--color-${name}-${key}-text`] = `${tR}, ${tG}, ${tB}`;
  });

  return styleObject;
}

export function colorOptionsToStyleObject(
  colorOptions: ColorOptions
): Record<string, string> {
  const styleObject: Record<string, string> = {};

  const textColors = {
    light: hexToRgb(colorOptions.text.light),
    dark: hexToRgb(colorOptions.text.dark),
  };

  Object.entries(colorOptions).forEach(([key, value]) => {
    if (typeof value === "string") {
      const color = hexToRgb(value);
      const colorSetResult = colorSet(color);
      const colorTextSetResult = colorTextSet(colorSetResult, textColors);
      const colorTextSetStyleObject = colorTextSetToStyleObject(
        colorTextSetResult,
        key
      );

      Object.assign(styleObject, colorTextSetStyleObject);
    }
  });

  return styleObject;
}

export function colorOptionsToCssString(colorOptions: ColorOptions) {
  return `${Object.entries(colorOptionsToStyleObject(colorOptions)).reduce(
    (acc, [key, value]) => `${acc}  ${key}: ${value};\n`,
    "* {\n"
  )} }`;
}
