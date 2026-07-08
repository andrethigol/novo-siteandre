import Link from "next/link";
import TrajectoryLine from "./components/TrajectoryLine";
import ServiceCard from "./components/ServiceCard";
import Stats from "./components/Stats";
import Faq from "./components/Faq";
import HeroIllustration from "./components/HeroIllustration";
import ContactForm from "./components/ContactForm";
import { IconSite, IconCart, IconAds } from "./components/ServiceIcons";
import { whatsappLink } from "@/lib/site";

export const metadata = {
  title: "PixelRise | Criação de Sites, Lojas Virtuais e Gestão de Tráfego Pago",
  description:
    "Agência de marketing digital com atendimento em todo o Brasil. Criamos sites profissionais, lojas virtuais de alta conversão e gerimos tráfego pago com foco em resultado.",
  alternates: { canonical: "/" },
};

const faqItems = [
  {
    q: "Quanto custa criar um site profissional com a PixelRise?",
    a: "O investimento varia conforme a complexidade do projeto (site institucional, landing page ou e-commerce). Fazemos um diagnóstico gratuito e enviamos uma proposta personalizada em até 24h.",
  },
  {
    q: "Vocês atendem empresas de outros estados?",
    a: "Sim. O atendimento da PixelRise é 100% remoto e cobre todo o Brasil — do diagnóstico ao suporte pós-entrega, tudo acontece online.",
  },
  {
    q: "Qual a diferença entre um site institucional e uma loja virtual?",
    a: "O site institucional apresenta sua empresa, serviços e gera contato/autoridade. A loja virtual (e-commerce) permite vender produtos online, com carrinho, pagamento e gestão de pedidos integrados.",
  },
  {
    q: "Investir em tráfego pago realmente traz retorno?",
    a: "Sim, quando bem estruturado. Com segmentação correta, criativos estratégicos e otimização constante de CPC, CPA e ROAS, o tráfego pago se transforma em investimento — não custo — e permite medir exatamente quanto retornou em vendas.",
  },
  {
    q: "Quanto tempo leva para meu site ficar pronto?",
    a: "Sites institucionais costumam ficar prontos entre 15 e 25 dias úteis. Lojas virtuais, entre 25 e 40 dias, dependendo do catálogo de produtos e integrações necessárias.",
  },
];

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="hero">
        <div className="hero-glow" />
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="eyebrow">Agência de Marketing Digital · Todo o Brasil</div>
              <h1>
                Criação de sites e gestão de tráfego pago <em>com foco em resultado.</em>
              </h1>
              <p className="lead">
                Desenvolvemos sites profissionais, lojas virtuais e campanhas de tráfego pago
                desenhadas para transformar visitantes em clientes — não só para ficarem bonitos.
              </p>
              <div className="hero-actions">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Solicitar orçamento
                </a>
                <Link href="/sobre" className="btn btn-secondary">
                  Conhecer a PixelRise
                </Link>
              </div>
              <div className="trust-badges reveal">
                <span className="trust-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                  Diagnóstico inicial gratuito
                </span>
                <span className="trust-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                  Atendimento direto, sem intermediários
                </span>
                <span className="trust-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
                  Acompanhamento por métricas reais
                </span>
              </div>
            </div>
            <div className="hero-illustration reveal">
              <HeroIllustration />
            </div>
          </div>
          <TrajectoryLine labels={["Diagnóstico", "Estratégia", "Execução", "Otimização contínua"]} />
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="eyebrow">Por que investir em performance digital</div>
          <h2 className="section-title reveal">
            A maioria dos sites é bonita, mas não vende. A gente resolve isso.
          </h2>
          <p className="section-sub reveal">
            Na PixelRise, cada site, loja virtual ou campanha é pensado para gerar leads e vendas
            reais — combinando estratégia, dados e execução técnica de qualidade.
          </p>
          <Stats />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="eyebrow">Serviços</div>
          <h2 className="section-title reveal">Soluções completas para o seu crescimento digital</h2>
          <p className="section-sub reveal">
            Três frentes que trabalham juntas: presença digital, estrutura de vendas e aquisição de
            clientes.
          </p>
          <div className="card-grid">
            <ServiceCard
              icon={<IconSite />}
              tag="SERVIÇO / SITES"
              title="Desenvolvimento de Sites"
              description="Sites institucionais rápidos, responsivos e otimizados para SEO — construídos para gerar contato e autoridade."
              href="/desenvolvimento-de-sites"
            />
            <ServiceCard
              icon={<IconCart />}
              tag="SERVIÇO / E-COMMERCE"
              title="Lojas Virtuais"
              description="Estrutura de e-commerce pronta para vender, com foco em conversão, escala e experiência de compra."
              href="/lojas-virtuais"
            />
            <ServiceCard
              icon={<IconAds />}
              tag="SERVIÇO / PERFORMANCE"
              title="Gestão de Tráfego Pago"
              description="Google Ads e Meta Ads geridos com otimização contínua de CPC, CPA e ROAS."
              href="/gestao-de-trafego-pago"
            />
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="eyebrow">Em detalhes</div>
          <h2 className="section-title reveal">O que entregamos em cada frente</h2>
          <p className="section-sub reveal">
            Sem enrolação: aqui está exatamente o que está incluso em cada serviço.
          </p>
          <div className="detail-grid">
            <div className="detail-col reveal">
              <div className="card-icon"><IconSite /></div>
              <h3>Desenvolvimento de Sites</h3>
              <ul className="detail-list">
                <li>Design exclusivo para sua marca</li>
                <li>100% responsivo (celular, tablet, desktop)</li>
                <li>SEO técnico incluso desde o primeiro dia</li>
                <li>Integração direta com WhatsApp</li>
                <li>Painel simples de edição de conteúdo</li>
              </ul>
              <Link href="/desenvolvimento-de-sites" className="btn-ghost" style={{ position: "relative", display: "inline-flex", marginTop: 8 }}>
                Ver detalhes completos<span className="underline" />
              </Link>
            </div>
            <div className="detail-col reveal">
              <div className="card-icon"><IconCart /></div>
              <h3>Lojas Virtuais</h3>
              <ul className="detail-list">
                <li>Catálogo de produtos sem limite</li>
                <li>Pagamento via cartão, Pix e boleto</li>
                <li>Cálculo automático de frete</li>
                <li>Checkout otimizado contra abandono</li>
                <li>SEO para páginas de produto</li>
              </ul>
              <Link href="/lojas-virtuais" className="btn-ghost" style={{ position: "relative", display: "inline-flex", marginTop: 8 }}>
                Ver detalhes completos<span className="underline" />
              </Link>
            </div>
            <div className="detail-col reveal">
              <div className="card-icon"><IconAds /></div>
              <h3>Gestão de Tráfego Pago</h3>
              <ul className="detail-list">
                <li>Google Ads (Search, Shopping, Performance Max)</li>
                <li>Meta Ads (Facebook e Instagram)</li>
                <li>Otimização contínua de CPC, CPA e ROAS</li>
                <li>Retargeting para visitantes que não converteram</li>
                <li>Relatórios claros de investimento e retorno</li>
              </ul>
              <Link href="/gestao-de-trafego-pago" className="btn-ghost" style={{ position: "relative", display: "inline-flex", marginTop: 8 }}>
                Ver detalhes completos<span className="underline" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid-2">
            <div className="founder-card reveal" style={{ margin: 0 }}>
              <div className="founder-avatar">PR</div>
              <div style={{ flex: 1, minWidth: 240 }}>
                <p className="founder-quote">
                  &ldquo;A gente entende a insegurança de investir em marketing digital sem saber se
                  vai voltar. Por isso, cada projeto começa com diagnóstico gratuito e todo
                  relatório é aberto — você acompanha exatamente para onde seu investimento está
                  indo.&rdquo;
                </p>
                <div className="founder-name">EQUIPE PIXELRISE — ATENDIMENTO 100% REMOTO, TODO O BRASIL</div>
              </div>
            </div>
            <div className="reveal">
              <div className="eyebrow">Quem somos</div>
              <h2 className="section-title" style={{ marginBottom: 16 }}>
                Uma equipe pequena, focada em poucos clientes por vez
              </h2>
              <p className="section-sub" style={{ marginBottom: 24 }}>
                Não somos uma fábrica de sites. Trabalhamos com um número limitado de parceiros
                simultaneamente pra garantir atenção real a cada projeto — do diagnóstico inicial
                ao acompanhamento pós-entrega.
              </p>
              <Link href="/sobre" className="btn btn-secondary">
                Conhecer a equipe e a história
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid-2">
            <div>
              <div className="eyebrow">Como trabalhamos</div>
              <h2 className="section-title reveal" style={{ marginBottom: 20 }}>
                Um processo claro, do diagnóstico à otimização contínua
              </h2>
              <p className="section-sub reveal" style={{ marginBottom: 0 }}>
                Nada de "site pronto" genérico. Cada projeto passa por um processo estruturado
                pensado para gerar previsibilidade de resultado.
              </p>
            </div>
            <ul className="process-list reveal">
              <li>
                <span className="num">01</span>
                <div className="txt">
                  <h4>Diagnóstico transparente</h4>
                  <p>Entendemos seus objetivos, ticket médio e cenário atual antes de propor qualquer solução.</p>
                </div>
              </li>
              <li>
                <span className="num">02</span>
                <div className="txt">
                  <h4>Estratégia sob medida</h4>
                  <p>Definimos site, funil e canais de aquisição alinhados ao seu momento de negócio.</p>
                </div>
              </li>
              <li>
                <span className="num">03</span>
                <div className="txt">
                  <h4>Execução técnica</h4>
                  <p>Desenvolvimento, SEO on-page e configuração de campanhas feitos por especialistas.</p>
                </div>
              </li>
              <li>
                <span className="num">04</span>
                <div className="txt">
                  <h4>Otimização contínua</h4>
                  <p>Acompanhamento de métricas reais — CPC, CPA, ROAS e taxa de conversão — para melhorar o resultado mês a mês.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="light-section">
        <div className="container">
          <div className="eyebrow">F.A.Q.</div>
          <h2 className="section-title reveal">Perguntas frequentes</h2>
          <p className="section-sub reveal">Tudo o que você precisa saber antes de começar seu projeto.</p>
          <Faq items={faqItems} />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid-2">
            <div className="reveal">
              <div className="eyebrow">Fale com a gente</div>
              <h2 className="section-title" style={{ marginBottom: 16 }}>
                Prefere preencher um formulário a chamar no WhatsApp?
              </h2>
              <p className="section-sub" style={{ marginBottom: 0 }}>
                Sem problema — escolha o canal que for mais confortável pra você. Respondemos os
                dois com a mesma prioridade, geralmente em até 1 dia útil.
              </p>
            </div>
            <div className="card reveal" style={{ cursor: "default", padding: "32px 28px" }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            Pronto para crescer?
          </div>
          <h2 className="section-title reveal" style={{ margin: "0 auto 28px", textAlign: "center" }}>
            Vamos transformar seu digital em máquina de resultado
          </h2>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Falar com um especialista
          </a>
        </div>
      </section>
    </>
  );
}