'use client';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/motion';

export default function Button({ msg, buttonStyles, delay, children }) {
  return (
    <motion.button
      variants={fadeIn('down', 'tween', delay, delay)}
      className={`flex flex-row items-center justify-center text-center h-[30px] rounded-lg
    text-[12px] font-medium text-white  border-[#0283C9] bg-[#0283C9] border-[1px] ${buttonStyles} ease-in-out duration-150  hover:scale-105 hover:bg-[#179be2] hover:border-[#179be2]`}
    >
      {msg}
      {children}
    </motion.button>
  );
}
