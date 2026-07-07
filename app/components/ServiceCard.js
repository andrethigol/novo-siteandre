import Link from "next/link";

export default function ServiceCard({ tag, title, description, href }) {
  return (
    <Link href={href} className="card reveal">
      <div className="card-tag">{tag}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="card-link">
        Ver serviço
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}
