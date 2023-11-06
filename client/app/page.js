'use client';
import GradientWrapper from '@/components/wrappers/GradientWrapper';
import CTA from '@/sections/CTA';
import Features from '@/sections/World';
import Hero from '@/sections/Hero';
import Marcas from '@/sections/Logos';
import Values from '@/sections/Values';
import gsap from 'gsap';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="w-full">
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
    </main>
  );
}
