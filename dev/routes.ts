import { RouteDefinition } from "@solidjs/router";

import App from "./App";
import { Component } from "solid-js";

const routes = Object.entries(
  import.meta.glob<{ default: Component }>("./pages/*/index.tsx", {
    eager: true,
  })
).map(([key, module]) => {
  const path = key
    .replace("./pages", "")
    .replace("/index.tsx", "")
    .replace(/\/index$/, "");
  return {
    path,
    component: module.default,
  };
});

const finalRoutes: Array<RouteDefinition> = [
  ...routes.flat(),
  {
    path: "/",
    component: App,
  },
];
export default finalRoutes;
