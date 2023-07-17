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
        <div class="custom-shape-divider-bottom-1689604045">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>

      <div className="bg-slate-200 py-14">
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
