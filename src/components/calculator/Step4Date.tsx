import { Calendar } from '@/components/ui/calendar';
import { CalendarIcon, Lightbulb } from 'lucide-react';
import { formatDateLong, getDayOfWeek } from '@/utils/formatters';

interface Step4DateProps {
  selectedDate?: Date;
  onDateSelect: (date: Date | undefined) => void;
}

export default function Step4Date({ selectedDate, onDateSelect }: Step4DateProps) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <div className="space-y-8 py-2">
      <div className="text-center space-y-3">
        <h3 className="serif text-3xl md:text-4xl font-bold tracking-tight text-[#0f172a]">
          Escolha a Data da Celebração
        </h3>
        <p className="text-[15px] text-[#64748b] max-w-md mx-auto">
          Verifique a disponibilidade imediata para o dia da sua festa.
        </p>
      </div>

      <div className="max-w-md mx-auto space-y-6">
        <div className="bg-white rounded-[24px] border border-[#e9e2d0] p-6 sm:p-8 space-y-6 shadow-sm">
          
          {selectedDate ? (
            <div className="text-center p-5 rounded-2xl bg-[#fbf8f0] border border-[#e9e2d0]">
              <div className="w-10 h-10 rounded-xl bg-white border border-[#e9e2d0] flex items-center justify-center mx-auto mb-2 text-[#0f172a]">
                <CalendarIcon className="w-5 h-5 text-[#d4af37]" />
              </div>
              <div className="serif text-2xl font-bold text-[#0f172a] mb-1">
                {formatDateLong(selectedDate)}
              </div>
              <div className="text-[11px] font-bold text-[#d4af37] uppercase tracking-wider">
                {getDayOfWeek(selectedDate)}
              </div>
            </div>
          ) : (
            <div className="text-center p-4 rounded-xl bg-[#fcfaf6] border border-dashed border-[#e9e2d0]">
              <p className="text-[13px] text-[#64748b]">Selecione um dia no calendário abaixo</p>
            </div>
          )}

          <div className="flex justify-center">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={onDateSelect}
              disabled={(date) => {
                const d = new Date(date);
                d.setHours(0, 0, 0, 0);
                return d < today;
              }}
              initialFocus
              className="rounded-2xl border border-[#e9e2d0] bg-[#fcfaf6] p-3 text-[#0f172a]"
              classNames={{
                day_selected: "bg-[#0f172a] text-white hover:bg-[#0f172a] hover:text-white focus:bg-[#0f172a] focus:text-white font-bold",
                day_today: "bg-[#f5e6b8] text-[#0f172a] font-bold",
              }}
            />
          </div>

          <div className="pt-4 border-t border-[#e9e2d0]">
            <p className="text-center text-[12px] text-[#64748b] flex items-center justify-center gap-1.5">
              <Lightbulb className="w-4 h-4 text-[#d4af37] shrink-0" />
              Sextas e sábados possuem alta procura com reserva recomendada com antecedência.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
