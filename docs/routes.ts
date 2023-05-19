import { RouteDefinition } from "@solidjs/router";

const moduleRoutes = Object.entries(
  import.meta.glob<{ default: RouteDefinition[] }>("./modules/*/index.ts", {
    eager: true,
  })
).map(([_, module]) => {
  return module.default;
});

const routes: RouteDefinition[] = moduleRoutes.flat();

export default routes;
