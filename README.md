# PixelRise — Site institucional (Next.js)

Site completo em Next.js 14 (App Router), pronto para deploy na Vercel.

## Estrutura de páginas

- `/` — Home
- `/desenvolvimento-de-sites` — Serviço: criação de sites
- `/lojas-virtuais` — Serviço: e-commerce
- `/gestao-de-trafego-pago` — Serviço: tráfego pago
- `/sobre` — Sobre a empresa, portfólio e depoimentos
- `/contato` — Formulário (envia direto para o WhatsApp) e outros canais

SEO técnico incluso: metadata por página, Open Graph, `sitemap.xml`, `robots.txt` e
JSON-LD (schema.org Organization) no layout raiz.

## Editar informações da empresa

Quase tudo (WhatsApp, Instagram, e-mail, domínio, estatísticas) está centralizado em:

```
lib/site.js
```

Troque os valores lá e o site inteiro atualiza automaticamente.

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:3000

## Build de produção

```bash
npm run build
npm start
```

## Deploy na Vercel

**Opção 1 — via GitHub (recomendado):**
1. Crie um repositório no GitHub e suba esta pasta (`git init`, `git add .`, `git commit`, `git push`).
2. Acesse vercel.com → "Add New Project" → importe o repositório.
3. A Vercel detecta Next.js automaticamente. Clique em "Deploy".
4. Em "Settings → Domains", adicione `pixelrise.com.br` e siga as instruções de DNS.

**Opção 2 — via CLI:**
```bash
npm i -g vercel
vercel login
vercel --prod
```

## Pendências para você (assets reais)

- **Logo**: hoje é um wordmark em SVG (`app/components/Logo.js`). Se tiver a logo em SVG/PNG,
  me envie que eu troco.
- **Imagens de portfólio**: os cards em `/sobre` usam placeholders estilizados. Envie os prints
  ou fotos dos projetos (Porcelana Schmidt, PS Iluminação, etc.) para eu substituir.
- **Formulário de contato**: hoje o formulário monta uma mensagem e abre o WhatsApp
  automaticamente (não precisa de backend). Se preferir receber por e-mail também, dá para
  integrar um serviço como Resend ou Formspree depois.
- **Google Analytics / Meta Pixel / Google Tag Manager**: ainda não configurados. Me avise se
  quiser que eu adicione os mesmos IDs do site atual.
