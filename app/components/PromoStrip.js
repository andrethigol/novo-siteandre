export default function PromoStrip({ text, ctaLabel, href }) {
  return (
    <div className="promo-strip">
      <div className="container promo-strip-inner">
        <p>{text}</p>
        <a href={href} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          {ctaLabel}
        </a>
      </div>
    </div>
  );
}