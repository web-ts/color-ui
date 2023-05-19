import { Component, createMemo, mergeProps } from "solid-js";
import { Dynamic } from "solid-js/web";

import attribufy from "@/utils/attribufy";
import buildColorStyle from "@/utils/build-color-style";
import { A } from "@solidjs/router";

import SCSS from "./CButton.module.scss";
import { ButtonProps } from "./types";

function attribufyButton(props: ButtonProps) {
  return attribufy(props)("children", "size", "color", "variant", "disabled", "loading", "class", "style");
}

export const CButton: Component<ButtonProps> = (rawProps) => {
  const props = mergeProps(
    {
      color: "primary" as const,
      variant: "solid" as const,
      size: "md" as const
    },
    rawProps
  );
  const classNames = createMemo(() => {
    const classes: string[] = [SCSS.CButton];
    classes.push(SCSS[`CButton_${props.variant}`], SCSS[`CButton_${props.size}`]);

    return `${classes.join(" ")} ${props.class ?? ""}`;
  });

  const style = createMemo(() => {
    return buildColorStyle("color-button", props.color);
  });

  const component = createMemo(() => {
    if (!props.href) return "button";
    if (props.routerLink) return A;
    return "a";
  });

  return (
    <Dynamic component={component()} style={style()} class={classNames()} {...attribufyButton(rawProps)}>
      {rawProps.children}
    </Dynamic>
  );
};
