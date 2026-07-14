import Link from "next/link";
import Faq from "../components/Faq";
import PromoStrip from "../components/PromoStrip";
import { IconAds } from "../components/ServiceIcons";
import { whatsappLink, site } from "@/lib/site";

export const metadata = {
  title: "Gestão de Tráfego Pago | Google Ads e Meta Ads para Empresas",
  description:
    "Gestão de tráfego pago com foco em ROI. Campanhas de Google Ads e Meta Ads (Facebook/Instagram) otimizadas continuamente para gerar leads e vendas qualificadas.",
  alternates: { canonical: "/gestao-de-trafego-pago" },
  keywords: [
    "gestão de tráfego pago",
    "gestão de google ads",
    "agência de tráfego pago",
    "gestão de anúncios facebook e instagram",
    "agência de google ads",
    "quanto custa gestão de tráfego pago",
  ],
};

const signals = [
  "Já testou anúncio sozinho e 'queimou' verba sem resultado claro",
  "Não sabe se o problema é o anúncio, o site, ou a oferta em si",
  "Recebe bastante clique, mas pouca conversão em contato ou venda",
  "Não tem clareza de quanto custa cada cliente que chega (CPA)",
  "Depende só de indicação e quer previsibilidade de novos clientes",
  "Já tem site ou loja pronta, mas ninguém está vendo",
];

const includes = [
  { title: "Google Ads", desc: "Campanhas de Search, Shopping e Performance Max com foco em intenção de compra real." },
  { title: "Meta Ads", desc: "Anúncios estratégicos no Facebook e Instagram, do topo ao fundo de funil." },
  { title: "Otimização de CPC, CPA e ROAS", desc: "Ajustes constantes de lance e segmentação pra reduzir custo por resultado e aumentar retorno." },
  { title: "Retargeting", desc: "Campanhas de reimpacto pra quem já visitou seu site ou loja mas não converteu na primeira vez." },
  { title: "Rastreamento de conversão", desc: "UTMs, pixels e configuração de conversão pra medir exatamente o que está funcionando." },
  { title: "Relatórios claros", desc: "Acompanhamento transparente de investimento, leads gerados e retorno — sem jargão pra esconder resultado fraco." },
];

const faqItems = [
  {
    q: "Por que investir em tráfego pago e não depender só do orgânico?",
    a: "O orgânico leva tempo e não é previsível. O tráfego pago permite acelerar resultados, alcançar o público certo imediatamente e gerar vendas de forma escalável e controlada.",
  },
  {
    q: "O tráfego pago realmente traz retorno financeiro?",
    a: "Sim, quando bem estruturado. Com segmentação correta, criativos estratégicos e otimização constante, o tráfego pago se transforma em investimento — e permite medir exatamente quanto retornou em vendas.",
  },
  {
    q: "Qual o investimento mínimo recomendado em mídia?",
    a: "Varia por segmento e objetivo, mas definimos esse valor juntos durante o diagnóstico inicial, com base no seu ticket médio e na meta de geração de leads ou vendas. Recomendamos no mínimo R$500/mês de verba pra ter dados suficientes pra otimizar.",
  },
  {
    q: "Vocês cuidam da criação dos anúncios (criativos e textos)?",
    a: "Sim. Cuidamos da estratégia, dos criativos, dos textos e da configuração técnica das campanhas — você recebe o pacote completo de gestão.",
  },
  {
    q: "Em quanto tempo vejo os primeiros resultados?",
    a: "Os primeiros dados aparecem já na primeira semana de veiculação. Otimizações reais de custo e conversão costumam se consolidar entre 30 e 60 dias — tráfego pago é maratona, não corrida de 100 metros.",
  },
  {
    q: "Preciso já ter site ou loja virtual pronta?",
    a: "Ajuda muito, mas se ainda não tiver, também desenvolvemos isso — muitas vezes o ideal é planejar o site e o tráfego juntos, desde o início.",
  },
];

