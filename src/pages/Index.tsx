
import Hero from '@/components/home/Hero';
import DirectOrderFeaturedProducts from '@/components/home/DirectOrderFeaturedProducts';
import Features from '@/components/home/Features';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <DirectOrderFeaturedProducts />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
