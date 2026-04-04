import Conteudo from "../../props/Conteudo/Conteudo";
import Subtitulo from "../../props/Subtitulo/Subtitulo";
import Botao from "../../props/Botao/Botao";

function SecaoCardMaisSobreMim() {
  return (
    <section
      className="mx-auto mb-10 grid max-w-6xl gap-10 rounded-2xl border border-white/10 bg-surface/90 p-6 md:grid-cols-[220px_1fr] md:p-10"
      id="about-me"
    >
      <div className="flex items-center justify-center">
        <div className="flex h-52 w-52 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-accent/25 to-mint/25 font-title text-6xl font-extrabold text-text">
          IP
        </div>
      </div>

      <div>
        <div className="mb-6 flex flex-wrap gap-2">
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
        <Subtitulo subtitulo="Sobre mim" />
        <Conteudo
          titulo="Desenvolvedor de software em busca de novos desafios"
          texto="Atualmente curso Análise e Desenvolvimento de Sistemas no IFPB - Campus Cajazeiras. Sou apaixonado por tecnologia, aprendizado contínuo e projetos que geram impacto real."
        />

        <Botao
          className="mt-6 bg-accent text-base"
          texto="Meu currículo"
          imagem={<img src="/ReadCvLogo.svg" alt="ReadCvLogo" className="h-5 w-5" />}
          link="https://github.com/IslanP1"
        />
      </div>
    </section>
  );
}

export default SecaoCardMaisSobreMim;
