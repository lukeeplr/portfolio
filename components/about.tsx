'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'

export default function About () {
  return (
    <motion.section 
    className='text-center max-w-[45rem] mb-28 leading-8 sm:mb-40'
    initial={{ opacity: 0, y: 150 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.1}}
    >        
        <SectionHeading>sobre mim</SectionHeading>
        <p className='mb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo deserunt exercitationem cum, necessitatibus dignissimos cupiditate provident voluptatum at earum ullam sed deleniti. Eveniet architecto, recusandae accusamus illo ratione quaerat iure iste ipsa! Ea a, fuga nemo animi illum quae officiis magnam eum asperiores earum cum soluta, neque quas ab sunt sed nulla, voluptates deserunt dicta? Adipisci, quibusdam? Ab dicta accusamus quos quod eligendi maxime aliquid, ex error corporis quam quis culpa eaque totam tenetur repellendus ipsa blanditiis est earum alias harum. Incidunt expedita debitis saepe magnam, cum sed, fugit vel maxime error mollitia aut accusantium ullam inventore assumenda voluptatem.</p>
        <p className="mb-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia omnis porro repudiandae consequatur debitis dolorem veniam neque facere quasi, ex itaque tempora. Voluptatibus quos alias doloribus molestiae, magnam unde, corporis vero assumenda ab odit sit sunt, possimus dignissimos repudiandae? Impedit ducimus perferendis delectus iure officiis ex excepturi, quaerat corrupti alias aliquam? Quam vitae ab vero ea, autem tempore quae corrupti.
        </p>
    </motion.section>
  )
}
