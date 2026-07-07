import { site } from "@/lib/site";

export default function sitemap() {
  const routes = [
    "",
    "/desenvolvimento-de-sites",
    "/lojas-virtuais",
    "/gestao-de-trafego-pago",
    "/sobre",
    "/contato",
  ];

  return routes.map((route) => ({
    url: `${site.domain}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
