import { useState } from 'react';
import { Sparkles, Calendar, ArrowRight, Star } from 'lucide-react';
import { images } from '@/config/images';

export default function Hero() {
  const [selectedImage, setSelectedImage] = useState('/images/hero_bartenders_wedding.jpg');
  const [feedback, setFeedback] = useState<string | null>(null);

  const heroBarThumbs = [
    { src: '/images/hero_bartenders_wedding.jpg', label: 'Equipe em Ação' },
    { src: '/images/bar/balcao_bar.jpg', label: 'Ilha Iluminada' },
    { src: '/images/bar/barescuro.jpg', label: 'Bar Clássico' },
    { src: '/images/bar/banheirinha_azul.jpg', label: 'Banheira com Patinho' },
    { src: '/images/bar/palavra_bar_iluminada.jpg', label: 'Letreiro BAR' },
  ];

  const scrollToAgenda = (sourceTag?: string) => {
    if (sourceTag) {
      setFeedback(sourceTag);
      setTimeout(() => setFeedback(null), 1500);
    }
    const element = document.getElementById('agenda');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative hero-grid overflow-x-clip border-b border-[#e9e2d0] bg-[#fffefb]">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6 py-8 md:py-14 grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-10 items-stretch min-w-0">
        
        {/* Left Column: Value Proposition & Conversion */}
        <div className="relative z-10 flex flex-col justify-center py-2 md:py-8 min-w-0">
          
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e8efe8] border border-[#a8c0a8]/40 text-[11px] tracking-[0.14em] uppercase font-bold text-[#2d4a32] mb-5 self-start">
            <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
            <span>AGENDA DE OUTUBRO QUASE LOTADA • 4 DATAS RESTANTES</span>
          </div>

          {/* Luxury Serif Main Heading */}
          <h1 className="serif text-[34px] leading-[0.95] sm:text-[46px] md:text-[56px] md:leading-[0.92] font-bold tracking-[-0.02em] text-[#0f172a]">
            O Bar de Drinks
            <span className="block font-normal italic text-[32px] sm:text-[42px] md:text-[52px] mt-1 text-[#42506e]">
              que faz seus convidados
            </span>
            <span className="block">
              falarem da sua festa
            </span>
            <span className="relative inline-block">
              <span className="relative z-10"> por meses</span>
              <span className="absolute bottom-[0.15em] left-0 w-full h-[0.28em] bg-[#f5e6b8] -z-0" />
            </span>
          </h1>

          {/* Subtitle with High Perceived Value */}
          <p className="mt-5 md:mt-6 text-[15px] md:text-[17px] leading-[1.6] text-[#334155] max-w-[520px]">
            Casamentos, 15 anos e Corporativos em BH e Santa Luzia com <strong className="font-semibold text-[#0f172a]">tudo incluso</strong>: bartenders uniformizados, ilha completa, gelo, copos e drinks com o nome do casal. Você curte, a gente serve.
          </p>

          {/* CTA Buttons */}
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => scrollToAgenda('degustacao-hero')}
              className="group relative inline-flex items-center justify-center gap-3 h-[56px] px-7 rounded-full bg-[#0f172a] text-white text-[13px] font-semibold tracking-[0.08em] uppercase overflow-hidden hover:bg-black transition shadow-lg"
            >
              <span className="absolute inset-0 gold-shimmer opacity-0 group-hover:opacity-20 transition" />
              <span>
                {feedback === 'degustacao-hero' ? '✓ Abrindo agenda...' : 'Agendar Degustação Gratuita - 20min'}
              </span>
              <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>

            <button
              onClick={() => scrollToAgenda('ver-data')}
              className="inline-flex items-center justify-center h-[56px] px-7 rounded-full border border-[#e9e2d0] bg-white text-[13px] font-semibold tracking-[0.08em] uppercase text-[#0f172a] hover:border-[#d4af37] transition shadow-sm"
            >
              Ver se minha data está livre
            </button>
          </div>

          {/* Trust Highlights */}
          <div className="mt-8 grid grid-cols-3 gap-4 max-w-[420px] border-t border-[#e9e2d0] pt-6">
            <div>
              <div className="serif text-[22px] font-bold text-[#0f172a]">300+</div>
              <div className="text-[11px] tracking-wide uppercase text-[#64748b]">Festas realizadas</div>
            </div>
            <div>
              <div className="serif text-[22px] font-bold text-[#0f172a]">4.9★</div>
              <div className="text-[11px] tracking-wide uppercase text-[#64748b]">No Google</div>
            </div>
            <div>
              <div className="serif text-[22px] font-bold text-[#0f172a]">100%</div>
              <div className="text-[11px] tracking-wide uppercase text-[#64748b]">Tudo incluso</div>
            </div>
          </div>
        </div>

        {/* Right Column: High Fidelity Real Photo Showcase */}
        <div className="relative lg:min-h-[640px] min-h-[460px] rounded-[28px] overflow-hidden bg-[#0f172a] shadow-[0_30px_80px_-20px_rgba(15,23,42,0.45)] min-w-0 max-w-full border border-[#0f172a]/10">
          <img
            src={selectedImage}
            alt="CK Eventos bar de drinks elegante com bartenders uniformizados"
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
          />
          
          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/85 via-[#0f172a]/15 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/20 via-transparent to-transparent mix-blend-overlay pointer-events-none" />

          {/* Verified Badge Top Left */}
          <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-white/95 backdrop-blur-md rounded-full px-3.5 py-1.5 flex items-center gap-2 text-[11px] font-semibold tracking-wide uppercase shadow-lg text-[#0f172a] max-w-[calc(100%-32px)]">
            <span className="inline-flex w-5 h-5 rounded-full bg-[#0f172a] text-white items-center justify-center text-[10px]">✓</span>
            <span>300+ festas • Outubro quase lotado</span>
          </div>

          {/* Floating Clean Card Bottom */}
          <div className="absolute bottom-0 inset-x-0 p-4 md:p-5">
            <div className="bg-white/95 backdrop-blur-xl rounded-[18px] p-4 md:p-5 border border-white/60 shadow-xl flex gap-4">
              <div className="w-[56px] h-[56px] rounded-[12px] bg-[#0f172a] flex items-center justify-center text-white serif text-[22px] font-bold shrink-0">
                CK
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[13px] font-semibold text-[#0f172a] leading-tight">
                  Bar Premium com Ilha Iluminada
                </div>
                <div className="text-[12px] text-[#64748b] mt-1 leading-[1.4]">
                  Montagem em 1h • Sem sujeira • Copos de vidro + gelo cristal
                </div>
                <div className="mt-2 flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span key={s} className="text-[12px] text-[#d4af37]">★</span>
                  ))}
                  <span className="text-[11px] text-[#64748b] ml-1">4.9 (127 avaliações)</span>
                </div>
              </div>
            </div>

            {/* Quick Thumbs */}
            <div className="mt-2.5 flex items-center gap-1.5 bg-black/50 backdrop-blur-md p-1 rounded-xl border border-white/10 max-w-full overflow-x-auto no-scrollbar w-fit mx-auto">
              {heroBarThumbs.map((item) => (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => setSelectedImage(item.src)}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-semibold uppercase tracking-wider transition ${
                    selectedImage === item.src
                      ? 'bg-[#d4af37] text-[#0f172a]'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Decorative Rings */}
          <div className="absolute -right-10 -top-10 w-[180px] h-[180px] rounded-full border border-white/20 pointer-events-none" />
          <div className="absolute -right-6 -top-6 w-[140px] h-[140px] rounded-full border border-[#d4af37]/30 pointer-events-none" />
        </div>

      </div>
    </section>
  );
}
