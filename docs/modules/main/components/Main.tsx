import { Component } from "solid-js";

import { CNavRailLayout } from "@/components/CNavRail";
import { NavRailItem } from "@/components/CNavRail/types";
import { CNavRail } from "@/index";
import { Outlet } from "@solidjs/router";

const Main: Component = () => {
  const items: NavRailItem[] = [
    {
      label: "Get Started",
      icon: ""
    },
    {
      label: "Components",
      icon: ""
    },
    {
      label: "Layout",
      icon: ""
    },
    {
      label: "Utilities",
      icon: ""
    },
    {
      label: "Icons",
      icon: ""
    },
    {
      label: "API",
      icon: ""
    }
  ];

  return (
    <CNavRailLayout navRail={<CNavRail items={items} />} >
      <Outlet />
    </CNavRailLayout>
  );
};

export default Main;
