/* @refresh reload */
import { render } from "solid-js/web";
import { Icon } from "@iconify-icon/solid";
import "@/scss/index.scss";
import "uno.css";

import routes from "./routes";
import { Router, useRoutes } from "@solidjs/router";
import { createColorUI, CProvider } from "@/index";
import { DEFAULT_COLORS, DEFAULT_ICONS } from "@/core/constants";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}
root!.innerHTML = "";
createColorUI({
  colors: DEFAULT_COLORS,
  icons: DEFAULT_ICONS,
  iconProvider: {
    component: Icon,
    keyPropName: "icon",
    defaultProps: {},
  },
});

render(() => {
  const Routes = useRoutes(routes);

  return (
    <Router>
      <CProvider mode="dark">
        <Routes />
      </CProvider>
    </Router>
  );
}, root!);
