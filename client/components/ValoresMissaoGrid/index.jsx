import {
  AnnotationIcon,
  GlobeAltIcon,
  ScaleIcon,
  StarIcon,
} from '@heroicons/react/outline';
import { version } from 'react-dom';

const valores = [
  {
    id: 1,
    title: 'Excelência',
    desc: 'Buscamos a excelência em tudo o que fazemos, desde a seleção cuidadosa de nossos produtos até a entrega de um atendimento personalizado e suporte técnico especializado. Comprometemo-nos a fornecer soluções tecnológicas de alta qualidade que atendam e superem as expectativas dos nossos clientes.',
    icon: StarIcon,
  },
  {
    id: 2,
    title: 'Confiabilidade',
    desc: 'Agimos com honestidade, transparência e ética em todas as nossas interações. Nossos relacionamentos com clientes, parceiros e funcionários são baseados em confiança mútua e respeito, e estamos comprometidos em seguir os mais altos padrões de integridade em todos os aspectos do nosso negócio.',
    icon: ScaleIcon,
  },
  {
    id: 3,
    title: 'Inovação',
    desc: 'Valorizamos a inovação como um elemento essencial para impulsionar o sucesso dos nossos clientes. Estamos constantemente atualizados sobre as últimas tendências tecnológicas e procuramos oferecer soluções criativas e disruptivas que atendam às necessidades em constante evolução do mercado.',
    icon: GlobeAltIcon,
  },
  {
    id: 4,
    title: 'Compromisso com o cliente',
    desc: 'Colocamos nossos clientes em primeiro lugar, garantindo sua satisfação, fidelidade e sucesso em todas as interações. Nosso compromisso com o cliente é a base da nossa parceria a longo prazo. Estamos sempre dispostos a lhe ouvir e ajudar da melhor forma possível.',
    icon: AnnotationIcon,
  },
];

export default function ValoresMissaoGrid() {
  return (
    <div className="py-12 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2
            className="text-lg text-jptech-brand-blue font-semibold tracking-wide"
          >
            Valores
          </h2>
          <p
            className="mt-2 text-3xl font-semibold tracking-tight pb-6 
            bg-clip-text text-transparent bg-gradient-to-r
            from-[#4367b6] to-[#15355f] sm:text-4xl"
          >
            Conheça os nossos valores
          </p>
        </div>

        <div className="mt-10">
          <dl
            className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 
          md:gap-y-10"
          >
            {valores.map((v) => (
              <div key={v.id} className="relative">
                <dt>
                  <div
                    className="absolute flex items-center justify-center
                   h-12 w-12 rounded-md bg-jptech-brand-blue text-white"
                  >
                    <v.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 hover:underline text-lg font-medium text-jptech-brand-blue">
                    {v.title}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base leading-7 text-gray-500">
                  {v.desc}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
