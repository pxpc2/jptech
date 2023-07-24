import ValoresMissaoGrid from '@/components/ValoresMissaoGrid';
import QuemSomosHero from '@/sections/QuemSomos';

export default function QuemSomos() {
  return (
    <div className="w-full relative">
      <QuemSomosHero />
      <ValoresMissaoGrid />
      <div className="bg-slate-50">
        <div className="max-w-2xl mx-auto py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r
            from-[#4367b6] to-[#15355f] sm:text-4xl"
          >
            <span className="block">Entre em contato e tire suas dúvidas.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-slate-900">
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
            Malesuada adipiscing sagittis vel nulla nec.
          </p>
          <a
            href="/contato"
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
