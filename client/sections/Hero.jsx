import Button from '@/components/Button';
import { styles } from '@/styles';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className={`${styles.sectionWidth} ${styles.heroPadding}`}>
      <div className="flex flex-col gap-8 text-center items-center justify-center">
        <h1 className="text-4xl text-slate-800 font-bold mx-auto sm:text-5xl">
          Seu parceiro em&nbsp;
          <span className=" bg-clip-text font-bold text-transparent bg-gradient-to-r from-[#0283C9] to-[#67a2f0]">
            soluções tecnológicas
          </span>
        </h1>
        <p className="max-w-xl mx-auto text-slate-800 font-normal">
          Com um serviço excepcional, entrega pontual e suporte especializado,
          estamos prontos para ajudar as organizações a alcançarem seus
          objetivos e a enfrentarem os desafios tecnológicos da atualidade.
        </p>
        <Button buttonStyles={'w-[250px] mt-4'} msg={'Conheça mais'}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
        <div className="mt-20 flex flex-col gap-8">
          <p className="max-w-xl mx-auto uppercase text-[12px] font-medium text-slate-600">
            Trabalhamos com as maiores marcas
          </p>
          <ul className="flex gap-x-10 gap-y-4 flex-wrap items-center justify-center md:gap-x-16">
            <li>
              <Image
                src={'logos/logo-DELL.svg'}
                width={100}
                height={100}
                alt="dell"
                className="m-auto"
              />
            </li>

            {/* LOGO 2 */}
            <li>
              <Image
                src={'/logos/logo-HP.png'}
                width={100}
                height={100}
                alt="dell"
                className="m-auto"
              />
            </li>

            <li>
              <Image
                src={'logos/logo-DELL.svg'}
                width={100}
                height={100}
                alt="dell"
                className="m-auto"
              />
            </li>

            {/* LOGO 2 */}
            <li>
              <Image
                src={'/logos/logo-HP.png'}
                width={100}
                height={100}
                alt="dell"
                className="m-auto"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
