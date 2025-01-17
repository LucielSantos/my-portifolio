import { Container, Title } from "..";
import { Tabs } from "./components";
import { getExperiencies } from "@/prisma/experiencies";
import { getTranslations } from "next-intl/server";

export const Experiencies = async () => {
  const t = await getTranslations("Experiencies");
  const experiencies = await getExperiencies();

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
