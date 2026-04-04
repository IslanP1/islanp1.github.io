import Conteudo from "../../props/Conteudo/Conteudo";
import Subtitulo from "../../props/Subtitulo/Subtitulo";
import Card from "../../props/Card/Card";
import Botao from "../../props/Botao/Botao";

function SecaoProjetos() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-8" id="projects">
      <Subtitulo subtitulo="Projetos" className="text-center" />
      <Conteudo
        titulo="Projetos que demonstram execução, qualidade e visão de produto"
        texto="Seleção com foco em arquitetura, experiência do usuário e resolução de problemas reais."
        className="mx-auto mb-10 max-w-2xl text-center"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card
          imagemPrincipal={
            <img
              src="/landingpage-pyquiz.png"
              alt="landingpage-pyquiz"
              className="h-44 w-full rounded-xl object-cover transition duration-500 group-hover:scale-105"
            />
          }
          data="Dez-Jan 2022-2023"
          imagemStack={<img src="/js.svg" alt="js" />}
          titulo="Pyquiz RN"
          texto="Aplicação criada para incentivar o estudo de programação, especialmente Python, de forma teórica, prática e intuitiva para iniciantes."
          link="https://github.com/IslanP1/Pyquiz-RN"
        />

        <Card
          imagemPrincipal={
            <img
              src="/hogwarts.png"
              alt="hogwarts universe"
              className="h-44 w-full rounded-xl object-cover transition duration-500 group-hover:scale-105"
            />
          }
          data="Jun-Jul 2023"
          imagemStack={<img src="/js.svg" alt="js" />}
          titulo="Hogwarts Universe"
          texto="Site que organiza filmes, séries e jogos do universo de Hogwarts em ordem cronológica, com descrições e sugestões de onde assistir ou jogar."
          link="https://github.com/IslanP1/Hogwarts-Universe"
        />

        <Card
          imagemPrincipal={
            <img
              src="/game-list.png"
              alt="Game List"
              className="h-44 w-full rounded-xl object-cover transition duration-500 group-hover:scale-105"
            />
          }
          data="Set 2023"
          imagemStack={<img src="/js.svg" alt="js" />}
          titulo="LOOPIS Game List"
          texto="Projeto desenvolvido no processo seletivo da LOOPIS JR para listar, adicionar, remover e gerenciar jogos favoritos de forma simples."
          link="https://github.com/IslanP1/LOOPIS-Game-List/"
        />
      </div>

      <Botao
        className="mx-auto mt-8 bg-surface-soft text-text"
        texto="Ver todos"
        imagem={<img src="/ArrowRight .svg" alt="ReadCvLogo" className="h-5 w-5" />}
        link="https://github.com/IslanP1?tab=repositories"
      />
    </section>
  );
}

export default SecaoProjetos;
