import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

type SubmitButtonProps = {
  children: React.ReactNode
}

export default function SubmitButton( {children}: SubmitButtonProps ) {

  const { pending } = useFormStatus()

  return (
    <button 
            type='submit'
            className='group mt-4 mx-auto h-[3rem] w-[90%] rounded-lg bg-gray-900 hover:bg-gray-950 text-white flex justify-center items-center gap-2 outline-none transition-all hover:scale-110 active:scale-105 disabled:scale-100 disabled:bg-opacity-60'
            disabled={pending}
            >
              {pending ? (
                <div className="h-5 w-5 rounded-full animate-spin border-b-2 border-white"></div>
              ) : (
               <>
              {children} <FaPaperPlane className="opacity-70 group-hover:opacity-100 transition-all text-sm group-hover:translate-x-2 group-hover:-translate-y-1"/>
               </> 
              )}
              </button>
  )
}
