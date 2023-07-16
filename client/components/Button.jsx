'use client';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/motion';

export default function Button({ msg, buttonStyles, delay }) {
  return (
    <motion.button
      variants={fadeIn('down', 'tween', delay, delay)}
      className={`h-[38px] rounded-sm
    text-sm  border-indigo-500 border-[1px] ${buttonStyles} hover:cursor-pointer`}
    >
      {msg}
    </motion.button>
  );
}
