import { images } from '@/config/images';
import { Phone, Mail, MapPin, Instagram, Calendar, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-white/70 border-t border-white/10">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <img
                src={images.logos.main}
                alt="Logo Oficial CK Eventos"
                className="h-10 w-auto object-contain"
              />
              <span className="serif font-bold tracking-[0.14em] text-[16px]">
                CK EVENTOS
              </span>
            </div>
            <p className="text-[13px] leading-[1.65] text-white/60 max-w-[280px]">
              Bar de Drinks para casamentos, 15 anos e eventos corporativos. Santa Luzia e BH. Tudo incluso, do gelo ao sorriso do bartender.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#d4af37] hover:text-[#0f172a] flex items-center justify-center transition"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <span className="text-[11px] text-white/50">@ckeventos</span>
            </div>
          </div>

          {/* Escritório & Degustação */}
          <div className="text-[13px] leading-[1.8] text-white/70">
            <div className="text-white font-bold tracking-wider uppercase text-[11px] mb-3">
              Escritório & Degustação
            </div>
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-1" />
              <span>
                R. Baruzeiro, 672 - Bairro Gávea II<br />
                Vespasiano - MG<br />
                CEP 33202-688
              </span>
            </p>
            <div className="mt-2 text-white/90 font-medium">
              (31) 98495-0700 - Atendimento com a Ana
            </div>
          </div>

          {/* Horários de Atendimento */}
          <div className="text-[13px] leading-[1.8] text-white/70">
            <div className="text-white font-bold tracking-wider uppercase text-[11px] mb-3">
              Horários de Atendimento
            </div>
            <div>Segunda a Sexta: 09h às 19h</div>
            <div>Sábados: 09h às 13h</div>
            <div className="text-white/50 text-[12px]">Domingos: Fechado (Exclusivo para eventos)</div>
            <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[11px] text-white/80 border border-white/10">
              <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Contrato formal transparente</span>
            </div>
          </div>

          {/* Navegação Rápida */}
          <div className="text-[13px] leading-[1.8] text-white/70">
            <div className="text-white font-bold tracking-wider uppercase text-[11px] mb-3">
              Navegação
            </div>
            <ul className="space-y-1.5 text-xs text-white/60">
              <li><a href="#pacotes" className="hover:text-white transition">Pacotes de Bar</a></li>
              <li><a href="#galeria" className="hover:text-white transition">Fotos Reais do Bar</a></li>
              <li><a href="#tudo-incluso" className="hover:text-white transition">O Que Está Incluso</a></li>
              <li><a href="#drinks" className="hover:text-white transition">Drinks Autorais</a></li>
              <li><a href="#como-funciona" className="hover:text-white transition">Como Funciona</a></li>
              <li><a href="#agenda" className="hover:text-white transition">Agendar Degustação (20min)</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits & Legal */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/40">
          <div>
            © {currentYear} CK EVENTOS - Bar de Drinks • Feito com gin, gelo e carinho em Santa Luzia & BH
          </div>
          <div className="flex gap-6 text-white/50">
            <Link to="/privacy" className="hover:text-white transition">
              Política de Privacidade
            </Link>
            <Link to="/terms" className="hover:text-white transition">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
