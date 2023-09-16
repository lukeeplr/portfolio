"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowUpRight, BsDownload, BsLinkedin, BsGithub} from 'react-icons/bs'

export default function Intro() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
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
                className='h-36 w-36 rounded-full border-[0.35rem] border-white object-cover shadow-xl'
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

        <motion.p className='mb-10 mt-10 px-4 text-2xl font-medium !leading[1.5] sm:text-4xl'
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4}}
        >
            <span className="font-bold">Olá, você.</span> Me chamo <span className="font-bold">Lucas</span>, tenho 22 anos, sou <span className="font-bold">Desenvolvedor Front-End</span> e graduando em <span className="font-bold">Ciência da Computação</span> pela <span className="font-bold">UFAL</span>. Apaixonado por <span className="italic">web & UI/UX</span>.
        </motion.p>

        <motion.div className='flex flex-col gap-3 justify-center sm:flex-row px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6}}
        >
            <Link href="#contact" className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'>Entre em contato <BsArrowUpRight className="opacity-70 group-hover:-translate-y-1 transition"/></Link>

            <a href="#" className='group bg-white text-gray-950 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition'>Currículo <BsDownload className="opacity-70 group-hover:translate-y-1 transition"/></a>

            <a href="https://www.linkedin.com/in/lucas-chaves-881b6726b/" target='_blank' className="bg-white text-gray-700 p-4 rounded-full flex items-center text-[1.35rem]"><BsLinkedin /></a>

            <a href="https://github.com/lukeeplr" target='_blank' className="bg-white text-gray-700 p-4 rounded-full flex items-center text-[1.35rem]"><BsGithub /></a>

        </motion.div>
    </section>
  )
}
