'use client';
import MissaoVisao from '@/components/MissaoVisao';
import ValoresMissaoGrid from '@/components/ValoresMissaoGrid';
import GradientWrapper from '@/components/wrappers/GradientWrapper';
import QuemSomosHero from '@/sections/QuemSomos';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function QuemSomos() {
  useEffect(() => {
    const lenis = new Lenis();

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
