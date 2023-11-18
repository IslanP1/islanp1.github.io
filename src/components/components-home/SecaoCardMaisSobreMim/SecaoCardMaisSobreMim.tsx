import module from "./SecaoCardMaisSobreMim.module.css";
import Conteudo from "../../props/Conteudo/Conteudo";
import Subtitulo from "../../props/Subtitulo/Subtitulo";
import Botao from "../../props/Botao/Botao";

function SecaoCardMaisSobreMim() {
  return (
    <section className={module.cardMaisSobreMim}>
      <div id={module.fotoPessoal}>
        <img src="/islan.jpeg" alt="Islan Pereira" />
      </div>
      <div>
        <div className={module.stacksIcons}>
          <img
            src="https://img.shields.io/badge/Python-000?style=for-the-badge&logo=python"
            alt="Icon Python"
          />
          <img
            src="https://img.shields.io/badge/JavaScript-000?style=for-the-badge&logo=javascript"
            alt="Icon javascript"
          />
          <img
            src="https://img.shields.io/badge/TypeScript-000?style=for-the-badge&logo=typescript"
            alt="Icon typescript"
          />
          <img
            src="https://img.shields.io/badge/C-000?style=for-the-badge&logo=c"
            alt="Icon C"
          />
          <img
            src="https://img.shields.io/badge/HTML5-000?style=for-the-badge&logo=html5"
            alt="Icon html"
          />
          <img
            src="https://img.shields.io/badge/CSS3-000?style=for-the-badge&logo=css3&logoColor=264CE4"
            alt="Icon css"
          />
          <img
            src="https://img.shields.io/badge/Git-000?style=for-the-badge&logo=git&logoColor=E94D5F"
            alt="Icon GIT"
          />
          <img
            src="https://img.shields.io/badge/GitHub-000?style=for-the-badge&logo=github&logoColor=30A3DC"
            alt="Icon github"
          />
        </div>
        <Subtitulo subtitulo="About me" />
        <Conteudo
          titulo="I'm a passionate software developer looking for my first oppotunity"
          texto="I am currently studying the 2nd period of Systems Analysis and
            Development at IFPB - Campus Cajazeiras. I am a technology
            enthusiast and am always looking for new knowledge and challenges. I
            am open to new opportunities and challenges, if you want to contact
            me, feel free to send me a message."
        />

        <Botao
          cor={{
            background: "var(--color-surface-button-primary-default)",
          }}
          texto="My resume"
          imagem={<img src="  /ReadCvLogo.svg" alt="ReadCvLogo" />}
        />
      </div>
    </section>
  );
}

export default SecaoCardMaisSobreMim;
