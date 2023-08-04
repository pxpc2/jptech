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
                  className="h-full w-full object-cover"
                  src="/hero-bg.png"
                  alt="People working on laptops"
                  width={800}
                  height={500}
                />
                <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
              </div>
              <div className="relative px-8 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1
                  className="text-center text-4xl font-extrabold tracking-tight
                 sm:text-5xl hover:scale-105 lg:text-6xl ease-in-out duration-300"
                >
                  <span className="block text-white">Seu parceiro em</span>
                  <span
                    className="bg-clip-text font-bold text-transparent 
                  bg-gradient-to-r from-[#b1e4ff] to-[#6dacff]"
                  >
                    soluções tecnológicas
                  </span>
                </h1>
                <p className="mt-6 max-w-lg mx-auto text-center text-xl text-slate-200 sm:max-w-3xl">
                  Com um serviço excepcional, entrega pontual e suporte
                  especializado, estamos prontos para ajudar as organizações a
                  alcançarem seus objetivos e a enfrentarem os desafios
                  tecnológicos da atualidade.
                </p>
                <div className="mt-10 max-w-sm mx-auto sm:max-w-none flex justify-center">
                  <div className="items-center justify-center">
                    <a href="/quemsomos">
                      <button
                        className="flex flex-row items-center  align-middle gap-2 px-4 py-3
                     border border-transparent text-base font-medium rounded-md shadow-sm
                      text-jptech-brand-blue bg-white hover:bg-indigo-50 sm:px-8"
                      >
                        Conheça mais
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
                      </button>
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
