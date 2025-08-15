export default function HowItWorks() {
  return (
    <section id="como-funciona" className="scroll-mt-20 bg-zinc-50 py-16 dark:bg-zinc-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-3xl font-semibold sm:text-4xl">Como funciona</h3>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">Três passos simples para começar</p>
        </div>
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { title: "Crie sua conta", desc: "Leva menos de 2 minutos." },
            { title: "Conecte-se", desc: "Encontre colegas, siga especialidades e participe de grupos." },
            { title: "Compartilhe e aprenda", desc: "Discuta casos, publique insights e evolua todo dia." },
          ].map((step, i) => (
            <li key={i} className="rounded-2xl border border-zinc-200 p-6 shadow-sm dark:border-zinc-800">
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-sm font-bold text-white">{i + 1}</div>
              <h4 className="text-lg font-semibold">{step.title}</h4>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}