export default function Card({ title, imgSrc, children, alt }) {
  return (
    <div className="card">
      <h2 className="card__heading">{title}</h2>
      <p className="card__paragraph">{children}</p>
      <img className="card__img" src={imgSrc} alt={alt} />
    </div>
  );
}
