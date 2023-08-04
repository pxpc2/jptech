import Image from 'next/image';

export default function Solucoes() {
  return (
    <div className="max-w-7xl mx-auto sm:px-12 lg:px-12 sm:py-12">
      <div
        className="relative shadow-lg hover:shadow-2xl 
      duration-500 sm:rounded-2xl sm:overflow-hidden"
      >
        {' '}
        <div
          className="flex flex-col sm:flex-row px-12 sm:px-0 sm:py-24 
        flex-nowrap items-center ml-8 sm:gap-20 "
        >
          <div className="SOLUCOES__IMAGEM w-full">
            <Image
              src={'/world.png'}
              alt="triangle"
              width={700}
              height={700}
              className="ease-in-out duration-500 sm:hover:scale-105"
            />
          </div>
          <div className="SOLUCOES__TEXTOS flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row flex-nowrap sm:w-[500px]">
              <h1
                className="text-gray-800 text-3xl sm:text-[40px] text-center
               sm:text-left  font-semibold sm:leading-[48px] sm:w-[400px]"
              >
                Levamos a inovação tecnológica para&nbsp;
                <span
                  className="bg-clip-text font-semibold text-transparent
                 bg-gradient-to-r from-[#27478d] to-[#2a6ec7]"
                >
                  todo
                </span>{' '}
                o território nacional.
              </h1>
            </div>

            <p
              className="text-slate-800 font-normal text-[20px] leading-[32px] w-[400px] sm:h-[135px]
             text-center pb-8 ease-in-out duration-500 hover:underline  sm:pb-0 sm:text-left"
            >
              Nos tornamos referência em tecnologia para empresas e instituições
              governamentais, reconhecidos por nossa excelência, inovação e
              compromisso com a satisfação do cliente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
