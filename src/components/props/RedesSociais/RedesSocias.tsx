interface PropsRedesSociais {
  caminho: string;
  link: string;
  label: string;
}

function RedesSociais({ caminho, link, label }: PropsRedesSociais) {
  return (
    <a
      className="inline-flex rounded-xl border border-white/10 bg-surface-soft p-3 transition hover:-translate-y-0.5 hover:border-mint/50"
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
    >
      <img src={caminho} alt={label} className="h-6 w-6" />
    </a>
  );
}
export default RedesSociais;
