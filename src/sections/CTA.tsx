export default function CTA() {
  return (
    <section id="cta" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-gradient-to-br from-primary-500 via-primary-300 to-primary-200 p-[1px] shadow-xl dark:border-zinc-800">
        <div className="rounded-2xl bg-white p-8 dark:bg-zinc-950">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h4 className="text-balance text-2xl font-semibold text-zinc-900 dark:text-white">Pronto para se juntar à comunidade?</h4>
              <p className="mt-1 text-zinc-600 dark:text-zinc-300">Cadastre-se e comece a participar das discussões hoje mesmo.</p>
            </div>
            <div className="flex gap-3">
              <a href="/registrar" className="rounded-2xl bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-primary-500">Download</a>
              <a href="#como-funciona" className="rounded-2xl border border-zinc-200 px-5 py-2.5 text-sm font-semibold hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900">Ver como funciona</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}