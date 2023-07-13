import { styles } from '@/styles';
import Image from 'next/image';

export default function Historia() {
  return (
    <div className={`${styles.sectionWidth} ${styles.sectionPadding}`}>
      <div className="flex flex-col w-full items-center gap-12">
        <div className="flex flex-row flex-nowrap items-center gap-20">
          <Image
            src={'/placeholder.svg'}
            alt="triangle"
            width={200}
            height={200}
          />
          <div className="flex flex-col">
            <h2 className="text-[28px]">Missão</h2>
            <p className="w-[500px]">
              Almejamos ser líderes em soluções tecnológicas, estas responsáveis
              por impulsionar o desenvolvimento e a transformação do ambiente de
              trabalho de nossos clientes, 
            </p>
          </div>
        </div>
        <div className="flex flex-row flex-nowrap items-center gap-20">
          <div className="flex flex-col">
            <h2 className="text-[28px]">Valores</h2>
            <p className="w-[500px]">
              Prezamos sempre pela excelência nos serviços, inovação
              tecnológica, confiabilidade, transparência e comprometimento com
              nossos clientes.
            </p>
          </div>
          <Image
            src={'/placeholder.svg'}
            alt="triangle"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}
