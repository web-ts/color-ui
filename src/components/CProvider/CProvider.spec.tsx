import { it, expect, describe } from "vitest";
import { render } from "@solidjs/testing-library";

import { CProvider } from "./CProvider";

describe("CProvider", () => {
  it("should render the light variant", () => {
    render(() => <CProvider mode="light" />);
    expect(
      document.getElementById("color-ui-style")?.innerHTML
    ).toMatchSnapshot();
  });

  it("should render the dark variant", () => {
    render(() => <CProvider mode="dark" />);
    expect(
      document.getElementById("color-ui-style")?.innerHTML
    ).toMatchSnapshot();
  });

  it("should render the light variant with a custom class", () => {
    const { container } = render(() => (
      <CProvider mode="light" class="test-class" />
    ));
    expect(container).toMatchSnapshot();
  });

  it("should render children", () => {
    const { container } = render(() => (
      <CProvider mode="light">
        <div>Test</div>
      </CProvider>
    ));
    expect(container).toMatchSnapshot();
  });
});
