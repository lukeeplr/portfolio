'use client'

import React from 'react'
import SectionHeading from './section-heading'
import useScrollState from '@/hooks/use-scroll-state'
import { motion } from 'framer-motion'
import { sendEmail } from '@/actions/send-email'
import SubmitButton from './submit-button'
import toast from 'react-hot-toast'

export default function Contact() {

  const { ref } = useScrollState({sectionName: "Contato"})

  return (
      <motion.section
      id='contact'
      ref={ref}
      className='mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center scroll-mb-[100rem]'
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1, y: 50}}
      transition={{duration: 1, y: 0}}
      viewport={{once: true}}
      >
        <SectionHeading>Contato</SectionHeading>

        <p className='text-gray-700 mb-10 dark:text-white/80'>Por favor, entre em contato comigo diretamente via <a href="mailto:lukeeplr@gmail.com" className="underline">lukeeplr@gmail.com</a> ou através deste formulário.</p>

        <form 
        action={async (FormData) => {
          const response = await sendEmail(FormData)
          if (response && response.error) {
            toast.error('Algo deu errado')
            return
          }
          toast.success('E-mail enviado')
          } 

        }
        className='flex flex-col'>
            <input 
            name='emailFrom'
            type="email"
            required
            maxLength={320} 
            className='h-14 rounded-lg border border-black/10 p-4 dark:bg-white/10 dark:focus:bg-white/20 transition-all dark:outline-none' 
            placeholder='E-mail'/>
            <textarea
            name='message'
            className='h-40 rounded-lg border border-black/10 my-3 p-4 dark:bg-white/10 dark:focus:bg-white/20 transition-all dark:outline-none'
            placeholder='Mensagem'
            required
            maxLength={5000}
            ></textarea>
            <SubmitButton>{'Enviar'}</SubmitButton>
        </form>

      </motion.section>
  )
}
