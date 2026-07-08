import TrajectoryLine from "../components/TrajectoryLine";
import Faq from "../components/Faq";
import { IconAds } from "../components/ServiceIcons";
import { whatsappLink } from "@/lib/site";

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
  ],
};

const includes = [
  { title: "Google Ads", desc: "Campanhas de Search, Display e Performance Max com foco em intenção de compra." },
  { title: "Meta Ads", desc: "Anúncios estratégicos no Facebook e Instagram, do topo ao fundo de funil." },
  { title: "Otimização de CPC, CPA e ROAS", desc: "Ajustes constantes de lance e segmentação para reduzir custo e aumentar retorno." },
  { title: "Retargeting", desc: "Campanhas de reimpacto para quem já visitou seu site mas não converteu." },
  { title: "Rastreamento de conversão", desc: "UTMs, pixels e configuração de conversão para medir exatamente o que funciona." },
  { title: "Relatórios claros", desc: "Acompanhamento transparente de investimento, leads gerados e retorno sobre investimento." },
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
    a: "Varia por segmento e objetivo, mas definimos esse valor juntos durante o diagnóstico inicial, com base no seu ticket médio e na meta de geração de leads ou vendas.",
  },
  {
    q: "Vocês cuidam da criação dos anúncios (criativos e textos)?",
    a: "Sim. Cuidamos da estratégia, dos criativos, dos textos e da configuração técnica das campanhas — você recebe o pacote completo de gestão.",
  },
];

export default function GestaoDeTrafegoPago() {
  return (
    <>
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
          <TrajectoryLine labels={["Diagnóstico", "Estratégia & Criativos", "Veiculação", "Otimização de ROAS"]} />
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
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

      <section className="light-section">
        <div className="container">
          <div className="eyebrow">F.A.Q. — Tráfego Pago</div>
          <h2 className="section-title reveal">Perguntas frequentes sobre gestão de tráfego pago</h2>
          <Faq items={faqItems} />
        </div>
      </section>

      <section>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-title reveal" style={{ margin: "0 auto 28px", textAlign: "center" }}>
            Transforme investimento em mídia em vendas reais
          </h2>
          <a href={whatsappLink("Olá! Quero saber mais sobre gestão de tráfego pago.")} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Falar com um especialista
          </a>
        </div>
      </section>
    </>
  );
}
