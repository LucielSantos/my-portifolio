import "../globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { useLocale } from "next-intl";
import { redirect } from "next/navigation";
import { defaultLocale, locales } from "@/i18n";
import { getTranslator } from "next-intl/server";

const inter = Nunito({ subsets: ["latin"] });

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslator(locale, "Metadata");

  return {
    title: t("title"),
    description: t("description"),
  };
}

interface Props {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function LocaleLayout({ children, params: { locale } }: Props) {
  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) redirect(defaultLocale);

  return (
    <html lang={locale}>
      <body className={inter.className}>
        {children}

        <Analytics />
      </body>
    </html>
  );
}
