import { useState, useEffect } from 'react';
import { Menu, Calendar, Phone } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { images } from '@/config/images';

const navItems = [
  { label: 'Pacotes', href: '#pacotes' },
  { label: 'O Que Inclui', href: '#tudo-incluso' },
  { label: 'Fotos do Bar', href: '#galeria' },
  { label: 'Drinks Autorais', href: '#drinks' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Simulador', href: '#calculadora' },
  { label: 'Agenda', href: '#agenda' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const whatsappUrl = "https://wa.me/5531984950700?text=" + encodeURIComponent("Olá! Vim pelo site e quero verificar minha data para o bar de drinks com a CK EVENTOS.");

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl border-b border-white/10 overflow-x-clip transition-all duration-300">
      {/* Top Brand Navy Bar */}
      <div className="bg-[#0f172a] text-white/90">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 h-[56px] flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection('#hero')}
              className="flex items-center gap-2.5 transition-opacity hover:opacity-90 text-left"
            >
              <div className="h-7 w-7 rounded-[8px] bg-[#d4af37] flex items-center justify-center text-[#0f172a] font-black text-[11px] tracking-widest">
                CK
              </div>
              <img
                src={images.logos.main}
                alt="Logo Oficial CK Eventos"
                className="h-8 md:h-9 w-auto object-contain drop-shadow"
              />
              <div className="hidden sm:flex items-baseline gap-2">
                <span className="serif font-bold tracking-[0.12em] text-[13px] md:text-[14px] text-white">
                  CK EVENTOS
                </span>
                <span className="hidden md:inline text-[11px] tracking-[0.14em] uppercase text-white/60">
                  BAR DE DRINKS • SANTA LUZIA E BH • 4.9★
                </span>
              </div>
            </button>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="hidden md:inline text-[11px] text-white/50 mr-2">
              Atendimento Seg-Sáb
            </span>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 bg-white text-[#0f172a] px-3 sm:px-4 h-9 rounded-full text-[11px] sm:text-[12px] font-semibold tracking-wide hover:bg-[#f8f5ed] transition shadow-sm shrink-0"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="hidden sm:inline">Atendimento 1seg - WhatsApp</span>
              <span className="sm:hidden font-bold">WhatsApp</span>
            </a>

            {/* Mobile Menu Trigger */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="xl:hidden ml-1">
                <button
                  type="button"
                  aria-label="Abrir menu de navegação"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition"
                >
                  <Menu className="h-4 w-4" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80 bg-[#0f172a] text-white border-l border-white/10 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 pb-6 border-b border-white/10">
                    <img
                      src={images.logos.main}
                      alt="CK Eventos"
                      className="h-9 w-auto object-contain"
                    />
                    <div>
                      <div className="serif font-bold text-[16px] text-white">CK EVENTOS</div>
                      <div className="text-[11px] text-white/60">Bar de Drinks • Santa Luzia e BH</div>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2 mt-6">
                    {navItems.map((item) => (
                      <button
                        key={item.href}
                        onClick={() => scrollToSection(item.href)}
                        className="px-4 py-2.5 rounded-xl text-left text-[14px] font-medium text-white/80 hover:text-white hover:bg-white/10 transition"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 space-y-3">
                  <button
                    onClick={() => scrollToSection('#agenda')}
                    className="w-full h-11 rounded-full bg-white text-[#0f172a] font-bold text-[12px] uppercase tracking-wide flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4 text-[#d4af37]" />
                    Agendar Degustação (20min)
                  </button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-11 rounded-full bg-[#25D366] text-[#0f172a] font-bold text-[12px] uppercase tracking-wide flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    WhatsApp: (31) 98495-0700
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>

      {/* Gold Shimmer Divider */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent opacity-60" />
    </header>
  );
}
