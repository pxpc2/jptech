import Image from 'next/image';

export default function Marcas() {
  return (
    <div className="bg-gray-50 py-24 my-8">
      <div className="container m-auto space-y-8 px-6 text-gray-500 md:px-12 lg:px-40">
        <div className="mb-8">
          <h6
            className="text-[35px] pb-4 text-center font-medium
          text-black transition hover:scale-105"
          >
            As melhores marcas do mercado.
          </h6>
          <p className="text-center pb-8">
            Trabalhamos com os maiores, garantindo desempenho, eficiência,
            durabilidade e segurança aos nossos clientes.
            <br />
            <a
              href="/contato"
              className="underline hover:text-jptech-brand-blue
            text-black"
            >
              Entre em contato agora!
            </a>
          </p>
        </div>
        <div className="px-8">
          <div className="flex flex-row gap-24 lg:justify-center">
            <img
              src="/logos/lenovo-logo-0.png"
              loading="lazy"
              className="w-[200px] h-[200px] grayscale transition hover:grayscale-0"
              alt="logo"
            />
            <img
              src="/logos/logo-DELL.png"
              loading="lazy"
              className="w-[200px] h-[200px] grayscale transition hover:grayscale-0"
              alt="logo"
            />
            <img
              src="/logos/logo-HP.png"
              loading="lazy"
              className="w-[200px] h-[200px] grayscale transition hover:grayscale-0"
              alt="logo"
            />
            <img
              src="/logos/samsung.png"
              loading="lazy"
              className="w-[200px] h-[200px] grayscale transition hover:grayscale-0"
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
