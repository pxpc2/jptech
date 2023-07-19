'use client';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/motion';

export default function Button({ msg, buttonStyles, delay }) {
  return (
    <motion.button
      variants={fadeIn('down', 'tween', delay, delay)}
      className={`h-[30px] rounded-lg
    text-[12px] font-medium  border-[#0283C9] bg-[#0283C9] border-[1px] ${buttonStyles} ease-in-out duration-300  hover:scale-105 hover:bg-[#179be2]`}
    >
      {msg}
    </motion.button>
  );
}
