import Image from 'next/image';
import { styles } from '@/styles';

export default function Solucoes() {
  return (
    <div className={`${styles.sectionWidth} ${styles.sectionPadding}`}>
      <div className="flex flex-row flex-nowrap items-center gap-20">
        <div className="SOLUCOES__IMAGEM w-full">
          <Image
            src={'/Triangle.png'}
            alt="triangle"
            width={700}
            height={700}
          />
        </div>
        <div className="SOLUCOES__TEXTOS  flex flex-col gap-8">
          <div className="flex flex-row flex-nowrap w-[500px]">
            <h1 className="text-gray-800 text-[40px] font-medium leading-[48px] w-[250px]">
              Levamos a inovação tecnológica para&nbsp;
              <span className="underline font-bold">todo</span> o território
              nacional.
            </h1>
            <Image
              src={'/placeholder.svg'}
              alt="triangle"
              width={200}
              height={200}
            />
          </div>

          <p className="text-gray-500 text-[20px] leading-[32px] w-[500px] h-[135px]">
            Tornarmos referência em tecnologia para empresas e instituições
            governamentais, reconhecidos por nossa excelência, inovação e
            compromisso com a satisfação do cliente.
          </p>
        </div>
      </div>
    </div>
  );
}
