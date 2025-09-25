import Hero from './components/Hero';
import Features from './components/Features';
import { Community }  from './components/Community';
import Footer from './components/Footer';
import LenisProvider from './LenisProvider';

export default function Home() {
  return (
    <LenisProvider>
      <main>
        <Hero />
        <Community />
        <Features />
        <Footer />
      </main>
    </LenisProvider>
  );
}