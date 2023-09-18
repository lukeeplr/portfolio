'use client'

import React, {  useRef } from 'react'
import Image from 'next/image'
import { useScroll, useTransform } from 'framer-motion'
import { projectsData } from '@/lib/data'
import { motion } from 'framer-motion'

type ProjectProps = typeof projectsData[number]

export default function Project( { title, description, imageUrl, tags}: ProjectProps ) {

  const projectRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress }  = useScroll({
    target: projectRef,
    offset: ["0 1", "1.33 1"]

  })

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.4, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1])

  return (
    <motion.div
    ref={projectRef}
    style={{scale: scaleProgress, opacity: opacityProgress}}
    className='mb-3 sm:mb-8 last:mb-0'>
    <section className='group relative bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 sm:h-[22rem] hover:bg-gray-200 transition'>
      <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pt-10 sm:pr-2 sm:max-w-[50%] flex flex-col sm:h-full group-even:ml-[21rem]'>
      <h3 className='text-2xl font-semibold'>{title}</h3>
      <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>
      <ul className='flex items-end flex-wrap gap-2 mt-4 sm:mt-auto'>
      {tags.map(tag => (
        <li className='bg-black/[0.7] uppercase px-3 py-1 text-[0.7rem] tracking-wider text-white rounded-full' key={tag}>{tag}</li>
        ))}
      </ul>
      </div>
      <Image src={imageUrl} alt={title} quality={95} className='absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:right-0 group-even:-left-40 transition 
      group-hover:scale-[1.04]
      group-hover:-translate-x-3
      group-hover:translate-y-3
      group-hover:-rotate-2
      group-even:group-hover:translate-x-3
      group-even:group-hover:translate-y-3
      group-even:group-hover:rotate-2
      
      '/>
    </section>
    </motion.div>
  )
}