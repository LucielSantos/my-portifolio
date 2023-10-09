import { useTranslations } from "next-intl";
import { Container, Title } from "..";

export const Experiencies = () => {
  const t = useTranslations("Experiencies");

  return (
    <div>
      <Container>
        <Title>{t("title")}</Title>
      </Container>
    </div>
  );
};
