import { CSSProperties } from "react";

interface PropsSubtitulo {
  subtitulo: string;
  style?: CSSProperties;
  className?: string;
}

function Subtitulo({ subtitulo, style, className = "" }: PropsSubtitulo) {
  return (
    <div
      className={`pb-2 font-title text-sm font-semibold uppercase tracking-[0.2em] text-mint ${className}`.trim()}
      style={style}
    >
      <p>{subtitulo}</p>
    </div>
  );
}

export default Subtitulo;
