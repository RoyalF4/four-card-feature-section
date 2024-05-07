export default function Card({
  title,
  imgSrc,
  children,
  alt,
  color,
  gridArea,
}) {
  return (
    <div
      className={`card ${gridArea}`}
      style={{ borderTop: `4px solid ${color}` }}
    >
      <h2 className="card__heading">{title}</h2>
      <p className="card__paragraph">{children}</p>
      <img className="card__img" src={imgSrc} alt={alt} />
    </div>
  );
}
