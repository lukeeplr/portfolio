'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from './project'
import useScrollState from '@/hooks/use-scroll-state'


export default function Projects() {

  const { ref } = useScrollState({sectionName: "Projetos", threshold: 0.3})

  return (
    <section ref={ref}
        id='projects'
        className='scroll-mt-28'>
        <SectionHeading>meus projetos</SectionHeading>
        <div>
          {projectsData.map(project => (
            <React.Fragment key={project.title}>
                     <Project {...project} />       
              </React.Fragment>
          ))}
        </div>
    </section>
  )
}


