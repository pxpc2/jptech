import Image from 'next/image';
export default function Hero() {
  return (
    <div className="bg-white sm:pb-24 sm:pt-12">
      <div>
        {/* Hero card */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2" />
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  fill
                  className="h-full w-full object-cover"
                  src="/hero-bg.png"
                  priority={true}
                  alt="People working on laptops"
                  sizes="(max-width: 768px) 100vw, 100vw"
                />
                <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
              </div>
              <div className="relative px-8 py-28 sm:px-6 lg:px-8">
                <h1
                  className="text-center text-4xl font-medium tracking-tight
                 sm:text-5xl hover:scale-105 lg:text-6xl ease-in-out duration-300
                 title"
                >
                  <span className="block title text-slate-200 mb-2">
                    Seu parceiro em
                  </span>
                  <span
                    className="bg-clip-text font-bold text-transparent 
                  bg-gradient-to-r title from-[#ffffff] to-[#4a84cf]"
                  >
                    soluções tecnológicas
                  </span>
                </h1>
                <p
                  className="mt-6 max-w-lg mx-auto py-12 sm:py-4 text-center 
                font-normal text-xl text-slate-200 sm:max-w-3xl"
                >
                  Abraçamos a missão de ser muito mais do que um simples
                  provedor de tecnologia. Com uma dedicação incessante à
                  inovação e excelência, estamos aqui para traduzir suas
                  necessidades em soluções tangíveis e eficazes.
                </p>
                <div className="mt-10 max-w-sm mx-auto sm:max-w-none flex justify-center">
                  <div className="items-center justify-center">
                    <a
                      href="/quemsomos"
                      className="flex flex-row items-center text-center align-top px-6 py-3
                     border border-transparent text-lg font-normal rounded-md shadow-sm
                     text-gray-800  bg-white hover:bg-indigo-100 sm:px-8"
                    >
                      Conheça mais
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
