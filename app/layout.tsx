import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Header from '@/components/header'
import ActiveSectionContextProvider from '@/context/active-section-context'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/footer'
import ThemeSwitcher from '@/components/theme-switcher'
import ThemeContextProvider from '@/context/theme-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lucas Chaves | Portfolio',
  description: 'Lucas is a Front-End Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <ThemeContextProvider>
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-zinc-100`}>

        <div className='bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#500724]'></div>

        <div className='bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#2e1065]'></div>
        <ActiveSectionContextProvider>
        <Header />
        {children}
        <Footer />
        <ThemeSwitcher />
        <Toaster position='top-right'/>
        </ActiveSectionContextProvider>
        </body>
        </ThemeContextProvider>
    </html>
  )
}
