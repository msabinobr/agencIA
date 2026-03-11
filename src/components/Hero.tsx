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
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-medium text-zinc-300 uppercase tracking-wider">O Futuro do Atendimento</span>
          </div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {words.map((word, i) => {
              const isHighlight = word === 'Piloto' || word === 'Automático';
              return (
                <motion.span 
                  key={i} 
                  className={`inline-block mr-[0.22em] ${isHighlight ? 'text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600' : ''}`}
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
          
          <p className="text-lg text-zinc-400 leading-relaxed max-w-xl">
            Automatizamos a recepção e filtragem dos seus leads no WhatsApp com interações humanizadas. Escale suas vendas enquanto nossa IA qualifica seus clientes 24/7.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
              <a 
                href={waURL(CONFIG.wa.msgHero)}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center gap-2 bg-emerald-500 text-zinc-950 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 overflow-hidden"
                style={{ animation: 'ctaPulse 2.5s ease-in-out infinite' }}
              >
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                {CONFIG.wa.ctaHero}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <button 
              onClick={onOpenSimulator}
              className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-full font-semibold transition-all"
            >
              Ver Simulação Ao Vivo
            </button>
          </div>

          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-white/10">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">15+</span>
              <span className="text-sm text-zinc-500">Anos de Experiência</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">100%</span>
              <span className="text-sm text-zinc-500">Foco em Conversão</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-2xl bg-zinc-900 border border-white/10 p-2 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent rounded-2xl" />
            
            {/* Mockup UI do WhatsApp Bot */}
            <div className="bg-zinc-950 rounded-xl overflow-hidden border border-white/5 relative z-10 flex flex-col h-[400px] md:h-[460px]">
              {/* Header */}
              <div className="bg-zinc-900 px-4 py-3 border-b border-white/5 flex items-center gap-3 shrink-0">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium text-sm">Assistente IA</h3>
                  <p className="text-emerald-400 text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Online
                  </p>
                </div>
              </div>
              
              {/* Messages Area */}
              <div className="p-4 flex flex-col gap-4 flex-1 overflow-y-auto relative bg-zinc-950/50">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-zinc-800 text-zinc-200 p-3 rounded-2xl rounded-tl-none max-w-[85%] text-sm self-start shadow-sm relative z-10"
                >
                  Olá! Vi que você tem interesse em escalar suas vendas. Como posso te ajudar hoje?
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 20, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ delay: 2 }}
                  className="bg-emerald-600 text-white p-3 rounded-2xl rounded-tr-none max-w-[85%] text-sm self-end shadow-sm relative z-10"
                >
                  Gostaria de saber mais sobre a automação de atendimento.
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ delay: 3.5 }}
                  className="bg-zinc-800 text-zinc-200 p-3 rounded-2xl rounded-tl-none max-w-[85%] text-sm self-start shadow-sm relative z-10"
                >
                  Perfeito! Nosso robô atende seus leads em segundos, faz a qualificação inicial e agenda reuniões. Quer ver uma demonstração?
                </motion.div>
              </div>

              {/* Input Area */}
              <div className="bg-zinc-900 p-3 border-t border-white/5 shrink-0 flex items-center gap-3 relative z-20">
                <div className="flex-1 bg-zinc-950 border border-white/10 rounded-full px-4 py-2.5 text-sm text-zinc-500">
                  Digite sua mensagem...
                </div>
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 cursor-pointer hover:bg-emerald-400 transition-colors">
                  <ArrowRight className="w-5 h-5 text-zinc-950" />
                </div>
              </div>
            </div>
            
            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="hidden md:flex absolute -right-8 top-20 bg-zinc-900 border border-white/10 p-4 rounded-2xl shadow-xl items-center gap-3 z-30 hover:opacity-0 transition-opacity duration-300 cursor-default"
            >
              <div className="bg-violet-500/20 p-2 rounded-lg">
                <Zap className="w-5 h-5 text-violet-400" />
              </div>
              <div>
                <p className="text-white text-sm font-bold">Resposta em 3s</p>
                <p className="text-zinc-400 text-xs">Atendimento imediato</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="hidden md:flex absolute -left-8 bottom-32 bg-zinc-900 border border-white/10 p-4 rounded-2xl shadow-xl items-center gap-3 z-30 hover:opacity-0 transition-opacity duration-300 cursor-default"
            >
              <div className="bg-emerald-500/20 p-2 rounded-lg">
                <MessageSquareCode className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-white text-sm font-bold">Qualificação IA</p>
                <p className="text-zinc-400 text-xs">Filtro inteligente</p>
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
