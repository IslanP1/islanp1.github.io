import module from "./Botao.module.css";

interface PropsBotao {
  texto: string;
  imagem: JSX.Element;
  cor: React.CSSProperties;
  link?: string;
}

function Botao({ texto, imagem, cor, link }: PropsBotao) {
  return (
    <a style={cor} className={module.botao} href={link} target="_blank">
      {texto}
      {imagem}
    </a>
  );
}

export default Botao;
