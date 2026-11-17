import { useState } from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function AllIncluded() {
  const benefits = [
    {
      title: 'Bartenders uniformizados',
      desc: 'Treinados, pontuais, simpáticos e com postura discreta.',
      iconSvg: (
        <svg className="w-6 h-6 text-[#b8922e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="7" r="4" />
          <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
          <path d="m11 11 1 2 1-2" />
          <path d="M12 13v4" />
        </svg>
      )
    },
    {
      title: 'Gelo cristal 5cm',
      desc: 'Não aguado, puro, lapidado e dura a festa toda sem derreter rápido.',
      iconSvg: (
        <svg className="w-6 h-6 text-[#b8922e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="m21 16-9 5-9-5V8l9-5 9 5v8Z" />
          <path d="M12 3v18" />
          <path d="m3.5 8 17 8" />
          <path d="m20.5 8-17 8" />
        </svg>
      )
    },
    {
      title: 'Copos de vidro & taças',
      desc: 'Highball, lowball e taças de cristal. Zero copo descartável na mão.',
      iconSvg: (
        <svg className="w-6 h-6 text-[#b8922e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 22h8" />
          <path d="M12 15v7" />
          <path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z" />
          <path d="m17 7 3-3" />
        </svg>
      )
    },
    {
      title: 'Frutas frescas do dia',
      desc: 'Morango selecionado, limão siciliano, laranja e ervas frescas.',
      iconSvg: (
        <svg className="w-6 h-6 text-[#b8922e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3a9 9 0 0 1 9 9" />
          <path d="m12 12 6.36-6.36" />
          <path d="M12 12v9" />
          <path d="M12 12H3" />
        </svg>
      )
    },
    {
      title: 'Montagem completa da ilha',
      desc: 'Ilha decorada, iluminação cênica, lixeiras embutidas e limpeza impecável.',
      iconSvg: (
        <svg className="w-6 h-6 text-[#b8922e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="12" x="3" y="7" rx="2" />
          <path d="M7 7V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3" />
          <path d="M12 11v4" />
          <path d="M8 15h8" />
        </svg>
      )
    },
    {
      title: 'Drinks personalizados',
      desc: 'Com o nome dos noivos ou debutante + plaquinhas decorativas.',
      iconSvg: (
        <svg className="w-6 h-6 text-[#b8922e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
          <circle cx="7" cy="7" r="1.5" />
          <path d="m14 10 3 3" />
        </svg>
      )
    },
  ];

  return (
    <section id="tudo-incluso" className="py-16 md:py-24 bg-white border-y border-[#e9e2d0] scroll-mt-20">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-center">
          
          {/* Left: Value Proposition + Human Team Photo */}
          <div>
            <div className="text-[11px] tracking-[0.18em] uppercase font-bold text-[#b8922e]">
              SEM TAXAS ESCONDIDAS
            </div>

            <h2 className="serif mt-3 text-[34px] sm:text-[44px] leading-[0.95] font-bold text-[#0f172a]">
              Tudo incluso.<br />
              <span className="italic font-normal text-[#42506e]">Você só curte.</span>
            </h2>

            <p className="mt-4 text-[15px] sm:text-[16px] leading-[1.7] text-[#475569] max-w-[480px]">
              A gente leva tudo. Você não compra gelo, não aluga copo, não corre atrás de fruta. Chegamos 2h antes, montamos, servimos e limpamos.
            </p>

            <div className="mt-6 pl-4 border-l-2 border-[#d4af37] py-1 max-w-[460px]">
              <p className="text-[13px] sm:text-[14px] italic text-[#334155] leading-relaxed">
                "Foi a única coisa da festa que eu não me preocupei. Perfeito." — Mariana N., noiva 2024
              </p>
            </div>

            {/* Humanized Real Team Photo Card */}
            <div className="mt-8 rounded-[24px] overflow-hidden border border-[#e9e2d0] bg-[#fbf8f0] p-4 shadow-sm max-w-[500px]">
              <div className="relative rounded-[18px] overflow-hidden aspect-[16/10] bg-[#0f172a]">
                <img
                  src="/images/bar/coketeleira_e_laranjas_bar.jpg"
                  alt="Colaboradora da CK Eventos preparando coquetéis frescos com carinho"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1.5 text-[10px] font-bold tracking-wider uppercase text-[#0f172a] shadow">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Equipe Real CK em Ação</span>
                </div>
              </div>
              <div className="pt-3 px-1 flex items-center justify-between text-xs text-[#64748b]">
                <span className="font-semibold text-[#0f172a]">Preparação artesanal no bar</span>
                <span>Frutas frescas & sem bagunça</span>
              </div>
            </div>
          </div>

          {/* Right: 6 Premium Icons in #FFF8EE 48px Circles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="rounded-[22px] border border-[#e9e2d0] bg-[#fcfaf6] p-5 sm:p-6 hover:border-[#d4af37]/60 hover:bg-white hover:shadow-md transition-all duration-300"
              >
                {/* 48px Circular Icon in #FFF8EE */}
                <div className="w-[48px] h-[48px] rounded-full bg-[#FFF8EE] border border-[#d4af37]/40 flex items-center justify-center shadow-sm shrink-0">
                  {item.iconSvg}
                </div>

                <div className="mt-4 font-bold text-[15px] leading-tight text-[#0f172a]">
                  {item.title}
                </div>

                <div className="mt-1.5 text-[12px] sm:text-[13px] leading-[1.5] text-[#64748b]">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
