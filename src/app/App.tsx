import { LoadingScreen } from './components/LoadingScreen';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Solutions } from './components/Solutions';
import { Performance } from './components/Performance';
import { Team } from './components/Team';
import { CorporateData } from './components/CorporateData';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <>
      <LoadingScreen />
      <Navigation />
      <main>
        <Hero onContactClick={scrollToContact} />
        <About />
        <Services />
        <Solutions />
        <Performance />
        <Team />
        <CorporateData />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
