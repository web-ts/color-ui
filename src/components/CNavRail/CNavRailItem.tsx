import { Component } from "solid-js";

import SCSS from "./CNavRail.module.scss";
import { NavRailItem } from "./types";

export const CNavRailItem: Component<{ item: NavRailItem }> = (props) => {
  return <div class={SCSS.CNavRailItem}>{props.item.label}</div>;
};
