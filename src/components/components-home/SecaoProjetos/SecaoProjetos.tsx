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
  );
}

export default SecaoProjetos;
