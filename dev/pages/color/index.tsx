import { Component, For } from "solid-js";
import Swatch from "./Swatch";

const Color: Component = () => {
  const sets = [
    "#a3f87d",
    "#f3a3c7",
    "#8af15c",
    "#2fc352",
    "#c72c56",
    "#4c4f12",
    "#4a4d4e",
    "#dea26b",
    "#9b474f",
    "#16c7ec",
    "#1d4657",
    "#b0584c",
    "#8f39d0",
    "#c1e59b",
    "#ab99a6",
    "#f6b20f",
    "#719c6a",
    "#d34b20",
    "#f3e16f",
    "#3e8d17",
    "#9dd80d",
    "#c7b2cc",
    "#edc2f2",
    "#ffae11",
    "#1dbb93",
    "#e9d8a5",
    "#bb7cb5",
    "#f87153",
    "#8e2d28",
    "#db1f32",
    "#dbefba",
    "#c7a5a5",
    "#d5df14",
    "#da6301",
    "#d1b8cf",
    "#41cc44",
    "#c1267f",
    "#0b6d7b",
    "#fa2e9b",
    "#8f60c3",
  ];
  return (
    <div style={{ display: "flex" }}>
      <For each={sets}>{(color) => <Swatch color={color} />}</For>
    </div>
  );
};

export default Color;
