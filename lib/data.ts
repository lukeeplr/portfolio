import React from "react";

import { CgCodeSlash } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

import thebridge from "@/public/thebridge.png";
import imaginify from "@/public/imaginify.png";
import travellerImg from "@/public/traveller.png";
import bali from "@/public/bali.png";
import threadsImg from "@/public/threads.png";

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
    title: "Desenvolvedor Web",
    location: "Autônomo",
    description:
      "Uma experiência que me ensina muito sobre todas as etapas do desenvolvimento, desde a engenharia de requistos até a construção do produto final e implantação. O horário flexível é de grande ajuda para poder me dedicar mais aos projetos e aprender cada vez mais.",
    icon: React.createElement(CgCodeSlash),
    date: "2023 - presente",
  },
] as const;

export const projectsData = [
  {
    title: "Imaginify",
    description: "Aplicação web SaaS que realiza edições de imagem usando Inteligência Artificial.",
    tags: ["HTML", "CSS", "Next", "TypeScript", "MongoDB", "Stripe"],
    imageUrl: imaginify,
    projectUrl: 'https://imaginifybylukee.vercel.app/'
  },
  {
    title: "BALI Arquitetura",
    description:
      "Um website/ portfólio do escritório de arquitetura e urbanismo BALI que visa apresentar a empresa, sua equipe, seus projetos e mais.",
    tags: ["HTML", "CSS", "Next", "TypeScript", "Tailwind", "Framer Motion"],
    imageUrl: bali,
    projectUrl: 'https://baliarquitetura.com/'
  },
  {
    title: "Threads",
    description: "O melhor lugar para compartilhar seu dia a dia, interagir com amigos e conhecer novas pessoas",
    tags: [ "HTML", "CSS", "TypeScript", "Next", "Tailwind", "MongoDB"],
    imageUrl: threadsImg,
    projectUrl: 'https://threadsbylukee.vercel.app/'
  },
  {
    title: "Traveller",
    description:
      "Sem dor de cabeça com viagens. Anuncie e reserve casas e apartamentos com facilidade no Traveller",
    tags: ["HTML", "CSS", "TypeScript", "Next", "Tailwind", "Prisma"],
    imageUrl: travellerImg,
    projectUrl: 'https://travellerbylukee.vercel.app/'
  },
  {
    title: "The Bridge",
    description:
      "Um website da equipe de desenvolvimento The Bridge,  focada em apresentar a empresa, seus projetos, abordagem e mais.",
    tags: ["HTML", "CSS", "Next", "TypeScript", "Tailwind"],
    imageUrl: thebridge,
    projectUrl: 'https://www.thebridgedev.com/'
  },
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
  "MongoDB",
  "Prisma",
  "Stripe",
  "Figma",
  "Web Design",
  "Git",
] as const;