import Link from "next/link";
import Logo from "./Logo";
import { site, whatsappLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link href="/" className="logo" style={{ marginBottom: 18, display: "inline-flex" }}>
              <Logo />
            </Link>
            <p style={{ color: "var(--text-dim)", fontSize: 14.5, maxWidth: 320, marginTop: 16 }}>
              Agência de marketing digital especializada em criação de sites, lojas virtuais e
              gestão de tráfego pago. Atendimento 100% remoto para todo o Brasil.
            </p>
          </div>
          <div className="footer-col">
            <h4>Navegação</h4>
            <Link href="/">Início</Link>
            <Link href="/desenvolvimento-de-sites">Desenvolvimento de Sites</Link>
            <Link href="/lojas-virtuais">Lojas Virtuais</Link>
            <Link href="/gestao-de-trafego-pago">Gestão de Tráfego Pago</Link>
            <Link href="/sobre">Sobre nós</Link>
            <Link href="/contato">Contato</Link>
          </div>
          <div className="footer-col">
            <h4>Contato</h4>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              WhatsApp: {site.whatsappDisplay}
            </a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer">
              Instagram: {site.instagramHandle}
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} PixelRise · Todos os direitos reservados</span>
          <span>Atendimento 100% remoto · Todo o Brasil</span>
        </div>
      </div>
    </footer>
  );
}
