"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { whatsappLink } from "@/lib/site";

const slides = [
  {
    eyebrow: "Condição especial",
    title: "Feche um site ou loja virtual e leve 3 meses de gestão de tráfego pago de bônus",
    text: "Válido para novos contratos fechados este mês. A gestão de tráfego é sobre a mensalidade — a verba de anúncio é combinada com você conforme seu orçamento.",
    ctaLabel: "Aproveitar essa condição",
    href: whatsappLink("Olá! Vi a promoção de site/loja + 3 meses de tráfego pago de bônus e quero aproveitar."),
    external: true,
  },
  {
    eyebrow: "Serviço",
    title: "Sites que geram contato real",
    text: "Desenvolvimento profissional, responsivo e otimizado para SEO — construído para transformar visita em cliente.",
    ctaLabel: "Ver Desenvolvimento de Sites",
    href: "/desenvolvimento-de-sites",
    external: false,
  },
  {
    eyebrow: "Serviço",
    title: "Loja virtual pronta pra vender",
    text: "Catálogo, pagamento e frete configurados desde o lançamento — com a opção de já entrar com tráfego pago rodando.",
    ctaLabel: "Ver Lojas Virtuais",
    href: "/lojas-virtuais",
    external: false,
  },
];

export default function BannerCarousel() {
  const [index, setIndex] = useState(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    const interval = setInterval(() => {
      if (!pausedRef.current) {
        setIndex((i) => (i + 1) % slides.length);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[index];

  return (
    <div
      className="banner-carousel"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      <div className="container">
        <div className="banner-slide" key={index}>
          <div className="eyebrow">{slide.eyebrow}</div>
          <h3 className="banner-title">{slide.title}</h3>
          <p className="banner-text">{slide.text}</p>
          {slide.external ? (
            <a href={slide.href} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              {slide.ctaLabel}
            </a>
          ) : (
            <Link href={slide.href} className="btn btn-primary">
              {slide.ctaLabel}
            </Link>
          )}
        </div>
        <div className="banner-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`banner-dot ${i === index ? "active" : ""}`}
              aria-label={`Ver banner ${i + 1}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}