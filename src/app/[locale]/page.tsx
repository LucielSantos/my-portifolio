import { Experiencies, Home, Skills } from "@/app/components";

export default function HomePage() {
  return (
    <main className="w-screen h-[100dvh] overflow-auto">
      <section className="w-full">
        <Home />
      </section>

      <section className="w-full mt-12">
        <Experiencies />
      </section>

      <section className="w-full mt-16">
        <Skills />
      </section>
    </main>
  );
}
