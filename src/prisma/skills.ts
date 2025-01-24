import { Skill } from "@prisma/client";
import { prisma } from ".";

export async function getSkills(): Promise<Skill[]> {
  const skills = await prisma.skill.findMany();

  return skills;
}
