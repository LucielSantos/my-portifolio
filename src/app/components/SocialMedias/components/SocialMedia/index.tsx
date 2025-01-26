import { IconType } from "react-icons";

interface Props {
  text: string;
  link: string;
  icon: IconType;
}

export const SocialMedia = ({ icon: Icon, link, text }: Props) => {
  return (
    <a
      target="_blank"
      href={link}
      className="text-xl flex flex-row items-center gap-2 transition-all duration-300 hover:brightness-75"
    >
      <Icon size={50} className="text-purple-500" />

      {text}
    </a>
  );
};
