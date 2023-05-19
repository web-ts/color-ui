import { colorSet, colorTextSet, hexToRgb } from "@/core/color-generator";
import { Component, For, createMemo } from "solid-js";

const Swatch: Component<{ color: string }> = (props) => {
  const set = createMemo(() =>
    colorTextSet(colorSet(hexToRgb(props.color)), {
      light: { r: 255, g: 255, b: 255 },
      dark: { r: 0, g: 0, b: 0 },
    })
  );

  return (
    <div>
      <For each={Object.entries(set())}>
        {([key, value]) => (
          <div
            style={{
              background: `rgb(${value.color.r}, ${value.color.g}, ${value.color.b})`,
              color: `rgb(${value.text.r}, ${value.text.g}, ${value.text.b})`,
              width: "60px",
              height: "40px",
              display: "flex",
              "justify-content": "center",
              "align-items": "center",
            }}
          >
            {key}
          </div>
        )}
      </For>
    </div>
  );
};

export default Swatch;
