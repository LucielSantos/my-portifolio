import { Home } from "@/app/components";
import { ParticlesBackground } from "./components/ParticlesBackground";

export default function HomePage() {
  return (
    <main className="w-screen h-screen">
      <ParticlesBackground />

      <section className="max-w-global m-global">
        <Home />
      </section>
    </main>
  );
}
