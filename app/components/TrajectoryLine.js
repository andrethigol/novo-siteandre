export default function TrajectoryLine({ labels, title }) {
  return (
    <div className="trajectory-wrap">
      {title && <div className="trajectory-title">{title}</div>}
      <svg viewBox="0 0 1120 160" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path
          className="trail-path"
          d="M0 130 C 120 130, 160 60, 260 90 S 420 140, 520 80 S 680 10, 800 40 S 980 100, 1120 20"
          stroke="#D4FF8E"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="0" cy="130" r="5" fill="#0D0D0D" stroke="#D4FF8E" strokeWidth="2" />
        <circle cx="373" cy="95" r="5" fill="#0D0D0D" stroke="#D4FF8E" strokeWidth="2" />
        <circle cx="746" cy="45" r="5" fill="#0D0D0D" stroke="#D4FF8E" strokeWidth="2" />
        <circle className="trail-dot" cx="1120" cy="20" r="5" fill="#D4FF8E" />
      </svg>
      {labels && (
        <div className="trail-caption">
          {labels.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </div>
      )}
    </div>
  );
}