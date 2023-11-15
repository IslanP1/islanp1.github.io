import { CSSProperties } from "react";
import module from "./Subtitulo.module.css";

interface PropsSubtitulo {
  subtitulo: string;
  style?: CSSProperties;
}

function Subtitulo({ subtitulo, style }: PropsSubtitulo) {
  return (
    <div className={module.tituloVerde} style={style}>
      <p>{subtitulo}</p>
    </div>
  );
}

export default Subtitulo;