export default function GestaoDeTrafegoPago() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Gestão de Tráfego Pago",
    provider: { "@type": "Organization", name: "PixelRise", url: site.domain },
    areaServed: "BR",
    description:
      "Gestão de campanhas de Google Ads e Meta Ads com otimização contínua de CPC, CPA e ROAS.",
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
          <div className="service-icon-badge reveal"><IconAds size={40} /></div>
          <div className="eyebrow">Serviço · Performance</div>
          <h1>
            Tráfego pago gerido para <em>gerar leads</em>, não só cliques.
          </h1>
          <p className="lead">
            Campanhas de Google Ads e Meta Ads estruturadas com segmentação, criativos e
            mensuração — com otimização contínua para melhorar o ROI mês a mês.
          </p>
          <div className="hero-actions">
            <a href={whatsappLink("Olá! Quero saber mais sobre gestão de tráfego pago.")} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Solicitar diagnóstico gratuito
            </a>
          </div>
        </div>
      </section>

      <PromoStrip
        text="🎁 Já tem site ou loja pronta? Feche a gestão de tráfego pago junto com um novo projeto e ganhe condições especiais."
        ctaLabel="Falar sobre condições"
        href={whatsappLink("Olá! Quero saber sobre condições especiais combinando site/loja com gestão de tráfego pago.")}
      />

      <section>
        <div className="container">
          <div className="eyebrow">Isso é pra você se...</div>
          <h2 className="section-title reveal">Sinais de que sua verba de anúncio não está rendendo</h2>
          <p className="section-sub reveal">
            Se pelo menos 2 desses pontos fazem sentido pro seu momento, vale a conversa.
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
          <h2 className="section-title reveal">Gestão completa, do clique à conversão</h2>
          <p className="section-sub reveal">
            Não entregamos só anúncio no ar — entregamos um processo de aquisição de clientes
            mensurável.
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
          <h2 className="section-title reveal">O passo a passo da gestão</h2>
          <p className="section-sub reveal">
            Tráfego pago bem feito é processo, não sorte — cada etapa existe por um motivo.
          </p>
          <ul className="process-list">
            <li>
              <span className="num">01</span>
              <div className="txt">
                <h4>Diagnóstico e auditoria</h4>
                <p>Analisamos histórico de campanhas (se houver) e o site/loja de destino — muitas vezes o problema não é o anúncio, é o que vem depois do clique.</p>
              </div>
            </li>
            <li>
              <span className="num">02</span>
              <div className="txt">
                <h4>Estratégia e público</h4>
                <p>Definimos segmentação, orçamento inicial e quais canais priorizar de acordo com seu momento de negócio.</p>
              </div>
            </li>
            <li>
              <span className="num">03</span>
              <div className="txt">
                <h4>Criativos e configuração</h4>
                <p>Produção de anúncios e configuração técnica de pixels e conversões — a base que garante que os dados coletados sejam confiáveis.</p>
              </div>
            </li>
            <li>
              <span className="num">04</span>
              <div className="txt">
                <h4>Veiculação e calibragem</h4>
                <p>Primeiras semanas de teste, com ajustes rápidos conforme os dados iniciais de performance chegam.</p>
              </div>
            </li>
            <li>
              <span className="num">05</span>
              <div className="txt">
                <h4>Otimização contínua</h4>
                <p>Relatórios e ajustes mensais de CPC, CPA e ROAS — a gestão não para depois que a campanha entra no ar, é aí que ela realmente começa.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="light-section">
        <div className="container">
          <div className="eyebrow">F.A.Q. — Tráfego Pago</div>
          <h2 className="section-title reveal">Perguntas frequentes sobre gestão de tráfego pago</h2>
          <Faq items={faqItems} />
        </div>
      </section>

      <section>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-title reveal" style={{ margin: "0 auto 20px", textAlign: "center" }}>
            Transforme investimento em mídia em vendas reais
          </h2>
          <p className="section-sub reveal" style={{ margin: "0 auto 28px", textAlign: "center" }}>
            Diagnóstico inicial gratuito — sem compromisso.
          </p>
          <a href={whatsappLink("Olá! Quero saber mais sobre gestão de tráfego pago.")} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Falar com um especialista
          </a>
          <div className="cross-link-row" style={{ justifyContent: "center", marginTop: 40 }}>
            <Link href="/desenvolvimento-de-sites" className="btn-ghost" style={{ position: "relative", display: "inline-flex" }}>
              Ainda não tem site? Veja Desenvolvimento de Sites<span className="underline" />
            </Link>
            <Link href="/lojas-virtuais" className="btn-ghost" style={{ position: "relative", display: "inline-flex" }}>
              Quer vender online? Veja Lojas Virtuais<span className="underline" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}