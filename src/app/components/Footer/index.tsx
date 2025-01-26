import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="w-full py-4">
      <div className="flex items-center justify-center h-full flex-col gap-2">
        <p className="text-white">{t("description")}</p>

        <p className="text-white">{t("year")}</p>
      </div>
    </footer>
  );
};
