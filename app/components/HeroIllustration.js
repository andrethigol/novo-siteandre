export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 480 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto", maxWidth: 460 }}
    >
      {/* card shadow blob */}
      <ellipse cx="240" cy="380" rx="170" ry="18" fill="#000000" opacity="0.35" />

      {/* browser window */}
      <rect x="20" y="20" width="440" height="320" rx="10" fill="#161616" stroke="#2A2A26" strokeWidth="1.5" />
      {/* browser chrome bar */}
      <rect x="20" y="20" width="440" height="34" rx="10" fill="#1c1c1c" stroke="#2A2A26" strokeWidth="1.5" />
      <circle cx="40" cy="37" r="4.5" fill="#3a3a35" />
      <circle cx="56" cy="37" r="4.5" fill="#3a3a35" />
      <circle cx="72" cy="37" r="4.5" fill="#3a3a35" />
      <rect x="160" y="30" width="180" height="14" rx="7" fill="#101010" />

      {/* sidebar */}
      <rect x="36" y="72" width="90" height="248" rx="6" fill="#101010" />
      <rect x="50" y="90" width="62" height="8" rx="4" fill="#D4FF8E" opacity="0.9" />
      <rect x="50" y="112" width="50" height="6" rx="3" fill="#3a3a35" />
      <rect x="50" y="130" width="58" height="6" rx="3" fill="#3a3a35" />
      <rect x="50" y="148" width="44" height="6" rx="3" fill="#3a3a35" />
      <rect x="50" y="166" width="52" height="6" rx="3" fill="#3a3a35" />

      {/* main stat cards */}
      <rect x="142" y="72" width="140" height="64" rx="8" fill="#101010" />
      <text x="156" y="98" fill="#93938C" fontSize="9" fontFamily="monospace">CONVERSÃO</text>
      <text x="156" y="122" fill="#D4FF8E" fontSize="22" fontFamily="sans-serif" fontWeight="700">+38%</text>

      <rect x="296" y="72" width="140" height="64" rx="8" fill="#101010" />
      <text x="310" y="98" fill="#93938C" fontSize="9" fontFamily="monospace">ROAS MÉDIO</text>
      <text x="310" y="122" fill="#ffffff" fontSize="22" fontFamily="sans-serif" fontWeight="700">4.8x</text>

      {/* bar chart */}
      <rect x="142" y="152" width="294" height="150" rx="8" fill="#101010" />
      <g>
        <rect x="164" y="250" width="20" height="34" rx="3" fill="#2A2A26" />
        <rect x="196" y="230" width="20" height="54" rx="3" fill="#2A2A26" />
        <rect x="228" y="210" width="20" height="74" rx="3" fill="#3a3a35" />
        <rect x="260" y="190" width="20" height="94" rx="3" fill="#D4FF8E" opacity="0.55" />
        <rect x="292" y="170" width="20" height="114" rx="3" fill="#D4FF8E" opacity="0.75" />
        <rect x="324" y="150" width="20" height="134" rx="3" fill="#D4FF8E" />
        <rect x="356" y="196" width="20" height="88" rx="3" fill="#3a3a35" />
        <rect x="388" y="176" width="20" height="108" rx="3" fill="#2A2A26" />
      </g>
      {/* trend line over bars */}
      <path
        d="M174 260 L206 240 L238 218 L270 198 L302 176 L334 158 L366 202 L398 182"
        stroke="#ffffff"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      />

      {/* floating badge */}
      <g transform="translate(330,20)">
        <rect x="0" y="0" width="130" height="46" rx="23" fill="#D4FF8E" transform="translate(0,-23)" />
        <text x="16" y="-27" fill="#0D0D0D" fontSize="11" fontFamily="monospace" fontWeight="700">● AO VIVO</text>
      </g>
    </svg>
  );
}
