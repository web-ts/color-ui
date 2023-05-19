/* eslint-disable solid/reactivity */
import { createSignal } from "solid-js";
import { describe, expect, it, vi } from "vitest";

import {
    addToDialogsStack, handleFocusReturn, onKeydown, removeFromDialogsStack, setProviderInert, useDialogContent,
    useDialogs
} from "./";

describe("useDialogContent", () => {
  it("should not be inert if no dialog is open", () => {
    const signal = createSignal(false);
    const { inert } = useDialogContent(signal, "testId");

    expect(inert()).toBe(false);
  });

  it("should be inert if another dialog is open", () => {
    const signal = createSignal(false);
    const { inert } = useDialogContent(signal, "testId");

    const secondDialogSignal = createSignal(true);
    useDialogContent(secondDialogSignal, "testId2");

    expect(inert()).toBe(true);
  });
});

describe("handleFocusReturn", () => {
  it("should focus the return element after 10ms", async () => {
    const returnElement = document.createElement("div");
    document.body.appendChild(returnElement);
    returnElement.focus = vi.fn();

    handleFocusReturn(returnElement);

    await new Promise((resolve) => setTimeout(resolve, 11));

    expect(returnElement.focus).toHaveBeenCalled();
  });
});

describe("onKeydown", () => {
  it("should close the topmost dialog when the escape key is pressed", () => {
    const dialogs = useDialogs();

    //! Tests are not cleared so we have to dialogs in the stack or we should have 2 dialogs in the stack from the upper tests
    expect(dialogs().length).toBe(2);

    onKeydown({ key: "Escape" } as KeyboardEvent);
    onKeydown({ key: "Escape" } as KeyboardEvent);

    expect(dialogs()[0]).toBeUndefined();
  });
});

describe("removeFromDialogsStack", () => {
  it("should remove the dialog from the stack", () => {
    const dialogs = useDialogs();

    expect(dialogs().length).toBe(0);

    const secondDialogSignal = createSignal(true);
    useDialogContent(secondDialogSignal, "testId");
    expect(dialogs().length).toBe(1);

    removeFromDialogsStack("testId");

    expect(dialogs().length).toBe(0);
  });

  it("should exit early if the dialog is not in the stack", () => {
    const dialogs = useDialogs();

    expect(dialogs().length).toBe(0);

    removeFromDialogsStack("testId");

    expect(dialogs().length).toBe(0);
  });
});

describe("addToDialogsStack", () => {
  it("should add the dialog to the stack", () => {
    const dialogs = useDialogs();

    expect(dialogs().length).toBe(0);

    addToDialogsStack("testId");

    expect(dialogs().length).toBe(1);
  });

  it("should exit early if the dialog is already in the stack", () => {
    const dialogs = useDialogs();

    expect(dialogs().length).toBe(1);

    addToDialogsStack("testId");

    expect(dialogs().length).toBe(1);
  });
});

describe("setProviderInert", () => {
  it("should set the provider to inert if there are dialogs in the stack", () => {
    const provider = document.createElement("div");
    provider.id = "color-ui-provider";
    document.body.appendChild(provider);

    setProviderInert();

    const dialogs = useDialogs();
    expect(dialogs().length).toBe(1);

    expect(document.getElementById("color-ui-provider")?.inert).toBe(true);

    removeFromDialogsStack("testId");

    setProviderInert();

    expect(document.getElementById("color-ui-provider")?.inert).toBe(false);
  });
});
