import {
  Experiencies,
  Footer,
  Home,
  Skills,
  SocialMedias,
} from "@/app/components";

export default function HomePage() {
  return (
    <main className="w-screen h-[100dvh] overflow-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-purple-500/50">
      <section className="w-full">
        <Home />
      </section>

      <section className="w-full mt-12">
        <Experiencies />
      </section>

      <section className="w-full mt-16">
        <Skills />
      </section>

      <section className="w-full mt-16">
        <SocialMedias />
      </section>

      <section className="w-full mt-16">
        <Footer />
      </section>
    </main>
  );
}
