import { getConfig } from "@/core/config";
import { Component } from "solid-js";
import { Dynamic } from "solid-js/web";

export const CIcon: Component<{ children: string } & Record<string, any>> = (
  props
) => {
  const iconProvider = getConfig().iconProvider;

  return (
    <Dynamic
      component={iconProvider.component}
      {...{
        ...iconProvider.defaultProps,
        ...props,
        [iconProvider.keyPropName]: props.children,
      }}
    />
  );
};
