import { Home } from "@/app/components";
import { ParticlesBackground } from "../components/ParticlesBackground";

export default function HomePage() {
  return (
    <main className="w-screen h-[100dvh]">
      <ParticlesBackground />

      <section className="max-w-global m-global">
        <Home />
      </section>
    </main>
  );
}
