import MissaoVisao from '@/components/MissaoVisao';
import ValoresMissaoGrid from '@/components/ValoresMissaoGrid';
import GradientWrapper from '@/components/wrappers/GradientWrapper';
import QuemSomosHero from '@/sections/QuemSomos';

export default function QuemSomos() {
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
