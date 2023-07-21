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

export default function ValoresMissaoGrid() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <h2
        className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r
       from-[#4367b6] to-[#15355f] text-center"
      >
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
  );
}
