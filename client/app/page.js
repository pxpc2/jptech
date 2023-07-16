import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
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
      <div className="bg-hero-navbar-img bg-cover">
        <Navbar />
        <Hero />
      </div>
      <div className="bg-slate-100">
        <Marcas />
      </div>
      <div className="bg-white">
        <Solucoes />
        <Valores />
      </div>
      <div className="bg-slate-200">
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
