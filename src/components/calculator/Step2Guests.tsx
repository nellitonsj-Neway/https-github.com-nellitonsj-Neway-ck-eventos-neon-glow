import { Slider } from '@/components/ui/slider';
import { Users, Lightbulb, Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Step2GuestsProps {
  guests: number;
  onGuestsChange: (value: number) => void;
}

export default function Step2Guests({ guests, onGuestsChange }: Step2GuestsProps) {
  const min = 20;
  const max = 500;

  const handleIncrement = () => {
    if (guests < max) onGuestsChange(Math.min(max, guests + 10));
  };

  const handleDecrement = () => {
    if (guests > min) onGuestsChange(Math.max(min, guests - 10));
  };

  return (
    <div className="space-y-8 py-2">
      <div className="text-center space-y-3">
        <h3 className="serif text-3xl md:text-4xl font-bold tracking-tight text-[#0f172a]">
          Quantidade de Convidados
        </h3>
        <p className="text-[15px] text-[#64748b] max-w-md mx-auto">
          Dimensionamos com precisão a quantidade de bartenders, gelo e insumos para evitar filas.
        </p>
      </div>

      <div className="max-w-xl mx-auto">
        <div className="bg-white rounded-[24px] border border-[#e9e2d0] p-6 sm:p-10 space-y-8 shadow-sm">
          
          <div className="flex flex-col items-center space-y-5">
            <div className="w-14 h-14 rounded-2xl bg-[#fbf8f0] border border-[#e9e2d0] flex items-center justify-center">
              <Users className="w-7 h-7 text-[#0f172a]" />
            </div>
            
            <div className="flex items-center justify-center gap-5">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={handleDecrement}
                disabled={guests <= min}
                className="h-11 w-11 rounded-full border-[#e9e2d0] bg-[#fcfaf6] hover:bg-white text-[#0f172a] shadow-sm"
              >
                <Minus className="h-5 w-5" />
              </Button>
              
              <div className="relative flex flex-col items-center">
                <input
                  type="number"
                  value={guests}
                  onChange={(e) => {
                    const val = parseInt(e.target.value);
                    if (!isNaN(val)) onGuestsChange(Math.min(max, Math.max(0, val)));
                  }}
                  className="w-32 bg-transparent text-center serif text-5xl md:text-6xl font-bold text-[#0f172a] focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <span className="text-[11px] font-bold text-[#64748b] uppercase tracking-wider mt-1">
                  Convidados
                </span>
              </div>

              <Button 
                variant="outline" 
                size="icon" 
                onClick={handleIncrement}
                disabled={guests >= max}
                className="h-11 w-11 rounded-full border-[#e9e2d0] bg-[#fcfaf6] hover:bg-white text-[#0f172a] shadow-sm"
              >
                <Plus className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <Slider
              value={[guests]}
              onValueChange={(value) => onGuestsChange(value[0])}
              min={min}
              max={max}
              step={5}
              className="w-full py-2"
            />
            
            <div className="flex justify-between text-xs font-semibold text-[#64748b] uppercase tracking-wider">
              <span>Mínimo 20</span>
              <span>150 (Médio)</span>
              <span>Máximo 500+</span>
            </div>
          </div>

          <div className="pt-5 border-t border-[#e9e2d0]">
            <p className="text-center text-[13px] text-[#64748b] flex items-center justify-center gap-2">
              <Lightbulb className="w-4 h-4 text-[#d4af37]" />
              Estrutura dimensionada com proporção de 1 bartender para cada 35-50 pessoas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
