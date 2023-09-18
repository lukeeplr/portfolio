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
    className='text-center max-w-[45rem] mb-28 leading-8 sm:mb-40 scroll-mt-28'
    initial={{ opacity: 0, y: 150 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.1}}
    ref={ref}
    >        
        <SectionHeading>sobre mim</SectionHeading>
        <p className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo deserunt exercitationem cum, necessitatibus dignissimos cupiditate provident voluptatum at earum ullam sed deleniti. Eveniet architecto, recusandae accusamus illo ratione quaerat iure iste ipsa! Ea a, fuga nemo animi illum quae officiis magnam eum asperiores earum cum soluta.</p>
        <p className="mb-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia omnis porro repudiandae consequatur debitis dolorem veniam neque facere quasi, ex itaque tempora. Voluptatibus quos alias doloribus molestiae.
        </p>
    </motion.section>
  )
}
