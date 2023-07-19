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
      className={`${styles.sectionWidth} ${styles.navPadding}`}
    >
      <div className="flex flex-nowrap items-center text-center justify-between">
        <div className="navbar-logo">
          <Image
            src={'/blacklogo-jptech.svg'}
            alt="logo"
            width={250}
            height={250}
            className="ease-in-out duration-150 hover:scale-105"
          />
        </div>
        <div className="navbar-menu">
          <ul className="flex gap-8 items-center justify-center text-center">
            {pages.map((page, index) => (
              <li key={index} className="">
                <a
                  href={page.route}
                  className="ease-in-out duration-150 text-slate-800 font-normal text-[12px] hover:font-medium"
                >
                  {page.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-social-buttons w-[250px]">
          <Button
            msg={'Fale conosco'}
            buttonStyles={'w-[120px] text-slate-300'}
            delay={0}
          />
        </div>
      </div>
    </motion.div>
  );
}
