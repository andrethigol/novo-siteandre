import Link from "next/link";
import Faq from "../components/Faq";
import PromoStrip from "../components/PromoStrip";
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
    "quanto custa uma loja virtual",
  ],
};

const signals = [
  "Vende hoje só por WhatsApp/Instagram e perde pedido por demora na resposta",
  "Já tentou plataforma pronta, mas não personaliza nem converte como esperava",
  "Não sabe configurar frete e pagamento sem complicar a compra do cliente",
  "Quer vender 24h por dia, não só quando está online pra responder",
  "O processo manual de pedido não aguenta mais o volume que você tem hoje",
  "Concorrentes já vendem online e você está ficando de fora dessa fatia",
];

const includes = [
  { title: "Catálogo sem limite", desc: "Estrutura preparada pra crescer junto com seu número de produtos — de 20 a milhares de itens." },
  { title: "Pagamento integrado", desc: "Cartão, Pix e boleto configurados desde o lançamento, através dos principais gateways do mercado brasileiro." },
  { title: "Frete automático", desc: "Cálculo integrado com Correios e transportadoras direto no checkout — sem o cliente sair pra cotar frete em outro lugar." },
  { title: "Checkout otimizado", desc: "Processo de compra enxuto, com o mínimo de cliques possível entre o carrinho e a confirmação do pedido." },
  { title: "SEO para produtos", desc: "Páginas de produto estruturadas pra ranquear no Google e aparecer no Google Shopping." },
  { title: "Gestão de pedidos", desc: "Painel simples pra acompanhar vendas, estoque e status de entrega sem depender de suporte técnico." },
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
  {
    q: "Vocês migram os produtos da minha plataforma atual?",
    a: "Sim, conseguimos migrar catálogo de produtos de outras plataformas — o esforço varia conforme o formato dos dados disponíveis.",
  },
  {
    q: "A loja virtual funciona bem no celular?",
    a: "Sim, o checkout e a navegação são construídos pensando primeiro em mobile, já que é de onde vem a maior parte das compras hoje.",
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
        </div>
      </section>

      <PromoStrip
        text="🎁 Feche a criação da sua loja virtual esse mês e leve 3 meses de gestão de tráfego pago de bônus."
        ctaLabel="Quero aproveitar"
        href={whatsappLink("Olá! Vi a promoção de loja virtual + 3 meses de tráfego pago de bônus e quero aproveitar.")}
      />

      <section>
        <div className="container">
          <div className="eyebrow">Isso é pra você se...</div>
          <h2 className="section-title reveal">Sinais de que está na hora de ter uma loja virtual</h2>
          <p className="section-sub reveal">
            Se pelo menos 2 desses pontos fazem sentido pro seu negócio, vale a conversa.
          </p>
          <div className="pain-grid">
            {signals.map((s) => (
              <div className="pain-item reveal" key={s}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4M12 16h.01" />
                </svg>
                <p>{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="light-section">
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

      <section>
        <div className="container">
          <div className="eyebrow">Como funciona</div>
          <h2 className="section-title reveal">O passo a passo da sua loja</h2>
          <p className="section-sub reveal">
            Cada etapa tem entrega e validação sua antes de avançar pra próxima.
          </p>
          <ul className="process-list">
            <li>
              <span className="num">01</span>
              <div className="txt">
                <h4>Estrutura e planejamento</h4>
                <p>Definimos categorias, fluxo de compra e quais integrações (pagamento, frete, ERP) fazem sentido pro seu volume.</p>
              </div>
            </li>
            <li>
              <span className="num">02</span>
              <div className="txt">
                <h4>Cadastro e catálogo</h4>
                <p>Organização dos produtos, fotos e descrições otimizadas para SEO — cada página de produto pensada pra ranquear.</p>
              </div>
            </li>
            <li>
              <span className="num">03</span>
              <div className="txt">
                <h4>Pagamento e frete</h4>
                <p>Configuração dos gateways de pagamento e cálculo de frete integrado, testado com pedidos reais antes do lançamento.</p>
              </div>
            </li>
            <li>
              <span className="num">04</span>
              <div className="txt">
                <h4>Testes de checkout</h4>
                <p>Simulação de compra ponta a ponta — do carrinho até a confirmação — pra garantir que nada trava na hora de vender.</p>
              </div>
            </li>
            <li>
              <span className="num">05</span>
              <div className="txt">
                <h4>Lançamento e acompanhamento</h4>
                <p>Acompanhamos as primeiras semanas no ar de perto, ajustando o que for necessário conforme as primeiras vendas chegam.</p>
              </div>
            </li>
          </ul>
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
          <h2 className="section-title reveal" style={{ margin: "0 auto 20px", textAlign: "center" }}>
            Sua loja virtual pronta para vender em todo o Brasil
          </h2>
          <p className="section-sub reveal" style={{ margin: "0 auto 28px", textAlign: "center" }}>
            Diagnóstico inicial gratuito — sem compromisso.
          </p>
          <a href={whatsappLink("Olá! Quero criar uma loja virtual para o meu negócio.")} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Falar com um especialista
          </a>
          <div className="cross-link-row" style={{ justifyContent: "center", marginTop: 40 }}>
            <Link href="/gestao-de-trafego-pago" className="btn-ghost" style={{ position: "relative", display: "inline-flex" }}>
              Quer atrair visitas pra sua loja? Veja Tráfego Pago<span className="underline" />
            </Link>
            <Link href="/desenvolvimento-de-sites" className="btn-ghost" style={{ position: "relative", display: "inline-flex" }}>
              Precisa só de um site institucional? Veja aqui<span className="underline" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}