export default function Packages() {
  const getWhatsAppLink = (packageName: string) => {
    const text = encodeURIComponent(`Olá Ana! Gostaria de consultar disponibilidade para o pacote ${packageName} da CK EVENTOS para o meu evento.`);
    return `https://wa.me/5531984950700?text=${text}`;
  };

  return (
    <section id="pacotes" className="py-16 md:py-24 bg-[#F9F6F0] border-t border-[#e9e2d0] scroll-mt-20">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        
        {/* Header */}
        <div className="max-w-[720px] mx-auto text-center">
          <div className="inline-flex px-3.5 py-1 rounded-full bg-white border border-[#e9e2d0] text-[11px] tracking-[0.14em] uppercase font-bold text-[#0A1931] shadow-sm">
            PACOTES ANCORADOS • SEM SURPRESAS
          </div>
          <h2 className="serif mt-4 text-[32px] sm:text-[40px] md:text-[48px] leading-[0.95] font-bold tracking-[-0.02em] text-[#0A1931]">
            Escolha seu pacote e <span className="italic font-normal text-[#42506e]">deixa com a gente</span>
          </h2>
          <p className="mt-4 text-[14px] sm:text-[16px] leading-[1.65] text-[#64748b]">
            Todos com bartenders uniformizados, gelo, copos de vidro, frutas frescas e montagem completa. Valor fechado por pessoa, sem taxa extra.
          </p>
        </div>

        {/* 3 Anchored Pricing Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          {/* Card 1: Essencial */}
          <div className="bg-white rounded-[24px] border border-[#e9e2d0] p-6 lg:p-8 flex flex-col shadow-sm hover:shadow-lg transition">
            <div className="text-[11px] tracking-[0.14em] uppercase font-bold text-[#64748b]">
              PARA COMEÇAR BEM
            </div>
            <h3 className="serif mt-2 text-[26px] font-bold text-[#0A1931]">Essencial</h3>
            
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-[12px] text-[#64748b]">a partir de</span>
              <span className="serif text-[32px] font-bold text-[#0A1931]">R$ 2.490</span>
            </div>

            <div className="mt-3 inline-flex self-start px-3 py-1 rounded-full bg-[#e8efe8] text-[11px] font-bold text-[#2d4a32]">
              80 pessoas • 4h • 5 drinks
            </div>

            <ul className="mt-6 space-y-3.5 text-[13px] leading-[1.5] text-[#334155] flex-1">
              {[
                '2 bartenders uniformizados',
                'Ilha básica + gelo cristal',
                'Copos de vidro + descartáveis',
                '5 drinks clássicos',
                'Frutas frescas e xaropes',
                'Montagem e desmontagem',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={getWhatsAppLink('Essencial')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 min-h-[52px] px-4 rounded-full border-2 border-[#0A1931] flex items-center justify-center text-[12px] font-bold uppercase tracking-wider text-[#0A1931] hover:bg-[#0A1931] hover:text-white transition active:scale-[0.99]"
            >
              Reservar Essencial - Falar com Ana
            </a>
          </div>

          {/* Card 2: Queridinho (Featured in Navy/Gold) */}
          <div className="relative bg-[#0A1931] rounded-[26px] p-[1.5px] shadow-[0_20px_60px_-15px_rgba(15,23,42,0.5)] md:-mt-4 md:mb-2">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#d4af37] text-[#0A1931] text-[10px] font-black tracking-[0.16em] uppercase px-4 py-1 rounded-full shadow whitespace-nowrap">
              MAIS PEDIDO • 60% • EQUILÍBRIO PERFEITO
            </div>

            <div className="bg-[#121c32] rounded-[24px] p-6 lg:p-8 flex flex-col h-full text-white">
              <div className="text-[11px] tracking-[0.14em] uppercase font-bold text-[#d4af37]">
                EQUILÍBRIO PERFEITO
              </div>
              <h3 className="serif mt-2 text-[28px] font-bold text-white">Queridinho</h3>

              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-[12px] text-white/60">a partir de</span>
                <span className="serif text-[34px] font-bold text-white">R$ 3.890</span>
              </div>

              <div className="mt-3 inline-flex self-start px-3 py-1 rounded-full bg-white/10 text-[11px] font-medium text-white/90">
                120 pessoas • 6h • 8 drinks + ilha iluminada
              </div>

              <ul className="mt-6 space-y-3.5 text-[13px] leading-[1.5] text-white/85 flex-1">
                {[
                  '3 bartenders + líder de bar',
                  'Ilha iluminada premium + gelo cristal',
                  'Copos de vidro lowball & highball',
                  '8 drinks + 2 sem álcool personalizados',
                  'Drink com nome do casal',
                  'Espumante cortesia no brinde',
                  'Frutas, ervas e gelo seco',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-[#d4af37] font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href={getWhatsAppLink('Queridinho')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 min-h-[56px] px-4 rounded-full bg-[#d4af37] text-[#0A1931] flex items-center justify-center text-[13px] font-black uppercase tracking-wider hover:bg-[#e6be3e] transition shadow-lg active:scale-[0.99]"
              >
                Reservar Queridinho - Falar com Ana →
              </a>

              <div className="mt-3 text-[11px] text-white/50 text-center">
                Parcelamos em até 10x sem juros
              </div>
            </div>
          </div>

          {/* Card 3: Premium Open */}
          <div className="bg-white rounded-[24px] border border-[#e9e2d0] p-6 lg:p-8 flex flex-col shadow-sm hover:shadow-lg transition">
            <div className="text-[11px] tracking-[0.14em] uppercase font-bold text-[#64748b]">
              FESTA GRANDE, SEM LIMITES
            </div>
            <h3 className="serif mt-2 text-[26px] font-bold text-[#0A1931]">Premium Open</h3>

            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-[12px] text-[#64748b]">a partir de</span>
              <span className="serif text-[32px] font-bold text-[#0A1931]">R$ 5.900</span>
            </div>

            <div className="mt-3 inline-flex self-start px-3 py-1 rounded-full bg-[#fdf2d0] text-[11px] font-bold text-[#7a5d14]">
              150 pessoas • 8h • 12 drinks + espumante
            </div>

            <ul className="mt-6 space-y-3.5 text-[13px] leading-[1.5] text-[#334155] flex-1">
              {[
                '4 bartenders + chef de bar',
                'Ilha gigante iluminada + fumaça baixa',
                'Taças + copos cristal + gelo 5cm',
                '12 drinks autorais + carta sem álcool',
                'Estação Gin & Whisky',
                'Espumante para brinde incluso',
                'Consultoria de harmonização',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={getWhatsAppLink('Premium Open')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 min-h-[52px] px-4 rounded-full border-2 border-[#0A1931] flex items-center justify-center text-[12px] font-bold uppercase tracking-wider text-[#0A1931] hover:bg-[#0A1931] hover:text-white transition active:scale-[0.99]"
            >
              Reservar Premium Open - Falar com Ana
            </a>
          </div>

        </div>

        {/* Note underneath */}
        <div className="mt-8 text-center text-[12px] text-[#64748b]">
          * Valores para BH, Santa Luzia e Vespasiano. Deslocamento incluso até 35km do escritório na R. Baruzeiro, 672 (Gávea II, Vespasiano - MG).
        </div>

      </div>
    </section>
  );
}
