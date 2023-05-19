import { it, expect, describe } from "vitest";

import sleep from ".";

describe("sleep", () => {
  it("should sleep for 1 second", async () => {
    const start = Date.now();
    await sleep(1000);
    const end = Date.now();
    expect(end - start).toBeGreaterThanOrEqual(1000);
  });
});
