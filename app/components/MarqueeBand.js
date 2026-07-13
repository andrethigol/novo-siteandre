    const defaultItems = [
  "DESENVOLVIMENTO DE SITES",
  "LOJAS VIRTUAIS",
  "TRÁFEGO PAGO",
  "SEO",
  "ESTRATÉGIA DE CRESCIMENTO",
  "GOOGLE ADS",
  "META ADS",
];

export default function MarqueeBand({ items = defaultItems }) {
  const track = [...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {track.map((item, i) => (
          <span className="marquee-item" key={i}>
            {item}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="marquee-star">
              <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}