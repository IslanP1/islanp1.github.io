import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);
  const scrollToTop = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  };

  const navItems = [
    { href: "#home", label: "Início" },
    { href: "#about-me", label: "Sobre" },
    { href: "#experience", label: "Experiência" },
    { href: "#contact", label: "Contato" },
  ];

  return (
    <header id="home" className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-ink/80 backdrop-blur-lg">
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8"
      >
        <a
          href="#home"
          className="font-title text-xl font-bold tracking-wide text-text transition hover:text-mint"
          onClick={scrollToTop}
        >
          <span aria-hidden="true" className="mr-1 text-accent">{`<`}</span>
            IslanP1
          <span aria-hidden="true" className="ml-1 text-accent">{`/>`}</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                className="font-medium text-muted transition hover:text-text"
                href={item.href}
                onClick={item.href === "#home" ? scrollToTop : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-text md:hidden"
          aria-expanded={open}
          aria-label="Abrir menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open ? (
        <ul className="mx-4 mb-4 flex flex-col gap-2 rounded-xl border border-white/10 bg-surface p-4 md:hidden">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                className="block rounded-lg px-3 py-2 text-sm font-semibold text-muted transition hover:bg-surface-soft hover:text-text"
                href={item.href}
                onClick={item.href === "#home" ? scrollToTop : () => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
}

export default Header;
