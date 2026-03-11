export const CONFIG = {
  wa: {
    phone:    "5511988652345",
    msgHero:  "Olá! Vi a LP e quero saber como automatizar meu atendimento com IA.",
    msgFloat: "Olá! Tenho interesse na automação de WhatsApp com IA.",
    msgDemo:  "Olá! Quero agendar uma demonstração da Intalky.",
    msgFinal: "Olá! Quero começar a automatizar meu atendimento. Podemos conversar?",
    ctaHero:  "Quero Automatizar Minhas Vendas →",
    ctaFloat: "Falar com Especialista",
    ctaFinal: "Quero Começar Agora →",
  },
  brand: {
    name:    "Intalky",
    tagline: "Assessoria comercial e automação",
  },
};

export const waURL = (msg = CONFIG.wa.msgHero) =>
  `https://wa.me/${CONFIG.wa.phone}?text=${encodeURIComponent(msg)}`;
