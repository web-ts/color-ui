import { Component, createEffect, createMemo, JSX, onMount } from 'solid-js';

import { registerDialogEvents } from '@/composables/use-dialog-content';
import { colorOptionsToCssString } from '@/core/color-generator';
import { getConfig } from '@/core/config';
import attribufy from '@/utils/attribufy';

import SCSS from './CProvider.module.scss';

export const CProvider: Component<
  {
    children?: JSX.Element | JSX.Element[];
    mode: "light" | "dark";
  } & Omit<JSX.HTMLAttributes<HTMLDivElement>, "style" | "id">
> = (props) => {
  registerDialogEvents();

  const config = getConfig();
  let styleElement: HTMLStyleElement | null = null;

  const styleString = createMemo(() =>
    colorOptionsToCssString(config.colors[props.mode])
  );

  onMount(() => {
    styleElement = document.getElementById(
      "color-ui-style"
    ) as HTMLStyleElement | null;

    if (!styleElement) {
      styleElement = document.createElement("style");
      styleElement.id = "color-ui-style";
      document.head.appendChild(styleElement);
    }

    styleElement.innerHTML = styleString();
  });

  createEffect(() => {
    if (styleElement) {
      styleElement.innerHTML = styleString();
    }
  });

  return (
    <div
      id="color-ui-provider"
      class={`${SCSS.CProvider} ${props.class ?? ""}`}
      {...attribufy(props)("mode", "class")}
    >
      {props.children}
    </div>
  );
};
