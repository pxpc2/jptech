'use client';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/motion';

export default function Button({ msg, buttonStyles, delay }) {
  return (
    <motion.button
      variants={fadeIn('down', 'tween', delay, delay)}
      className={`h-[38px] rounded-sm
    text-sm  border-indigo-500 border-[1px] ${buttonStyles} ease-in-out duration-300 hover:font-medium hover:scale-105 hover:border-white`}
    >
      {msg}
    </motion.button>
  );
}
