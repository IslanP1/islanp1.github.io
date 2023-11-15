import module from "./Subtitulo.module.css";

interface PropsSubtitulo {
  subtitulo: string;
}

function Subtitulo({ subtitulo }: PropsSubtitulo) {
  return (
    <div className={module.tituloVerde}>
      <p>{subtitulo}</p>
    </div>
  );
}

export default Subtitulo;
