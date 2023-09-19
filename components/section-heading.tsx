import React from 'react'

type SectionHeadingProps = {
    children: React.ReactNode
}

export default function SectionHeading( { children }: SectionHeadingProps ) {
  return (
    <h2 className='text-3xl font-medium capitalize mb-8 text-center mt-28 sm:mt-40'>
      { children }
    </h2>
  )
}
