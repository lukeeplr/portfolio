"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsDownload, BsLinkedin, BsGithub, BsArrowDown} from 'react-icons/bs'
import useScrollState from '@/hooks/use-scroll-state'
import useActiveSectionContext from '@/hooks/use-active-section-context'

export default function Intro() {

  const { ref } = useScrollState({sectionName: 'Início', threshold: 0.75})
  const { setActiveSection, setClickTime } = useActiveSectionContext()

  return (
    <section 
    id='home'
    ref={ref}
    className='max-w-[50rem] text-center scroll-mt-[100rem]'>
        <div className="flex items-center justify-center">
            <div className='relative'>
                <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "tween", duration: 0.2}}
                >
                <Image src="/pfp.jpg" 
                alt='Lucas Chaves'
                width="192"
                height="192"
                quality="95"
                priority={true}
                className='h-36 w-36 rounded-full border-[0.35rem] border-white object-cover shadow-xl '
                />
                </motion.div>
            <motion.span 
            className='absolute bottom-0 right-0 text-4xl'
            initial={{ opacity: 0, scale: 0}}
            animate={{ opacity: 1, scale: 1}}
            transition={{ 
                type: "spring",
                stiffness: 125,
                delay: 0.2,
                duration: 0.8}}
            >👋</motion.span>

            </div>
        </div>

        <motion.h1 className='mb-10 mt-10 px-4 text-2xl font-medium !leading[1.5] sm:text-4xl'
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4}}
        >
            <span className="font-bold">Olá, você.</span> Me chamo <span className="font-bold">Lucas</span>, tenho 22 anos, sou <span className="font-bold">Desenvolvedor Web</span> e graduando em <span className="font-bold">Ciência da Computação</span> pela <span className="font-bold">UFAL</span>.
        </motion.h1>

        <motion.div className='flex flex-row gap-4 justify-center align-center flex-wrap px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7}}
        >
            <Link href="#contact" 
            onClick={() => {
                setActiveSection('Contato')
                setClickTime(Date.now())
            }}
            className='group bg-gray-900 text-white px-7 py-3 flex items-center justify-center gap-2 w-full rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition sm:w-fit dark:bg-zinc-100 dark:text-gray-950 dark:hover:bg-zinc-50'>Entre em contato <BsArrowDown className="opacity-70 group-hover:translate-y-1 transition"/></Link>

            <a href="/CV.pdf" download={true} className='group bg-white text-gray-950 px-7 py-3 flex items-center justify-center gap-2 w-full rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 sm:w-fit dark:bg-white dark:border-white/10 dark:bg-opacity-10 dark:text-white dark:hover:border-white/20'>Currículo <BsDownload className="opacity-70 group-hover:translate-y-1 transition"/></a>

            <a href="https://www.linkedin.com/in/lucas-chaves-881b6726b/" target='_blank' className="bg-white text-gray-700 p-4 rounded-full flex items-center text-[1.35rem] focus:scale-110 hover:scale-[1.15] hover:text-gray-950 active:scale-[1.15] transition cursor-pointer border border-black/10 dark:bg-white dark:border-white/10 dark:text-white/70 dark:bg-opacity-10 dark:hover:text-white dark:hover:border-white/20"><BsLinkedin /></a>

            <a href="https://github.com/lukeeplr" target='_blank' className="bg-white text-gray-700 p-4 rounded-full flex items-center text-[1.35rem] focus:scale-110 hover:scale-[1.15] hover:text-gray-950 active:scale-[1.15] transition cursor-pointer border border-black/10 dark:bg-white/10 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:hover:border-white/20"><BsGithub /></a>

        </motion.div>
    </section>
  )
}
