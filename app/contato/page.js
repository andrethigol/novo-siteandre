import ContactForm from "../components/ContactForm";
import { site, whatsappLink } from "@/lib/site";

export const metadata = {
  title: "Contato | Solicite um Orçamento com a PixelRise",
  description:
    "Fale com a PixelRise e solicite um orçamento para criação de site, loja virtual ou gestão de tráfego pago. Atendimento 100% remoto em todo o Brasil.",
  alternates: { canonical: "/contato" },
};

export default function Contato() {
  return (
    <section className="hero" style={{ paddingBottom: 100 }}>
      <div className="container">
        <div className="eyebrow">Contato</div>
        <h1>Vamos falar sobre o seu projeto</h1>
        <p className="lead">
          Preencha o formulário ou chame direto no WhatsApp — respondemos rápido e o diagnóstico
          inicial é gratuito.
        </p>

        <div className="grid-2" style={{ marginTop: 56, alignItems: "start" }}>
          <div className="card reveal" style={{ cursor: "default", padding: "40px 32px" }}>
            <div className="card-tag" style={{ marginBottom: 20 }}>FORMULÁRIO</div>
            <ContactForm />
          </div>

          <div className="reveal">
            <h3 style={{ fontSize: 20, marginBottom: 20 }}>Outros canais</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-cta" style={{ width: "fit-content" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4a7.94 7.94 0 0 0-6.9 11.9L4 20l4.2-1.1a7.93 7.93 0 0 0 3.8 1h0a7.94 7.94 0 0 0 7.94-7.94 7.86 7.86 0 0 0-2.34-5.63Zm-5.55 12.2h0a6.6 6.6 0 0 1-3.36-.92l-.24-.14-2.5.66.67-2.44-.16-.25a6.6 6.6 0 1 1 12.26-3.5 6.61 6.61 0 0 1-6.67 6.6Z" />
                </svg>
                {site.whatsappDisplay}
              </a>
              <a href={`mailto:${site.email}`} className="btn btn-secondary" style={{ width: "fit-content" }}>
                {site.email}
              </a>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ position: "relative", display: "inline-flex" }}>
                Instagram {site.instagramHandle}
                <span className="underline" />
              </a>
            </div>
            <p style={{ color: "var(--text-dim)", fontSize: 14, marginTop: 32 }}>
              {site.region}. Atendimento de segunda a sexta, das 9h às 18h.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
