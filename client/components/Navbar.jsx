'use client';

import Image from 'next/image';
import { styles } from '../styles';
import { pages } from '../utils/constants';
import Button from './Button';
import { motion } from 'framer-motion';
import { navVariants } from '@/utils/motion';

export default function Navbar() {
  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView={'show'}
      className={`${styles.sectionWidth} ${styles.paddingX} h-[80px] py-4 rleative`}
    >
      <div className="flex flex-nowrap items-center justify-between">
        <div className="navbar-logo">
          <Image src={'/logo.png'} alt="logo" width={200} height={200} />
        </div>
        <div className="navbar-menu">
          <ul className="w-full flex flex-row gap-8 items-center">
            {pages.map((page, index) => (
              <li
                key={index}
                className="ease-in-out duration-300 hover:scale-110"
              >
                <a href={page.route} className="text-sm text-white">
                  {page.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-social-buttons">
          <Button msg={'Suporte'} buttonStyles={'w-[120px] text-slate-300'} />
        </div>
      </div>
    </motion.div>
  );
}
