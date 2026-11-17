import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import Packages from '@/components/sections/Packages';
import AllIncluded from '@/components/sections/AllIncluded';
import DrinksMenu from '@/components/sections/DrinksMenu';
import HowItWorks from '@/components/sections/HowItWorks';
import Gallery from '@/components/sections/Gallery';
import Calculator from '@/components/sections/Calculator';
import AgendaCalendar from '@/components/sections/AgendaCalendar';
import Testimonials from '@/components/sections/Testimonials';
import Corporate from '@/components/sections/Corporate';
import About from '@/components/sections/About';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import ScrollProgress from '@/components/ui/scroll-progress';
import FloatingWhatsApp from '@/components/ui/floating-whatsapp';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F9F6F0] text-[#0A1931]">
      <Header />
      <ScrollProgress />
      <FloatingWhatsApp />
      
      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. Faixa Autoridade Dark */}
        <Stats />

        {/* 3. Pacotes Ancorados / Preços Transparentes */}
        <Packages />

        {/* 4. Tudo Incluso. Você só curte */}
        <AllIncluded />

        {/* 5. Carta de Drinks Autorais Dark */}
        <DrinksMenu />

        {/* 6. Como Funciona, Sem Drama */}
        <HowItWorks />

        {/* 7. Galeria de Fotos Reais do Acervo com Filtros */}
        <Gallery />

        {/* 8. Simulador de Orçamento Preservado */}
        <div id="calculadora" className="scroll-mt-20">
          <Calculator />
        </div>

        {/* 9. Agendamento com Calendário Interativo */}
        <AgendaCalendar />

        {/* 10. Depoimentos Reais */}
        <Testimonials />

        {/* 11. Corporativo */}
        <Corporate />

        {/* 12. Quem Somos / História dos Fundadores */}
        <About />

        {/* 13. FAQ */}
        <FAQ />

        {/* 14. Contato */}
        <Contact />
      </main>
      
      {/* 15. Footer Oficial */}
      <Footer />
    </div>
  );
};

export default Index;

