import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { LogoMarquee } from './components/LogoMarquee';
import { Benefits } from './components/Benefits';
import { Stats } from './components/Stats';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <LogoMarquee />
      <Benefits />
      <Stats />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
