import { Component, For, createSignal } from "solid-js";

import { A, RouteDefinition } from "@solidjs/router";

const routes = import("./routes");

const App: Component = () => {
  const [routesSig, setRoutesSig] = createSignal<RouteDefinition[]>([]);

  routes.then((r: { default: RouteDefinition[] }) => {
    setRoutesSig(r.default);
  });

  return (
    <>
      <div>
        <h1>App</h1>
      </div>
      <div class="flex flex-col gap-4">
        <For each={routesSig()}>
          {(route) => <A class="" href={route.path}>{route.path}</A>}
        </For>
      </div>
    </>
  );
};

export default App;
