import React from "react";

import { CgWorkAlt, CgCodeSlash } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

import forumImg from "@/public/forum.png";
import geinfraImg from "@/public/geinfra.png";
import moviewImg from "@/public/moview.png";
import portfolioImg from "@/public/portfolio.png";	
import portfolionewImg from "@/public/portfolionew.png";	

export const links = [
  {
    name: "Início",
    hash: "#home",
  },
  {
    name: "Sobre",
    hash: "#about",
  },
  {
    name: "Projetos",
    hash: "#projects",
  },
  {
    name: "Habilidades",
    hash: "#skills",
  },
  {
    name: "Experiência",
    hash: "#experience",
  },
  {
    name: "Contato",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bacharelado em Ciência da Computação",
    location: "Universidade Federal de Alagoas",
    description:
      "O curso me forneceu uma base sólida de conhecimento técnico e habilidades práticas, além de promover o pensamento crítico e a resolução de problemas. Esses aprendizados são inestimáveis para os desenvolvedores, pois nos capacitam a criar software de alta qualidade, adaptar-se às mudanças tecnológicas e se destacar em uma indústria em constante evolução.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - presente",
  },
  {
    title: "Desenvolvedor Front-End",
    location: "ITAN Labs",
    description:
      "Uma experiência extremamente enriquecedora e desafiadora. Durante esse período, tive a oportunidade de mergulhar profundamente no mundo do desenvolvimento, conhecer novas tecnologias, contribuir para projetos reais e trabalhar em uma equipe incrível.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Desenvolvedor Front-End",
    location: "Autônomo",
    description:
      "Uma experiência que me ensina muito sobre todas as etapas do desenvolvimento, desde a engenharia de requistos até a construção do produto final e implantação. O horário flexível é de grande ajuda para poder me dedicar mais aos projetos e aprender cada vez mais.",
    icon: React.createElement(CgCodeSlash),
    date: "2023 - presente",
  },
] as const;

export const projectsData = [
  {
    title: "Moview",
    description: "Aplicação web focada na busca e visualização de informações sobre filmes e séries",
    tags: ["HTML", "CSS", "React", "TypeScript", "Styled Components"],
    imageUrl: moviewImg,
    projectUrl: 'https://moview-flame.vercel.app/'
  },
  {
    title: "Portfolio",
    description:
      "Uma landing page própria focada em apresentar quem sou, minhas habilidades, projetos e experiência profssional.",
    tags: ["HTML", "CSS", "Next", "TypeScript", "Tailwind", "Framer Motion"],
    imageUrl: portfolionewImg,
    projectUrl: 'https://lucas-chaves.vercel.app/'
  },
  {
    title: "Portfolio",
    description:
      "Uma landing page própria focada em apresentar quem sou, minhas habilidades e projetos.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: portfolioImg,
    projectUrl: 'https://old-portfolio-lucas-chaves.vercel.app/'
  },
  {
    title: "Fuzion Network",
    description:
      "Trabalhei em todas as etapas do desenvolvimento do fórum, site e loja virtual da rede de servidores.",
    tags: ["HTML", "CSS", "PHP", "MySQL"],
    imageUrl: forumImg,
    projectUrl: '#projects'
  },
  {
    title: "GEINFRApp",
    description:
      "Uma aplicação web desenvolvida durante a graduação para auxiliar a equipe de infraestrutura da universidade.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    imageUrl: geinfraImg,
    projectUrl: '#projects'
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Node",
  "React",
  "TypeScript",
  "Next",
  "Tailwind",
  "Styled Components",
  "Framer Motion",
  "Dart",
  "Flutter",
  "Python",
  "Django",
  "MySQL",
  "Figma",
  "Git",
] as const;