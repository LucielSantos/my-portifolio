"use client";

import { skillIcon } from "@/utils/skills";
import { Technology } from "../Technology";
import { useState } from "react";
import { Skill } from "@prisma/client";
import { IconType } from "react-icons";

interface TechnologiesProps {
  skills: Skill[];
}

export const Technologies = ({ skills }: TechnologiesProps) => {
  const [activeTechnology, setActiveTechnology] = useState<Skill>(skills[0]);

  return (
    <div className="flex">
      <div className="mr-5">
        <p className="mt-4">{activeTechnology?.description}</p>
      </div>

      <div className="backdrop-blur-3xl bg-white/10 p-4 border-2 rounded-xl grid grid-cols-[repeat(auto-fill,minmax(4.5rem,1fr))] gap-4 min-w-[36rem] max-w[36rem]">
        {skills.map((skill: Skill) => {
          const Icon = skillIcon[
            skill.icon as keyof typeof skillIcon
          ] as IconType;

          return (
            <Technology
              key={skill.id}
              active={activeTechnology?.id === skill.id}
              onMouseEnter={() => setActiveTechnology(skill)}
            >
              <Icon size="4em" />
            </Technology>
          );
        })}
      </div>
    </div>
  );
};
