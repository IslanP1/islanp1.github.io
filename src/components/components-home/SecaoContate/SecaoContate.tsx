import Subtitulo from "../../props/Subtitulo/Subtitulo";
import Conteudo from "../../props/Conteudo/Conteudo";
import RedesSociais from "../../props/RedesSociais/RedesSocias";
import Botao from "../../props/Botao/Botao";

function SecaoContate() {
  return (
    <section
      className="mx-auto mb-10 grid max-w-6xl gap-10 rounded-2xl border border-white/10 bg-surface/90 p-6 md:grid-cols-2 md:p-10"
      id="contact"
    >
      <div>
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-gradient-to-r from-accent/40 to-mint/40 font-title text-2xl font-bold text-text">
          IP
        </div>
        <Subtitulo subtitulo="Contato" />
        <Conteudo
          titulo="Gostou do meu trabalho? Vamos conversar"
          texto="Estou sempre aberto a novas ideias e oportunidades. Você pode me chamar por e-mail em islanpereiradeoliveira@gmail.com ou pelas redes sociais."
        />

        <div className="mt-6 flex gap-3">
          <RedesSociais caminho="/logo-github 1.svg" link="https://github.com/IslanP1" label="GitHub" />
          <RedesSociais caminho="/logo-linkedin 1.svg" link="https://www.linkedin.com/in/islan-pereira/" label="LinkedIn" />
          <RedesSociais caminho="/logo-instagram 1.svg" link="https://www.instagram.com/islanx_oliv/" label="Instagram" />
        </div>
      </div>

      <form className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-ink/40 p-4">
        <input
          className="rounded-xl border border-white/10 bg-surface-soft px-4 py-3 text-sm text-text outline-none transition placeholder:text-muted focus:border-mint"
          type="text"
          name="name"
          id="name"
          placeholder="Nome"
          required
        />
        <input
          className="rounded-xl border border-white/10 bg-surface-soft px-4 py-3 text-sm text-text outline-none transition placeholder:text-muted focus:border-mint"
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          required
        />
        <textarea
          className="min-h-40 resize-none rounded-xl border border-white/10 bg-surface-soft px-4 py-3 text-sm text-text outline-none transition placeholder:text-muted focus:border-mint"
          name="message"
          id="message"
          placeholder="Sua mensagem"
          required
        />
        <Botao
          className="justify-center bg-accent text-base"
          texto="Enviar mensagem"
          imagem={<img src="/ArrowRight .svg" alt="ArrowRight" className="h-5 w-5" />}
          type="submit"
        />
      </form>
    </section>
  );
}

export default SecaoContate;
