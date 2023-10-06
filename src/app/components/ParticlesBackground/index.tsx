"use client";

import { ComponentProps, ReactNode, useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import options from "./options.json";

export const ParticlesBackground = ({ children }: { children?: ReactNode }) => {
  const particleOptions = options as ComponentProps<
    typeof Particles
  >["options"];

  const particlesInit = useCallback(
    async (engine: Parameters<typeof loadFull>[0]) => {
      await loadFull(engine);
    },
    []
  );

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particleOptions}
      className="absolute"
    />
  );
};
