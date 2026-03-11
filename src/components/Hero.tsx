import { motion } from 'motion/react';
import { Bot, ArrowRight, Zap, MessageSquareCode } from 'lucide-react';
import { ScrollIndicator } from './ScrollIndicator';
import { waURL, CONFIG } from '../config';
import { stagger } from '../shared/animations';

export function Hero({ onOpenSimulator }: { onOpenSimulator?: () => void }) {
  const words = "Venda no Piloto Automático com IA.".split(' ');

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-24 lg:pt-20 lg:pb-0 overflow-hidden bg-zinc-950">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit">
            <span className="flex h-2 w-2 rounded-full bg-accent-cyan animate-pulse"></span>
            <span className="text-xs font-black text-zinc-300 uppercase tracking-widest">Inteligência Comercial & Escala</span>
          </div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-8xl font-black text-white tracking-tighter leading-[0.95]"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {words.map((word, i) => {
              const isHighlight = word === 'Piloto' || word === 'Automático';
              return (
                <motion.span
                  key={i}
                  className={`inline-block mr-[0.2em] ${isHighlight ? 'text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-cyan' : ''}`}
                  variants={{
                    hidden: { opacity: 0, y: 24, filter: 'blur(10px)' },
                    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.55 } }
                  }}
                >
                  {word}
                </motion.span>
              );
            })}
          </motion.h1>

          <p className="text-xl text-zinc-400 leading-relaxed max-w-xl font-medium">
            Atendimento, qualificação e fechamento 100% automatizados. <span className="text-white">Escala real</span> sem depender de contratações complexas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-2xl blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
              <a
                href={waURL(CONFIG.wa.msgHero)}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center gap-3 bg-white text-zinc-950 px-10 py-5 rounded-2xl font-black uppercase tracking-widest transition-all transform hover:scale-[1.02] overflow-hidden"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-zinc-200/50 to-transparent" />
                {CONFIG.wa.ctaHero}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <button
              onClick={onOpenSimulator}
              className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-5 rounded-2xl font-bold transition-all backdrop-blur-md"
            >
              Simulação de Atendimento
            </button>
          </div>

          <div className="flex items-center gap-10 mt-10 pt-10 border-t border-white/5">
            <div className="flex flex-col">
              <span className="text-4xl font-black text-white italic">15+</span>
              <span className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em]">Anos de <br /> Expertise</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-black text-white italic">100%</span>
              <span className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em]">Foco em <br /> Conversão</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-black text-white italic">24/7</span>
              <span className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em]">Operação <br /> Full-Time</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-[40px] bg-zinc-900/50 border border-white/5 p-3 shadow-2xl backdrop-blur-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/10 to-transparent rounded-[40px]" />

            {/* Mockup UI do WhatsApp Bot */}
            <div className="bg-zinc-950 rounded-[32px] overflow-hidden border border-white/5 relative z-10 flex flex-col h-[420px] md:h-[500px]">
              {/* Header */}
              <div className="bg-zinc-900/80 px-6 py-4 border-b border-white/5 flex items-center justify-between shrink-0 backdrop-blur-md">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent-blue/20 flex items-center justify-center">
                    <Bot className="w-7 h-7 text-accent-cyan" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base tracking-tight">Intalky Assistant</h3>
                    <p className="text-accent-cyan text-xs font-bold flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse"></span> Atendendo Agora
                    </p>
                  </div>
                </div>
                <Zap className="w-5 h-5 text-zinc-700" />
              </div>

              {/* Messages Area */}
              <div className="p-6 flex flex-col gap-5 flex-1 overflow-y-auto relative bg-zinc-950/50">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay pointer-events-none"></div>

                <motion.div
                  initial={{ opacity: 0, x: -20, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-zinc-800 text-zinc-200 p-4 rounded-3xl rounded-tl-none max-w-[85%] text-sm self-start shadow-xl relative z-10 border border-white/5 leading-relaxed"
                >
                  Olá! Analisamos seu último anúncio. O lead acaba de chegar. Iniciando qualificação... ⚡
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ delay: 2 }}
                  className="bg-gradient-to-br from-accent-blue to-accent-cyan text-zinc-950 p-4 rounded-3xl rounded-tr-none max-w-[85%] text-sm self-end shadow-xl relative z-10 font-bold leading-relaxed"
                >
                  Perfeito. Solicite o orçamento médio e o tempo de decisão.
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ delay: 3.5 }}
                  className="bg-zinc-800 text-zinc-200 p-4 rounded-3xl rounded-tl-none max-w-[85%] text-sm self-start shadow-xl relative z-10 border border-white/5 leading-relaxed"
                >
                  Lead qualificado! Possui verba de R$ 5k+ e urgência imediata. Reunião agendada na sua agenda para amanhã às 14h. ✅
                </motion.div>
              </div>

              {/* Input Area */}
              <div className="bg-zinc-900/50 p-4 border-t border-white/5 shrink-0 flex items-center gap-4 relative z-20 backdrop-blur-md">
                <div className="flex-1 bg-zinc-950 border border-white/10 rounded-2xl px-5 py-3.5 text-sm text-zinc-600 font-medium italic">
                  Bot processando em tempo real...
                </div>
                <div className="w-12 h-12 rounded-2xl bg-accent-blue flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="hidden md:flex absolute -right-12 top-24 bg-zinc-900/80 backdrop-blur-xl border border-white/10 p-5 rounded-3xl shadow-2xl items-center gap-4 z-30 group cursor-default"
            >
              <div className="bg-blue-500/20 p-3 rounded-2xl group-hover:bg-blue-500 transition-colors">
                <Zap className="w-6 h-6 text-blue-400 group-hover:text-white" />
              </div>
              <div>
                <p className="text-white text-base font-black italic tracking-tight">Response: 3s</p>
                <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Instant Scale</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="hidden md:flex absolute -left-12 bottom-28 bg-zinc-900/80 backdrop-blur-xl border border-white/10 p-5 rounded-3xl shadow-2xl items-center gap-4 z-30 group cursor-default"
            >
              <div className="bg-cyan-500/20 p-3 rounded-2xl group-hover:bg-cyan-500 transition-colors">
                <MessageSquareCode className="w-6 h-6 text-cyan-400 group-hover:text-white" />
              </div>
              <div>
                <p className="text-white text-base font-black italic tracking-tight">Smart Filtro</p>
                <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Lead Qualifier</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <ScrollIndicator text="Descubra a Solução" />
      </div>
    </section>
  );
}
