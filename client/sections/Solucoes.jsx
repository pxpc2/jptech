import Image from 'next/image';
import { styles } from '@/styles';

export default function Solucoes() {
  return (
    <div className={`${styles.sectionWidth} ${styles.sectionPadding}`}>
      <div className="flex flex-row flex-nowrap items-center gap-20">
        <div className="SOLUCOES__IMAGEM w-full">
          <Image
            src={'/tech-world.jpg'}
            alt="triangle"
            width={700}
            height={700}
          />
        </div>
        <div className="SOLUCOES__TEXTOS  flex flex-col gap-8">
          <div className="flex flex-row flex-nowrap w-[500px]">
            <h1 className="text-gray-800 text-[40px] font-normal leading-[48px] w-[250px]">
              Levamos a inovação tecnológica para&nbsp;
              <span className="bg-clip-text font-medium text-transparent bg-gradient-to-r from-[#0283C9] to-[#67a2f0]">
                todo
              </span>{' '}
              o território nacional.
            </h1>
            <Image
              src={'/placeholder.svg'}
              alt="triangle"
              width={200}
              height={200}
            />
          </div>

          <p className="text-slate-800 font-light text-[20px] leading-[32px] w-[500px] h-[135px]">
            Nos tornamos referência em tecnologia para empresas e instituições
            governamentais, reconhecidos por nossa excelência, inovação e
            compromisso com a satisfação do cliente.
          </p>
        </div>
      </div>
    </div>
  );
}
