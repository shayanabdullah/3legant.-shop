import React from 'react'
import { motion } from 'motion/react';

const Button = ({text, className, onClick, icon, variants}) => {
  return (
    <motion.button variants={variants} initial='hidden' animate={'show'} viewport={{once:true}} onClick={onClick} className={`flex items-center gap-x-1 font-inter font-medium text-base transition-all duration-300 py-1 border-b group w-fit  ${className || ''}`}>
        {text}
        {icon}
    </motion.button>
  )
}

export default Button