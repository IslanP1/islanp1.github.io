import module from "./SecaoContate.module.css";
import Subtitulo from "../../props/Subtitulo/Subtitulo";
import Conteudo from "../../props/Conteudo/Conteudo";
import RedesSociais from "../../props/RedesSociais/RedesSocias";
import Botao from "../../props/Botao/Botao";

function SecaoContate() {
  return (
    <section className={module.card} id="contact">
      <div className={module.contate}>
        <div className={module.fotoPessoal}>
          <img src="/islan.jpeg" alt="Islan Pereira" />
        </div>
        <Subtitulo subtitulo="Contact" />
        <Conteudo
          titulo="Enjoyed my work? Let’s work together"
          texto="I’m always up for a chat. Pop me an email at islanpereiradeoliveira@gmail.com or give me a shout on social media. "
        />
        <div className={module.iconesRedesSociais}>
          <RedesSociais caminho="/logo-github 1.svg" link="http://github.com/IslanP1"/>
          <RedesSociais caminho="/logo-linkedin 1.svg" link="https://www.linkedin.com/in/islan-pereira/"/>
          <RedesSociais caminho="/logo-instagram 1.svg" link="https://www.instagram.com/islanx_oliv/"/>
        </div>
      </div>
      <div className={module.form}>
        <input
          className={module.camposMenores}
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          required
        />
        <input
          className={module.camposMenores}
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          required
        />
        <textarea
          className={module.campoMaior}
          name="message"
          id="message"
          placeholder="Your Message"
          required
        />
        <Botao
          cor={{
            background: "var(--color-surface-button-primary-default)",
          }}
          texto="Send me a message"
          imagem={<img src="/ArrowRight .svg" alt="ArrowRight" />}
        />
      </div>
    </section>
  );
}

export default SecaoContate;
