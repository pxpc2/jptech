import Button from '@/components/Button';
import { styles } from '@/styles';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className={`${styles.sectionWidth} ${styles.heroPadding} w-full`}>
      <div className="absolute h-[300px] rounded-tl-[140px] z-[0]" />
      <div className="hero-gradient"></div>
      <div className="w-full">
        <h1 className="text-slate-200 text-[68px] mt-[-25px] leading-[80px] text-right">
          Seu parceiro em soluções tecnológicas
        </h1>
      </div>

      <div className="flex flex-row flex-nowrap items-center gap-20 z-10">
        <div className="HERO__TEXTOS flex flex-col gap-8 w-full">
          <p className="text-slate-400 text-[20px]  leading-[32px] w-[450px] h-[135px]">
            Com um serviço excepcional, entrega pontual e suporte especializado,
            estamos prontos para ajudar as organizações a alcançarem seus
            objetivos e a enfrentarem os desafios tecnológicos da atualidade.
          </p>
          <div className="mt-8 mb-24">
            <Button
              msg={'Saiba Mais!'}
              buttonStyles={'text-slate-300 w-[250px]'}
            />
          </div>
        </div>
        <div className="HERO__IMAGEM w-full"></div>
      </div>
    </div>
  );
}
