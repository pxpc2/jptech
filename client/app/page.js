import Footerzin from '@/components/Footer';
import Header from '@/components/Header';
import GradientWrapper from '@/components/wrappers/GradientWrapper';
import CTA from '@/sections/CTA';
import Features from '@/sections/Features';
import Hero from '@/sections/Hero';
import Marcas from '@/sections/Logos';
import Values from '@/sections/Values';

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <Hero />

      <GradientWrapper>
        <Features />
        <Values />
      </GradientWrapper>

      <GradientWrapper>
        <CTA />
      </GradientWrapper>

      <GradientWrapper>
        <Marcas />
      </GradientWrapper>

      <Footerzin />
    </main>
  );
}
