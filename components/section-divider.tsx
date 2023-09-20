'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function SectionDivider() {
  return (
    <motion.div className='bg-gray-200 h-16 mt-20 -mb-20 w-1 rounded-full hidden sm:block dark:bg-opacity-30'
    initial={{ y: 150, opacity: 0}}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.9 }}  
    >
    </motion.div>
    )
}
