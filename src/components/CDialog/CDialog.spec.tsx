import { createSignal } from "solid-js";
/* eslint-disable solid/reactivity */
import { afterEach, describe, expect, it } from "vitest";

import { render } from "@solidjs/testing-library";

import { CDialog } from "./CDialog";

describe("CDialog", () => {
  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("should render an open dialog", () => {
    const model = createSignal(true);
    render(() => <CDialog model={model}>ShouldBeInsideTheBody</CDialog>);
    expect(document.body.innerHTML).toContain("ShouldBeInsideTheBody");
  });

  it("should render a closed dialog", () => {
    const model = createSignal(false);
    render(() => <CDialog model={model}>ShouldNotBeInsideTheBody</CDialog>);
    expect(document.body.innerHTML.includes("ShouldNotBeInsideTheBody")).toBe(
      false
    );
  });
});
