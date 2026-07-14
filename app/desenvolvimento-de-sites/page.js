import Link from "next/link";
import Faq from "../components/Faq";
import PromoStrip from "../components/PromoStrip";
import { IconSite } from "../components/ServiceIcons";
import { whatsappLink, site } from "@/lib/site";

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
    "quanto custa um site profissional",
  ],
};

const signals = [
  "Seu site atual foi feito há mais de 3 anos e já parece datado",
  "Você recebe visita mas quase nenhum contato pelo site",
  "Não sabe dizer se o site aparece no Google pras buscas do seu negócio",
  "Depende de outra pessoa pra fazer qualquer alteração simples",
  "Não sabe se o site carrega rápido no celular",
  "Ainda não tem site e está perdendo cliente pra quem tem",
];

const includes = [
  { title: "Design exclusivo", desc: "Layout desenvolvido com base no seu posicionamento e público — nada de template genérico reaproveitado." },
  { title: "100% responsivo", desc: "Testado em celular, tablet e desktop antes da entrega, com atenção especial à experiência mobile (é de onde vem a maioria do tráfego hoje)." },
  { title: "SEO técnico incluso", desc: "Estrutura de headings, meta tags, dados estruturados (schema.org) e velocidade de carregamento — configurados desde o primeiro dia, não como 'extra' depois." },
  { title: "Integração com WhatsApp", desc: "Botões de contato e formulários conectados direto ao seu atendimento, sem fricção entre o clique e a conversa." },
  { title: "Painel de fácil edição", desc: "Você consegue atualizar textos, imagens e informações de contato sozinho, sem abrir chamado técnico pra cada mudança pequena." },
  { title: "Suporte pós-entrega", desc: "Acompanhamento depois do lançamento pra ajustes, dúvidas e evolução — a entrega não é o fim do relacionamento." },
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
  {
    q: "Preciso já ter os textos e imagens prontos?",
    a: "Ajuda, mas não é obrigatório. Podemos te orientar sobre o que escrever, e ajustamos o cronograma conforme o ritmo de retorno do material.",
  },
  {
    q: "O site inclui e-mail profissional e hospedagem?",
    a: "A hospedagem está inclusa no projeto. E-mail profissional pode ser configurado junto — é só alinhar durante o diagnóstico inicial.",
  },
];

export default function DesenvolvimentoDeSites() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Criação de Sites Profissionais",
    provider: { "@type": "Organization", name: "PixelRise", url: site.domain },
    areaServed: "BR",
    description:
      "Criação de sites profissionais, responsivos e otimizados para SEO, focados em gerar contato e vendas.",
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
          <div className="service-icon-badge reveal"><IconSite size={40} /></div>
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
        </div>
      </section>

      <PromoStrip
        text="🎁 Feche a criação do seu site esse mês e leve 3 meses de gestão de tráfego pago de bônus."
        ctaLabel="Quero aproveitar"
        href={whatsappLink("Olá! Vi a promoção de site + 3 meses de tráfego pago de bônus e quero aproveitar.")}
      />

      <section>
        <div className="container">
          <div className="eyebrow">Isso é pra você se...</div>
          <h2 className="section-title reveal">Sinais de que seu site precisa de atenção</h2>
          <p className="section-sub reveal">
            Se pelo menos 2 desses pontos fazem sentido pra sua empresa, vale a conversa.
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

      <section>
        <div className="container">
          <div className="eyebrow">Como funciona</div>
          <h2 className="section-title reveal">O passo a passo do seu projeto</h2>
          <p className="section-sub reveal">
            Nada de "manda o briefing e desaparece" — cada etapa tem entrega e aprovação sua antes de avançar.
          </p>
          <ul className="process-list">
            <li>
              <span className="num">01</span>
              <div className="txt">
                <h4>Briefing e diagnóstico</h4>
                <p>Entendemos seu objetivo, público-alvo, concorrência e as palavras-chave que fazem sentido buscar você.</p>
              </div>
            </li>
            <li>
              <span className="num">02</span>
              <div className="txt">
                <h4>Arquitetura e estrutura</h4>
                <p>Definimos quais páginas existem, como se conectam e qual a jornada que o visitante deve percorrer até o contato.</p>
              </div>
            </li>
            <li>
              <span className="num">03</span>
              <div className="txt">
                <h4>Design visual</h4>
                <p>Aplicamos sua identidade num layout exclusivo — você aprova o visual antes da gente programar qualquer linha de código.</p>
              </div>
            </li>
            <li>
              <span className="num">04</span>
              <div className="txt">
                <h4>Desenvolvimento e testes</h4>
                <p>Construção responsiva com testes em diferentes dispositivos e navegadores antes de qualquer coisa ir ao ar.</p>
              </div>
            </li>
            <li>
              <span className="num">05</span>
              <div className="txt">
                <h4>SEO técnico e lançamento</h4>
                <p>Configuração de meta tags, dados estruturados e envio ao Google Search Console — seu site nasce pronto pra ser encontrado.</p>
              </div>
            </li>
          </ul>
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
          <h2 className="section-title reveal" style={{ margin: "0 auto 20px", textAlign: "center" }}>
            Vamos tirar o site da sua empresa do papel
          </h2>
          <p className="section-sub reveal" style={{ margin: "0 auto 28px", textAlign: "center" }}>
            Diagnóstico inicial gratuito — sem compromisso.
          </p>
          <a href={whatsappLink("Olá! Quero criar um site profissional para minha empresa.")} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Falar com um especialista
          </a>
          <div className="cross-link-row" style={{ justifyContent: "center", marginTop: 40 }}>
            <Link href="/lojas-virtuais" className="btn-ghost" style={{ position: "relative", display: "inline-flex" }}>
              Também vende produtos? Veja Lojas Virtuais<span className="underline" />
            </Link>
            <Link href="/gestao-de-trafego-pago" className="btn-ghost" style={{ position: "relative", display: "inline-flex" }}>
              Quer atrair visitas? Veja Tráfego Pago<span className="underline" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}