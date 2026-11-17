import { Budget, CalculatorData } from '@/utils/calculator';
import { getEventTypeById } from '@/config/eventTypes';
import { getServiceById } from '@/config/services';
import { getBarMenu } from '@/config/pricing';
import { formatCurrency, formatDate, getDayOfWeek } from '@/utils/formatters';
import { sendCalculatorToWhatsApp } from '@/lib/whatsapp';
import { pixelEvent } from '@/lib/pixel';
import { Button } from '@/components/ui/button';
import {
  MessageCircle,
  RefreshCcw,
  Sparkles,
  DollarSign,
  AlertTriangle,
  ClipboardList,
  Users,
  CalendarDays,
  Target,
  ArrowRight,
} from 'lucide-react';
import { useEffect, useState } from 'react';

interface ResultScreenProps {
  data: CalculatorData;
  budget: Budget;
  onReset: () => void;
}

export default function ResultScreen({ data, budget, onReset }: ResultScreenProps) {
  const [animatedMin, setAnimatedMin] = useState(0);
  const [animatedMax, setAnimatedMax] = useState(0);

  const eventType = getEventTypeById(data.eventType);
  const dateStr = formatDate(data.date);
  const dayOfWeek = getDayOfWeek(data.date);

  useEffect(() => {
    if (!budget.hasCalculatedItems) return;
    const duration = 1200;
    const steps = 40;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      setAnimatedMin(Math.round(budget.min * progress));
      setAnimatedMax(Math.round(budget.max * progress));

      if (currentStep >= steps) clearInterval(interval);
    }, stepDuration);

    pixelEvent('ViewContent', {
      content_name: 'Calculadora de Eventos',
      content_category: eventType?.name || 'Evento',
      value: budget.max,
      currency: 'BRL'
    });

    return () => clearInterval(interval);
  }, [budget, eventType]);

  const handleWhatsAppClick = () => {
    pixelEvent('Lead', {
      content_name: 'Solicitação de Orçamento WhatsApp',
      content_category: eventType?.name || 'Evento',
      value: budget.max,
      currency: 'BRL'
    });
    sendCalculatorToWhatsApp(data, budget);
  };

  const EventIcon = eventType?.icon;

  return (
    <div className="space-y-8 max-w-2xl mx-auto py-4">
      {/* Título */}
      <div className="text-center space-y-2">
        <div className="w-12 h-12 rounded-full bg-[#fbf8f0] border border-[#e9e2d0] flex items-center justify-center mx-auto text-[#d4af37]">
          <Sparkles className="w-6 h-6" />
        </div>
        <h2 className="serif text-3xl sm:text-4xl font-bold text-[#0f172a]">
          Sua Estimativa de Investimento
        </h2>
        <p className="text-[14px] text-[#64748b]">Cálculo inicial baseado nos dados informados</p>
      </div>

      {/* Box do orçamento */}
      <div className="p-6 sm:p-8 rounded-[24px] bg-[#fbf8f0] border-2 border-[#0f172a] shadow-lg text-center space-y-4">
        <div className="text-xs font-bold uppercase tracking-wider text-[#64748b] flex items-center justify-center gap-1.5">
          <DollarSign className="w-4 h-4 text-[#d4af37]" />
          Faixa Estimada de Investimento
        </div>

        {budget.status === 'consultation-only' ? (
          <div className="space-y-2">
            <div className="serif text-3xl sm:text-4xl font-bold text-[#0f172a]">Preço sob consulta</div>
            <p className="text-sm text-[#64748b]">
              Os serviços selecionados exigem detalhamento técnico. Nossa equipe já tem a sua simulação pronta para retorno.
            </p>
          </div>
        ) : (
          <div>
            <div className="serif text-3xl sm:text-5xl font-bold text-[#0f172a]">
              {formatCurrency(animatedMin)} a {formatCurrency(animatedMax)}
            </div>

            {budget.status === 'mixed' && (
              <div className="mt-2 text-xs text-amber-800 font-semibold flex items-center justify-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                Alguns itens adicionais têm valor personalizado sob consulta
              </div>
            )}
          </div>
        )}

        <div className="pt-4 border-t border-[#e9e2d0]">
          <p className="text-xs text-[#64748b] leading-relaxed max-w-md mx-auto">
            * Valores médios de referência. Para garantir a sua data e receber o cardápio oficial formatado, fale agora com a nossa equipe no WhatsApp!
          </p>
        </div>
      </div>

      {/* Resumo do evento */}
      <div className="p-6 rounded-[20px] bg-white border border-[#e9e2d0] shadow-sm space-y-4">
        <h3 className="serif text-[18px] font-bold text-[#0f172a] flex items-center gap-2">
          <ClipboardList className="w-5 h-5 text-[#d4af37]" />
          Resumo da Simulação
        </h3>

        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-2.5">
            {EventIcon && <EventIcon className="w-4 h-4 text-[#0f172a]" />}
            <span className="font-semibold text-[#0f172a]">{eventType?.name || 'Evento'}</span>
          </div>

          <div className="flex items-center gap-2.5 text-[#475569]">
            <Users className="w-4 h-4 text-[#64748b]" />
            <span>{data.guests} convidados previstos</span>
          </div>

          <div className="flex items-center gap-2.5 text-[#475569]">
            <CalendarDays className="w-4 h-4 text-[#64748b]" />
            <span>
              {dateStr} ({dayOfWeek})
            </span>
          </div>

          <div className="pt-3 border-t border-[#e9e2d0]">
            <div className="font-bold text-[13px] text-[#0f172a] mb-2 flex items-center gap-2">
              <Target className="w-4 h-4 text-[#d4af37]" />
              Serviços Selecionados:
            </div>
            <ul className="space-y-1.5 ml-6 text-[13px] text-[#475569]">
              {data.services.map((selection) => {
                const service = getServiceById(selection.serviceId);
                let serviceName = service?.name || selection.serviceId;
                let details = '';

                if (selection.barType) {
                  const menu = getBarMenu(selection.barType);
                  details = ` (${menu?.name || selection.barType})`;
                }
                if (selection.hours) {
                  details = ` (${selection.hours}h)`;
                }
                if (service?.isUnderConsultation) {
                  details += ' - Sob consulta';
                }

                return (
                  <li key={selection.serviceId}>
                    • <strong>{serviceName}</strong> {details}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Botões de Ação */}
      <div className="space-y-3">
        <button
          onClick={handleWhatsAppClick}
          className="w-full h-[54px] rounded-full bg-[#25D366] text-[#0f172a] font-bold text-[14px] uppercase tracking-wide flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition shadow-lg"
        >
          <MessageCircle className="w-5 h-5" />
          <span>Enviar Orçamento para o WhatsApp da Ana</span>
        </button>

        <button
          onClick={onReset}
          className="w-full h-11 text-xs font-bold uppercase tracking-wider text-[#64748b] hover:text-[#0f172a] transition flex items-center justify-center gap-2"
        >
          <RefreshCcw className="w-3.5 h-3.5" />
          <span>Fazer Nova Simulação</span>
        </button>
      </div>
    </div>
  );
}
