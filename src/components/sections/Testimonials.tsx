import { testimonials } from '@/config/testimonials';
import { Star, MessageSquareQuote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-white border-t border-[#e9e2d0] scroll-mt-20">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        
        {/* Section Title */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fbf8f0] border border-[#e9e2d0] text-[11px] tracking-[0.14em] uppercase font-bold text-[#0f172a] shadow-sm mb-4">
            <MessageSquareQuote className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Avaliações Reais de Noivas e Anfitriões</span>
          </div>
          <h2 className="serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f172a]">
            O que dizem sobre o bar da CK
          </h2>
          <p className="mt-3 text-[14px] sm:text-[15px] text-[#64748b]">
            Mais de 120 famílias e casais já confiaram na gente para servir os melhores momentos de suas vidas.
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{ align: 'start', loop: true }}
          plugins={[Autoplay({ delay: 6000 })]}
          className="max-w-6xl mx-auto px-4 sm:px-0"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 p-2.5">
                <div className="p-6 sm:p-7 rounded-[22px] bg-[#fcfaf6] border border-[#e9e2d0] h-full flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#d4af37]/50 transition">
                  <div>
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-[13px] sm:text-[14px] leading-[1.65] text-[#334155] italic mb-6">
                      "{testimonial.text}"
                    </p>
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center gap-3.5 pt-4 border-t border-[#e9e2d0]">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#d4af37] shrink-0"
                    />
                    <div>
                      <h4 className="serif font-bold text-[15px] text-[#0f172a]">{testimonial.name}</h4>
                      <p className="text-[11px] font-semibold text-[#b8922e] uppercase tracking-wider">
                        {testimonial.eventType}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-5 bg-white border-[#e9e2d0] text-[#0f172a] shadow" />
          <CarouselNext className="hidden md:flex -right-5 bg-white border-[#e9e2d0] text-[#0f172a] shadow" />
        </Carousel>

      </div>
    </section>
  );
}
