import { faqItems } from '@/config/faq';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle, ArrowRight } from 'lucide-react';

export default function FAQ() {
  const scrollToContact = () => {
    const el = document.getElementById('agenda');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#fbf8f0] border-t border-[#e9e2d0] scroll-mt-20">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#e9e2d0] text-[11px] tracking-[0.14em] uppercase font-bold text-[#0f172a] shadow-sm mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f172a]">
            Perguntas Frequentes
          </h2>
          <p className="mt-3 text-[14px] sm:text-[15px] text-[#64748b]">
            Tudo o que você precisa saber sobre a contratação, montagem, bebidas e formas de pagamento.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3.5">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-[#e9e2d0] rounded-2xl px-6 bg-white shadow-sm overflow-hidden"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5 text-[15px] font-bold text-[#0f172a]">
                  <span>{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-[#475569] text-[14px] leading-[1.65] pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12 p-6 rounded-2xl bg-white border border-[#e9e2d0] max-w-md mx-auto shadow-sm">
            <p className="text-[13px] text-[#64748b] mb-3">
              Ficou com alguma dúvida específica para o seu evento?
            </p>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-1.5 text-[#0f172a] text-sm font-bold hover:text-[#d4af37] transition"
            >
              <span>Fale com a nossa equipe no WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
