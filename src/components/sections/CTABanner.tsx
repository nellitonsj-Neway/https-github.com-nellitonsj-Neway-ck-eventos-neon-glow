import { MessageCircle, Calculator, Sparkles, LucideIcon, ArrowRight } from 'lucide-react';
import { sendSimpleWhatsAppMessage } from '@/lib/whatsapp';

interface CTABannerProps {
  variant: 'calculator' | 'services' | 'testimonials';
}

interface VariantConfig {
  tag: string;
  title: string;
  description: string;
  icon: LucideIcon;
  action: string;
  href?: string;
  whatsapp?: boolean;
}

const variants: Record<string, VariantConfig> = {
  calculator: {
    tag: 'Simulação Rápida',
    title: 'Pronto para calcular seu orçamento?',
    description: 'Use nosso simulador online e descubra o valor estimado para o seu número de convidados em 2 minutos.',
    icon: Calculator,
    action: 'Simular Orçamento Agora',
    href: '#calculadora',
  },
  services: {
    tag: 'Consultoria Sem Custo',
    title: 'Quer tirar dúvidas com a equipe da CK?',
    description: 'Atendimento direto com a Ana para alinhar cardápio, marcas de destilados e condições de pagamento.',
    icon: Sparkles,
    action: 'Falar com a Ana no WhatsApp',
    whatsapp: true,
  },
  testimonials: {
    tag: 'Degustação Gratuita',
    title: 'Venha provar os drinks pessoalmente!',
    description: 'Agende 20 minutos no nosso escritório em Vespasiano (R. Baruzeiro, 672 - Bairro Gávea II) e reserve sua data.',
    icon: MessageCircle,
    action: 'Agendar Degustação (20min)',
    href: '#agenda',
  },
};

export default function CTABanner({ variant }: CTABannerProps) {
  const config = variants[variant] || variants.services;
  const Icon = config.icon;

  const handleClick = () => {
    if (config.whatsapp) {
      sendSimpleWhatsAppMessage('Olá Ana! Gostaria de tirar dúvidas sobre o Bar de Drinks da CK EVENTOS.');
    } else if (config.href) {
      document.querySelector(config.href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-14 bg-[#fffefb]">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        <div className="relative overflow-hidden rounded-[26px] bg-[#0f172a] text-white p-8 sm:p-12 text-center shadow-xl border border-white/10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-bold tracking-wider uppercase text-[#d4af37] mb-4">
            <Icon className="w-3.5 h-3.5" />
            <span>{config.tag}</span>
          </div>

          <h3 className="serif text-[28px] sm:text-[36px] font-bold text-white max-w-2xl mx-auto leading-tight">
            {config.title}
          </h3>

          <p className="mt-3 text-[14px] sm:text-[15px] text-white/70 max-w-xl mx-auto leading-relaxed">
            {config.description}
          </p>

          <div className="mt-8 flex justify-center">
            <button
              onClick={handleClick}
              className="h-[52px] px-8 rounded-full bg-[#d4af37] text-[#0f172a] text-[13px] font-bold uppercase tracking-wider inline-flex items-center gap-2 hover:bg-[#e6be3e] transition shadow-lg"
            >
              <span>{config.action}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
