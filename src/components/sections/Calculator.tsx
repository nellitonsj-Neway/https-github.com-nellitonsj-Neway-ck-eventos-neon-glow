import { useState, useMemo, useRef } from 'react';
import { Button } from '@/components/ui/button';
import Step1EventType from '@/components/calculator/Step1EventType';
import Step2Guests from '@/components/calculator/Step2Guests';
import Step3Services from '@/components/calculator/Step3Services';
import Step4Date from '@/components/calculator/Step4Date';
import ResultScreen from '@/components/calculator/ResultScreen';
import ProgressBar from '@/components/calculator/ProgressBar';
import { CalculatorData, ServiceSelection, calculateBudget, Budget } from '@/utils/calculator';
import { Sparkles, ChevronLeft, ChevronRight, Calculator as CalcIcon } from 'lucide-react';
import { BarType } from '@/config/pricing';
import { cn } from '@/lib/utils';
import { pixelEvent } from '@/lib/pixel';

interface CalculatorState {
  eventType: string;
  guests: number;
  services: ServiceSelection[];
  date?: Date;
}

const INITIAL_STATE: CalculatorState = {
  eventType: '',
  guests: 100,
  services: [{ serviceId: 'bar', barType: 'exclusive' }],
  date: undefined,
};

export default function Calculator() {
  const [currentStep, setCurrentStep] = useState(1);
  const [state, setState] = useState<CalculatorState>(INITIAL_STATE);
  const [budget, setBudget] = useState<Budget | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const totalSteps = 4;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
      const el = document.getElementById('calculadora');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      handleCalculate();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      const el = document.getElementById('calculadora');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const isStepValid = useMemo(() => {
    switch (currentStep) {
      case 1: return !!state.eventType;
      case 2: return state.guests >= 20;
      case 3: return state.services.length > 0;
      case 4: return !!state.date;
      default: return false;
    }
  }, [currentStep, state]);

  const handleCalculate = () => {
    const data: CalculatorData = {
      eventType: state.eventType,
      guests: state.guests,
      services: state.services,
      date: state.date!,
    };
    const result = calculateBudget(data);
    setBudget(result);
    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleReset = () => {
    setState(INITIAL_STATE);
    setBudget(null);
    setCurrentStep(1);
    document.getElementById('calculadora')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleServicesChange = (services: ServiceSelection[]) => {
    setState((prev) => ({ ...prev, services }));
  };

  const handleServiceOptionChange = (
    serviceId: string,
    options: { barType?: BarType; hours?: number }
  ) => {
    setState((prev) => ({
      ...prev,
      services: prev.services.map((s) =>
        s.serviceId === serviceId ? { ...s, ...options } : s
      ),
    }));
  };

  if (budget) {
    const data: CalculatorData = {
      eventType: state.eventType,
      guests: state.guests,
      services: state.services,
      date: state.date!,
    };
    return (
      <section id="calculadora" className="py-16 md:py-24 px-4 bg-[#fbf8f0] border-t border-[#e9e2d0] scroll-mt-20">
        <div className="container mx-auto max-w-4xl" ref={resultRef}>
          <ResultScreen data={data} budget={budget} onReset={handleReset} />
        </div>
      </section>
    );
  }

  return (
    <section id="calculadora" className="relative py-16 md:py-24 px-4 bg-[#fbf8f0] border-t border-[#e9e2d0] scroll-mt-20">
      <div className="container mx-auto max-w-4xl relative">
        
        {/* Cabeçalho */}
        <div className="text-center mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#e9e2d0] text-[#0f172a] text-[11px] font-bold uppercase tracking-widest shadow-sm">
            <CalcIcon className="w-3.5 h-3.5 text-[#d4af37]" />
            Simulador de Orçamento Instantâneo
          </div>
          <h2 className="serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f172a] tracking-tight">
            Personalize seu Evento
          </h2>
          <p className="text-[14px] sm:text-[16px] text-[#64748b] max-w-xl mx-auto">
            Simule o investimento estimado em 4 etapas rápidas e envie diretamente para o WhatsApp oficial da CK.
          </p>
        </div>

        {/* Progress */}
        <div className="mb-10">
          <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
        </div>

        {/* Content Box */}
        <div className="min-h-[460px] flex flex-col justify-between">
          <div>
            {currentStep === 1 && (
              <Step1EventType
                selectedEventType={state.eventType}
                onSelect={(eventType) => {
                  setState((prev) => ({ ...prev, eventType }));
                  pixelEvent('InitiateCheckout', {
                    content_name: 'Escolha do Tipo de Evento',
                    content_category: eventType
                  });
                  setTimeout(handleNext, 300);
                }}
              />
            )}

            {currentStep === 2 && (
              <Step2Guests
                guests={state.guests}
                onGuestsChange={(guests) => setState((prev) => ({ ...prev, guests }))}
              />
            )}

            {currentStep === 3 && (
              <Step3Services
                selectedServices={state.services}
                eventTypeId={state.eventType}
                guests={state.guests}
                onServicesChange={(services) => {
                  handleServicesChange(services);
                  pixelEvent('CustomizeProduct', {
                    content_name: 'Seleção de Serviços',
                    num_items: services.length
                  });
                }}
                onServiceOptionChange={handleServiceOptionChange}
              />
            )}

            {currentStep === 4 && (
              <Step4Date
                selectedDate={state.date}
                onDateSelect={(date) => {
                  setState((prev) => ({ ...prev, date }));
                  if (date) {
                    pixelEvent('Schedule', {
                      content_name: 'Seleção de Data',
                      appointment_date: date.toISOString()
                    });
                  }
                }}
              />
            )}
          </div>

          {/* Navegação */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-[#e9e2d0]">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 1}
              className="gap-2 h-12 px-6 text-[#64748b] hover:text-[#0f172a] hover:bg-white rounded-full transition-all border-[#e9e2d0]"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="font-bold uppercase tracking-wider text-xs">Anterior</span>
            </Button>

            <Button
              onClick={handleNext}
              disabled={!isStepValid}
              className={cn(
                "gap-2 px-8 h-12 text-sm font-bold rounded-full transition-all shadow-md",
                currentStep === totalSteps 
                  ? "bg-[#0f172a] text-white hover:bg-black" 
                  : "bg-[#0f172a] text-white hover:bg-black"
              )}
            >
              {currentStep === totalSteps ? (
                <>
                  <Sparkles className="w-4 h-4 text-[#d4af37]" />
                  <span>Ver Estimativa e Enviar</span>
                </>
              ) : (
                <>
                  <span className="uppercase tracking-wider text-xs">Avançar</span>
                  <ChevronRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
