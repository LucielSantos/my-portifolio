import { useTranslations } from "next-intl";
import {
  PiGithubLogoLight,
  PiInstagramLogoLight,
  PiLinkedinLogoLight,
} from "react-icons/pi";

import { Container } from "../Container";
import { Title } from "../Title";
import { SocialMedia } from "./components";

export const SocialMedias = () => {
  const t = useTranslations("SocialMedias");

  return (
    <Container>
      <Title>{t("title")}</Title>

      <div className="mt-4 grid grid-cols-[repeat(3,auto)] gap-4 justify-between">
        <SocialMedia
          text="linkedin.com/in/luciel-santos"
          link="https://www.linkedin.com/in/luciel-santos"
          icon={PiLinkedinLogoLight}
        />

        <SocialMedia
          text="LucielSantos"
          link="https://github.com/LucielSantos"
          icon={PiGithubLogoLight}
        />
        <SocialMedia
          text="@lucielvitor"
          link="https://www.instagram.com/lucielvitor"
          icon={PiInstagramLogoLight}
        />
      </div>
    </Container>
  );
};
