import module from "./RedesSociais.module.css";

interface PropsRedesSociais {
  caminho: string;
}

function RedesSociais({caminho} : PropsRedesSociais) {
  return(
    <button className={module.botao}>
      <img src={caminho} alt="Ícones redes sociais"/>
    </button>
  );
}
export default RedesSociais;