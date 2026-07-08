import TrajectoryLine from "../components/TrajectoryLine";
import Faq from "../components/Faq";
import { IconCart } from "../components/ServiceIcons";
import { whatsappLink, site } from "@/lib/site";

export const metadata = {
  title: "Criação de Loja Virtual | Desenvolvimento de E-commerce Profissional",
  description:
    "Criação de lojas virtuais profissionais, prontas para vender. Desenvolvimento de e-commerce com foco em conversão, escala e experiência de compra.",
  alternates: { canonical: "/lojas-virtuais" },
  keywords: [
    "criação de loja virtual",
    "desenvolvimento de e-commerce",
    "criar loja virtual profissional",
    "loja virtual para pequenas empresas",
    "e-commerce com alta conversão",
  ],
};

const includes = [
  { title: "Catálogo ilimitado", desc: "Estrutura preparada para crescer junto com seu número de produtos." },
  { title: "Pagamento integrado", desc: "Cartão, Pix e boleto configurados desde o lançamento da loja." },
  { title: "Cálculo de frete automático", desc: "Integração com os Correios e transportadoras para checkout sem fricção." },
  { title: "Checkout otimizado", desc: "Processo de compra enxuto, pensado para reduzir abandono de carrinho." },
  { title: "SEO para produtos", desc: "Páginas de produto estruturadas para ranquear no Google e no Google Shopping." },
  { title: "Gestão de pedidos", desc: "Painel simples para acompanhar vendas, estoque e status de entrega." },
];

const faqItems = [
  {
    q: "Quais formas de pagamento a loja virtual aceita?",
    a: "Configuramos cartão de crédito, Pix e boleto bancário através dos principais gateways de pagamento do mercado brasileiro.",
  },
  {
    q: "A loja virtual calcula o frete automaticamente?",
    a: "Sim, integramos o cálculo de frete com Correios e transportadoras parceiras direto no checkout.",
  },
  {
    q: "Consigo cadastrar meus produtos sozinho depois da entrega?",
    a: "Sim. Você recebe um painel de gestão simples para cadastrar produtos, gerenciar estoque e acompanhar pedidos sem depender de suporte técnico.",
  },
  {
    q: "Quanto tempo leva para minha loja virtual ficar pronta?",
    a: "Em média entre 25 e 40 dias úteis, variando conforme o tamanho do catálogo de produtos e as integrações necessárias (frete, pagamento, ERP).",
  },
];

export default function LojasVirtuais() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Criação de Loja Virtual (E-commerce)",
    provider: { "@type": "Organization", name: "PixelRise", url: site.domain },
    areaServed: "BR",
    description:
      "Desenvolvimento de e-commerce com checkout otimizado, integrações de pagamento e frete, focado em conversão.",
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="hero">
        <div className="container">
          <div className="service-icon-badge reveal"><IconCart size={40} /></div>
          <div className="eyebrow">Serviço · E-commerce</div>
          <h1>
            Lojas virtuais estruturadas para <em>vender de verdade.</em>
          </h1>
          <p className="lead">
            Desenvolvimento de e-commerce com checkout otimizado, integrações de pagamento e frete,
            e páginas de produto pensadas para conversão e SEO.
          </p>
          <div className="hero-actions">
            <a href={whatsappLink("Olá! Quero criar uma loja virtual para o meu negócio.")} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Solicitar orçamento da minha loja
            </a>
          </div>
          <TrajectoryLine labels={["Estrutura", "Catálogo", "Pagamento & Frete", "Lançamento"]} />
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="eyebrow">O que está incluso</div>
          <h2 className="section-title reveal">Tudo o que uma loja virtual precisa para vender</h2>
          <p className="section-sub reveal">
            Não entregamos só uma vitrine online — entregamos uma estrutura completa de vendas.
          </p>
          <div className="card-grid">
            {includes.map((item, i) => (
              <div className="card reveal" key={item.title} style={{ cursor: "default" }}>
                <div className="card-tag">ITEM_0{i + 1}</div>
                <h3>{item.title}</h3>
                <p style={{ marginBottom: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="light-section">
        <div className="container">
          <div className="eyebrow">F.A.Q. — Lojas Virtuais</div>
          <h2 className="section-title reveal">Perguntas frequentes sobre e-commerce</h2>
          <Faq items={faqItems} />
        </div>
      </section>

      <section>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-title reveal" style={{ margin: "0 auto 28px", textAlign: "center" }}>
            Sua loja virtual pronta para vender em todo o Brasil
          </h2>
          <a href={whatsappLink("Olá! Quero criar uma loja virtual para o meu negócio.")} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Falar com um especialista
          </a>
        </div>
      </section>
    </>
  );
}