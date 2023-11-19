import module from "./Card.module.css";

interface PropsCard {
  imagemPrincipal: JSX.Element;
  data: string;
  imagemStack: JSX.Element;
  titulo: string;
  texto: string;
  link: string;
}

function Card({
  imagemPrincipal,
  data,
  imagemStack,
  titulo,
  texto,
  link
}: PropsCard) {
  return (
    <a className={module.card} href={link} target="_blank">
      {imagemPrincipal}
      <div className={module.dataEStack}>
        <p className={module.data}>{data}</p>
        {imagemStack}
      </div>
      <h3 className={module.subtituloCard}>{titulo}</h3>
      <p className={module.texto}>{texto}</p>
    </a>
  );
}

export default Card;
