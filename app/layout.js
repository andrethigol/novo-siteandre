import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsappFloat from "./components/WhatsappFloat";
import ScrollReveal from "./components/ScrollReveal";
import { site } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "PixelRise | Agência de Marketing Digital — Sites, Lojas Virtuais e Tráfego Pago",
    template: "%s | PixelRise",
  },
  description: site.description,
  keywords: [
    "agência de marketing digital",
    "criação de sites profissionais",
    "desenvolvimento de sites",
    "criação de loja virtual",
    "desenvolvimento de e-commerce",
    "gestão de tráfego pago",
    "gestão de google ads",
    "agência de tráfego pago",
  ],
  authors: [{ name: "PixelRise" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.domain,
    siteName: "PixelRise",
    title: "PixelRise | Agência de Marketing Digital",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "PixelRise | Agência de Marketing Digital",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PixelRise",
    url: site.domain,
    description: site.description,
    areaServed: "BR",
    sameAs: [site.instagram],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+${site.whatsapp}`,
      contactType: "customer service",
      areaServed: "BR",
      availableLanguage: "Portuguese",
    },
  };

  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsappFloat />
        <ScrollReveal />
      </body>
    </html>
  );
}
