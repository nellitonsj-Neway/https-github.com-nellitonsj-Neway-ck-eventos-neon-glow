import { corporateServices, corporateClients } from '@/config/corporate';
import { Briefcase, Send } from 'lucide-react';
import { sendSimpleWhatsAppMessage } from '@/lib/whatsapp';

export default function Corporate() {
  const handleWhatsApp = () => {
    sendSimpleWhatsAppMessage(
      'Olá Ana! Gostaria de solicitar uma proposta corporativa para o evento da nossa empresa com a CK EVENTOS.'
    );
  };

  return (
    <section id="corporativo" className="py-16 md:py-24 bg-[#fbf8f0] border-t border-[#e9e2d0] scroll-mt-20">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#e9e2d0] text-[11px] tracking-[0.14em] uppercase font-bold text-[#0f172a] shadow-sm mb-4">
            <Briefcase className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Soluções B2B & Corporativas</span>
          </div>
          <h2 className="serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f172a]">
            Eventos Corporativos de Alto Impacto
          </h2>
          <p className="mt-3 text-[14px] sm:text-[15px] text-[#64748b]">
            Confraternizações de fim de ano, convenções, feiras e ativações de marca com emissão de nota fiscal e contrato formal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {corporateServices.map((service) => (
            <div
              key={service.id}
              className="p-7 rounded-[22px] border border-[#e9e2d0] bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#fbf8f0] border border-[#e9e2d0] flex items-center justify-center text-[24px] mb-4">
                {service.icon}
              </div>
              <h3 className="serif text-xl font-bold text-[#0f172a] mb-2">{service.title}</h3>
              <p className="text-[13px] text-[#475569] leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Corporate CTA */}
        <div className="text-center max-w-lg mx-auto bg-white p-6 rounded-[22px] border border-[#e9e2d0] shadow-sm">
          <p className="text-sm font-semibold text-[#0f172a] mb-4">
            Precisa de proposta personalizada para aprovação da diretoria?
          </p>

          <button 
            onClick={handleWhatsApp} 
            className="w-full sm:w-auto h-12 px-8 rounded-full bg-[#0f172a] text-white font-bold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 hover:bg-black transition shadow"
          >
            <Send className="w-4 h-4 text-[#d4af37]" />
            <span>Solicitar Proposta Corporativa com a Ana</span>
          </button>
        </div>

      </div>
    </section>
  );
}
