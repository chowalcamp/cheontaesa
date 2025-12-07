'use client';

import { Hero, About, Services, Gallery, News, Contact } from '@/components/sections';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <News />
      <Contact />
    </main>
  );
}

