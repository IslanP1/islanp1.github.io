import module from "./SecaoProjetos.module.css";
import Conteudo from "../../props/Conteudo/Conteudo";
import Subtitulo from "../../props/Subtitulo/Subtitulo";
import Card from "../../props/Card/Card";
import Botao from "../../props/Botao/Botao";

function SecaoProjetos() {
  return (
    <section className={module.secaoProjetos} id="projects">
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
          data="Dec-Jan 2022-2023"
          imagemStack={<img src="/js.svg" alt="js" />}
          titulo="Pyquiz RN"
          texto="The application's main objective is to promote the study and learning of programming, specifically Python, in a theoretical, practical and intuitive way for beginners in this fascinating universe of technology."
          link="https://github.com/IslanP1/Pyquiz-RN"
        />

        <Card
          imagemPrincipal={
            <img
              src="/hogwarts.png"
              alt="hogwarts universe"
              className={module.imagemProjeto}
            />
          }
          data="Jun-Jul 2023"
          imagemStack={<img src="/js.svg" alt="js" />}
          titulo="Hogwarts Universe"
          texto="Hogwarts Universe is a website to show all the films, series or games from the Hogwarts universe to the website user in chronological order, as well as a brief description and suggestion of where to watch or play."
          link="https://github.com/IslanP1/Hogwarts-Universe"
        />

        <Card
          imagemPrincipal={
            <img
              src="/game-list.png"
              alt="Game List"
              className={module.imagemProjeto}
            />
          }
          data="Sep 2023"
          imagemStack={<img src="/js.svg" alt="js" />}
          titulo="LOOPIS Game List"
          texto="The LOOPIS-Game-List is a project developed as part of the admission process at the company LOOPIS JR. It demonstrates technical skills in software development and our love of games. This game list allows you to add, remove and manage favorite games easily."
          link="https://github.com/IslanP1/LOOPIS-Game-List/"
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
        link="https://github.com/IslanP1?tab=repositories"
      />
    </section>
  );
}

export default SecaoProjetos;
