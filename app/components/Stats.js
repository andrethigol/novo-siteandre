import { site } from "@/lib/site";

export default function Stats() {
  return (
    <div className="stats-grid reveal">
      {site.stats.map((s) => (
        <div className="stat-box" key={s.label}>
          <b>{s.value}</b>
          <span>{s.label}</span>
        </div>
      ))}
    </div>
  );
}
