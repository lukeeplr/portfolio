import React from "react";

import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

import forumImg from "@/public/forum.png";
import geinfraImg from "@/public/geinfra.png";
import discordImg from "@/public/discord.png";
import portfolioImg from "@/public/portfolio.png";	

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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum justo facilisis diam placerat lacinia. Maecenas in gravida ante. Aliquam condimentum diam vitae quam tristique bibendum. Sed vestibulum scelerisque diam, non mollis neque pellentesque at. Donec viverra quis metus non semper. Integer quis fringilla arcu, eget dictum augue. Nulla laoreet dictum ex, blandit accumsan massa imperdiet cursus. Donec convallis cursus nulla eget molestie. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus sed dolor porttitor, eleifend velit in, ultrices ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - presente",
  },
  {
    title: "Desenvolvedor Front-End",
    location: "ITAN Labs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum justo facilisis diam placerat lacinia. Maecenas in gravida ante. Aliquam condimentum diam vitae quam tristique bibendum. Sed vestibulum scelerisque diam, non mollis neque pellentesque at. Donec viverra quis metus non semper. Integer quis fringilla arcu, eget dictum augue. Nulla laoreet dictum ex, blandit accumsan massa imperdiet cursus. Donec convallis cursus nulla eget molestie. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus sed dolor porttitor, eleifend velit in, ultrices ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    icon: React.createElement(CgWorkAlt),
    date: "2022-2023",
  },
  {
    title: "Desenvolvedor Front-End",
    location: "Autônomo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum justo facilisis diam placerat lacinia. Maecenas in gravida ante. Aliquam condimentum diam vitae quam tristique bibendum. Sed vestibulum scelerisque diam, non mollis neque pellentesque at. Donec viverra quis metus non semper. Integer quis fringilla arcu, eget dictum augue. Nulla laoreet dictum ex, blandit accumsan massa imperdiet cursus. Donec convallis cursus nulla eget molestie. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus sed dolor porttitor, eleifend velit in, ultrices ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - presente",
  },
] as const;

export const projectsData = [
  {
    title: "Fuzion Network",
    description:
      "Trabalhei em todas as etapas do desenvolvimento do fórum, site e loja virtual da rede de servidores.",
    tags: ["HTML", "CSS", "PHP", "MySQL"],
    imageUrl: forumImg,
  },
  {
    title: "GEINFRApp",
    description:
      "Uma aplicação web desenvolvida durante a graduação para auxiliar a equipe de infraestrutura da universidade.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    imageUrl: geinfraImg,
  },
  {
    title: "Website Discord",
    description: "Treinamento de layouts e responsividade recriando a landing page do Discord.",
    tags: ["HTML", "CSS",],
    imageUrl: discordImg,
  },
  {
    title: "Portfolio",
    description:
      "Uma landing page própria focada em apresentar quem sou, minhas habilidades e projetos.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: portfolioImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind",
  "Styled Components",
  "Framer Motion",
  "Dart",
  "Flutter",
  "Git",
  "Figma",
  "MySQL",
  "Python",
  "Django",
] as const;