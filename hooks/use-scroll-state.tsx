'use client'

import { useEffect } from 'react'

import useActiveSectionContext from './use-active-section-context'
import { useInView } from 'react-intersection-observer'
import { SectionName } from '@/types/section-name'

type useScrollStateProps = {
    sectionName: SectionName 
    threshold?: number
}

export default function useScrollState( {sectionName, threshold = 0.5}: useScrollStateProps ) {

    const { setActiveSection, clickTime } = useActiveSectionContext()
    const { ref, inView } = useInView({
        threshold: threshold
      })
      useEffect(() => {
        if (inView && Date.now() - clickTime > 1000) {
          setActiveSection(sectionName)
        }
      },[inView, setActiveSection])
    
  return {
    ref
  }
}
