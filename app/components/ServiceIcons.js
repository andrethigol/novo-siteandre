export function IconSite({ size = 44 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="7" width="38" height="30" rx="4" fill="#101010" stroke="#D4FF8E" strokeWidth="1.4" />
      <rect x="3" y="7" width="38" height="8" rx="4" fill="#1c1c1c" stroke="#D4FF8E" strokeWidth="1.4" />
      <circle cx="9" cy="11" r="1.4" fill="#D4FF8E" />
      <circle cx="14" cy="11" r="1.4" fill="#3a3a35" />
      <circle cx="19" cy="11" r="1.4" fill="#3a3a35" />
      <rect x="8" y="20" width="14" height="4" rx="2" fill="#D4FF8E" />
      <rect x="8" y="27" width="22" height="3" rx="1.5" fill="#3a3a35" />
      <rect x="8" y="32" width="16" height="3" rx="1.5" fill="#3a3a35" />
    </svg>
  );
}

export function IconCart({ size = 44 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 9h4l3.2 18.2a3 3 0 0 0 3 2.5h13a3 3 0 0 0 3-2.4L35 15H12" stroke="#D4FF8E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="18" cy="36" r="2.4" fill="#D4FF8E" />
      <circle cx="30" cy="36" r="2.4" fill="#D4FF8E" />
      <path d="M24 17v9m-4.5-4.5h9" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconAds({ size = 44 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 18v8a2 2 0 0 0 2 2h4l9 8V8l-9 8H8a2 2 0 0 0-2 2Z" stroke="#D4FF8E" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M27 15c2.2 2 2.2 12 0 14M33 10c4.5 4.2 4.5 19.6 0 24" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" opacity="0.75" />
    </svg>
  );
}
