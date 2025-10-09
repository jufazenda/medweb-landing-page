import { CheckIcon } from "@/components/Icons";

import Image from "next/image";

export default function Security() {
  return (
    <section id="seguranca" className="scroll-mt-20 mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h3 className="text-2xl font-semibold sm:text-3xl">Tenha a segurança do sigilo médico</h3>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">
            A comunidade MedWeb é formada apenas por médicos. Suas interações são protegidas e você mantém controle sobre o que compartilha.
          </p>
          <ul className="mt-6 space-y-3 text-zinc-700 dark:text-zinc-200">
            {["Acesso verificado para médicos", "Criptografia em trânsito e em repouso", "Moderação e compliance"].map((t, i) => (
              <li key={i} className="flex items-center gap-2"><CheckIcon className="h-4 w-4" /> {t}</li>
            ))}
          </ul>
        </div>
        <div aria-hidden className="grid grid-cols-2 gap-4">
          {[1,2,3,4].map(n => (
            <div key={n} className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-800">
              <Image
                src={`/public-images/${n}.jpg`}
                alt={`Segurança ${n}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={n === 1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}