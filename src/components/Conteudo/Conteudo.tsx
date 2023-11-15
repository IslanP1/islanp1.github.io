import module from "./Conteudo.module.css";

interface PropsConteudo {
  titulo: string;
  texto: string;
}

function Conteudo({ titulo, texto }: PropsConteudo) {
  return (
    <div className={module.conteudo}>
      <h2 className={module.subtitulo}>{titulo}</h2>
      <p className={module.descricao}>{texto}</p>
    </div>
  );
}

export default Conteudo;
