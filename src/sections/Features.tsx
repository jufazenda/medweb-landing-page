import FeatureCard from "@/components/FeatureCard";
import { BookOpenIcon, NetworkIcon, ShieldIcon } from "@/components/Icons";

export default function Features() {
  return (
    <section id="recursos" className="scroll-mt-20 border-y border-zinc-200/60 py-16 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Recursos que importam</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            title="Conheça profissionais de todo Brasil"
            desc="Conecte-se, troque conhecimento e fortaleça sua rede em nível nacional."
            Chip={
              <span className="inline-flex items-center gap-2 rounded-full py-1 text-xs font-medium text-primary-700">
                <NetworkIcon className="h-4 w-4 text-primary-500" /> Rede
              </span>
            }
          />
          <FeatureCard
            title="Além da sala de aula"
            desc="Acesso a colegas e professores para tirar dúvidas e discutir casos clínicos."
            Chip={
              <span className="inline-flex items-center gap-2 rounded-full py-1 text-xs font-medium text-primary-700">
                <BookOpenIcon className="h-4 w-4 text-primary-500" /> Aprendizado
              </span>
            }
          />
          <FeatureCard
            title="Segurança e sigilo médico"
            desc="Comunidade exclusiva para médicos, com proteção das informações compartilhadas."
            Chip={
              <span className="inline-flex items-center gap-2 rounded-full py-1 text-xs font-medium text-primary-700">
                <ShieldIcon className="h-4 w-4 text-primary-500" /> Proteção
              </span>
            }
          />
        </div>
      </div>
    </section>
  );
}
