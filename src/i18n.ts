import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`./translations/${locale}.json`)).default,
}));

export const locales = ["pt-br", "en"];

export const defaultLocale = "pt-br";
