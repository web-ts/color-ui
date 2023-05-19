import { I18nProvider } from "./types";
import defaultProvider from "./providers/default-provider";

let provider: I18nProvider = defaultProvider();

export function setProvider(newProvider: I18nProvider) {
  provider = newProvider;
}

export default function () {
  return provider;
}
