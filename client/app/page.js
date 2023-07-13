import Navbar from '@/components/Navbar';
import Hero from '@/sections/Hero';
import Marcas from '@/sections/Marcas';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-white overflow-hidden">
      <Navbar />
      <Hero />
      <Marcas />
    </main>
  );
}
