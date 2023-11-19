import module from "./Footer.module.css";

function Footer() {
  return (
    <footer className={module.rodape}>
      <p className={module.textoRodape}>
        Islan Pereira 2023. Layout based on Rocketseat’s template.
      </p>
      <div className={module.textoRedesSociais}>
        <a className={module.textoRodape} href="http://github.com/IslanP1" target="_blank">GitHub</a>
        <a className={module.textoRodape} href="https://www.linkedin.com/in/islan-pereira/" target="_blank">Linkedin</a>
        <a className={module.textoRodape} href="https://www.instagram.com/islanx_oliv/" target="_blank">Intagram</a>
        <a href="#home">
          <img src="/ArrowUp.svg" alt="ArrowUp" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
