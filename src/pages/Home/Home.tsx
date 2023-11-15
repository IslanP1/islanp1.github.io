import Conteudo from "../../components/Conteudo/Conteudo";
import Header from "../../components/Header/Header";
import Botao from "../../components/Botao/Botao";
import module from "./Home.module.css";
import Subtitulo from "../../components/Subtitulo/Subtitulo";

function Home() {
  return (
    <>
      <Header />
      <section className={module.secaoSobreMim}>
        <div className={module.sobre}>
          <h1 id={module.tituloPrincipal}>Hi, I'm Islan</h1>
          <Conteudo
            titulo="Full-stack developer and innovation enthusiast"
            texto="As a Junior Full-Stack Developer, I bring proficiency in Python,
            Django, and front-end technologies such as JavaScript, HTML, and CSS.
            My expertise extends to React, React Native, and Next.js for building
            engaging and responsive applications. Additionally, I possess a
            foundational understanding of C for low-level programming. Eager to
            contribute and learn, I am ready to bring my skills to your
            development projects."
          />

          <div className={module.botoesSecaoSobreMim}>
            <Botao
              cor={{ background: "var(--color-surface-surface-secondary)" }}
              imagem={<img src="/ReadCvLogo.svg" alt="ReadCvLogo" />}
              texto="My resume"
            />
            <Botao
              cor={{
                background: "var(--color-surface-button-primary-default)",
              }}
              imagem={<img src="/ArrowRight .svg" alt="ArrowRight" />}
              texto="Get in touch"
            />
          </div>
        </div>
        <div className={module.stack}>
          <img src="/stack.jpg" alt="Minha stack" />
        </div>
      </section>
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
    </>
  );
}

export default Home;
