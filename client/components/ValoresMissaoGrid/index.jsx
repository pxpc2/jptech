const valores = [
  {
    id: 1,
    title: 'Excelência',
    desc: 'Buscamos a excelência em tudo o que fazemos, desde a seleção cuidadosa de nossos produtos até a entrega de um atendimento personalizado e suporte técnico especializado. Comprometemo-nos a fornecer soluções tecnológicas de alta qualidade que atendam e superem as expectativas dos nossos clientes.',
  },
  {
    id: 2,
    title: 'Inovação',
    desc: 'Valorizamos a inovação como um elemento essencial para impulsionar o sucesso dos nossos clientes. Estamos constantemente atualizados sobre as últimas tendências tecnológicas e procuramos oferecer soluções criativas e disruptivas que atendam às necessidades em constante evolução do mercado',
  },
  {
    id: 3,
    title: 'Confiabilidade',
    desc: 'Agimos com honestidade, transparência e ética em todas as nossas interações. Nossos relacionamentos com clientes, parceiros e funcionários são baseados em confiança mútua e respeito, e estamos comprometidos em seguir os mais altos padrões de integridade em todos os aspectos do nosso negócio',
  },
  {
    id: 4,
    title: '',
    desc: '',
  },
  {
    id: 5,
    title: 'Compromisso com o cliente',
    desc: 'Colocamos nossos clientes em primeiro lugar, garantindo sua satisfação, fidelidade e sucesso em todas as interações. Nosso compromisso com o cliente é a base da nossa parceria a longo prazo.',
  },
  {
    id: 6,
    title: '',
    desc: '',
  },
];

export default function ValoresMissaoGrid() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <h2
        className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r
       from-[#4367b6] to-[#15355f] text-center"
      >
        Valores
      </h2>
      <div className="mt-12">
        <dl
          className="space-y-10 md:space-y-0 md:grid md:grid-cols-2
       md:grid-rows-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3"
        >
          {valores.map((item) => (
            <div key={item.id}>
              <dt className="text-lg text-center leading-6 font-medium text-gray-900">
                {item.title}
              </dt>
              <dd className="mt-2 text-base text-center text-gray-500">
                {item.desc}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
