import Conteudo from "../../components/Conteudo/Conteudo";
import Botao from "../../components/Botao/Botao";
import module from "./Home.module.css";
import Subtitulo from "../../components/Subtitulo/Subtitulo";
import Card from "../../components/Card/Card";
import RedesSociais from "../../components/RedesSociais/RedesSocias";

function Home() {
  return (
    <>
      <header aria-label="Início do site" id="home">
        <nav className={module.nav}>
          <li>
            <a href="#" className={module.username}>
              IslanP1
            </a>
          </li>
          <div className={module.navegacao}>
            <li>
              <a href="#" id="styleLinkHome">
                Home
              </a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </div>
        </nav>
      </header>
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

      <section className={module.secaoProjetos}>
        <Subtitulo subtitulo="Projects" style={{ textAlign: "center" }} />
        <Conteudo
          titulo="Take a look at my highlighted projects"
          style={{ textAlign: "center" }}
        />

        <div className={module.cards}>
          <Card
            imagemPrincipal={
              <img
                src="/landingpage-pyquiz.png"
                alt="landingpage-pyquiz"
                className={module.imagemProjeto}
              />
            }
            data="Jul-Dec 2022"
            imagemStack={<img src="/js.svg" alt="js" />}
            titulo="Projeto X"
            texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut cum
          laboriosam veniam labore beatae mollitia, harum, nobis nihil esse"
          />

          <Card
            imagemPrincipal={
              <img
                src="/landingpage-pyquiz.png"
                alt="landingpage-pyquiz"
                className={module.imagemProjeto}
              />
            }
            data="Jul-Dec 2022"
            imagemStack={<img src="/js.svg" alt="js" />}
            titulo="Projeto X"
            texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut cum
          laboriosam veniam labore beatae mollitia, harum, nobis nihil esse"
          />

          <Card
            imagemPrincipal={
              <img
                src="/landingpage-pyquiz.png"
                alt="landingpage-pyquiz"
                className={module.imagemProjeto}
              />
            }
            data="Jul-Dec 2022"
            imagemStack={<img src="/js.svg" alt="js" />}
            titulo="Projeto X"
            texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut cum
          laboriosam veniam labore beatae mollitia, harum, nobis nihil esse"
          />
        </div>
        <Botao
          cor={{
            background: "var(--color-surface-surface-secondary) ",
            margin: "0 auto",
            marginTop: "2rem",
          }}
          texto="See all"
          imagem={<img src="/ArrowRight .svg" alt="ReadCvLogo" />}
        />
      </section>

      <section className={module.cardMaisSobreMim}>
        <div className={module.contate}>
          <div className={module.fotoPessoal}>
            <img src="/islan.jpeg" alt="Islan Pereira" />
          </div>
          <Subtitulo subtitulo="Contact" />
          <Conteudo
            titulo="Enjoyed my work? Let’s work together"
            texto="I’m always up for a chat. Pop me an email at hi@linalevi.com or give me a shout on social media. "
          />
          <div className={module.iconesRedesSociais}>
            <RedesSociais caminho="/logo-github 1.svg" />
            <RedesSociais caminho="/logo-linkedin 1.svg" />
            <RedesSociais caminho="/logo-instagram 1.svg" />
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
            imagem={<img src="/public/ArrowRight .svg" alt="ArrowRight" />}
          />
        </div>
      </section>

      <footer className={module.rodape}>
        <p className={module.textoRodape}>Islan Pereira 2023. Layout based on Rocketseat’s template.</p>
        <div className={module.textoRedesSociais}>
          <p className={module.textoRodape}>GitHub</p>
          <p className={module.textoRodape}>Linkedin</p>
          <p className={module.textoRodape}>Intagram</p>
          <a href="">
            <img src="/ArrowUp.svg" alt="ArrowUp" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Home;
