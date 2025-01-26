import { Container } from "../Container";
import { Title } from "../Title";
import { Technologies } from "./components/Technologies";
import { getSkills } from "@/prisma/skills";
import { getTranslations } from "next-intl/server";

export const Skills = async () => {
  const t = await getTranslations("Skills");
  const skills = await getSkills();

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
