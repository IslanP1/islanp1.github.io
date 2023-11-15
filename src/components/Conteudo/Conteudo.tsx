import { CSSProperties } from "react";
import module from "./Conteudo.module.css";

interface PropsConteudo {
  titulo?: string;
  texto?: string;
  style?: CSSProperties;
}

function Conteudo({ titulo, texto, style }: PropsConteudo) {
  return (
    <div className={module.conteudo} style={style}>
      <h2 className={module.subtitulo}>{titulo}</h2>
      <p className={module.descricao}>{texto}</p>
    </div>
  );
}

export default Conteudo;
