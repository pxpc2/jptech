import { PresentationChartLineIcon, EyeIcon } from '@heroicons/react/outline';
import Image from 'next/image';

export default function MissaoVisao() {
  return (
    <div className="relative bg-white pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span
                  className="h-12 w-12 rounded-md flex items-center justify-center
                 bg-jptech-brand-blue"
                >
                  <PresentationChartLineIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-[25px] font-medium text-jptech-brand-blue">
                  Missão
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-gray-500">
                  Desenvolver nossa própria linha de produtos de TI, trazendo
                  soluções tecnológicas personalizadas, responsáveis por
                  impulsionar o desenvolvimento e a transformação do ambiente de
                  trabalho de nossos clientes.
                </p>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-gray-500">
                    &ldquo;Cras velit quis eros eget rhoncus lacus ultrices sed
                    diam. Sit orci risus aenean curabitur donec aliquet. Mi
                    venenatis in euismod ut.&rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <img
                        className="h-6 w-6 rounded-full"
                        src="/bussiness-man.png"
                        alt=""
                      />
                    </div>
                    <div className="text-base font-medium text-gray-700">
                      João Pedro, CEO.
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <Image
                className="w-full rounded-xl shadow-xl ring-1 ring-black 
                ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/molier.png"
                alt="Inbox user interface"
                width={1000}
                height={0}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span
                  className="h-12 w-12 rounded-md flex items-center justify-center
                 bg-jptech-brand-blue"
                >
                  <EyeIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-[25px] font-medium  text-jptech-brand-blue">
                  Visão
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-gray-500">
                  Almejamos ser a escolha indiscutível em tecnologia para
                  empresas e instituições governamentais. Nosso nome será
                  sinônimo de referência, destacando-nos por nossa excelência,
                  inovação e compromisso com a satisfação do cliente.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                alt="Customer profile user interface"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
