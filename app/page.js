import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="bg-zinc-950 text-slate-50">
      <main className="container mx-auto px-4">
        <Hero />
        <Skills />
      </main>
    </div>
  );
}
