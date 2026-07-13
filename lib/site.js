// Dados centrais da empresa — edite aqui para atualizar o site inteiro
export const site = {
  name: "PixelRise",
  domain: "https://www.pixelrise.com.br",
  tagline: "Criação de sites e gestão de tráfego pago",
  description:
    "Agência de marketing digital especializada em criação de sites profissionais, desenvolvimento de lojas virtuais e gestão de tráfego pago para empresas em todo o Brasil.",
  whatsapp: "5541996340742",
  whatsappDisplay: "+55 41 99634-0742",
  instagram: "https://www.instagram.com/agencia_pixelrise/",
  instagramHandle: "@agencia_pixelrise",
  email: "sitepixelrise@gmail.com",
  gtmId: "GTM-5VCN2CXN",
  metaPixelId: "1578701506737616",
  region: "Todo o Brasil (atendimento 100% remoto)",
  stats: [
    { value: "+120", label: "projetos entregues" },
    { value: "+100", label: "clientes atendidos" },
    { value: "4.0", label: "nota média de satisfação" },
    { value: "100%", label: "remoto, em todo o Brasil" },
  ],
};

export function whatsappLink(message) {
  const text = encodeURIComponent(message || "Olá! Vim pelo site e quero saber mais sobre os serviços da PixelRise.");
  return `https://wa.me/${site.whatsapp}?text=${text}`;
}
