import Image from 'next/image';

export default function Solucoes() {
  return (
    <div className="max-w-7xl mx-auto sm:px-12">
      <div
        className="relative shadow-lg hover:shadow-2xl 
      duration-500 sm:rounded-2xl sm:overflow-hidden"
      >
        {' '}
        <div
          className="flex flex-col sm:flex-row px-8 sm:px-0 sm:py-24 
        flex-nowrap items-center sm:ml-8 sm:gap-20"
        >
          <div className="SOLUCOES__IMAGEM w-full mt-8 sm:mt-0 mb-4 sm:mb-0">
            <Image
              src={'/territorio-nacional.png'}
              alt="triangle"
              width={500}
              height={500}
              className="ease-in-out duration-500 sm:hover:scale-105"
            />
          </div>
          <div className="SOLUCOES__TEXTOS flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row flex-nowrap sm:w-[500px]">
              <h1
                className="text-gray-800 text-2xl sm:text-[40px] text-center
               sm:text-left  font-medium sm:leading-[48px] sm:w-[400px]"
              >
                Levamos a inovação tecnológica para&nbsp;
                <span
                  className="bg-clip-text font-medium text-transparent
                 bg-gradient-to-r from-[#27478d] to-[#2a6ec7]"
                >
                  todo
                </span>{' '}
                o território nacional.
              </h1>
            </div>

            <p
              className="text-slate-800 font-normal text-sm sm:text-md sm:w-[400px]
             text-center pb-8 ease-in-out duration-500 hover:underline  sm:text-left"
            >
              Com uma abordagem que transcende fronteiras, estamos empenhados em
              difundir a inovação tecnológica por todo o Brasil. Do Norte ao
              Sul, do Leste ao Oeste, nosso compromisso é levar soluções de
              ponta a cada canto do território nacional. Combinando expertise,
              paixão e determinação, estamos construindo um futuro digital mais
              acessível e promissor para todos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
