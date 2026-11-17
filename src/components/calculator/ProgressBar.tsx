import { Sparkles, Users, ListChecks, CalendarDays, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const steps = [
  { icon: Sparkles, label: 'Evento' },
  { icon: Users, label: 'Convidados' },
  { icon: ListChecks, label: 'Serviços' },
  { icon: CalendarDays, label: 'Data' },
];

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between max-w-xl mx-auto">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;
          const Icon = step.icon;

          return (
            <div key={index} className="flex items-center flex-1 last:flex-none">
              {/* Step circle */}
              <div className="flex flex-col items-center gap-1.5">
                <div
                  className={cn(
                    "w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-300 border-2 font-bold text-[13px]",
                    isCompleted && "bg-[#0f172a] border-[#0f172a] text-white",
                    isCurrent && "border-[#d4af37] bg-[#fbf8f0] text-[#0f172a] shadow-sm",
                    !isCompleted && !isCurrent && "border-[#e9e2d0] bg-white text-[#94a3b8]"
                  )}
                >
                  {isCompleted ? (
                    <Check className="w-4 h-4 text-[#d4af37]" />
                  ) : (
                    <Icon className="w-4 h-4" />
                  )}
                </div>
                <span
                  className={cn(
                    "text-[11px] sm:text-xs font-semibold tracking-wide uppercase transition-colors",
                    isCurrent ? "text-[#0f172a]" : isCompleted ? "text-[#0f172a]" : "text-[#94a3b8]"
                  )}
                >
                  {step.label}
                </span>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="flex-1 mx-2 mb-6">
                  <div
                    className={cn(
                      "h-0.5 rounded-full transition-all duration-500",
                      stepNumber < currentStep ? "bg-[#0f172a]" : "bg-[#e9e2d0]"
                    )}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
