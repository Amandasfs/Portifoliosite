import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import Product from '@/components/Product';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  console.log({ Header, Hero, AboutMe, Product, Contact, Footer });
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <Product />
        <Contact />
        <Footer />
      </main>
    </>
  );
}