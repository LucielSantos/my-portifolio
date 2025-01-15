import { ComponentProps, PropsWithChildren } from "react";
import { tv } from "tailwind-variants";

interface TechnologyProps extends ComponentProps<"div"> {
  active?: boolean;
}

const container = tv({
  base: "text-purple-500 w-[4.5rem] h-[4.5rem] flex items-center justify-center rounded-xl border-2 p-2 cursor-pointer transition-all duration-300",
  variants: {
    active: {
      true: "border-purple-500 p-1 bg-black/50",
    },
  },
});

export const Technology = ({
  children,
  active,
  ...rest
}: PropsWithChildren<TechnologyProps>) => {
  return (
    <div {...rest} className={container({ active })}>
      {children}
    </div>
  );
};
