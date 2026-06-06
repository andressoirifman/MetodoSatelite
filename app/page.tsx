import Header from './Header';
import Hero from './Hero';
import Dolor from './Dolor';
import Modulos from './Modulos';
import Entregables from './Entregables';
import Testimonios from './Testimonios';
import CTAFinal from './CTAFinal';
import Footer from './Footer';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <Dolor />
      <Modulos />
      <Entregables />
      <Testimonios />
      <CTAFinal />
      <Footer />
    </main>
  );
}
