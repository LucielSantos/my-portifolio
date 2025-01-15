import { useTranslations } from "next-intl";
import { Container } from "../Container";
import { Title } from "../Title";
import skills from "./mock.json";
import { Technologies } from "./components/Technologies";

export const Skills = () => {
  const t = useTranslations("Skills");

  return (
    <Container>
      <div>
        <div className="mr-32">
          <Title>{t("title")}</Title>
        </div>

        <Technologies skills={skills} />
      </div>
    </Container>
  );
};
