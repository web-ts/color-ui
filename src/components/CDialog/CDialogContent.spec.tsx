import { createSignal } from "solid-js";
import { describe, expect, it } from "vitest";

import sleep from "@/utils/sleep";
import { render } from "@solidjs/testing-library";

import { CDialogContent } from "./CDialogContent";

describe("CDialogContent", () => {
  it("should render children", () => {
    const signal = createSignal(true);
    const { container } = render(() => (
      <CDialogContent model={signal}>
        <div>Test</div>
      </CDialogContent>
    ));
    expect(container).toMatchSnapshot();
  });

  it("should focus if focusable element found", async () => {
    const signal = createSignal(true);
    render(() => (
      <CDialogContent model={signal}>
        <button id="test">Test</button>
      </CDialogContent>
    ));

    await sleep(11);

    console.log(document.activeElement?.id);

    expect(document.activeElement?.id).toBe("test");
  });
});
