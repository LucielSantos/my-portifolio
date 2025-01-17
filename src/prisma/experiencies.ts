import { Experiencie } from "@prisma/client";
import { prisma } from ".";

export async function getExperiencies(): Promise<Experiencie[]> {
  const experiencies = await prisma.experiencie.findMany();

  return experiencies;
}
