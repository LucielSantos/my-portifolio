"use client";

import { Experiencie } from "@/types/experiencies";
import { useRef, useState } from "react";
import { tv } from "tailwind-variants";

const indicator = tv({
  base: "absolute left-0 top-0 w-1 h-[3.25rem] bg-purple-500 transition-transform duration-300",
});

const name = tv({
  base: "whitespace-nowrap py-3 pl-2 text-xl transition-all duration-300 cursor-pointer hover:brightness-75",
  variants: {
    active: {
      true: "text-purple-500",
    },
  },
});

interface Props {
  experiencies: Experiencie[];
}

export const Tabs = ({ experiencies }: Props) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="flex gap-16">
      <div className="w-full max-w-min relative">
        <div
          style={{
            transform: `translateY(${activeTab * 100}%)`,
          }}
          className={indicator()}
        />

        {experiencies.map((experiencie, i) => (
          <div
            key={experiencie.id}
            className={name({ active: activeTab === i })}
            onClick={() => setActiveTab(i)}
          >
            {experiencie.company}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        <span className="text-xl">
          {experiencies[activeTab].responsibility}
        </span>

        <p>{experiencies[activeTab].description}</p>
      </div>
    </div>
  );
};
