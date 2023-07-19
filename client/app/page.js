import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import GradientWrapper from '@/components/wrappers/GradientWrapper';
import CTA from '@/sections/CTA';
import Hero from '@/sections/Hero';
import Historia from '@/sections/Historia';
import Marcas from '@/sections/Marcas';
import Solucoes from '@/sections/Solucoes';
import Valores from '@/sections/Valores';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="overflow-hide">
      <div className="relative">
        <GradientWrapper>
          <Navbar />
          <Hero />
        </GradientWrapper>
      </div>
      <Solucoes />
      <Valores />
      <Marcas />

      <div className="bg-slate-300">
        <CTA />
      </div>
      <div className="bg-white">
        <Historia />
      </div>
      <div className="bg-slate-400">
        <Footer />
      </div>
    </main>
  );
}
