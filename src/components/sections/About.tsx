import { images } from '@/config/images';
import { Award, Heart, Users, Sparkles, MapPin, Check } from 'lucide-react';

const highlights = [
  { icon: Award, label: 'Excelência em cada coquetel' },
  { icon: Heart, label: 'Cuidado direto dos fundadores' },
  { icon: Users, label: 'Bartenders treinados e cordiais' },
  { icon: Sparkles, label: 'Estruturas personalizadas' },
];

export default function About() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-[#fffefb] border-t border-[#e9e2d0] scroll-mt-20">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fbf8f0] border border-[#e9e2d0] text-[11px] tracking-[0.14em] uppercase font-bold text-[#0f172a] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Nossa História & Propósito</span>
            </div>
            
            <h2 className="serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0f172a] leading-[1.05]">
              De Santa Luzia para as festas mais especiais de Minas
            </h2>

            <div className="mt-6 space-y-4 text-[15px] leading-[1.7] text-[#475569]">
              <p>
                Fundada por <strong className="text-[#0f172a]">Karine e Philipe</strong>, a CK Eventos nasceu com um objetivo muito claro: eliminar de vez o estresse dos noivos e anfitriões com a contratação de bar e entretenimento.
              </p>
              
              <blockquote className="my-6 p-5 rounded-2xl bg-[#fbf8f0] border-l-4 border-[#d4af37] text-[15px] font-medium text-[#0f172a] italic">
                "Aqui você não contrata apenas drinks; contrata a tranquilidade de saber que sua festa será impecável e comentada por meses."
              </blockquote>

              <p>
                Hoje com mais de 300 eventos concluídos com excelência em Santa Luzia, Belo Horizonte e cidades vizinhas, levamos estruturas completas que encantam os convidados desde a primeira foto até o último brinde da noite.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-[#e9e2d0]">
              {highlights.map((item) => (
                <div key={item.label} className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#e8efe8] flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-[#2d4a32]" />
                  </div>
                  <span className="text-[13px] font-semibold text-[#0f172a]">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Real Photos Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden border border-[#e9e2d0] shadow-sm">
                <img
                  src={images.team.team1}
                  alt="Philipe e Karine - Fundadores CK Eventos"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="p-3 bg-white text-center">
                  <span className="serif text-[13px] font-bold text-[#0f172a]">Philipe & Karine</span>
                  <p className="text-[11px] text-[#64748b]">Fundadores da CK</p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-[#e9e2d0] shadow-sm">
                <img
                  src={images.team.equipe_letsparty}
                  alt="Equipe CK Eventos Uniformizada"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="p-3 bg-white text-center">
                  <span className="serif text-[13px] font-bold text-[#0f172a]">Equipe Uniformizada</span>
                  <p className="text-[11px] text-[#64748b]">Atendimento de excelência</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden border border-[#e9e2d0] shadow-sm">
                <img
                  src={images.team.foto_quemsomos}
                  alt="Quem Somos - CK Eventos"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="p-3 bg-white text-center">
                  <span className="serif text-[13px] font-bold text-[#0f172a]">Cuidado nos Detalhes</span>
                  <p className="text-[11px] text-[#64748b]">Presença e supervisão</p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-[#e9e2d0] shadow-sm">
                <img
                  src={images.team.equipe_15anos}
                  alt="Equipe 15 Anos e Debutantes"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="p-3 bg-white text-center">
                  <span className="serif text-[13px] font-bold text-[#0f172a]">Grandes Festas</span>
                  <p className="text-[11px] text-[#64748b]">Experiências memoráveis</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
