import Conteudo from "../../props/Conteudo/Conteudo";
import Botao from "../../props/Botao/Botao";

function SecaoSobreMim() {
  return (
    <section id="about" className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-2 md:px-8 md:py-24">
      <div className="animate-rise">
        <p className="mb-4 inline-block rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
          Disponível para oportunidades
        </p>
        <h1 className="mb-6 bg-gradient-to-r from-accent to-mint bg-clip-text font-title text-4xl font-extrabold text-transparent md:text-5xl">
          Oi, eu sou Islan
        </h1>
        <Conteudo
          titulo="Desenvolvedor full-stack focado em produto e resultado"
          texto="Transformo ideias em aplicações web modernas, rápidas e escaláveis. Atuo do front-end ao back-end com foco em performance, clareza de código e experiência real do usuário."
        />

        <div className="mt-6 grid gap-3 text-sm text-text md:grid-cols-2">
          <p className="rounded-xl border border-white/10 bg-surface/70 px-4 py-3">React, TypeScript, Node.js e Django</p>
          <p className="rounded-xl border border-white/10 bg-surface/70 px-4 py-3">Projetos com foco em usabilidade e impacto</p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Botao
            className="bg-surface-soft text-text"
            imagem={<img src="/ReadCvLogo.svg" alt="ReadCvLogo" />}
            texto="Meu currículo"
            link="https://github.com/IslanP1"
          />
          <Botao
            className="bg-accent text-base"
            imagem={<img src="/ArrowRight .svg" alt="ArrowRight" className="h-5 w-5" />}
            texto="Entrar em contato"
            link="#contact"
          />
        </div>
      </div>

      <div className="relative flex animate-rise items-center justify-center">
        <div className="w-full max-w-sm rounded-3xl border border-white/10 bg-surface-soft/40 p-6 backdrop-blur-sm">
          <div className="mx-auto aspect-square w-full max-w-[18rem] rounded-full border-2 border-dashed border-accent/40 bg-base/50">
            <div className="flex h-full flex-col items-center justify-center px-6 text-center">
              <p className="font-title text-xl font-bold text-text">Foto profissional</p>
              <p className="mt-2 max-w-[16rem] text-sm leading-6 text-muted">Adicione uma imagem sua com fundo limpo</p>
            </div>
          </div>
          <p className="mt-4 text-center text-xs uppercase tracking-wider text-muted">Recomendado: formato circular</p>
        </div>
      </div>
    </section>
  );
}

export default SecaoSobreMim;
