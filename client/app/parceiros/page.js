import Image from 'next/image';

export default function ParceirosPage() {
  return (
    <section className="py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <a href="https://gifer.com.br/">
            {' '}
            <Image
              className="mx-auto"
              src="/logos/logoGIFER.png"
              alt="GIFER"
              width={164}
              height={80}
            />
          </a>

          <blockquote className="mt-10">
            <div
              className="max-w-3xl mx-auto text-center text-xl leading-9 
            font-medium text-gray-900"
            >
              <p>
                &ldquo;A empresa veio de um sonho antigo de poder ofertar os
                melhores produtos para a Administração Pública, considerando
                sempre o melhor custo efetividade de produtos de alta
                performance e tecnologia de ponta&rdquo;
              </p>
            </div>
            <footer className="mt-8">
              <div className="md:flex md:items-center md:justify-center">
                <div className="md:flex-shrink-0">
                  <Image
                    className="mx-auto h-10 w-10 rounded-full"
                    src="/profilepic-placeholder.png"
                    alt="profile pic"
                    width={200}
                    height={200}
                  />
                </div>
                <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                  <div className="text-base font-medium text-gray-900">
                    João Pedro
                  </div>

                  <svg
                    className="hidden md:block mx-1 h-5 w-5 text-indigo-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>

                  <div className="text-base font-medium text-gray-500">
                    CEO, GIFER Comércio
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
