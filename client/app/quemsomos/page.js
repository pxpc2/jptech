import Header from '@/components/Header';
import {
  CalendarIcon,
  CheckIcon,
  PlusIcon,
  UsersIcon,
  ViewBoardsIcon,
  ViewListIcon,
} from '@heroicons/react/solid';
import Image from 'next/image';

const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 2,
    question: 'How do you make holy water?',
    answer:
      'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 3,
    question: 'Why do you never see elephants hiding in trees?',
    answer:
      "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 4,
    question: 'What do you call someone with no body and no nose?',
    answer:
      'Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 5,
    question: "Why can't you hear a pterodactyl go to the bathroom?",
    answer:
      'Because the pee is silent. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 6,
    question: 'Why did the invisible man turn down the job offer?',
    answer:
      "He couldn't see himself doing it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
];

export default function QuemSomos() {
  return (
    <div className="w-full relative">
      <div className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
          <div className="text-base max-w-prose mx-auto lg:max-w-none">
            <h2 className="bg-clip-text font-medium text-transparent bg-gradient-to-r from-[#27478d] to-[#2a6ec7] uppercase">
              Quem Somos
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold text-jptech-brand-blue sm:text-4xl">
              Conheça nossa história
            </p>
          </div>
          <div className="relative z-10 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">
            <p className="text-lg text-gray-500">
              Somos uma empresa em ascensão no mercado de TI, dedicada a
              fornecer soluções tecnológicas de ponta para empresas e
              instituições governamentais. Com um amplo portfólio de produtos e
              serviços, atendemos a todo tipo de necessidade e oferecemos
              suporte personalizado aos nossos clientes.
            </p>
          </div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
            <div className="relative z-10">
              <div className="prose prose-indigo text-gray-500 mx-auto text-left lg:max-w-none">
                <p>
                  Nossa gama de produtos inclui notebooks, tablets, mesas
                  digitalizadoras, projetores, impressoras, desktops,
                  microcomputadores, drones e periféricos de informática de alta
                  qualidade. Cada item é cuidadosamente selecionado para atender
                  às demandas de um ambiente empresarial moderno.
                  <br />
                </p>
                <p>
                  <br />
                  Entendemos a importância da tecnologia para o sucesso. Nosso
                  compromisso é oferecer soluções avançadas e confiáveis,
                  impulsionando o crescimento e a eficiência operacional do
                  cliente.
                  <br />
                </p>
                <p>
                  <br />
                  Com um serviço excepcional, entrega pontual e suporte
                  especializado, estamos prontos para ajudar as organizações a
                  alcançarem seus objetivos e a enfrentarem os desafios
                  tecnológicos da atualidade.
                </p>
              </div>
              <div className="mt-10 flex text-base max-w-prose mx-auto lg:max-w-none">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-5 py-3 border
                     border-transparent text-base font-medium rounded-md text-white
                      bg-jptech-brand-blue hover:bg-jptech-brand-lighterblue"
                  >
                    Nossos Produtos
                  </a>
                </div>
                <div className="rounded-md shadow ml-4">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-5 py-3 border
                     border-transparent text-base font-medium rounded-md text-jptech-brand-blue
                      bg-white hover:bg-gray-50"
                  >
                    Fale Conosco
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
              <svg
                className="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
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
                  height={384}
                  fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)"
                />
              </svg>
              <blockquote className="relative bg-white rounded-lg shadow-lg">
                <div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                  <Image
                    src={'/logos/blacklogo-jptech.svg'}
                    alt="logo"
                    width={300}
                    height={100}
                  />
                  <div className="relative text-lg text-gray-700 font-medium mt-8">
                    <svg
                      className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="relative lowercase px-8">
                      SEU PARCEIRO CONFIÁVEL EM SOLUÇÕES TECNOLÓGICAS PARA O
                      FUTURO.
                    </p>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      {/* Logo cloud */}

      {/* FAQs */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold  text-gray-900 text-center">
          Valores e Missão
        </h2>
        <div className="mt-12">
          <dl
            className="space-y-10 md:space-y-0 md:grid md:grid-cols-2
           md:grid-rows-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3"
          >
            {faqs.map((item) => (
              <div key={item.id}>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  {item.question}
                </dt>
                <dd className="mt-2 text-base text-gray-500">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-slate-100">
        <div className="max-w-2xl mx-auto py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r
           from-[#27478d] to-[#2a6ec7] sm:text-4xl"
          >
            <span className="block">Entre em contato e tire suas dúvidas.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-slate-900">
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
            Malesuada adipiscing sagittis vel nulla nec.
          </p>
          <a
            href="#"
            className="mt-8 w-full bg-jptech-brand-blue border border-transparent rounded-md 
            py-3 px-5 inline-flex items-center justify-center text-base font-medium
             text-slate-200 hover:bg-jptech-brand-lighterblue sm:w-auto"
          >
            Fale conosco
          </a>
        </div>
      </div>
    </div>
  );
}
