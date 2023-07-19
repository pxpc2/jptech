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
      className={`${styles.sectionWidth} ${styles.paddingX} h-[80px] pt-4 mb-12`}
    >
      <div className="flex flex-nowrap items-center justify-between">
        <div className="navbar-logo">
          <Image
            src={'/LOGO.svg'}
            alt="logo"
            width={100}
            height={100}
            className="ease-in-out duration-300 hover:scale-105"
          />
        </div>
        <div className="navbar-menu">
          <ul className="w-full flex flex-row gap-8 items-center">
            {pages.map((page, index) => (
              <li key={index} className="">
                <a
                  href={page.route}
                  className="ease-in-out duration-300 text-[12px] hover:font-medium"
                >
                  {page.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-social-buttons">
          <Button
            msg={'Suporte'}
            buttonStyles={'w-[120px] text-slate-300'}
            delay={0}
          />
        </div>
      </div>
    </motion.div>
  );
}
