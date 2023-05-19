export type Color = {
  r: number;
  g: number;
  b: number;
};

export type ColorSet = {
  base: Color;
  light: Color;
  lighter: Color;
  lightest: Color;
  dark: Color;
  darker: Color;
  darkest: Color;
};

export type ColorTextMatch = {
  color: Color;
  text: Color;
};

export type ColorTextSet = {
  base: ColorTextMatch;
  light: ColorTextMatch;
  lighter: ColorTextMatch;
  lightest: ColorTextMatch;
  dark: ColorTextMatch;
  darker: ColorTextMatch;
  darkest: ColorTextMatch;
};
