import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Title = ({ children }: Props) => {
  return <h2 className="text-3xl text-shadow">{children}</h2>;
};
