import TrajectoryLine from "../components/TrajectoryLine";
import Faq from "../components/Faq";
import { whatsappLink } from "@/lib/site";

export const metadata = {
  title: "Criação de Sites Profissionais | Desenvolvimento de Sites para Empresas",
  description:
    "Criação de sites profissionais, responsivos e otimizados para SEO. Desenvolvimento de sites institucionais e landing pages focados em gerar contatos e vendas.",
  alternates: { canonical: "/desenvolvimento-de-sites" },
  keywords: [
    "criação de sites profissionais",
    "desenvolvimento de sites para empresas",
    "criar site institucional",
    "site responsivo otimizado para seo",
    "landing page de alta conversão",
  ],
};

const includes = [
  { title: "Design exclusivo", desc: "Layout desenvolvido para a sua marca — nada de templates genéricos." },
  { title: "100% responsivo", desc: "Perfeito em celular, tablet e desktop, com performance de carregamento otimizada." },
  { title: "SEO técnico incluso", desc: "Estrutura, meta tags, dados estruturados e velocidade pensados para o Google desde o primeiro dia." },
  { title: "Integração com WhatsApp", desc: "Botões e formulários conectados direto ao seu atendimento comercial." },
  { title: "Painel de fácil edição", desc: "Você consegue atualizar textos e imagens sem depender de programador." },
  { title: "Suporte pós-entrega", desc: "Acompanhamento após o lançamento para ajustes e evolução contínua." },
];

const faqItems = [
  {
    q: "O site é feito do zero ou usa template pronto?",
    a: "Desenvolvemos o layout exclusivamente para a sua marca, com base no seu posicionamento e público. Não usamos templates genéricos de terceiros.",
  },
  {
    q: "O site já vem otimizado para aparecer no Google?",
    a: "Sim. Aplicamos SEO técnico on-page — estrutura de headings, meta tags, velocidade de carregamento, dados estruturados (schema.org) e um mapa de palavras-chave definido junto com você.",
  },
  {
    q: "Consigo editar o conteúdo do site sozinho depois?",
    a: "Sim, entregamos com um painel simples de edição de textos e imagens, sem necessidade de conhecimento técnico.",
  },
  {
    q: "Quanto tempo leva para o site ficar pronto?",
    a: "Em média, entre 15 e 25 dias úteis, dependendo da quantidade de páginas e do tempo de retorno com o conteúdo e aprovações.",
  },
];

export default function DesenvolvimentoDeSites() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="eyebrow">Serviço · Criação de Sites</div>
          <h1>
            Sites profissionais que <em>trazem contato</em>, não só visita.
          </h1>
          <p className="lead">
            Desenvolvimento de sites institucionais e landing pages rápidas, responsivas e
            otimizadas para SEO — construídas para transformar visitantes em leads qualificados.
          </p>
          <div className="hero-actions">
            <a href={whatsappLink("Olá! Quero criar um site profissional para minha empresa.")} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Solicitar orçamento do meu site
            </a>
          </div>
          <TrajectoryLine labels={["Briefing", "Design", "Desenvolvimento", "SEO & Lançamento"]} />
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="eyebrow">O que está incluso</div>
          <h2 className="section-title reveal">Um site completo, não uma página solta</h2>
          <p className="section-sub reveal">
            Cada projeto de criação de site inclui os fundamentos técnicos que fazem a diferença
            entre um site bonito e um site que gera resultado.
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
          <div className="eyebrow">F.A.Q. — Criação de Sites</div>
          <h2 className="section-title reveal">Perguntas frequentes sobre desenvolvimento de sites</h2>
          <Faq items={faqItems} />
        </div>
      </section>

      <section>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="section-title reveal" style={{ margin: "0 auto 28px", textAlign: "center" }}>
            Vamos tirar o site da sua empresa do papel
          </h2>
          <a href={whatsappLink("Olá! Quero criar um site profissional para minha empresa.")} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Falar com um especialista
          </a>
        </div>
      </section>
    </>
  );
}
