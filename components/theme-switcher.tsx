'use client'

import React, { useEffect, useState } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'

type Theme = 'light' | 'dark'

export default function ThemeSwitcher() {

    const [theme, setTheme] = useState<Theme>('light')

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
            window.localStorage.setItem('theme', 'dark')
            document.documentElement.classList.add('dark')
        } else {
            setTheme('light')
            window.localStorage.setItem('theme', 'light')
            document.documentElement.classList.remove('dark')
        }
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme') as Theme | null
        if (localTheme) {
            setTheme(localTheme)
            if (localTheme === 'dark') {
                document.documentElement.classList.add('dark')
            }
        } else if (window.matchMedia("(prefers-color-scheme: dark").matches) {
            setTheme('dark')
            document.documentElement.classList.add('dark')
        }
    }, [])

  return (
    <button className='fixed z-10 bottom-5 right-5 h-12 w-12 rounded-full bg-white bg-opacity-80 text-gray-700 flex items-center justify-center  border border-black/10 border-opacity-40 shadow-2xl hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition-all backdrop-blur-[0.5rem]'
    onClick={toggleTheme}>
        {theme === 'light'? <BsSun /> : <BsMoon />}
    </button>
  )
}
