import module from "./Footer.module.css";

function Footer() {
  return(
    <footer className={module.rodape}>
        <p className={module.textoRodape}>
          Islan Pereira 2023. Layout based on Rocketseat’s template.
        </p>
        <div className={module.textoRedesSociais}>
          <p className={module.textoRodape}>GitHub</p>
          <p className={module.textoRodape}>Linkedin</p>
          <p className={module.textoRodape}>Intagram</p>
          <a href="">
            <img src="/ArrowUp.svg" alt="ArrowUp" />
          </a>
        </div>
      </footer>
  );
}

export default Footer;