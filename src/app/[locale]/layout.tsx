import "../globals.css";
import { Nunito } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { redirect } from "next/navigation";
import { defaultLocale, locales } from "@/i18n/request";
import { getTranslations } from "next-intl/server";

const inter = Nunito({ subsets: ["latin"] });

export async function generateMetadata() {
  const t = await getTranslations("Metadata");

  return {
    title: t("title"),
    description: t("description"),
  };
}

interface Props {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export default async function LocaleLayout(props: Props) {
  const params = await props.params;

  const { locale } = params;

  const { children } = props;

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
