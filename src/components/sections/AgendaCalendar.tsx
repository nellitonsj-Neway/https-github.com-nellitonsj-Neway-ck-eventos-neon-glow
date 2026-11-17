import { useState } from 'react';
import { Clock, MapPin, Send, Calendar as CalendarIcon, CheckCircle2, Info, ChevronLeft, ChevronRight, Bot } from 'lucide-react';

export default function AgendaCalendar() {
  const [selectedSlot, setSelectedSlot] = useState<string>('Quarta-10h');
  const [selectedCalendarDay, setSelectedCalendarDay] = useState<number>(new Date().getDate() + 1);
  const [partyDate, setPartyDate] = useState<string>('');
  const [partyType, setPartyType] = useState<string>('Casamento');

  const slots = [
    { id: 'Terca-10h', day: 'Terça-feira', time: '10:00', period: 'Manhã', note: 'Degustação gratuita • 20min' },
    { id: 'Quarta-10h', day: 'Quarta-feira', time: '10:00', period: 'Manhã', note: 'Horário mais procurado', best: true },
    { id: 'Quinta-15h', day: 'Quinta-feira', time: '15:00', period: 'Tarde', note: 'Degustação gratuita • 20min' },
    { id: 'Sabado-10h', day: 'Sábado Especial', time: '10:00', period: 'Manhã', note: 'Sob consulta prévia' },
  ];

  const handleWhatsApp = () => {
    const slotObj = slots.find(s => s.id === selectedSlot);
    const dayChosen = selectedCalendarDay ? `dia ${selectedCalendarDay}` : slotObj?.day;
    const timeChosen = slotObj?.time || '10:00';
    const festaInfo = partyDate.trim() ? partyDate : 'Ainda definindo a data exata';

    const message = encodeURIComponent(
      `Olá Ana! Vim pelo site da CK Eventos e gostaria de sugerir o agendamento de degustação gratuita de 20min:\n\n` +
      `📅 Sugestão de data: ${dayChosen} (${slotObj?.day || 'Dia selecionado'})\n` +
      `⏰ Horário preferido: ${timeChosen}\n` +
      `🎉 Tipo de festa: ${partyType}\n` +
      `💍 Previsão do evento: ${festaInfo}\n\n` +
      `Fico no aguardo da sua confirmação de disponibilidade na agenda da CK!`
    );

    window.open(`https://wa.me/5531984950700?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  
  // Current month dynamic preview
  const now = new Date();
  const currentMonthName = now.toLocaleString('pt-BR', { month: 'long' });
  const currentYear = now.getFullYear();
  const formattedMonth = currentMonthName.charAt(0).toUpperCase() + currentMonthName.slice(1);

  // Generate 35 days for current calendar view
  const daysInMonth = new Date(currentYear, now.getMonth() + 1, 0).getDate();
  const firstDayIndex = new Date(currentYear, now.getMonth(), 1).getDay();

  const calendarDays = Array.from({ length: 35 }).map((_, idx) => {
    const dayNumber = idx - firstDayIndex + 1;
    const isValidDay = dayNumber > 0 && dayNumber <= daysInMonth;
    const isPast = isValidDay && dayNumber < now.getDate();
    const isToday = isValidDay && dayNumber === now.getDate();
    return {
      day: isValidDay ? dayNumber : null,
      isPast,
      isToday,
      isAvailable: isValidDay && !isPast,
    };
  });

  return (
    <section id="agenda" className="py-12 sm:py-16 md:py-24 bg-[#F9F6F0] border-t border-[#e9e2d0] scroll-mt-16">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-[760px] mx-auto text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] sm:text-[12px] font-bold uppercase tracking-wider text-emerald-800 shadow-sm">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span>Atendimento Rápido • Degustação Sem Custo</span>
          </div>

          <h2 className="serif mt-4 text-[28px] sm:text-[38px] md:text-[46px] leading-[1.05] font-bold tracking-tight text-[#0A1931]">
            Sugira seu dia e horário para a <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#485671]">Degustação Gratuita (20min)</span>
          </h2>

          <p className="mt-3 text-[14px] sm:text-[15px] leading-relaxed text-[#556477] max-w-[620px] mx-auto">
            Venha provar 4 coquetéis autorais no nosso escritório em Vespasiano. Escolha a sua preferência abaixo e a nossa <strong>Atendente Virtual Ana</strong> verifica a disponibilidade em minutos.
          </p>
        </div>

        {/* Informative Notice Box - Transparency on Availability */}
        <div className="max-w-[880px] mx-auto mb-8 sm:mb-10 rounded-2xl bg-amber-50/90 border border-amber-200/80 p-4 sm:p-5 flex items-start gap-3.5 text-left shadow-sm">
          <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
            <Info className="w-5 h-5 text-amber-700" />
          </div>
          <div className="text-[13px] sm:text-[14px] leading-relaxed text-amber-950">
            <strong className="font-bold text-amber-900 block mb-0.5">
              Como funciona o agendamento de degustação:
            </strong>
            Você pode sugerir a sua data e horário de preferência logo abaixo. A nossa <strong>Atendente Virtual Ana</strong> recebe seu pedido imediatamente no WhatsApp, confere a escala no escritório da CK e <strong>confirma a disponibilidade com você em poucos minutos</strong>.
          </div>
        </div>

        {/* Interactive Grid: Left Controls + Right Calendar Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-start max-w-[1100px] mx-auto">
          
          {/* Left Form: Step-by-Step Choice */}
          <div className="bg-white rounded-[24px] p-5 sm:p-7 border border-[#e9e2d0] shadow-sm space-y-6">
            
            {/* Step 1: Party Type & Target Date */}
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#d4af37] block mb-2">
                Passo 1 • Sobre seu evento
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[12px] font-bold text-[#0A1931] mb-1">
                    Tipo de Festa
                  </label>
                  <select
                    value={partyType}
                    onChange={(e) => setPartyType(e.target.value)}
                    className="w-full h-11 px-3.5 rounded-xl border border-[#e9e2d0] bg-[#fcfaf6] text-[13px] font-medium text-[#0A1931] focus:outline-none focus:border-[#0A1931]"
                  >
                    <option value="Casamento">Casamento</option>
                    <option value="15 Anos">Festa de 15 Anos</option>
                    <option value="Corporativo">Evento Corporativo</option>
                    <option value="Aniversário Adulto">Aniversário / Bodas</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[12px] font-bold text-[#0A1931] mb-1">
                    Data prevista da festa (opcional)
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Novembro / 2026"
                    value={partyDate}
                    onChange={(e) => setPartyDate(e.target.value)}
                    className="w-full h-11 px-3.5 rounded-xl border border-[#e9e2d0] bg-[#fcfaf6] text-[13px] placeholder:text-gray-400 focus:outline-none focus:border-[#0A1931]"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Preferred Time Slot */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#d4af37]">
                  Passo 2 • Escolha o melhor turno
                </span>
                <span className="text-[11px] text-[#64748b]">Duração: ~20 minutos</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {slots.map((slot) => {
                  const isSelected = selectedSlot === slot.id;
                  return (
                    <button
                      key={slot.id}
                      type="button"
                      onClick={() => setSelectedSlot(slot.id)}
                      className={`text-left p-3.5 rounded-2xl border transition-all flex flex-col justify-between min-h-[82px] active:scale-[0.98] ${
                        isSelected
                          ? 'border-[#0A1931] bg-[#0A1931] text-white shadow-md'
                          : 'border-[#e9e2d0] bg-[#fcfaf6] hover:bg-white hover:border-[#0A1931]/30 text-[#0A1931]'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className={`text-[13px] font-bold ${isSelected ? 'text-white' : 'text-[#0A1931]'}`}>
                          {slot.day}
                        </span>
                        <span className={`text-[12px] font-extrabold px-2 py-0.5 rounded-full ${
                          isSelected ? 'bg-white/20 text-white' : 'bg-[#e9e2d0]/60 text-[#0A1931]'
                        }`}>
                          {slot.time}
                        </span>
                      </div>
                      <div className="flex items-center justify-between w-full mt-2">
                        <span className={`text-[11px] ${isSelected ? 'text-white/80' : 'text-[#64748b]'}`}>
                          {slot.note}
                        </span>
                        {slot.best && (
                          <span className="text-[9px] uppercase font-bold px-1.5 py-0.5 rounded bg-[#d4af37] text-[#0A1931]">
                            Destaque
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Big Green CTA Button - Thumb-Friendly Mobile */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleWhatsApp}
                className="w-full min-h-[58px] py-3.5 px-4 rounded-full bg-[#25D366] text-[#0A1931] font-black text-[13px] sm:text-[14px] uppercase tracking-wide flex items-center justify-center gap-2 hover:bg-[#20bd5a] active:scale-[0.99] transition shadow-[0_12px_24px_rgba(37,211,102,0.35)]"
              >
                <Send className="w-4 h-4 shrink-0" />
                <span className="truncate">Sugerir Data com a Ana no WhatsApp</span>
              </button>
              
              <div className="mt-3 flex items-center justify-center gap-2 text-[11px] sm:text-[12px] text-[#64748b] text-center">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Resposta rápida da Atendente Virtual Ana • Sem compromisso</span>
              </div>
            </div>

          </div>

          {/* Right Card: Calendar View & Virtual Assistant Badge */}
          <div className="space-y-4">
            
            {/* Interactive Month Box */}
            <div className="rounded-[24px] border border-[#e9e2d0] bg-white p-5 sm:p-6 shadow-sm">
              <div className="flex items-center justify-between pb-3.5 border-b border-[#e9e2d0]">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4 text-[#d4af37]" />
                  <span className="serif text-[17px] sm:text-[18px] font-bold text-[#0A1931]">
                    {formattedMonth} {currentYear}
                  </span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                  Agenda Aberta
                </span>
              </div>

              {/* Day header */}
              <div className="grid grid-cols-7 gap-1 text-[11px] text-center font-bold text-[#64748b] my-3">
                {daysOfWeek.map((d, index) => (
                  <div key={index} className="py-1">{d}</div>
                ))}
              </div>

              {/* Day numbers */}
              <div className="grid grid-cols-7 gap-1 text-center">
                {calendarDays.map((item, idx) => {
                  if (!item.day) {
                    return <div key={idx} className="h-9" />;
                  }

                  const isClicked = selectedCalendarDay === item.day;
                  let btnClass = "h-9 w-full rounded-xl text-[12px] font-medium transition flex items-center justify-center";

                  if (isClicked) {
                    btnClass += " bg-[#0A1931] text-white font-bold ring-2 ring-[#d4af37]";
                  } else if (item.isToday) {
                    btnClass += " border-2 border-[#0A1931] text-[#0A1931] font-bold bg-[#f8fafc]";
                  } else if (item.isPast) {
                    btnClass += " text-gray-300 cursor-not-allowed";
                  } else {
                    btnClass += " bg-[#fcfaf6] text-[#334155] border border-[#e9e2d0] hover:bg-emerald-50 hover:border-emerald-300";
                  }

                  return (
                    <button
                      key={idx}
                      type="button"
                      disabled={item.isPast}
                      onClick={() => item.day && setSelectedCalendarDay(item.day)}
                      className={btnClass}
                      title={item.isPast ? "Data passada" : `Sugerir dia ${item.day}`}
                    >
                      {item.day}
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 pt-3 border-t border-[#e9e2d0] flex items-center justify-between text-[11px] text-[#64748b]">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0A1931]" />
                  Dia sugerido: <strong>{selectedCalendarDay} de {formattedMonth}</strong>
                </span>
                <span className="text-[10px] text-emerald-700 font-semibold">
                  Toque para mudar o dia
                </span>
              </div>
            </div>

            {/* Virtual Assistant Ana Banner */}
            <div className="rounded-[22px] bg-[#0A1931] text-white p-4 sm:p-5 flex items-center gap-3.5 shadow-md border border-white/10">
              <div className="relative shrink-0">
                <img
                  src="/images/team/karine_camisa_preta.jpeg"
                  alt="Ana • Atendente Virtual CK"
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#d4af37]"
                />
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#0A1931]" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[13px] font-bold text-white">Ana • Atendente Virtual CK</span>
                  <span className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded bg-white/20 text-[#d4af37]">
                    <Bot className="w-3 h-3" /> Online
                  </span>
                </div>
                <p className="text-[11px] sm:text-[12px] text-white/80 mt-1 leading-snug">
                  "Oi! Recebo sua sugestão de data no WhatsApp e consulto a agenda da equipe na hora para você."
                </p>
              </div>
            </div>

            {/* Office location reminder */}
            <div className="rounded-2xl bg-white border border-[#e9e2d0] p-3.5 flex items-center gap-3 text-left">
              <MapPin className="w-4 h-4 text-[#d4af37] shrink-0" />
              <div className="text-[11px] text-[#475569] leading-tight">
                <strong className="text-[#0A1931] block">Local da Degustação:</strong>
                R. Baruzeiro, 672 - Bairro Gávea II, Vespasiano - MG (Estacionamento fácil)
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
