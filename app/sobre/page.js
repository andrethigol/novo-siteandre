import Stats from "../components/Stats";
import { whatsappLink } from "@/lib/site";

export const metadata = {
  title: "Sobre a PixelRise | Agência de Marketing Digital",
  description:
    "Conheça a PixelRise: agência de marketing digital especializada em sites, e-commerce e tráfego pago, com atendimento 100% remoto para empresas em todo o Brasil.",
  alternates: { canonical: "/sobre" },
};

const testimonials = [
  {
    name: "José Arruda",
    company: "Loja Carinho",
    text: "Contratei a empresa para fazer o meu tráfego e estou muito surpreso com o resultado que venho tendo.",
  },
  {
    name: "Priscila",
    company: "PS Iluminação",
    text: "Gostei muito do projeto para minha loja, não precisei me preocupar com nada.",
  },
  {
    name: "Cliente PixelRise",
    company: "E-commerce",
    text: "Uma agência que entrega o que promete, com acompanhamento próximo em cada etapa.",
  },
];

const portfolio = [
  { name: "Porcelana Schmidt", tag: "Branding · Identidade Visual" },
  { name: "PS Iluminação Automotiva", tag: "Site · Campanha de Tráfego Pago" },
];

export default function Sobre() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="eyebrow">Sobre nós</div>
          <h1>
            Marketing digital orientado a <em>dados</em>, não a achismo.
          </h1>
          <p className="lead">
            Somos uma agência de marketing digital especializada em criação de sites, lojas
            virtuais e gestão de tráfego pago, com foco em crescimento previsível para negócios em
            todo o Brasil.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid-2">
            <div>
              <div className="eyebrow">Nossa abordagem</div>
              <h2 className="section-title reveal">
                Mais do que gerar cliques, construímos estratégias sólidas
              </h2>
              <p className="section-sub reveal" style={{ marginBottom: 24 }}>
                Combinamos inteligência de dados, criatividade e execução consistente para
                escalar negócios de forma estruturada e sustentável.
              </p>
              <p className="section-sub reveal" style={{ marginBottom: 0 }}>
                Cada decisão é guiada por métricas, testes e otimizações contínuas — desde o
                primeiro rascunho do site até a campanha de tráfego pago já rodando.
              </p>
            </div>
            <Stats />
          </div>
        </div>
      </section>

      <section className="light-section">
        <div className="container">
          <div className="eyebrow">Portfólio</div>
          <h2 className="section-title reveal">Alguns projetos recentes</h2>
          <p className="section-sub reveal">
            Cada projeto é uma estratégia única, pensada para o momento de negócio do cliente.
          </p>
          <div className="card-grid">
            {portfolio.map((p) => (
              <div className="portfolio-card reveal" key={p.name}>
                <div className="portfolio-thumb">{p.name.split(" ")[0]}</div>
                <div className="portfolio-body">
                  <h3 style={{ fontSize: 19, marginBottom: 6 }}>{p.name}</h3>
                  <div className="tag-row">
                    {p.tag.split(" · ").map((t) => (
                      <span className="tag-pill" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="eyebrow">Depoimentos</div>
          <h2 className="section-title reveal">O que dizem sobre a PixelRise</h2>
          <div className="card-grid">
            {testimonials.map((t) => (
              <div className="card reveal" key={t.name} style={{ cursor: "default" }}>
                <p style={{ fontSize: 15, color: "var(--text)", marginBottom: 20 }}>&ldquo;{t.text}&rdquo;</p>
                <div className="card-tag">{t.name.toUpperCase()} — {t.company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-title reveal" style={{ margin: "0 auto 28px", textAlign: "center" }}>
            Vamos construir o próximo case de sucesso juntos
          </h2>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Falar com a PixelRise
          </a>
        </div>
      </section>
    </>
  );
}
