import { Component } from "solid-js";
import { I18nProvider } from "../i18n/types";

export type ColorOptions = {
  primary: string;
  secondary: string;
  tertiary: string;
  success: string;
  info: string;
  warning: string;
  danger: string;
  background: string;
  text: {
    light: string;
    dark: string;
  };
};

export type ColorUIOptions = {
  colors: {
    light: ColorOptions;
    dark: ColorOptions;
  };
  icons: {
    spinner: string;
    close: string;
    menu: string;
    info: string;
    success: string;
    warning: string;
    danger: string;
  };
  i18nProvider?: I18nProvider;
  iconProvider: {
    component: Component<any>;
    keyPropName: string;
    defaultProps: Record<string, any>;
  };
};
