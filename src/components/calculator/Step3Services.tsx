import { services, getRecommendedServices, getServicesByCategory, serviceCategories, ServiceCategory } from '@/config/services';
import { barMenus, BarType, getPriceForService } from '@/config/pricing';
import { ServiceSelection } from '@/utils/calculator';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { formatCurrency } from '@/utils/formatters';
import { Check, Plus } from 'lucide-react';

interface Step3ServicesProps {
  selectedServices: ServiceSelection[];
  eventTypeId: string;
  guests: number;
  onServicesChange: (services: ServiceSelection[]) => void;
  onServiceOptionChange: (serviceId: string, options: { barType?: BarType; hours?: number }) => void;
}

function getEstimatedPrice(serviceId: string, guests: number, selection?: ServiceSelection): number | null {
  return getPriceForService(serviceId, {
    guests,
    year: new Date().getFullYear(),
    barType: selection?.barType,
    experienceHours: selection?.hours,
  });
}

export default function Step3Services({
  selectedServices,
  eventTypeId,
  guests,
  onServicesChange,
  onServiceOptionChange,
}: Step3ServicesProps) {
  const recommendedServiceIds = getRecommendedServices(eventTypeId).map(s => s.id);
  const categories: ServiceCategory[] = ['bar', 'experiencias', 'gourmet'];

  const isServiceSelected = (serviceId: string) =>
    selectedServices.some(s => s.serviceId === serviceId);

  const getServiceSelection = (serviceId: string) =>
    selectedServices.find(s => s.serviceId === serviceId);

  const handleServiceToggle = (serviceId: string) => {
    if (isServiceSelected(serviceId)) {
      onServicesChange(selectedServices.filter((s) => s.serviceId !== serviceId));
    } else {
      const service = services.find(s => s.id === serviceId);
      const newSelection: ServiceSelection = { serviceId };

      if (service?.hasBarTypeOption) {
        newSelection.barType = 'exclusive';
      }
      if (service?.hasHoursOption) {
        newSelection.hours = 3;
      }

      onServicesChange([...selectedServices, newSelection]);
    }
  };

  const subtotal = selectedServices.reduce((acc, sel) => {
    try {
      const price = getEstimatedPrice(sel.serviceId, guests, sel);
      return acc + (price ?? 0);
    } catch (e) {
      console.error("Erro ao calcular preço:", e);
      return acc;
    }
  }, 0);

  const hasConsultation = selectedServices.some(sel => {
    try {
      return getEstimatedPrice(sel.serviceId, guests, sel) === null;
    } catch {
      return true;
    }
  });

  return (
    <div className="space-y-10 py-2">
      <div className="text-center space-y-3">
        <h3 className="serif text-3xl md:text-4xl font-bold tracking-tight text-[#0f172a]">
          Escolha os Serviços e Atrações
        </h3>
        <p className="text-[15px] text-[#64748b] max-w-xl mx-auto">
          Monte o cardápio e adicione experiências como Plataforma 360°, Cabine de Fotos ou Carrinho Gourmet.
        </p>
      </div>

      <div className="space-y-12 max-w-3xl mx-auto">
        {categories.map((category) => {
          const categoryServices = getServicesByCategory(category);
          const categoryInfo = serviceCategories[category];

          if (!categoryInfo) return null;

          const CategoryIcon = categoryInfo.icon;

          return (
            <div key={category} className="space-y-5">
              <div className="flex items-center gap-3 pb-2 border-b border-[#e9e2d0]">
                <div className="w-10 h-10 rounded-xl bg-[#fbf8f0] border border-[#e9e2d0] flex items-center justify-center text-[#0f172a]">
                  <CategoryIcon className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <h4 className="serif text-xl font-bold text-[#0f172a]">{categoryInfo.name}</h4>
                  <p className="text-xs text-[#64748b]">{categoryInfo.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {categoryServices.map((service) => {
                  const isSelected = isServiceSelected(service.id);
                  const selection = getServiceSelection(service.id);
                  const isRecommended = recommendedServiceIds.includes(service.id);
                  const ServiceIcon = service.icon || Check;
                  const estimatedPrice = isSelected ? getEstimatedPrice(service.id, guests, selection) : null;

                  return (
                    <div 
                      key={service.id} 
                      className={cn(
                        "rounded-2xl border transition-all duration-300 p-5 sm:p-6",
                        isSelected 
                          ? "border-[#0f172a] bg-white shadow-md ring-1 ring-[#0f172a]" 
                          : "border-[#e9e2d0] bg-[#fcfaf6] hover:bg-white hover:border-[#d4af37]"
                      )}
                    >
                      <div className="flex flex-col md:flex-row gap-5">
                        <div className="flex-1 space-y-3">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-3">
                              <div className={cn(
                                "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border transition-colors",
                                isSelected ? "bg-[#0f172a] text-white border-[#0f172a]" : "bg-white text-[#0f172a] border-[#e9e2d0]"
                              )}>
                                <ServiceIcon className="w-5 h-5" />
                              </div>
                              <div>
                                <h5 className="font-bold text-[16px] text-[#0f172a]">{service.name}</h5>
                                <div className="flex gap-2 mt-1">
                                  {isRecommended && (
                                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#e8efe8] text-[#2d4a32]">
                                      Recomendado
                                    </span>
                                  )}
                                  {service.badge && (
                                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#fdf2d0] text-[#7a5d14]">
                                      {service.badge}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>

                            <button
                              type="button"
                              onClick={() => handleServiceToggle(service.id)}
                              className={cn(
                                "h-10 w-10 rounded-xl flex items-center justify-center border transition-all",
                                isSelected 
                                  ? "bg-[#0f172a] border-[#0f172a] text-white" 
                                  : "bg-white border-[#e9e2d0] text-[#64748b] hover:border-[#0f172a]"
                              )}
                            >
                              {isSelected ? <Check className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                            </button>
                          </div>

                          <p className="text-[13px] text-[#475569] leading-relaxed">
                            {service.description}
                          </p>

                          {isSelected && (
                            <div className="flex items-center gap-3 pt-1">
                              <div className="serif text-2xl font-bold text-[#0f172a]">
                                {estimatedPrice !== null ? formatCurrency(estimatedPrice) : "Preço sob consulta"}
                              </div>
                              {service.isUnderConsultation && (
                                <span className="text-[10px] text-amber-700 font-bold px-2 py-0.5 bg-amber-50 rounded-full border border-amber-200">
                                  Personalizado p/ {guests} pessoas
                                </span>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Configurações Extra de Bar e Horas */}
                        {isSelected && (service.hasBarTypeOption || service.hasHoursOption) && (
                          <div className="md:w-72 space-y-4 pt-4 md:pt-0 md:pl-5 md:border-l border-[#e9e2d0]">
                            {service.hasBarTypeOption && (
                              <div className="space-y-2">
                                <Label className="text-[11px] font-bold uppercase tracking-wider text-[#0f172a]">Cardápio de Bebidas</Label>
                                <RadioGroup
                                  value={selection?.barType || 'exclusive'}
                                  onValueChange={(value) => onServiceOptionChange(service.id, { barType: value as BarType })}
                                  className="grid gap-2"
                                >
                                  {barMenus.map((menu) => (
                                    <div 
                                      key={menu.type} 
                                      className={cn(
                                        "flex items-center gap-2.5 p-2.5 rounded-xl border transition-all cursor-pointer",
                                        selection?.barType === menu.type 
                                          ? "border-[#0f172a] bg-[#fbf8f0]" 
                                          : "border-[#e9e2d0] bg-white hover:border-[#0f172a]/30"
                                      )}
                                      onClick={() => onServiceOptionChange(service.id, { barType: menu.type })}
                                    >
                                      <RadioGroupItem value={menu.type} id={`bar-${menu.type}-${service.id}`} className="sr-only" />
                                      <div className="flex-1">
                                        <div className="flex items-center justify-between">
                                          <span className="text-xs font-bold text-[#0f172a]">{menu.name}</span>
                                          {menu.badge && <span className="text-[9px] bg-[#d4af37] text-[#0f172a] font-bold px-1.5 py-0.5 rounded">{menu.badge}</span>}
                                        </div>
                                        <p className="text-[10px] text-[#64748b] line-clamp-1 mt-0.5">{menu.drinks.join(', ')}</p>
                                      </div>
                                    </div>
                                  ))}
                                </RadioGroup>
                              </div>
                            )}

                            {service.hasHoursOption && (
                              <div className="space-y-2">
                                <Label className="text-[11px] font-bold uppercase tracking-wider text-[#0f172a]">Duração do Serviço</Label>
                                <Select
                                  value={selection?.hours?.toString() || '3'}
                                  onValueChange={(value) => onServiceOptionChange(service.id, { hours: Number(value) })}
                                >
                                  <SelectTrigger className="bg-white border-[#e9e2d0] h-10 rounded-xl text-xs font-medium">
                                    <SelectValue placeholder="Duração" />
                                  </SelectTrigger>
                                  <SelectContent className="bg-white border-[#e9e2d0] shadow-lg rounded-xl">
                                    {[2, 3, 4, 5, 6].map((hour) => (
                                      <SelectItem key={hour} value={hour.toString()} className="text-xs">
                                        {hour} horas de atração
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating Clean Partial Summary */}
      <div className="sticky bottom-4 z-20 max-w-xl mx-auto px-2">
        <div className="bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-[#0f172a] shadow-xl flex items-center justify-between gap-4">
          <div>
            <div className="text-[10px] text-[#64748b] uppercase tracking-wider font-bold">Estimativa Parcial</div>
            <div className="text-[12px] font-semibold text-[#0f172a]">
              {selectedServices.length} {selectedServices.length === 1 ? 'serviço selecionado' : 'serviços selecionados'}
            </div>
          </div>
          
          <div className="text-right">
            <div className="serif text-2xl sm:text-3xl font-bold text-[#0f172a]">
              {subtotal > 0 ? formatCurrency(subtotal) : (hasConsultation ? "Sob consulta" : formatCurrency(0))}
            </div>
            {hasConsultation && subtotal > 0 && (
              <span className="text-[10px] text-amber-700 font-bold uppercase tracking-wide">
                + Itens sob consulta
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
