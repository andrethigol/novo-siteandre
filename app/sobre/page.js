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

const differentiators = [
  {
    title: "Diagnóstico antes de vender",
    text: "Não empurramos pacote fechado. Entendemos seu momento de negócio antes de propor qualquer solução.",
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <circle cx="20" cy="20" r="12" stroke="#D4FF8E" strokeWidth="2" />
        <path d="M29 29l8 8" stroke="#D4FF8E" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Relatório aberto, sem enrolação",
    text: "Você acompanha exatamente para onde o investimento está indo — sem jargão pra esconder resultado fraco.",
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <rect x="8" y="6" width="28" height="32" rx="3" stroke="#D4FF8E" strokeWidth="2" />
        <path d="M15 16h14M15 23h14M15 30h8" stroke="#D4FF8E" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Atendimento direto",
    text: "Você fala com quem executa o projeto, não com um atendente que só repassa mensagem.",
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <path d="M8 30V14a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H18l-8 8Z" stroke="#D4FF8E" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Foco em métrica, não em vaidade",
    text: "CPC, CPA, ROAS e taxa de conversão guiam as decisões — não curtidas ou alcance sem propósito.",
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <path d="M6 34V22m10 12V14m10 20V26m10 8V10" stroke="#D4FF8E" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
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

      <section>
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
          <div className="eyebrow">Diferenciais</div>
          <h2 className="section-title reveal">O que muda quando você trabalha com a gente</h2>
          <p className="section-sub reveal">
            Sem portfólio genérico de prateleira — o que importa é como cada projeto é conduzido.
          </p>
          <div className="card-grid">
            {differentiators.map((d) => (
              <div className="card reveal" key={d.title} style={{ cursor: "default" }}>
                <div className="card-icon">{d.icon}</div>
                <h3>{d.title}</h3>
                <p style={{ marginBottom: 0 }}>{d.text}</p>
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
