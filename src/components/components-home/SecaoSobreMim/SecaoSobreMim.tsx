import module from "./SecaoSobreMim.module.css";
import Conteudo from "../../props/Conteudo/Conteudo";
import Botao from "../../props/Botao/Botao";

function SecaoSobreMim() {
  return (
    <section className={module.secaoSobreMim} id="about">
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
  );
}

export default SecaoSobreMim;
