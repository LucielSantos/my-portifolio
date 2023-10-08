import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Container = ({ children }: Props) => {
  return <div className="max-w-global m-global">{children}</div>;
};
