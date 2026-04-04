function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-6xl flex-col gap-4 border-t border-white/10 px-4 py-8 md:flex-row md:items-center md:justify-between md:px-8">
      <p className="text-sm text-muted">
        Islan Pereira 2026. Desenvolvido com React, TypeScript e Tailwind.
      </p>

      <div className="flex flex-wrap items-center gap-4">
        <a className="text-sm text-muted transition hover:text-text" href="https://github.com/IslanP1" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a className="text-sm text-muted transition hover:text-text" href="https://www.linkedin.com/in/islan-pereira/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a className="text-sm text-muted transition hover:text-text" href="https://www.instagram.com/islanx_oliv/" target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a
          href="#home"
          className="inline-flex rounded-xl border border-white/10 bg-surface-soft p-2 transition hover:-translate-y-0.5 hover:border-mint/40"
          aria-label="Voltar ao topo"
        >
          <img src="/ArrowUp.svg" alt="ArrowUp" className="h-5 w-5" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
