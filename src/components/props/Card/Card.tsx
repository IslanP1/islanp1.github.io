import { ReactNode } from "react";

interface PropsCard {
  imagemPrincipal: ReactNode;
  data: string;
  imagemStack: ReactNode;
  titulo: string;
  texto: string;
  link: string;
}

function Card({
  imagemPrincipal,
  data,
  imagemStack,
  titulo,
  texto,
  link
}: PropsCard) {
  return (
    <a
      className="group flex h-full flex-col gap-5 rounded-2xl border border-white/10 bg-surface p-6 transition duration-300 hover:-translate-y-1.5 hover:border-mint/40 hover:shadow-glow"
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <div className="overflow-hidden rounded-xl border border-white/10">
        {imagemPrincipal}
      </div>
      <div className="flex items-center justify-between gap-4 text-sm text-muted">
        <p>{data}</p>
        {imagemStack}
      </div>
      <h3 className="font-title text-xl font-semibold text-text transition group-hover:text-mint">
        {titulo}
      </h3>
      <p className="text-sm leading-7 text-muted">{texto}</p>
      <p className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-accent transition group-hover:text-mint">
        Ver projeto no GitHub
        <span aria-hidden="true">→</span>
      </p>
    </a>
  );
}

export default Card;
