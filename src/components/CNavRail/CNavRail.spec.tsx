import { describe, expect, it } from "vitest";

import { render } from "@solidjs/testing-library";

import { CNavRail } from "./CNavRail";

describe("CNavRail", () => {
  it("should render children", () => {
    const { container } = render(() => (
      <CNavRail>
        <div>Test</div>
      </CNavRail>
    ));
    expect(container).toMatchSnapshot();
  });
});
