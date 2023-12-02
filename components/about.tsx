'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import useScrollState from '@/hooks/use-scroll-state'


export default function About () {

  const { ref } = useScrollState({sectionName: 'Sobre', threshold: 0.75})

  return (
    <motion.section 
    id='about'
    className='text-center max-w-[45rem] leading-8'
    initial={{ opacity: 0, y: 150 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.1}}
    ref={ref}
    >        
        <SectionHeading>sobre mim</SectionHeading>
        <p className='mb-3 dark:text-white/90'>Me chamo <strong>Lucas</strong>, tenho 22 anos, sou <strong>brasileiro</strong>, nascido em Alagoas, atualmente cursando o 7º perído de <strong>Ciência da Computação</strong> pela <strong>Universidade Federal de Alagoas</strong> e atuo como <strong>Desenvolvedor Front-End</strong>.</p>
        <p className="mb-3 dark:text-white/90">Meu primeiro contato com o mundo do desenvolvimento foi em 2018 com a programação web, trabalhando em uma start-up com foco em jogos online, que me influenciou a seguir o caminho atual. Logo após, em 2019, iniciei minha graduação em Ciência da Computação, expandi meus horizontes e nos dias de hoje estou atuando como Desenvolvedor Front-End autônomo.</p>
        <p className="mb-3 dark:text-white/90">
        Apaixonado por música, e-sports e design, sou ex-jogador profissional de Counter-Strike e guitarrista nas horas vagas, focado atualmente nos meus projetos pessoas, pelos quais tenho um carinho gigantesco.
        </p>
    </motion.section>
  )
}
