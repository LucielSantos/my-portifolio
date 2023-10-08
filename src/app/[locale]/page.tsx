import { Experiencies, Home, ParticlesBackground } from "@/app/components";

export default function HomePage() {
  return (
    <main className="w-screen h-[100dvh] overflow-auto">
      <ParticlesBackground />

      <section className="w-full">
        <Home />
      </section>

      <section className="w-full">
        <Experiencies />
      </section>
    </main>
  );
}
