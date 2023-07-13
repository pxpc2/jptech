import { styles } from '@/styles';
import Image from 'next/image';

export default function Marcas() {
  return (
    <div className={`${styles.sectionWidth} ${styles.sectionPadding}`}>
      <div className="flex flex-row flex-nowrap items-center gap-20">
        <div className="MARCAS__TEXTOS flex flex-col gap-8 w-[270px]">
          <h1 className="text-gray-800 text-[40px] font-medium leading-[48px]">
            Trabalhamos com as maiores marcas do mercado.
          </h1>
          <button
            className="w-[270px] h-[38px] rounded-sm
          text-sm bg-white border-blue-600 border-[1px] mt-8 text-blue-600"
          >
            Explorar
          </button>
        </div>
        <div className="MARCAS__IMAGENS">
          <Image
            src={'/companies.jpg'}
            alt="logos"
            width={1900}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
}
