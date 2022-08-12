import carousel1 from "assets/img/carousel-1.jpg";
import carousel2 from "assets/img/carousel-2.jpg";

import haircut from "assets/img/haircut.png";
import beardTrim from "assets/img/beard-trim.png";
import mansShave from "assets/img/mans-shave.png";
import hairDyeing from "assets/img/hair-dyeing.png";

import wallace from "assets/img/wallace-mendes.jpeg";
import gleyson from "assets/img/gleyson-augusto.jpeg";
import alan from "assets/img/alan-noevo.jpeg";
import gabriel from "assets/img/gabriel-robson.jpeg";

export default {
  address: "Rua Doutor Epitácio Pessoa, 193 - Embaré, Santos",
  phone: "(13) 99118-1310",
  whatsapp: "https://wa.me/5513991181310",
  instagram: "https://www.instagram.com/vinil.cmpny/",
  facebook: "https://www.facebook.com/vinil.cmpny/",
  schedule: "https://www.trinks.com/vinilepitacio",

  navbar: {
    schedule: "Agendar",
    links: {
      home: "Inicio",
      about: "Sobre",
      services: "Serviços",
      prices: "Preços",
      team: "Equipe",
      workingTime: "Horários",
    }
  },
  footer: {
    contact: "Entre em contato",
    social: "Redes sociais"
  },

  hero: {
    items: [{
      image: carousel1,
      title: "Venha ficar no melhor estilo que você já teve",
    }, {
      image: carousel2,
      title: "Os melhores cortes por preços acessíveis",
    }]
  },
  about: {
    title: "Sobre nós",
    subtitle: "Mais que apenas cortes. Saiba mais sobre nós!",
    text: {
      first: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet",
      second: "Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.",
    },
    highlight: [{
      title: "Desde 2000",
      text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos."
    }, {
      title: "+100 clientes",
      text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos."
    }],
    experience: {
      years: "15 anos",
      text: "experiência",
    }
  },
  services: {
    title: "Serviços",
    subtitle: "O que fornecemos",

    items: [{
      title: "Corte masculino",
      text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam.",
      icon: haircut,
    }, {
      title: "Barba",
      text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam.",
      icon: beardTrim,
    }, {
      title: "Barba + Corte Masculino",
      text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam.",
      icon: mansShave,
    }, {
      title: "Corte Infantil",
      text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam.",
      icon: haircut,
    }, {
      title: "Barba + Pigmentação",
      text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam.",
      icon: hairDyeing,
    }, {
      title: "Selagem + Corte Masculino",
      text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam.",
      icon: haircut
    }]
  },
  pricing: {
    title: "Preços",
    subtitle: "Confira nossos serviços e valores",

    items: [{
      title: "Corte masculino",
      price: "R$ 60"
    }, {
      title: "Corte Infantil",
      price: "R$ 60"
    }, {
      title: "Barba",
      price: "R$ 50"
    }, {
      title: "Barba + Corte Masculino",
      price: "R$ 100"
    }, {
      title: "Barba + Pigmentação",
      price: "R$ 90"
    }, {
      title: "Selagem + Corte Masculino",
      price: "R$ 190"
    }]
  },
  workingTime: {
    title: "Horário de funcionamento",
    subtitle: "Barbeiros profissionais estão esperando por você",
    days: [{
      day: "Segunda",
      time: "Fechado"
    }, {
      day: "Terça",
      time: "10h - 20h"
    }, {
      day: "Quarta",
      time: "10h - 20h"
    }, {
      day: "Quinta",
      time: "10h - 20h"
    }, {
      day: "Sexta",
      time: "9h - 20h"
    }, {
      day: "Sábado",
      time: "9h - 20h"
    }, {
      day: "Domingo",
      time: "Fechado"
    }]
  },
  team: {
    title: "Equipe",
    subtitle: "Conheça nossa equipe",
    barbers: [{
      avatar: wallace,
      name: "Wallace Mendes",
      instagram: "https://www.instagram.com/wallace_vinil/",
    }, {
      avatar: gleyson,
      name: "Gleyson Augusto",
      instagram: "https://www.instagram.com/gleysonaugusto013/",
    }, {
      avatar: alan,
      name: "Alan Noevo",
      instagram: "https://www.instagram.com/alanoevo/",
    }, {
      avatar: gabriel,
      name: "Gabriel Robson",
      instagram: "https://www.instagram.com/gabrielrobson/",
    }]
  }
}
