import Button from '@/components/Button';
import { styles } from '@/styles';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className={`${styles.sectionWidth} ${styles.heroPadding}`}>
      <div className="flex flex-col gap-8 text-center items-center justify-center">
        <h1 className="text-4xl text-gray-200 font-bold mx-auto sm:text-5xl">
          Seu parceiro em soluções tecnológicas
        </h1>
        <p className="max-w-xl mx-auto">
          Com um serviço excepcional, entrega pontual e suporte especializado,
          estamos prontos para ajudar as organizações a alcançarem seus
          objetivos e a enfrentarem os desafios tecnológicos da atualidade.
        </p>

        <div className="">
          <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
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
        <Button buttonStyles={'w-[250px] mt-12'} msg={'Conheça Mais'} />
      </div>
    </div>
  );
}
