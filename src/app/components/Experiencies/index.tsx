import { useTranslations } from "next-intl";
import { Container } from "..";

export const Experiencies = () => {
  const t = useTranslations("Experiencies");

  return (
    <Container>
      <h1>{t("title")}</h1>
    </Container>
  );
};
