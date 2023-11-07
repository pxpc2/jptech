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
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

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
