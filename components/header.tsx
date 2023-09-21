"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { links } from '@/lib/data'
import Link from 'next/link'
import useActiveSectionContext from '@/hooks/use-active-section-context'
import clsx from 'clsx'

export default function Header() {

    const { activeSection, setActiveSection, setClickTime } = useActiveSectionContext()
  
    return (
    <header className='z-[999] relative'>
        <motion.div className='fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white  border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full
         dark:border-black dark:border-opacity-10 dark:bg-gray-900 dark:bg-opacity-80'
        initial={{ y: -100, x: "-50%", opacity: 0}}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        ></motion.div>

        <nav className="fixed flex top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
            <ul className='flex w-[22rem] items-center justify-center flex-wrap gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-2 dark:text-zinc-400'>
                {links.map( link => (
                    <motion.li className='h-3/4 flex items-center justify-center'
                    key={link.name}
                    initial={{ y: -100, opacity: 0}}
                    animate={{ y: 0, opacity: 1 }}>
                        <Link className={clsx("relative flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:hover:text-white", {
                            "text-gray-950 dark:text-white": (activeSection === link.name)
                        })}
                        href={link.hash}
                        onClick={() => {
                            setActiveSection(link.name)
                            setClickTime(Date.now())
                        }}
                        >
                            {link.name}
                            {(activeSection === link.name) && (
                                <motion.span className="absolute inset-1 rounded-full bg-gray-200/40 -z-10 dark:bg-zinc-700/40"
                                layoutId='activeSection'
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 25
                                }}
                                ></motion.span>
                            )}
                        </Link>
                    </motion.li>
                ))}
            </ul>
        </nav>
    </header>
  )
}
