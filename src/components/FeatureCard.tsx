import { ReactNode } from "react";

export default function FeatureCard({ title, desc, Chip }: { title: string; desc: string; Chip: ReactNode }) {
  return (
    <article className="rounded-2xl border border-zinc-200 p-6 shadow-sm transition hover:shadow-md dark:border-zinc-800">
      <div className="mb-3 inline-flex items-center gap-2 rounded-2xl border border-zinc-200 px-3 py-1 text-xs dark:border-zinc-800">
        {Chip}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{desc}</p>
    </article>
  );
}