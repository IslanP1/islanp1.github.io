import module from "./SecaoSobreMim.module.css";
import Conteudo from "../../props/Conteudo/Conteudo";
import Botao from "../../props/Botao/Botao";

function SecaoSobreMim() {
  return (
    <section className={module.secaoSobreMim} id="about">
      <div className={module.sobre}>
        <h1 id={module.tituloPrincipal}>Oi, eu sou Islan</h1>
        <Conteudo
          titulo="Full-stack developer and innovation enthusiast"
          texto="Sou um Desenvolvedor Júnior Full-Stack com experiência em tecnologias modernas e paixão por criar soluções 
          eficientes. Tenho proficiência em Python e Django para o desenvolvimento back-end, além de experiência em Java e Node.js 
          com Express para a construção de aplicações escaláveis e robustas. No front-end, utilizo React e React Native para criar 
          interfaces interativas e responsivas. Minha base em C oferece uma compreensão sólida de programação de baixo nível, 
          complementando minha habilidade em resolver problemas e otimizar processos. Também possuo experiência em bancos de dados
          SQL e NoSQL, garantindo a modelagem e gestão eficiente de dados para atender a diferentes necessidades de aplicações. 
          Estou constantemente em busca de novos desafios e oportunidades para aprender, crescer e contribuir com projetos 
          inovadores. Com um espírito colaborativo e comprometido, estou pronto para transformar ideias em realidade e agregar 
          valor ao seu projeto."
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
