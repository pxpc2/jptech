import Image from 'next/image';

export default function Solucoes() {
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-12">
      <div className="relative shadow-xl sm:rounded-2xl  sm:overflow-hidden">
        {' '}
        <div className="flex flex-row flex-nowrap items-center gap-20 ">
          <div className="SOLUCOES__IMAGEM w-full">
            <Image
              src={'/tech-world.png'}
              alt="triangle"
              width={700}
              height={700}
              className=""
            />
          </div>
          <div className="SOLUCOES__TEXTOS  flex flex-col gap-8">
            <div className="flex flex-row flex-nowrap w-[500px]">
              <h1 className="text-gray-800 text-[40px] font-semibold leading-[48px] w-[250px]">
                Levamos a inovação tecnológica para&nbsp;
                <span className="bg-clip-text font-medium text-transparent bg-gradient-to-r from-[#27478d] to-[#2a6ec7]">
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

            <p
              className="text-slate-800 font-normal text-[20px] leading-[32px] w-[500px] h-[135px]
            ease-in-out duration-500 hover:scale-105"
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
