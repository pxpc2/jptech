export default function NossosProdutos() {
  return (
    <div className="py-16 bg-gray-50 overflow-hidden lg:py-32">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <svg
          className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
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
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
          />
        </svg>

        <div className="relative">
          <h2
            className="text-left text-4xl leading-snug bg-clip-text font-bold text-transparent 
                  bg-gradient-to-r from-[#4367b6] to-[#0f2541] px-12"
          >
            Estamos empenhados no desenvolvimento da nossa própria linha de
            produtos de TI. Traremos novidades em breve.
          </h2>
          <p className="mt-4 max-w-3xl px-12 leading-relaxed text-left text-xl text-gray-500">
            Inscreva-se em nossa correspondência para receber novidades em
            primeira mão.
          </p>
        </div>
        <div className="mt-8 px-12">
          <form className="mt-4 sm:flex sm:max-w-2xl">
            <label htmlFor="email-address" className="sr-only">
              Endereço de email
            </label>
            <input
              type="email"
              name="email-address"
              id="email-address"
              autoComplete="email"
              required
              className="py-2 px-4 block w-full shadow-sm 
              border-gray-300 border rounded-md focus:outline-none focus:ring-1
              focus:border-jptech-brand-blue focus:ring-jptech-brand-blue"
              placeholder="Entre com seu email"
            />
            <button
              type="submit"
              className="w-[50%] ml-4 inline-flex items-center justify-center
              py-2 border border-transparent rounded-md shadow-sm 
              text-base font-medium text-white bg-jptech-brand-blue
               hover:bg-jptech-brand-lighterblue focus:outline-none focus:ring-2 
               focus:ring-offset-2 focus:ring-indigo-500"
            >
              Inscrever-se
            </button>
          </form>
        </div>
        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center"></div>
        <svg
          className="hidden lg:block absolute right-full transform translate-x-1/2"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
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
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
          />
        </svg>
      </div>
    </div>
  );
}
