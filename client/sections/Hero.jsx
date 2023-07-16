'use client';

import Button from '@/components/Button';
import { styles } from '@/styles';
import { staggerContainer, textVariant } from '@/utils/motion';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className={`${styles.sectionWidth} ${styles.heroPadding} w-full`}>
      <div className="hero-gradient" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="w-full">
          <motion.h1
            variants={textVariant(0.5)}
            className="text-slate-200 text-[68px] mt-[-25px] leading-[80px] text-right mr-[-30px]"
          >
            Seu parceiro em soluções tecnológicas
          </motion.h1>
        </div>

        <div className="flex flex-row flex-nowrap items-center gap-20 z-10">
          <div className="HERO__TEXTOS flex flex-col gap-8 w-full">
            <motion.p
              variants={textVariant(0.8)}
              className="text-slate-400 text-[20px]  leading-[32px] w-[450px] h-[135px]"
            >
              Com um serviço excepcional, entrega pontual e suporte
              especializado, estamos prontos para ajudar as organizações a
              alcançarem seus objetivos e a enfrentarem os desafios tecnológicos
              da atualidade.
            </motion.p>
            <div className="mt-8 mb-24">
              <Button
                msg={'Saiba Mais!'}
                buttonStyles={'text-slate-300 w-[250px]'}
                delay={0.8}
              />
            </div>
          </div>
          <div className="HERO__IMAGEM w-full"></div>
        </div>
      </motion.div>
    </div>
  );
}
