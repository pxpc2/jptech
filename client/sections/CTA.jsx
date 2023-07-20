import Image from 'next/image';

export default function CTA() {
  return (
    <div className="relative py-16 bg-white">
      <div
        className="hidden absolute top-0 inset-x-0 h-1/2 bg-gray-50 lg:block"
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto bg-jptech-brand-blue lg:bg-transparent lg:px-8">
        <div className="lg:grid lg:grid-cols-12">
          <div className="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
            <div
              className="absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden"
              aria-hidden="true"
            />
            <div className="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
              <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                <Image
                  src={'/people.jpg'}
                  alt="img"
                  width={700}
                  height={700}
                  className="object-cover object-center rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>

          <div className="relative bg-jptech-brand-blue lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">
            <div
              className="hidden absolute inset-0 overflow-hidden rounded-3xl lg:block"
              aria-hidden="true"
            >
              <svg
                className="absolute bottom-full left-full transform translate-y-1/3 -translate-x-2/3 xl:bottom-auto xl:top-0 xl:translate-y-0"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-indigo-500"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                />
              </svg>
              <svg
                className="absolute top-full transform -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-indigo-500"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                />
              </svg>
            </div>
            <div className="relative max-w-md mx-auto py-12 px-4 space-y-8 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-4">
              <h2
                className="text-3xl font-semibold text-slate-200 hover:underline"
                id="join-heading"
              >
                Conheça nossa empresa
              </h2>
              <p className="text-lg text-slate-200">
                Com um serviço excepcional, entrega pontual e suporte
                especializado, estamos prontos para ajudar as organizações a
                alcançarem seus objetivos e a enfrentarem os desafios
                tecnológicos da atualidade.
              </p>
              <a
                className="block w-full py-3 px-5 text-center bg-slate-100 border
                 border-transparent rounded-md shadow-md text-base font-medium
                  text-jptech-brand-blue hover:bg-gray-200 sm:inline-block sm:w-auto"
                href="#"
              >
                Explore nossos produtos
              </a>
              <Image
                src={'/jplogo.png'}
                alt="logo"
                width={500}
                height={500}
                className="opacity-50 hover:scale-110 ease-in-out duration-300 lg:ml-24"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
