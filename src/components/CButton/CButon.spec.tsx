import { it, expect, describe } from "vitest";

import { render } from "@solidjs/testing-library";

import { CButton } from "./CButton";
import { Router } from "@solidjs/router";

describe("CButton", () => {
  it("should render a default button", () => {
    const { container } = render(() => <CButton>Test</CButton>);
    expect(container).toMatchSnapshot();
  });

  it("should render all color variants", () => {
    const { container } = render(() => (
      <>
        <CButton color="primary">Test</CButton>
        <CButton color="secondary">Test</CButton>
        <CButton color="success">Test</CButton>
        <CButton color="warning">Test</CButton>
        <CButton color="danger">Test</CButton>
        <CButton color="info">Test</CButton>
      </>
    ));
    expect(container).toMatchSnapshot();
  });

  it("should render all size variants", () => {
    const { container } = render(() => (
      <>
        <CButton size="xs">Test</CButton>
        <CButton size="sm">Test</CButton>
        <CButton size="md">Test</CButton>
        <CButton size="lg">Test</CButton>
        <CButton size="xl">Test</CButton>
      </>
    ));
    expect(container).toMatchSnapshot();
  });

  it("should render all buton variant types", () => {
    const { container } = render(() => (
      <>
        <CButton variant="solid">Test</CButton>
        <CButton variant="outline">Test</CButton>
        <CButton variant="text">Test</CButton>
      </>
    ));
    expect(container).toMatchSnapshot();
  });

  it("should render buttons with all options", () => {
    const { container } = render(() => (
      <>
        <CButton color="primary" size="sm" variant="outline">
          Test
        </CButton>
        <CButton color="secondary" size="lg" variant="text">
          Test
        </CButton>
      </>
    ));

    expect(container).toMatchSnapshot();
  });

  it("should render a button in the loading state", () => {
    const { container } = render(() => <CButton loading>Test</CButton>);

    expect(container).toMatchSnapshot();
  });

  it("should render a button in the loading state with a custom loading icon", () => {
    const { container } = render(() => <CButton loading>Test</CButton>);

    expect(container).toMatchSnapshot();
  });

  it("should render an anchor tag when href is provided", () => {
    const { container } = render(() => (
      <CButton href="https://google.com">Test</CButton>
    ));

    expect(container).toMatchSnapshot();

    const { container: container2 } = render(() => (
      <Router>
        <CButton href="/page" routerLink>
          Test
        </CButton>
      </Router>
    ));

    expect(container2).toMatchSnapshot();
  });
});
