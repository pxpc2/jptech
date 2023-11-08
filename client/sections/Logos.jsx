import Image from 'next/image';

export default function Marcas() {
  return (
    <div className="bg-gray-50 py-24 my-8">
      <div className="container m-auto space-y-8 px-6 text-gray-500 md:px-12 lg:px-40">
        <div className="mb-8">
          <h6
            className="text-[40px] pb-4 text-center title font-medium
            bg-clip-text text-transparent 
            bg-gradient-to-r from-[#4367b6] to-[#0f2541] transition hover:scale-105"
          >
            As melhores marcas do mercado.
          </h6>
          <p className="text-center text-lg pb-8">
            Trabalhamos com os maiores, garantindo desempenho, eficiência,
            durabilidade e segurança aos nossos clientes.
            <br />
            <a
              href="/contato"
              className="underline hover:text-jptech-brand-blue
            text-black"
            >
              Entre em contato aqui
            </a>
          </p>
        </div>
        <div className="sm:px-8">
          <div className="flex flex-col items-center sm:flex-row sm:gap-24 gap-8 lg:justify-center">
            <img
              src="/logos/lenovo-logo-0.png"
              loading="lazy"
              className="w-[200px] h-[200px]  transition hover:grayscale"
              alt="logo"
            />
            <img
              src="/logos/logo-DELL.png"
              loading="lazy"
              className="w-[200px] h-[200px]  transition hover:grayscale"
              alt="logo"
            />
            <img
              src="/logos/logo-HP.png"
              loading="lazy"
              className="w-[200px] h-[200px]  transition hover:grayscale"
              alt="logo"
            />
            <img
              src="/logos/samsung.png"
              loading="lazy"
              className="w-[200px] h-[200px]  transition hover:grayscale"
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
