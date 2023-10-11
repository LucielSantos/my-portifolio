import { useTranslations } from "next-intl";
import { Container, Title } from "..";
import { Tabs } from "./components";
import experiencies from "./mock.json";

export const Experiencies = () => {
  const t = useTranslations("Experiencies");

  return (
    <div>
      <Container>
        <Title>{t("title")}</Title>
      </Container>

      <div className="w-full h-full backdrop-blur-3xl bg-white/10 mt-4 py-4">
        <Container>
          <Tabs experiencies={experiencies} />
        </Container>
      </div>
    </div>
  );
};
