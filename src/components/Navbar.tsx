
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-zinc-800 dark:bg-zinc-950/80 dark:supports-[backdrop-filter]:bg-zinc-950/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/simbolo.png"
            alt="Logo"
            width={32}
            height={32}
            priority
            className="object-contain"
          />
          <span className="text-lg font-semibold tracking-tight">MedWeb</span>
        </a>
        <nav className="hidden gap-6 text-sm sm:flex">
          <a href="#recursos" className="hover:opacity-80">Recursos</a>
          <a href="#seguranca" className="hover:opacity-80">Segurança</a>
          <a href="#como-funciona" className="hover:opacity-80">Como funciona</a>
          <a href="#depoimentos" className="hover:opacity-80">Depoimentos</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#cta" className="rounded-2xl bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-primary-500">Download</a>
        </div>
      </div>
    </header>
  );
}