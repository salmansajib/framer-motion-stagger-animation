import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-zinc-950 text-slate-50">
      <main className="container mx-auto px-2">
        <Hero />
        <Skills />
      </main>
    </div>
  );
}
