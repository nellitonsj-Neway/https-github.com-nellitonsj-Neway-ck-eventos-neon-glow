import { Sparkles, Eye, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Lightbox from '@/components/ui/lightbox';

interface DrinkCard {
  image: string;
  name: string;
  desc: string;
  tag: string;
}

const drinksList: DrinkCard[] = [
  {
    image: '/images/bar/cliente_drink_na_mao3.jpg',
    name: 'Gin Tropical da Noiva',
    desc: 'Gin nobre, abacaxi fresco, manjericão macerado e limão siciliano em taça ballon.',
    tag: 'NOIVA FAV',
  },
  {
    image: '/images/bar/cliente_drinknamao.jpg',
    name: 'Moscow Mule Mineiro',
    desc: 'Vodka premium, infusão de gengibre fresco de Minas e espuma densa de limão artesanal.',
    tag: 'MAIS PEDIDO',
  },
  {
    image: '/images/bar/banheirinha_azul.jpg',
    name: 'Maracujá de Minas',
    desc: 'Maracujá fresco, mel, cachaça branca de alambique e a famosa apresentação com patinho.',
    tag: 'REFRESCANTE',
  },
  {
    image: '/images/bar/morangos_bar.jpg',
    name: 'Aperol da Festa',
    desc: 'Aperol italiano, espumante brut gelado, rodela de laranja Bahia e água com gás.',
    tag: 'PÔR DO SOL',
  },
  {
    image: '/images/bar/drinknamao.jpg',
    name: 'Drink do Noivo (Whisky)',
    desc: 'Whisky, maple, bitter de laranja, servido com plaquinha personalizada com o nome dos noivos.',
    tag: 'NOIVO FAV',
  },
  {
    image: '/images/bar/cliente_drink_na_mao2.jpg',
    name: 'Pink Lemonade Autoral',
    desc: 'Sem álcool • Frutas vermelhas frescas, limão tahiti e água com gás super refrescante.',
    tag: 'SEM ÁLCOOL',
  },
];

export default function DrinksMenu() {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  const scrollToAgenda = () => {
    const el = document.getElementById('agenda');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="drinks" className="py-16 md:py-24 bg-[#0A1931] text-white relative overflow-hidden scroll-mt-20">
      {/* Background Subtle Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(white 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="mx-auto max-w-[1280px] px-4 md:px-6 relative">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase font-bold text-[#d4af37]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CARTA DE DRINKS AUTORAIS</span>
            </div>
            <h2 className="serif mt-3 text-[32px] sm:text-[42px] md:text-[50px] leading-[0.9] font-bold">
              O bar mais fotografado<br />
              <span className="italic font-normal text-white/80">da festa</span>
            </h2>
          </div>
          <p className="text-[14px] sm:text-[15px] leading-[1.65] text-white/60 max-w-[440px]">
            Cada drink tem história. Criamos 2 exclusivos com o nome de vocês, com plaquinha decorativa e iluminação no balcão.
          </p>
        </div>

        {/* Drinks Grid with REAL Photos */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {drinksList.map((drink) => (
            <div
              key={drink.name}
              className="group relative rounded-[24px] bg-[#121c32] border border-white/10 overflow-hidden shadow-xl hover:border-[#d4af37]/60 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Real Drink Photo */}
              <div 
                className="relative aspect-[16/10] w-full overflow-hidden bg-[#0A1931] cursor-pointer"
                onClick={() => setLightboxImage({ src: drink.image, alt: drink.name })}
              >
                <img
                  src={drink.image}
                  alt={drink.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121c32] via-transparent to-transparent opacity-80" />
                
                {/* Tag */}
                <div className="absolute top-3.5 right-3.5">
                  <span className="text-[10px] tracking-wider uppercase font-bold px-3 py-1 rounded-full bg-[#0A1931]/80 backdrop-blur-md border border-[#d4af37]/40 text-[#f5e6b8] shadow">
                    {drink.tag}
                  </span>
                </div>

                {/* View Overlay */}
                <div className="absolute inset-0 bg-[#0A1931]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-9 h-9 rounded-full bg-[#d4af37] text-[#0A1931] flex items-center justify-center shadow">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="serif text-[22px] font-bold text-white group-hover:text-[#f5e6b8] transition">
                    {drink.name}
                  </h3>
                  
                  <p className="mt-2 text-[13px] leading-[1.6] text-white/70">
                    {drink.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Incluso em todos os pacotes</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={scrollToAgenda}
            className="w-full sm:w-auto h-[54px] px-8 rounded-full bg-[#d4af37] text-[#0A1931] text-[13px] font-black uppercase tracking-wider hover:bg-[#e6be3e] transition shadow-lg flex items-center justify-center gap-2"
          >
            <span>QUERO PROVAR NA DEGUSTAÇÃO</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {lightboxImage && (
        <Lightbox
          isOpen={!!lightboxImage}
          onClose={() => setLightboxImage(null)}
          imageSrc={lightboxImage.src}
          imageAlt={lightboxImage.alt}
        />
      )}
    </section>
  );
}
