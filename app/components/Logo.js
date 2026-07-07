export default function Logo({ className }) {
  return (
    <span className={className} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="13" width="4.5" height="9" fill="#D4FF8E" />
        <rect x="9.75" y="8" width="4.5" height="14" fill="#D4FF8E" />
        <rect x="17.5" y="2" width="4.5" height="20" fill="#F5F5F2" />
      </svg>
      Pixel<span style={{ color: "#D4FF8E" }}>Rise</span>
    </span>
  );
}
