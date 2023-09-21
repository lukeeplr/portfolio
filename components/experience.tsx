'use client'

import React from 'react'
import SectionHeading from './section-heading'
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from '@/lib/data';
import useScrollState from '@/hooks/use-scroll-state';
import useTheme from '@/hooks/use-theme';

export default function Experience() {

  const { ref } = useScrollState({sectionName: "Experiência", threshold: 0.4})
  const { theme } = useTheme()

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
                        background: theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
                        boxShadow: 'none',
                        border: theme === 'light' ? '1px solid rgba(0, 0, 0, 0.05)' : '1px solid #1f29378c',
                        textAlign: 'left',
                        padding: '1.3rem 2rem'
                        }}
                        contentArrowStyle={{
                            borderRight: theme === 'light' ? '10px solid #e5e7eb' : '10px solid #1f2937'
                            
                        }}
                        date={experience.date}
                        icon={experience.icon}
                        iconStyle={{ 
                            background: theme === 'light' ? 'white' : '#1f2937',
                            color: theme === 'light' ? '' : 'rgba(255, 255, 255, 0.8)',
                            boxShadow: theme === 'light' ? '' :  '0 0 0 4px #343a47'
                         }}>
                            <h3 className='font-semibold'>{experience.title}</h3>
                            <p className='font-normal !mt-0 dark:text-white/90'>{experience.location}</p>
                            <p className='font-normal !mt-6 text-gray-700 dark:text-white/70'>{experience.description}</p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))
            }
        </VerticalTimeline>
    </section>
  )
}
