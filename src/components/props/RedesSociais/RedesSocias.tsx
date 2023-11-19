import module from "./RedesSociais.module.css";

interface PropsRedesSociais {
  caminho: string;
  link?: string;
}

function RedesSociais({ caminho, link }: PropsRedesSociais) {
  return (
    <a className={module.botao} href={link} target="_blank">
      <img src={caminho} alt="Ícones redes sociais" />
    </a>
  );
}
export default RedesSociais;
