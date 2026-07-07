import Link from "next/link";
import Logo from "./Logo";
import { whatsappLink } from "@/lib/site";

const links = [
  { href: "/desenvolvimento-de-sites", label: "Sites" },
  { href: "/lojas-virtuais", label: "Lojas Virtuais" },
  { href: "/gestao-de-trafego-pago", label: "Tráfego Pago" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  return (
    <header className="nav">
      <Link href="/" className="logo">
        <Logo />
      </Link>
      <nav className="navlinks">
        {links.map((l) => (
          <Link key={l.href} href={l.href}>
            {l.label}
          </Link>
        ))}
      </nav>
      <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary nav-cta">
        Solicitar orçamento
      </a>
      <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="nav-mobile-btn">
        Orçamento
      </a>
    </header>
  );
}
