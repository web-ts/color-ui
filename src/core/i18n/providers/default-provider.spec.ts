import { it, expect, describe } from "vitest";

import defaultProvider from "./default-provider";

describe("defaultProvider", () => {
  it("should return the correct message", () => {
    const provider = defaultProvider();

    provider.setMessages({
      en: {
        test: "test",
      },
    });

    const result = provider.t("test");

    expect(result).toBe("test");
  });

  it("should return the key if the message does not exist", () => {
    const provider = defaultProvider();

    const result = provider.t("test");

    expect(result).toBe("test");
  });

  it("should return the correct message for a deeply nested path", () => {
    const provider = defaultProvider();

    provider.setMessages({
      en: {
        test: {
          nested: "test",
        },
      },
    });

    const result = provider.t("test.nested");

    expect(result).toBe("test");
  });

  it("should return the correct message for a deeply nested path with an array", () => {
    const provider = defaultProvider();

    provider.setMessages({
      en: {
        test: {
          nested: ["test"],
        },
      },
    });

    const result = provider.t("test.nested.0");

    expect(result).toBe("test");
  });

  it("should set a new locale and load the messages from that locale", () => {
    const provider = defaultProvider();

    provider.setMessages({
      en: {
        test: "test",
      },
      fr: {
        test: "test-fr",
      },
    });

    provider.setLocale("fr");

    const result = provider.t("test");

    expect(result).toBe("test-fr");
  });

  it("should set a new fallback locale and load the messages from that locale if no message is found on the default locale", () => {
    const provider = defaultProvider();

    provider.setMessages({
      en: {
        notTest: "test",
      },
      fr: {
        test: "test-fr",
      },
    });

    provider.setFallbackLocale("fr");

    const result = provider.t("test");

    expect(result).toBe("test-fr");
  });

  it("should return the key if the message does not exist on the fallback locale", () => {
    const provider = defaultProvider();

    provider.setMessages({
      en: {
        notTest: "test",
      },
      fr: {
        notTest: "test-fr",
      },
    });

    provider.setLocale("fr");

    const result = provider.t("test");

    expect(result).toBe("test");
  });

});
