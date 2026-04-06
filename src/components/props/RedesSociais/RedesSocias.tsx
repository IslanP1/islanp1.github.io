interface PropsRedesSociais {
  caminho: string;
  link: string;
  label: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

function RedesSociais({ caminho, link, label, target = "_blank" }: PropsRedesSociais) {
  return (
    <a
      className="inline-flex rounded-xl border border-white/10 bg-surface-soft p-3 transition hover:-translate-y-0.5 hover:border-mint/50"
      href={link}
      target={target}
      rel="noreferrer"
      aria-label={label}
    >
      <img src={caminho} alt={label} className="h-6 w-6" />
    </a>
  );
}
export default RedesSociais;
