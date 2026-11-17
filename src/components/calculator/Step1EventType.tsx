import { eventTypes } from '@/config/eventTypes';
import { cn } from '@/lib/utils';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Step1EventTypeProps {
  selectedEventType: string;
  onSelect: (eventTypeId: string) => void;
}

export default function Step1EventType({ selectedEventType, onSelect }: Step1EventTypeProps) {
  const selectedType = eventTypes.find(t => t.id === selectedEventType);

  return (
    <div className="space-y-8 py-2">
      <div className="text-center space-y-3">
        <h3 className="serif text-3xl md:text-4xl font-bold tracking-tight text-[#0f172a]">
          Qual o tipo da sua comemoração?
        </h3>
        <p className="text-[15px] text-[#64748b] max-w-md mx-auto">
          Personalizamos a estrutura, ilha de bar e cardápio de acordo com o estilo do seu evento.
        </p>
      </div>

      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-[22px] border border-[#e9e2d0] p-6 sm:p-8 space-y-4 shadow-sm">
          <label className="text-[11px] font-bold text-[#0f172a] uppercase tracking-wider block">
            Selecione o formato:
          </label>
          
          <Select value={selectedEventType} onValueChange={onSelect}>
            <SelectTrigger className="w-full h-14 text-[15px] bg-[#fcfaf6] border-[#e9e2d0] hover:border-[#d4af37] focus:ring-[#d4af37] rounded-xl transition-all">
              <SelectValue placeholder="Selecione o tipo de evento">
                {selectedType && (
                  <div className="flex items-center gap-3">
                    <selectedType.icon className="w-5 h-5 text-[#d4af37]" />
                    <span className="font-semibold text-[#0f172a]">{selectedType.name}</span>
                  </div>
                )}
              </SelectValue>
            </SelectTrigger>
            <SelectContent className="bg-white border-[#e9e2d0] shadow-xl rounded-xl">
              {eventTypes.map((eventType) => (
                <SelectItem 
                  key={eventType.id} 
                  value={eventType.id}
                  className="py-3 focus:bg-[#fbf8f0] focus:text-[#0f172a] cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <eventType.icon className="w-5 h-5 text-[#d4af37]" />
                    <div>
                      <div className="font-semibold text-[#0f172a] text-[14px]">{eventType.name}</div>
                      <div className="text-xs text-[#64748b] line-clamp-1">{eventType.description}</div>
                    </div>
                    {eventType.popular && (
                      <span className="ml-auto px-2 py-0.5 text-[10px] font-bold bg-[#e8efe8] text-[#2d4a32] rounded-full">
                        POPULAR
                      </span>
                    )}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
