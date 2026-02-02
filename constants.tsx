import { Shield, Grid, Layers, Box, MoveDiagonal, Scissors } from 'lucide-react';
import { Service, FaqItem } from './types';

export const COMPANY_INFO = {
  name: "AJS Ambientes",
  whatsapp: "5521981869658", 
  phoneSecondary: "5521979755002",
  phoneDisplay: "(21) 98186-9658",
  phoneSecondaryDisplay: "(21) 97975-5002",
  instagram: "@ajsambientes",
  instagramUrl: "https://www.instagram.com/ajsambientes/",
  facebookUrl: "https://www.facebook.com/profile.php?id=100092703873209",
  email: "contato@ajsambientes.com.br",
  address: "Atendemos toda a região metropolitana",
};

export const SERVICES: Service[] = [
  {
    id: "redes-protecao",
    title: "Redes de Proteção",
    shortDescription: "Segurança total para crianças e pets em janelas e sacadas.",
    fullDescription: "Nossas redes de proteção são fabricadas com polietileno de alta densidade, contendo aditivos anti-UV e antioxidantes. Garantem resistência a impactos e durabilidade contra intempéries.",
    benefits: ["Alta resistência (500kg/m²)", "Proteção UV", "Instalação certificada", "Garantia de fábrica"],
    images: [
      "https://i.imgur.com/x407u22.jpeg"
    ],
    video: "https://i.imgur.com/cmgFxKI.mp4",
    icon: Shield
  },
  {
    id: "telas-mosquiteiras",
    title: "Telas Mosquiteiras",
    shortDescription: "Proteção contra insetos sem perder a ventilação.",
    fullDescription: "Estruturas em alumínio com pintura eletrostática e malha de fibra de vidro revestida em PVC. Discretas, laváveis e não desfiam, mantendo sua casa livre de insetos e arejada.",
    benefits: ["Malha ignífuga", "Não impede ventilação", "Design discreto", "Fácil limpeza"],
    images: [
      "https://i.imgur.com/0SYCwRP.jpeg"
    ],
    video: "https://i.imgur.com/wUcdH6f.mp4",
    icon: Grid
  },
  {
    id: "box-blindex",
    title: "Box Blindex",
    shortDescription: "Elegância e segurança para o seu banheiro.",
    fullDescription: "Trabalhamos com vidro temperado de 8mm, ferragens de alta qualidade e diversas cores de acabamento. Modelos de correr, abrir ou de canto, adaptados ao seu espaço.",
    benefits: ["Vidro Temperado 8mm", "Maior segurança", "Design moderno", "Vedação eficiente"],
    images: [
      "https://i.imgur.com/NPyoxWc.jpeg"
    ],
    video: "https://i.imgur.com/rJn98y1.mp4",
    icon: Box
  },
  {
    id: "fechamento-pia",
    title: "Fechamento de Pia",
    shortDescription: "Organização e acabamento premium para cozinhas e áreas.",
    fullDescription: "Otimize o espaço abaixo da sua pia com nossos fechamentos em vidro temperado ou acrílico. Soluções que facilitam a limpeza e organizam seus utensílios.",
    benefits: ["Organização", "Higiene", "Variedade de cores", "Durabilidade"],
    images: [
      "https://i.imgur.com/Gx4FpBs.jpeg"
    ],
    video: "https://i.imgur.com/YRzNxuE.mp4",
    icon: MoveDiagonal
  },
  {
    id: "grama-sintetica",
    title: "Grama Sintética",
    shortDescription: "Verde o ano todo para jardins, playgrounds e decor.",
    fullDescription: "Solução prática e estética para áreas internas e externas. Nossa grama sintética possui drenagem eficiente, é macia ao toque e não requer manutenção constante como a grama natural.",
    benefits: ["Baixa manutenção", "Aparência natural", "Antialérgica", "Permeável"],
    images: [
      "https://i.imgur.com/U9rp2HM.jpeg"
    ],
    video: "https://i.imgur.com/spthzkB.mp4",
    icon: Scissors
  },
  {
    id: "pisos-laminados",
    title: "Pisos Laminados",
    shortDescription: "Conforto térmico e sofisticação para ambientes internos.",
    fullDescription: "Instalação profissional de pisos laminados de grandes marcas. Ideal para quartos e salas, proporcionando conforto térmico, acústico e facilidade na limpeza.",
    benefits: ["Instalação rápida", "Conforto térmico", "Hipoalergênico", "Diversos padrões de madeira"],
    images: [
      "https://i.imgur.com/W0olI6h.jpeg"
    ],
    video: "https://i.imgur.com/9KFU9Rk.mp4",
    icon: Layers
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Vocês cobram pela visita técnica?",
    answer: "Realizamos orçamentos sem compromisso na maioria das regiões de atendimento. Entre em contato para verificar sua localidade."
  },
  {
    question: "Qual o prazo médio de instalação?",
    answer: "O prazo varia conforme o serviço. Redes e telas costumam ser instaladas em até 3 dias úteis. Vidros e pisos podem levar de 7 a 15 dias úteis após a medição final."
  },
  {
    question: "Os produtos possuem garantia?",
    answer: "Sim! Todos os nossos serviços possuem garantia contra defeitos de fabricação e instalação. O período varia de acordo com o material escolhido."
  },
  {
    question: "Aceitam quais formas de pagamento?",
    answer: "Aceitamos cartões de crédito (parcelamento disponível), débito, PIX e transferência bancária."
  }
];