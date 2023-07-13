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
    <main className="bg-white overflow-hidden">
      <Navbar />
      <Hero />
      <div className="bg-gray-200">
        <Marcas />
      </div>
      <Solucoes />
      <Valores />
      <div className="bg-gray-200">
        <CTA />
      </div>
      <Historia />
      <div className="bg-gray-500">
        <Footer />
      </div>
    </main>
  );
}
