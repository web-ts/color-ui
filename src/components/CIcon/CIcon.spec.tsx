import { it, expect, describe } from "vitest";

import { CIcon } from "./CIcon";
import { render } from "@solidjs/testing-library";
import { createColorUI } from "@/core/config";

describe("CIcon", () => {
  it("should render empty div if no provider is set", () => {
    const { container } = render(() => <CIcon>mdi:home</CIcon>);

    expect(container).toMatchSnapshot();
  });

  it("should render an icon for the specified provider", () => {
    createColorUI({
      iconProvider: {
        component: (props: { icon: string }) => <span>{props.icon}</span>,
        keyPropName: "icon",
        defaultProps: {},
      },
    });

    const { container } = render(() => <CIcon>mdi:home</CIcon>);

    expect(container).toMatchSnapshot();
  });
});
