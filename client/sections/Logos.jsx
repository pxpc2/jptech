import Image from 'next/image';

export default function Marcas() {
  return (
    <div className="py-28 bg-slate-900">
      <div
        className="max-w-screen-xl mx-auto px-12 flex-wrap gap-x-12 justify-between items-center 
      md:flex md:px-8 lg:flex-nowrap"
      >
        <div
          className="max-w-xl space-y-6 items-center justify-center flex flex-col
        sm:items-start"
        >
          <p
            className="text-slate-200 text-3xl text-center sm:text-left font-medium sm:text-[40px]
          sm:leading-snug"
          >
            As melhores marcas do mercado.
          </p>
          <p className="text-slate-300 text-center text-[15px] sm:text-left">
            Trabalhamos com os maiores, garantindo desempenho, eficiência,
            durabilidade e segurança aos nossos clientes.
          </p>

          <a href="/contato" className="">
            <button
              className="px-4 py-3 mt-8 border border-transparent text-[15px] 
              font-normal rounded-md shadow-sm
           text-jptech-brand-blue bg-slate-100 hover:bg-slate-200 sm:px-8"
            >
              Entre em contato!
            </button>
          </a>
        </div>
        <div className="flex-none mt-12 text-white lg:mt-0">
          <ul
            className="grid grid-cols-2 gap-8 items-center justify-center [&>*]:w-full [&>*]:h-20
           [&>*]:flex sm:[&>*]:px-14"
          >
            {/* LOGO 1 */}
            <li>
              <Image
                src={'/logos/lenovo-logo-0.png'}
                alt="dell"
                width={100}
                height={100}
              />
            </li>
            {/* LOGO 2 */}
            <li>
              <Image
                src={'/logos/logo-SAMSUNG.png'}
                alt="dell"
                width={200}
                height={100}
              />
            </li>
            {/* LOGO 3 */}
            <li>
              <Image
                src={'/logos/logo-DELL.svg'}
                alt="dell"
                width={100}
                height={100}
              />
            </li>
            {/* LOGO 4 */}
            <li>
              <Image
                src={'/logos/logo-HP.png'}
                alt="dell"
                width={100}
                height={100}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
