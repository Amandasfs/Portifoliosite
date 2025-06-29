import { I18nextProviderWrapper } from '../components/I18nextProviderWrapper';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Contact from '../components/Contact';
import AboutMe from '../components/AboutMe';
import Footer from '../components/Footer';
import Product from '../components/Product';

export default function HomePage() {
  return (
    <I18nextProviderWrapper>
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <Product />
        <Contact />
        <Footer />
      </main>
    </I18nextProviderWrapper>
  );
}
