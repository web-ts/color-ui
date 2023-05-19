import { Component, JSX, Signal } from "solid-js";
import { Portal } from "solid-js/web";

import { CDialogContent } from "./CDialogContent";

export const CDialog: Component<{
  model: Signal<boolean>;
  children: JSX.Element | JSX.Element[];
}> = (props) => {
  return (
    <>
      {props.model[0]() && (
        <Portal>
          <CDialogContent model={props.model}>{props.children}</CDialogContent>
        </Portal>
      )}
    </>
  );
};
