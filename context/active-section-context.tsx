'use client'

import React, { useState } from 'react'
import { links } from '@/lib/data'
import { SectionName } from '@/types/section-name'

type ActiveSectionContextProviderProps = {
  children: React.ReactNode
}

type ActiveSectionContextType = {
  activeSection: SectionName
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
  clickTime: number
  setClickTime: React.Dispatch<React.SetStateAction<number>>
}
export const ActiveSectionContext = React.createContext<ActiveSectionContextType | null>(null)

export default function ActiveSectionContextProvider( {children}: ActiveSectionContextProviderProps  ) {
  

  const [activeSection, setActiveSection] = useState<SectionName>(links[0].name)
  const [clickTime, setClickTime] = useState<number>(0)
  
  return (
    <ActiveSectionContext.Provider value={{
      activeSection, 
      setActiveSection,
      clickTime,
      setClickTime
      }}>
      {children}
    </ActiveSectionContext.Provider>
  )
}
