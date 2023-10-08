import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

export const Home = () => {
  const t = useTranslations("Home");

  return (
    <div className="w-full h-[100dvh] flex items-center justify-center flex-col relative">
      <h1 className="text-5xl mb-4 text-shadow">{t("myName")}</h1>
      <h2 className="text-2xl text-purple-500">{t("responsibility")}</h2>

      <div className="animate-[bounce_1.8s_ease-in-out_infinite] absolute cursor-pointer bottom-4 backdrop-filter backdrop-blur-md bg-white/10 rounded-full flex justify-center items-center border-white/50 border-1 shadow-xl">
        <ChevronDown size={48} strokeWidth={1} />
      </div>
    </div>
  );
};
