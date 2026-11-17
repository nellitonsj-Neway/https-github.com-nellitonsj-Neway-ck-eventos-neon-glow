export default function Stats() {
  const authorityItems = [
    {
      title: '500+ eventos',
      desc: 'celebrados & corporativos',
      iconSvg: (
        <svg className="w-6 h-6 text-[#d4af37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {/* Taça com estrela */}
          <path d="M8 22h8" />
          <path d="M12 15v7" />
          <path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z" />
          <path d="m12 2 1 2 2 .3-1.5 1.5.4 2.2-1.9-1-1.9 1 .4-2.2L9 4.3 11 4Z" />
        </svg>
      )
    },
    {
      title: 'Nota 4.9',
      desc: '127 avaliações reais no Google',
      iconSvg: (
        <svg className="w-6 h-6 text-[#d4af37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {/* Estrela com coroa */}
          <path d="m2 4 3 12h14l3-12-5 4-5-6-5 6-5-4Z" />
          <circle cx="12" cy="19" r="2" />
        </svg>
      )
    },
    {
      title: 'BH + Santa Luzia',
      desc: 'atendemos toda região',
      iconSvg: (
        <svg className="w-6 h-6 text-[#d4af37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {/* Pin com coração */}
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <path d="M12 7.5c-.8-1-2.2-.8-2.6.2-.4 1 .6 2 2.6 3.3 2-1.3 3-2.3 2.6-3.3-.4-1-1.8-1.2-2.6-.2Z" />
        </svg>
      )
    },
    {
      title: 'Tudo incluso',
      desc: 'zero dor de cabeça',
      iconSvg: (
        <svg className="w-6 h-6 text-[#d4af37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {/* Selo de verificado premium */}
          <path d="M12 2l3.09 3.09L19.5 5.5l.41 4.41L23 12l-3.09 2.09-.41 4.41-4.41.41L12 22l-3.09-2.09-4.41-.41-.41-4.41L1 12l3.09-2.09.41-4.41 4.41-.41L12 2z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    },
  ];

  return (
    <section className="bg-[#0A1931] text-white border-y border-white/10">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6 py-6 md:py-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
        {authorityItems.map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-3.5 md:border-r md:last:border-0 border-white/10 md:px-8 first:pl-0"
          >
            {/* 48px Circular icon in glassmorphic/gold */}
            <div className="w-[48px] h-[48px] rounded-full bg-white/10 border border-white/15 flex items-center justify-center shrink-0 shadow-sm">
              {item.iconSvg}
            </div>
            <div>
              <div className="text-[14px] font-bold tracking-wide text-white">
                {item.title}
              </div>
              <div className="text-[11px] text-white/60">
                {item.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
