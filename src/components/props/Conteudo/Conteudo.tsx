import { CSSProperties } from "react";

interface PropsConteudo {
  titulo?: string;
  texto?: string;
  style?: CSSProperties;
  className?: string;
}

function Conteudo({ titulo, texto, style, className = "" }: PropsConteudo) {
  return (
    <div className={className} style={style}>
      {titulo ? (
        <h2 className="pb-4 font-title text-2xl font-semibold leading-tight text-text md:text-3xl">
          {titulo}
        </h2>
      ) : null}
      {texto ? <p className="text-base leading-7 text-muted">{texto}</p> : null}
    </div>
  );
}

export default Conteudo;
