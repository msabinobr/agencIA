import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Megaphone,
  MessageCircle,
  UserPlus,
  CalendarCheck,
  Sparkles,
  TrendingUp,
  Star,
  Share2,
  Gamepad2,
  Trophy,
  MousePointer2
} from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Atração',
    subtitle: 'Awareness',
    desc: 'O lead vê seu anúncio e clica para o WhatsApp.',
    icon: Megaphone,
    color: 'from-blue-500 to-cyan-500',
    accent: 'text-cyan-400',
    gridPos: 'md:col-start-1 md:row-start-1'
  },
  {
    id: 2,
    title: 'Engajamento',
    subtitle: 'Engage',
    desc: 'A IA atende em 3 segundos. Engajamento imediato.',
    icon: MessageCircle,
    color: 'from-cyan-500 to-blue-600',
    accent: 'text-blue-400',
    gridPos: 'md:col-start-2 md:row-start-1'
  },
  {
    id: 3,
    title: 'Captura',
    subtitle: 'Subscribe',
    desc: 'Captura de dados e qualificação na conversa.',
    icon: UserPlus,
    color: 'from-blue-600 to-blue-700',
    accent: 'text-blue-300',
    gridPos: 'md:col-start-3 md:row-start-1'
  },
  {
    id: 4,
    title: 'Conversão',
    subtitle: 'Convert',
    desc: 'Quebra de objeções e agendamento automático.',
    icon: CalendarCheck,
    color: 'from-blue-700 to-cyan-600',
    accent: 'text-cyan-400',
    gridPos: 'md:col-start-3 md:row-start-2'
  },
  {
    id: 5,
    title: 'Encantamento',
    subtitle: 'Excite',
    desc: 'Experiência fluida e surpreendente.',
    icon: Sparkles,
    color: 'from-cyan-600 to-cyan-400',
    accent: 'text-blue-400',
    gridPos: 'md:col-start-2 md:row-start-2'
  },
  {
    id: 6,
    title: 'Ascensão',
    subtitle: 'Ascend',
    desc: 'Follow-ups automáticos e ofertas de Upsell.',
    icon: TrendingUp,
    color: 'from-cyan-400 to-blue-500',
    accent: 'text-blue-500',
    gridPos: 'md:col-start-1 md:row-start-2'
  },
  {
    id: 7,
    title: 'Defesa',
    subtitle: 'Advocate',
    desc: 'Feedback automático e avaliações no Google.',
    icon: Star,
    color: 'from-blue-500 to-blue-700',
    accent: 'text-cyan-300',
    gridPos: 'md:col-start-1 md:row-start-3'
  },
  {
    id: 8,
    title: 'Promoção',
    subtitle: 'Promote',
    desc: 'Indicações que reiniciam o ciclo de vendas.',
    icon: Share2,
    color: 'from-blue-700 to-cyan-500',
    accent: 'text-cyan-500',
    gridPos: 'md:col-start-2 md:row-start-3'
  },
];

export function CustomerJourney() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section id="jornada" className="py-32 relative overflow-hidden bg-zinc-950">
      {/* Dynamic Background Glow */}
      <div
        className="absolute w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none transition-all duration-300 ease-out z-0"
        style={{
          left: mousePos.x - 300,
          top: mousePos.y - 300,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-sm font-bold mb-6 tracking-widest uppercase"
            >
              <Gamepad2 className="w-4 h-4" />
              O Jogo da Escala
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-black text-white leading-tight"
            >
              Jornada de Valor do <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Cliente</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-zinc-400 mt-6"
            >
              Passe o mouse pelos blocos para ver como a IA da Intalky conduz seu lead do clique à indicação.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-3xl"
          >
            <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center">
              <MousePointer2 className="w-6 h-6 text-cyan-400 animate-pulse" />
            </div>
            <div className="text-sm font-medium">
              <span className="text-white block">Modo Exploração</span>
              <span className="text-zinc-500">Passe o mouse nos blocos</span>
            </div>
          </motion.div>
        </div>

        {/* Board Game Grid */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="relative grid grid-cols-1 md:grid-cols-3 gap-6 p-4 md:p-8 bg-zinc-900/40 rounded-[40px] border border-white/5 backdrop-blur-xl"
        >
          {/* Path Connections (Desktop) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block opacity-20" overflow="visible">
            <path
              d="M 16.6% 16.6% H 83.3% V 50% H 16.6% V 83.3% H 50%"
              fill="none"
              stroke="url(#path-grad)"
              strokeWidth="4"
              strokeDasharray="12 12"
              className="animate-[shimmer_20s_linear_infinite]"
            />
            <defs>
              <linearGradient id="path-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#22d3ee" />
              </linearGradient>
            </defs>
          </svg>

          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === step.id;

            return (
              <motion.div
                key={step.id}
                onMouseEnter={() => setActiveStep(step.id)}
                onMouseLeave={() => setActiveStep(null)}
                className={`group relative p-8 rounded-3xl border transition-all duration-500 cursor-default min-h-[180px] flex flex-col justify-center
                  ${isActive ? 'bg-zinc-800 border-white/20 shadow-2xl scale-[1.02] z-20' : 'bg-transparent border-white/5 hover:border-white/10'}
                  ${step.gridPos}
                `}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                {/* Step Marker */}
                <div className={`flex items-center justify-center w-14 h-14 rounded-2xl mb-6 transition-all duration-500 group-hover:rotate-12
                  ${isActive ? `bg-gradient-to-br ${step.color} shadow-lg shadow-blue-500/20` : 'bg-zinc-800/50'}
                `}>
                  <Icon className={`w-7 h-7 ${isActive ? 'text-white' : 'text-zinc-500'}`} />
                </div>

                <div className="space-y-2">
                  <div className={`text-[10px] font-black uppercase tracking-[0.2em] ${step.accent}`}>
                    Fase 0{step.id} • {step.subtitle}
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">{step.title}</h3>

                  <AnimatePresence mode="wait">
                    {isActive ? (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="text-zinc-400 text-sm leading-relaxed pt-2"
                      >
                        {step.desc}
                      </motion.p>
                    ) : (
                      <p className="text-zinc-600 text-sm leading-relaxed line-clamp-1">
                        {step.desc}
                      </p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Corner Label */}
                <div className="absolute top-4 right-4 text-white/5 font-black text-4xl group-hover:text-white/10 transition-colors">
                  {step.id}
                </div>
              </motion.div>
            );
          })}

          {/* Finish Tile */}
          <motion.div
            className="md:col-start-3 md:row-start-3 flex items-center justify-center p-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-cyan-500/20 blur-2xl group-hover:bg-cyan-500/40 transition-all rounded-full" />
              <div className="relative w-32 h-32 rounded-full border-4 border-dashed border-cyan-500/30 flex items-center justify-center bg-zinc-900 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                <Trophy className="w-12 h-12 text-cyan-400" />
              </div>
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="text-xs font-black text-cyan-400 uppercase tracking-widest bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">Win: Escala Infinita</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Legend */}
        <div className="mt-20 flex flex-wrap justify-center gap-12 border-t border-white/5 pt-12">
          {[
            { label: 'Atração', color: 'bg-blue-500' },
            { label: 'Engajamento', color: 'bg-cyan-500' },
            { label: 'Conversão', color: 'bg-blue-700' },
            { label: 'Fidelização', color: 'bg-cyan-400' }
          ].map(item => (
            <div key={item.label} className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${item.color} shadow-[0_0_10px_rgba(255,255,255,0.1)]`} />
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
