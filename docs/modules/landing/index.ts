import { RouteDefinition } from "@solidjs/router";
import Landing from "./pages/Landing";

const routes: RouteDefinition[] = [
  {
    path: "/",
    component: Landing,
  },
];


export default routes;