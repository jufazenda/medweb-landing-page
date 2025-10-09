import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Features from "@/sections/Features";
import Security from "@/sections/Security";
import HowItWorks from "@/sections/HowItWorks";
import Testimonials from "@/sections/Testimonials";
import CTA from "@/sections/CTA";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Security />
      <HowItWorks />
      {/* <Testimonials /> */}
      <CTA />
      <footer className="border-t border-zinc-200/60 py-8 dark:border-zinc-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-sm text-zinc-500 dark:text-zinc-400 sm:flex-row sm:px-6">
          <span>© {new Date().getFullYear()} MedWeb</span>
          <nav className="flex gap-4">
            <a href="#" className="hover:underline">Privacidade</a>
            <a href="#" className="hover:underline">Termos</a>
            <a href="#" className="hover:underline">Contato</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}