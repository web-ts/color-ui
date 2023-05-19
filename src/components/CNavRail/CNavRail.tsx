import { Component, For, JSX } from "solid-js";

import SCSS from "./CNavRail.module.scss";
import { CNavRailItem } from "./CNavRailItem";
import { NavRailItem } from "./types";

export const CNavRail: Component<{ children?: JSX.Element | JSX.Element[]; items?: NavRailItem[] }> = (props) => {
  return (
    <nav class={SCSS.CNavRail}>
      {props.children}
      <div>
        <For each={props.items}>{(item) => <CNavRailItem item={item} />}</For>
      </div>
    </nav>
  );
};
