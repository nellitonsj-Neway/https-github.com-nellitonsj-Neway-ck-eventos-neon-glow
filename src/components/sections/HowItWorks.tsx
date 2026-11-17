export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Agende 20min',
      desc: 'Escolha Terça, Quarta ou Quinta. Online ou no escritório na R. Baruzeiro, 672 (Gávea II, Vespasiano). A Ana confirma em até 2h.',
      avatar: '/images/bar/cliente_drinknamao.jpg',
      avatarCaption: 'Atendimento rápido com a Ana',
    },
    {
      num: '02',
      title: 'Degustação na CK',
      desc: 'Você prova 4 drinks reais, conhece a ilha montada, define os nomes dos coquetéis e fecha o pacote sem nenhuma pressão.',
      avatar: '/images/bar/cliente_drink_na_mao3.jpg',
      avatarCaption: 'Noiva provando os coquetéis',
    },
    {
      num: '03',
      title: 'Curta a festa',
      desc: 'Chegamos 2h antes com todo o gelo e insumos. Você curte sem preocupação e os convidados falam do bar por meses.',
      avatar: '/images/experiencias/plataforma_noivos.jpg',
      avatarCaption: 'Festa inesquecível e animada',
    },
  ];

  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-[#F9F6F0] border-t border-[#e9e2d0] scroll-mt-20">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        
        {/* Section Title */}
        <div className="max-w-[620px] mx-auto text-center">
          <div className="inline-flex px-3.5 py-1 rounded-full bg-white border border-[#e9e2d0] text-[11px] tracking-[0.14em] uppercase font-bold text-[#0A1931] shadow-sm">
            Simples e Transparente
          </div>
          <h2 className="serif mt-4 text-[32px] sm:text-[42px] leading-[0.95] font-bold text-[#0A1931]">
            Como funciona, sem drama
          </h2>
          <p className="mt-3 text-[14px] sm:text-[15px] text-[#64748b]">
            3 passos, 20 minutos do seu tempo, e o resto é com a gente.
          </p>
        </div>

        {/* 3 Steps Row with Humanized Circular Photos */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          <div className="hidden md:block absolute top-[44px] left-[18%] right-[18%] h-[1px] bg-gradient-to-r from-transparent via-[#e9e2d0] to-transparent pointer-events-none" />

          {steps.map((step) => (
            <div
              key={step.num}
              className="relative bg-white rounded-[24px] border border-[#e9e2d0] p-7 text-center shadow-sm hover:shadow-md transition flex flex-col items-center"
            >
              {/* Step Badge */}
              <div className="w-14 h-14 rounded-full bg-[#0A1931] text-white flex items-center justify-center serif text-[18px] font-bold shadow-md">
                {step.num}
              </div>

              {/* Circular Human Photo */}
              <div className="mt-4 relative">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#d4af37] shadow-sm">
                  <img
                    src={step.avatar}
                    alt={step.avatarCaption}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-[10px] text-[#64748b] mt-1 font-medium">
                  {step.avatarCaption}
                </div>
              </div>

              <h3 className="serif mt-4 text-[22px] font-bold text-[#0A1931]">
                {step.title}
              </h3>
              
              <p className="mt-2 text-[13px] sm:text-[14px] leading-[1.65] text-[#475569]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
