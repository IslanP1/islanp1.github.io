import Conteudo from "../../props/Conteudo/Conteudo";
import Botao from "../../props/Botao/Botao";
import fotoPerfil from "../../../assets/islan.jpeg";
import curriculoPDF from "../../../assets/Currículo Islan.pdf";

function SecaoSobreMim() {
  return (
    <section id="about" className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-2 md:px-8 md:py-24">
      <div className="animate-rise">
        <p className="mb-4 inline-block rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
          Disponível para novos desafios
        </p>
        <h1 className="mb-6 bg-gradient-to-r from-accent to-mint bg-clip-text font-title text-4xl font-extrabold text-transparent md:text-5xl">
          Oi, eu sou Islan
        </h1>
        <Conteudo
          titulo="Desenvolvedor Full-Stack Pleno focado em soluções eficientes e escaláveis"
          texto="Construindo sistemas robustos de ponta a ponta para educação, saúde e SaaS, com foco em performance e valor real. Experiência sólida com APIs em NestJS e Python, mensageria com RabbitMQ e infraestrutura com servidores próprios."
        />

        <div className="relative mt-8 flex animate-rise items-center justify-center md:hidden">
          <div className="pointer-events-none absolute h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-8 -left-6 h-32 w-32 rounded-full bg-mint/20 blur-3xl" />

          <div className="relative aspect-square w-full max-w-[17rem] rounded-full bg-gradient-to-br from-accent/70 via-mint/30 to-accent/50 p-[3px]">
            <div className="h-full w-full overflow-hidden rounded-full border border-white/15 bg-base/80 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
              <img
                src={fotoPerfil}
                alt="Foto de perfil de Islan"
                className="h-full w-full scale-100 object-cover object-[center_22%]"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-3 text-sm text-text md:grid-cols-2">
          <p className="rounded-xl border border-white/10 bg-surface/70 px-4 py-3">PHP, Adianti, Node.js, NestJS, Python, Django, React Native e PostgreSQL</p>
          <p className="rounded-xl border border-white/10 bg-surface/70 px-4 py-3">APIs escaláveis, mensageria com RabbitMQ e deploy em servidores próprios</p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Botao
            className="bg-surface-soft text-text"
            imagem={<img src="/ReadCvLogo.svg" alt="ReadCvLogo" />}
            texto="Meu currículo"
            link={curriculoPDF}
          />
          <Botao
            className="bg-accent text-base"
            imagem={<img src="/ArrowRight .svg" alt="ArrowRight" className="h-5 w-5" />}
            texto="Entrar em contato"
            link="#contact"
          />
        </div>
      </div>

      <div className="relative hidden animate-rise items-center justify-center md:flex">
        <div className="pointer-events-none absolute h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-10 -left-8 h-40 w-40 rounded-full bg-mint/20 blur-3xl" />

        <div className="relative aspect-square w-full max-w-[20rem] rounded-full bg-gradient-to-br from-accent/70 via-mint/30 to-accent/50 p-[3px] md:max-w-[23rem]">
          <div className="h-full w-full overflow-hidden rounded-full border border-white/15 bg-base/80 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
            <img
              src={fotoPerfil}
              alt="Foto de perfil de Islan"
              className="h-full w-full scale-100 object-cover object-[center_22%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecaoSobreMim;