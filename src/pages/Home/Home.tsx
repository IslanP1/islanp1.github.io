import Conteudo from "../../components/Conteudo/Conteudo";
import Header from "../../components/Header/Header";
import Botao from "../../components/Botao/Botao";
import module from "./Home.module.css";

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
    </>
  );
}

export default Home;
