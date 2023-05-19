import { createEffect, createMemo, createSignal, on, onCleanup, onMount, Signal } from "solid-js";

import sleep from "@/utils/sleep";

const [dialogs, setDialogs] = createSignal<{ id: string; returnElement?: HTMLElement | null }[]>([]);

export function useDialogs() {
  return dialogs;
}

export function handleFocusReturn(returnElement?: HTMLElement | null) {
  if (returnElement) {
    sleep(10).then(() => {
      returnElement.focus();
    });
  }
}

/**
 * Close the topmost dialog when the escape key is pressed
 */
export function onKeydown(event: KeyboardEvent) {
  if (event.key === "Escape" && dialogs().length > 0) {
    const newDialogs = [...dialogs()];
    const dialog = newDialogs[newDialogs.length - 1];
    handleFocusReturn(dialog.returnElement);
    newDialogs.pop();
    setDialogs(newDialogs);
  }
}

export function setProviderInert() {
  if (dialogs().length > 0) {
    document.getElementById("color-ui-provider")!.inert = true;
  } else {
    document.getElementById("color-ui-provider")!.inert = false;
  }
}

/**
 * Register global events for dialogs
 */
export function registerDialogEvents() {
  // Make sure to set the inert attribute on the color-ui-provider element if there are any dialogs open
  createEffect(setProviderInert);

  // Register the escape key event
  onMount(() => {
    window.addEventListener("keydown", onKeydown);
  });
  // Cleanup the escape key event when unmounting. Most likely this will never happen, but it's good practice
  onCleanup(() => {
    window.removeEventListener("keydown", onKeydown);
  });
}

export function addToDialogsStack(id: string, returnElement?: HTMLElement | null) {
  if (dialogs().find((dialog) => dialog.id === id)) return;
  setDialogs([...dialogs(), { id, returnElement }]);
}

export function removeFromDialogsStack(id: string) {
  const dialog = dialogs().find((dialog) => dialog.id === id);
  if (!dialog) return;
  handleFocusReturn(dialog.returnElement);
  setDialogs(dialogs().filter((dialog) => dialog.id !== id));
}

/**
 *  Handles the inert attribute of the dialog as well as the focus return
 */
export function useDialogContent([_, setModel]: Signal<boolean>, id: string) {
  onMount(() => {
    // Model is always true on mount otherwise the dialog won't be rendered, so we need to add it to the stack
    const activeElement = document.activeElement as HTMLElement | null;
    addToDialogsStack(id, activeElement);
  });

  onCleanup(() => {
    removeFromDialogsStack(id);
  });

  createEffect(
    on(
      () => dialogs(),
      () => {
        if (!dialogs().find((dialog) => dialog.id === id)) {
          setModel(false);
        }
      }
    )
  );

  // We also need to make the dialog inert if it's not at the top of the stack
  const inert = createMemo(() => {
    return !(dialogs().length > 0 && dialogs()[dialogs().length - 1].id === id);
  });

  return {
    inert
  };
}
