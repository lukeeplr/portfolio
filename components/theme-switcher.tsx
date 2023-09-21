'use client'

import useTheme from '@/hooks/use-theme'
import React from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'

export default function ThemeSwitcher() {

    const { theme, toggleTheme } = useTheme()

  return (
    <button className='fixed z-10 bottom-5 right-5 h-12 w-12 rounded-full bg-white bg-opacity-80 text-gray-700 flex items-center justify-center  border border-black/10 border-opacity-40 shadow-2xl hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition-all backdrop-blur-[0.5rem] dark:bg-gray-950 dark:text-white dark:bg-opacity-80 sm:h-16 sm:w-16 sm:text-xl'
    onClick={toggleTheme}>
        {theme === 'light'? <BsSun /> : <BsMoon />}
    </button>
  )
}
