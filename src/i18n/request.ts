import { getRequestConfig } from "next-intl/server";
import { routing } from "@/i18n/routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment.
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../translations/${locale}.json`)).default,
  };
});

// export default getRequestConfig(async ({ locale }) => ({
//   messages: (await import(`./translations/${locale}.json`)).default,
// }));

export const locales = ["pt-br", "en"];

export const defaultLocale = "pt-br";
