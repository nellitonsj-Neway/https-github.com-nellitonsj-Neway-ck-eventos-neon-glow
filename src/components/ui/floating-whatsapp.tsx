import { pixelEvent } from '@/lib/pixel';

export default function FloatingWhatsApp() {
  const message = encodeURIComponent("Olá! Vim pelo site e quero verificar minha data para o bar de drinks.");
  const url = `https://wa.me/5531984950700?text=${message}`;

  const handleClick = () => {
    pixelEvent('Contact', {
      content_name: 'Botão Flutuante WhatsApp - Ana CK',
    });
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-4 sm:bottom-5 right-3 sm:right-6 z-50 group flex items-center gap-2.5 sm:gap-3 bg-[#25D366] text-[#0A1931] pl-2 pr-3.5 sm:pr-4 py-1.5 sm:py-2 rounded-full shadow-[0_12px_30px_rgba(37,211,102,0.4)] border border-white/40 hover:bg-[#20ba59] transition-all hover:scale-105 active:scale-95 max-w-[calc(100vw-24px)]"
      aria-label="Ver se minha data está livre com a Ana da CK Eventos"
    >
      <div className="relative">
        <img
          src="/images/team/karine_camisa_preta.jpeg"
          alt="Ana - Atendimento CK"
          className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
        />
        <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-white rounded-full"></span>
      </div>
      <div className="flex flex-col text-left">
        <span className="text-[10px] uppercase font-bold tracking-wider text-[#0A1931]/80 leading-tight">
          Online agora
        </span>
        <span className="text-[13px] md:text-[14px] font-black tracking-tight text-[#0A1931] leading-tight">
          Ver minha data - Ana CK
        </span>
      </div>
      <span className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center text-xs font-black ml-1">
        ↗
      </span>
    </a>
  );
}
