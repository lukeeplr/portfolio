'use client'

import React from 'react'
import SectionHeading from './section-heading'
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from '@/lib/data';
import useScrollState from '@/hooks/use-scroll-state';

export default function Experience() {

  const { ref } = useScrollState({sectionName: "Experiência", threshold: 0.4})

  return (
    <section 
    id='experience'
    className='scroll-mt-28'
    ref={ref}
    >
        <SectionHeading>Experiência</SectionHeading>
        <VerticalTimeline lineColor=''>
            {
                experiencesData.map((experience, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                        contentStyle={{
                        background: '#f3f4f6',
                        boxShadow: 'none',
                        border: '1px solid rgba(0, 0, 0, 0.05)',
                        textAlign: 'left',
                        padding: '1.3rem 2rem'
                        }}
                        contentArrowStyle={{
                            borderRight: '10px solid #e5e7eb',
                            
                        }}
                        date={experience.date}
                        icon={experience.icon}
                        iconStyle={{ background: 'white' }}>
                            <h3 className='font-semibold'>{experience.title}</h3>
                            <p className='font-normal !mt-0'>{experience.location}</p>
                            <p className='font-normal !mt-6 text-gray-700'>{experience.description}</p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))
            }
        </VerticalTimeline>
    </section>
  )
}
