export default function Testimonials() {
  return (
    <section id="depoimentos" className="scroll-mt-20 mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="grid gap-6 md:grid-cols-2">
        {[1, 2].map((i) => (
          <article key={i} className="rounded-2xl border border-zinc-200 p-6 shadow-sm dark:border-zinc-800">
            <p className="text-lg">“O MedWeb acelerou a troca de conhecimento na minha equipe.”</p>
            <div className="mt-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-zinc-200 dark:bg-zinc-800" />
              <div>
                <p className="text-sm font-medium">Dra. Pessoa {i}</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">Hospital {i}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
