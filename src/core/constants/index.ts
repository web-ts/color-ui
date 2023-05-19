import { ColorUIOptions } from "../config/types";

export const DEFAULT_COLORS = {
  light: {
    primary: "#3498db", // a light blue color often used for links or accents
    secondary: "#7f8c8d", // a medium gray color for secondary text or borders
    tertiary: "#2ecc71", // a light green color for additional accents or success messages
    success: "#27ae60", // a darker green color for indicating success or confirmation
    info: "#2980b9", // a darker blue color for information or data
    warning: "#f39c12", // a yellow-orange color for warning or cautionary messages
    danger: "#e74c3c", // a red color for indicating danger or errors
    background: "#ecf0f1", // a light gray color for the background
    text: {
      light: "#fefefe", // a white color for text on a dark background
      dark: "#090909", // a black color for text on a light background
    },
  },
  dark: {
    primary: "#1abc9c", // a turquoise color for links or accents in a dark theme
    secondary: "#bdc3c7", // a lighter gray color for secondary text or borders
    tertiary: "#9b59b6", // a purple color for additional accents or success messages
    success: "#2ecc71", // a lighter green color for indicating success or confirmation
    info: "#3498db", // a brighter blue color for information or data
    warning: "#f1c40f", // a brighter yellow-orange color for warning or cautionary messages
    danger: "#e74c3c", // the same red color as in the light theme for indicating danger or errors
    background: "#2c3e50", // a dark blue color for the background
    text: {
      light: "#fefefe", // the same white color as in the light theme for text on a dark background
      dark: "#090909", // the same black color as in the light theme for text on a light background
    },
  },
};

export const DEFAULT_ICONS = {
  spinner: "line-md:loading-twotone-loop",
  close: "ic:round-close",
  menu: "ic:round-menu",
  info: "ic:round-info",
  success: "ic:round-check-circle",
  warning: "ic:round-warning",
  danger: "ic:round-dangerous",
};

export const DEFAULT_COLOR_UI_OPTIONS: ColorUIOptions = {
  colors: DEFAULT_COLORS,
  icons: DEFAULT_ICONS,
  iconProvider: {
    component: null as any,
    keyPropName: "icon",
    defaultProps: {},
  },
};
