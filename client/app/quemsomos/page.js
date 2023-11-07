'use client';
import MissaoVisao from '@/components/MissaoVisao';
import ValoresMissaoGrid from '@/components/ValoresMissaoGrid';
import GradientWrapper from '@/components/wrappers/GradientWrapper';
import QuemSomosHero from '@/sections/QuemSomos';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function QuemSomos() {
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
    <div className="w-full relative">
      <QuemSomosHero />
      <MissaoVisao />
      <GradientWrapper>
        <ValoresMissaoGrid />
      </GradientWrapper>
    </div>
  );
}
