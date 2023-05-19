import resolvePath from "@/utils/resolve-path";
import { createStore } from "solid-js/store";
import { I18nProvider } from "../types";

let [store, setStore] = createStore<{
  messages: Record<string, any>;
  locale: string;
  fallbackLocale: string;
}>({
  messages: {},
  locale: "en",
  fallbackLocale: "en",
});

function setMessages(newMessages: Record<string, any>) {
  setStore({ ...store, messages: { ...store.messages, ...newMessages } });
}

function setLocale(newLocale: string) {
  setStore({ ...store, locale: newLocale });
}

function setFallbackLocale(newFallbackLocale: string) {
  setStore({ ...store, fallbackLocale: newFallbackLocale });
}

/**
 * Simple translation function, does not support pluralization or interpolation.
 */
function t(key: string): string {
  const mesage: string =
    resolvePath(store.messages, `${store.locale}.${key}`) ||
    resolvePath(store.messages, `${store.fallbackLocale}.${key}`) ||
    key;
  return mesage;
}

export default function (): I18nProvider {
  return {
    t,
    setMessages,
    setLocale,
    setFallbackLocale,
  };
}
