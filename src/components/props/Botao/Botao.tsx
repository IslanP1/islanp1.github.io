import module from "./Botao.module.css";

interface PropsBotao {
  texto: string;
  imagem: JSX.Element;
  cor: React.CSSProperties;
}

function Botao({ texto, imagem, cor }: PropsBotao) {
  return (
    <button style={cor} className={module.botao}>
      {texto}
      {imagem}
    </button>
  );
}

export default Botao;
