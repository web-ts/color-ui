import { RouteDefinition } from "@solidjs/router";
import Main from "./components/Main";
import GetStarted from "./pages/GetStarted";

const routes: RouteDefinition[] = [
  {
    path: "/main",
    component: Main,
    children: [
      {
        path: "get-started",
        component: GetStarted,
      },
    ],
  },
];

export default routes;
