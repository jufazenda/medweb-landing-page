import { APP } from "@/lib/appData";
import { ShieldIcon, SparkleIcon, ZapIcon } from "@/components/icons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,0.16),transparent_60%)] dark:bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,0.12),transparent_60%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-2xl border border-zinc-200 px-3 py-1 text-xs text-zinc-700 dark:border-zinc-800 dark:text-zinc-300">
            <SparkleIcon className="h-4 w-4" /> Comunidade verificada de médicos
          </span>
          <h1 className="mt-4 text-balance text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">{APP.tagline}</h1>
          <p className="mt-4 max-w-xl text-lg text-zinc-600 dark:text-zinc-300">{APP.sub}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#cta" className="rounded-2xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-500">{APP.ctaPrimary}</a>
            <a href="#recursos" className="rounded-2xl border border-zinc-200 px-5 py-2.5 text-sm font-semibold hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900">{APP.ctaSecondary}</a>
          </div>
          <ul className="mt-6 flex flex-wrap gap-6 text-xs text-zinc-500 dark:text-zinc-400">
            <li className="flex items-center gap-2"><ShieldIcon className="h-4 w-4" /> Sigilo médico e privacidade</li>
            <li className="flex items-center gap-2"><ZapIcon className="h-4 w-4" /> Performance rápida</li>
          </ul>
        </div>
        <div className="relative" aria-hidden>
          <div className="mx-auto aspect-[9/19] w-[min(420px,90%)] rounded-[2.5rem] border border-zinc-200 bg-zinc-100 p-2 shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
            <div className="mx-auto h-full w-full rounded-[2rem] bg-gradient-to-b from-zinc-50 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900" />
          </div>
          <p className="mt-3 text-center text-sm text-zinc-500 dark:text-zinc-400">Substitua pelo screenshot do app</p>
        </div>
      </div>
    </section>
  );
}