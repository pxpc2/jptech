import Button from '@/components/Button';
import { styles } from '@/styles';
import Image from 'next/image';

export default function Marcas() {
  return (
    <div className={``}>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-slate-800 mt-8 text-3xl font-semibold sm:text-4xl">
            As melhores marcas do mercado.
          </h3>
          <p className="text-gray-600 mt-3 font-extralight">
            Trabalhamos com os maiores, garantindo desempenho, eficiência,
            durabilidade e segurança aos nossos clientes.
          </p>
        </div>
        <div className="mt-12 flex justify-center">
          <ul className="inline-grid grid-cols-2 gap-x-10 gap-y-6 md:gap-x-16 md:grid-cols-3 lg:grid-cols-4">
            {/* LOGO 1 */}
            <li>
              <Image
                src={'logos/logo-DELL.svg'}
                width={150}
                height={150}
                alt="dell"
                className="m-auto"
              />
            </li>

            {/* LOGO 2 */}
            <li>
              <Image
                src={'/logos/logo-HP.png'}
                width={150}
                height={150}
                alt="dell"
                className="m-auto"
              />
            </li>

            <li>
              <Image
                src={'logos/logo-DELL.svg'}
                width={150}
                height={150}
                alt="dell"
                className="m-auto"
              />
            </li>

            {/* LOGO 2 */}
            <li>
              <Image
                src={'/logos/logo-HP.png'}
                width={150}
                height={150}
                alt="dell"
                className="m-auto"
              />
            </li>
            <li>
              <Image
                src={'logos/logo-DELL.svg'}
                width={150}
                height={150}
                alt="dell"
                className="m-auto"
              />
            </li>

            {/* LOGO 2 */}
            <li>
              <Image
                src={'/logos/logo-HP.png'}
                width={150}
                height={150}
                alt="dell"
                className="m-auto"
              />
            </li>
            <li>
              <Image
                src={'logos/logo-DELL.svg'}
                width={150}
                height={150}
                alt="dell"
                className="m-auto"
              />
            </li>

            {/* LOGO 2 */}
            <li>
              <Image
                src={'/logos/logo-HP.png'}
                width={150}
                height={150}
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
