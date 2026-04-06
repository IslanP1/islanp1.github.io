import { ReactNode } from "react";

interface PropsBotao {
  texto: string;
  imagem?: ReactNode;
  className?: string;
  link?: string;
  ariaLabel?: string;
  type?: "button" | "submit" | "reset";
}

function Botao({ texto, imagem, className = "", link, ariaLabel, type = "button" }: PropsBotao) {
  const baseClass =
    "inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold transition duration-300 hover:-translate-y-0.5 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint";

  const finalClass = `${baseClass} ${className}`.trim();
  const isExternal = Boolean(link && /^https?:\/\//.test(link));

  if (link) {
    return (
      <a
        className={finalClass}
        href={link}
        aria-label={ariaLabel ?? texto}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
      >
        <span>{texto}</span>
        {imagem}
      </a>
    );
  }

  return (
    <button type={type} className={finalClass} aria-label={ariaLabel ?? texto}>
      <span>{texto}</span>
      {imagem}
    </button>
  );
}

export default Botao;
