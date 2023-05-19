export type I18nProvider<T = string, K = Record<string, any>> = {
  t: (key: string, args?: any) => T;
  setMessages: (newMessages: K) => void;
  setLocale: (newLocale: string) => void;
  setFallbackLocale: (newFallbackLocale: string) => void;
};
