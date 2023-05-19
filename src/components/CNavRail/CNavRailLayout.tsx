import { Component, JSX } from "solid-js";

import SCSS from "./CNavRail.module.scss";

export const CNavRailLayout: Component<{ children: JSX.Element | JSX.Element[]; navRail: JSX.Element }> = (props) => {
  return (
    <div class={SCSS.CNavRailLayout}>
      {props.navRail}
      <div class={SCSS.CNavRailLayout__content}>{props.children}</div>
    </div>
  );
};
