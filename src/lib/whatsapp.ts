import { CalculatorData, Budget } from '@/utils/calculator';
import { getEventTypeById } from '@/config/eventTypes';
import { getServiceById } from '@/config/services';
import { getBarMenu } from '@/config/pricing';
import { formatCurrency, formatDate } from '@/utils/formatters';

export const WHATSAPP_NUMBER = '5531984950700';
export const DEFAULT_WHATSAPP_URL = 'https://wa.me/5531984950700?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20verificar%20minha%20data%20para%20o%20bar%20de%20drinks.';

function openWhatsApp(url: string): void {
  const a = document.createElement('a');
  a.href = url;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export function formatCalculatorMessage(
  data: CalculatorData,
  budget: Budget
): string {
  const eventType = getEventTypeById(data.eventType);
  const eventName = eventType ? eventType.name : data.eventType;

  const servicesText = data.services
    .map((selection) => {
      const service = getServiceById(selection.serviceId);
      let serviceName = service?.name || selection.serviceId;

      if (selection.barType) {
        const menu = getBarMenu(selection.barType);
        serviceName += ` (${menu?.name || selection.barType})`;
      }
      if (selection.hours) {
        serviceName += ` (${selection.hours}h)`;
      }
      if (service?.isUnderConsultation) {
        serviceName += ' - Sob consulta';
      }

      return `✓ ${serviceName}`;
    })
    .join('\n');

  let estimateBlock = '';
  if (budget.status === 'consultation-only') {
    estimateBlock = `💰 *Estimativa:*\nSob consulta (serviços selecionados com orçamento personalizado).`;
  } else if (budget.status === 'mixed') {
    estimateBlock = `💰 *Estimativa Calculada:*\n${formatCurrency(budget.min)} - ${formatCurrency(budget.max)}\n\n⚠️ *Nota:* Alguns itens têm valor sob consulta.`;
  } else {
    estimateBlock = `💰 *Estimativa Calculada:*\n${formatCurrency(budget.min)} - ${formatCurrency(budget.max)}`;
  }

  const message = `🎉 *Solicitação de Orçamento - CK Eventos*

Olá Ana! Fiz uma simulação no site e gostaria de verificar disponibilidade e orçamento:

🎊 *Detalhes do Evento:*
Tipo: ${eventName}
Convidados: ${data.guests} pessoas
Data Pretendida: ${formatDate(data.date)}

🎯 *Serviços de Interesse:*
${servicesText}

${estimateBlock}

Endereço para Degustação: R. Baruzeiro, 672 - Bairro Gávea II, Vespasiano - MG
Aguardo retorno da Ana! 🙏`;

  return message;
}

export function sendCalculatorToWhatsApp(
  data: CalculatorData,
  budget: Budget
): void {
  const message = formatCalculatorMessage(data, budget);
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  openWhatsApp(whatsappURL);
}

export function sendSimpleWhatsAppMessage(message: string): void {
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  openWhatsApp(whatsappURL);
}
