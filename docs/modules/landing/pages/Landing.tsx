import { CButton } from "@/index";
import { Component } from "solid-js";

const Landing: Component = () => {
  return (
    <div>
      <h1 class="text-center text-4xl my-4">Color UI</h1>
      <p class="text-center">
        ColorUI is a UI library for SolidJS. It provides a set of accessible,
        reusable, and composable UI components and utilities.
      </p>
      <div class="flex items-center justify-center mt-4">
        <CButton href="/main/get-started" routerLink>
          Get Started
        </CButton>
      </div>
    </div>
  );
};

export default Landing;
