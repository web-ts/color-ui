import { Component, JSX, onMount, Signal } from "solid-js";

import { useDialogContent } from "@/composables/use-dialog-content";
import sleep from "@/utils/sleep";

import SCSS from "./CDialog.module.scss";

const candidateSelector = `input:not([inert]),select:not([inert]),textarea:not([inert]),a[href]:not([inert]),button:not([inert]),[tabindex]:not(slot):not([inert]),audio[controls]:not([inert]),video[controls]:not([inert]),[contenteditable]:not([contenteditable="false"]):not([inert]),details>summary:first-of-type:not([inert]),details:not([inert])`;

export const CDialogContent: Component<{
  model: Signal<boolean>;
  children: JSX.Element | JSX.Element[];
}> = (props) => {
  const dialogId = Math.random().toString(36).substring(7);

  const { inert } = useDialogContent(props.model, dialogId);

  let dialogRef: HTMLDivElement | undefined = undefined;

  onMount(async () => {
    const focusable = dialogRef?.querySelector(candidateSelector);
    if (!focusable) return;
    await sleep(10);
    (focusable as HTMLElement).focus?.();
  });

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      class={SCSS.CDialog}
      /* @ts-ignore inert is a valid html attribute*/
      inert={inert() ? "" : undefined}
    >
      {props.children}
    </div>
  );
};
