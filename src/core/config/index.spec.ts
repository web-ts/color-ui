import { it, expect, describe } from "vitest";
import { getConfig, createColorUI } from ".";

describe("config", () => {
  it("should get the default configuration", () => {
    expect(getConfig()).toEqual({
      colors: {
        light: {
          primary: "#3498db",
          secondary: "#7f8c8d",
          tertiary: "#2ecc71",
          success: "#27ae60",
          info: "#2980b9",
          warning: "#f39c12",
          danger: "#e74c3c",
          background: "#ecf0f1",
          text: {
            light: "#fefefe",
            dark: "#090909",
          },
        },
        dark: {
          primary: "#1abc9c",
          secondary: "#bdc3c7",
          tertiary: "#9b59b6",
          success: "#2ecc71",
          info: "#3498db",
          warning: "#f1c40f",
          danger: "#e74c3c",
          background: "#2c3e50",
          text: {
            light: "#fefefe",
            dark: "#090909",
          },
        },
      },
      icons: {
        spinner: "line-md:loading-twotone-loop",
        close: "ic:round-close",
        menu: "ic:round-menu",
        info: "ic:round-info",
        success: "ic:round-check-circle",
        warning: "ic:round-warning",
        danger: "ic:round-dangerous",
      },
      iconProvider: {
        component: null as any,
        keyPropName: "icon",
        defaultProps: {},
      },
    });
  });

  it("should set the configuration", () => {
    const newConfig = {
      colors: {
        light: {
          primary: "#000000",
          secondary: "#000000",
          tertiary: "#000000",
          success: "#000000",
          info: "#000000",
          warning: "#000000",
          danger: "#000000",
          background: "#000000",
          text: {
            light: "#000000",
            dark: "#000000",
          },
        },
        dark: {
          primary: "#000000",
          secondary: "#000000",
          tertiary: "#000000",
          success: "#000000",
          info: "#000000",
          warning: "#000000",
          danger: "#000000",
          background: "#000000",
          text: {
            light: "#000000",
            dark: "#000000",
          },
        },
      },
      icons: {
        spinner: "line-md:loading-twotone-loopa",
        close: "ic:round-closea",
        menu: "ic:round-menua",
        info: "ic:round-infoa",
        success: "ic:round-check-circlea",
        warning: "ic:round-warninga",
        danger: "ic:round-dangerousa",
      },
      iconProvider: {
        component: null as any,
        keyPropName: "icon",
        defaultProps: {},
      },
    };

    createColorUI(newConfig);

    expect(getConfig()).toEqual(newConfig);
  });
});
