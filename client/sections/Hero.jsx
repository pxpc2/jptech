import { styles } from '@/styles';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className={`${styles.sectionWidth} ${styles.sectionPadding}`}>
      <div className="flex flex-row flex-nowrap items-center gap-20">
        <div className="HERO__IMAGEM w-full">
          <Image
            src={'/Triangle.png'}
            alt="triangle"
            width={700}
            height={700}
          />
        </div>
        <div className="HERO__TEXTOS flex flex-col gap-8 w-full">
          <h1 className="text-gray-800 text-[68px] font-semibold leading-[80px] w-[500px]">
            Seu parceiro em soluções tecnológicas
          </h1>
          <p className="text-gray-500 text-[20px] leading-[32px] w-[500px] h-[135px]">
            Com um serviço excepcional, entrega pontual e suporte especializado,
            estamos prontos para ajudar as organizações a alcançarem seus
            objetivos e a enfrentarem os desafios tecnológicos da atualidade.
          </p>
          <button
            className="w-[500px] h-[38px] rounded-sm
          text-sm bg-blue-600 mt-8 text-white"
          >
            Saiba Mais!
          </button>
        </div>
      </div>
    </div>
  );
}
