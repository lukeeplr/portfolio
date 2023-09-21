'use client'

import React from 'react'
import { skillsData } from '@/lib/data'
import { motion } from 'framer-motion'
import useScrollState from '@/hooks/use-scroll-state'
import SectionHeading from './section-heading'

export default function Skills() {

  const { ref } = useScrollState({sectionName: "Habilidades", threshold: 0.75})
  const skillAnimation = {
    intial: {opacity: 0, scale: 0},
    animate: (index: number) => ({
        opacity: 1,
        scale: 1,
        transition: {
            delay: 0.075 * index,
            type: 'spring',
            stiffness: 400,
            damping: 18
        }
    }) 
}  

  return (
    <section
    id='skills'
    className='scroll-mt-28'
    ref={ref}>
        <SectionHeading>Habilidades</SectionHeading>
            <ul className='flex flex-wrap max-w-[40rem] sm:max-w-[53rem] gap-5 justify-center text-gray-800 dark:text-white/90'>
                {skillsData.map((skill, index) => (
                    <motion.li 
                    key={skill}
                    className='bg-gray-100 text-lg rounded-xl py-3 px-5 border border-black/10 shadow-md dark:bg-white dark:bg-opacity-10'
                    variants={skillAnimation}
                    initial='intial'
                    whileInView='animate'
                    viewport={{ once: true }}
                    custom={index}

                    >{skill}</motion.li>
                ))}
            </ul>
    </section>
  )
}
