import { IconType } from "react-icons";

interface Props {
  text: string;
  link: string;
  icon: IconType;
}

export const SocialMedia = ({ icon: Icon, link, text }: Props) => {
  return (
    <div className="flex flex-row items-center space-x-4">
      <Icon size={50} className="text-purple-500" />

      <a target="_blank" href={link} className="text-xl">
        {text}
      </a>
    </div>
  );
};
