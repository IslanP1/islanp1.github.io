import { FormEvent, useState } from "react";
import Subtitulo from "../../props/Subtitulo/Subtitulo";
import Conteudo from "../../props/Conteudo/Conteudo";
import RedesSociais from "../../props/RedesSociais/RedesSocias";
import Botao from "../../props/Botao/Botao";

function SecaoContate() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormStatus("idle");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
      _subject: "Novo contato do portfolio",
      _template: "table",
      _captcha: "false",
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/islanpereiradeoliveira@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Falha ao enviar formulário");
      }

      setFormStatus("success");
      form.reset();
    } catch {
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <RedesSociais caminho="/logo-github 1.svg" link="https://github.com/IslanP1" label="GitHub" target="_blank" />
          <RedesSociais caminho="/logo-linkedin 1.svg" link="https://www.linkedin.com/in/islanoliveira/" label="LinkedIn" target="_blank" />
        </div>
      </div>

      <form className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-ink/40 p-4" onSubmit={handleSubmit}>
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
          texto={isSubmitting ? "Enviando..." : "Enviar mensagem"}
          imagem={<img src="/ArrowRight .svg" alt="ArrowRight" className="h-5 w-5" />}
          type="submit"
        />
        {formStatus === "success" ? (
          <p className="text-sm text-mint">Mensagem enviada com sucesso. Vou te responder em breve.</p>
        ) : null}
        {formStatus === "error" ? (
          <p className="text-sm text-accent">Nao foi possivel enviar agora. Tente novamente em instantes.</p>
        ) : null}
      </form>
    </section>
  );
}

export default SecaoContate;
