import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Database, Target, TrendingUp, Calendar, Sparkles, 
  MessageSquare, Bot, CheckCircle2, Circle, Loader2, Smartphone,
  ArrowRight
} from 'lucide-react';
import { ScrollIndicator } from './ScrollIndicator';
import { CONFIG } from '../config';

const workflowCards = [
  { 
    id: 'leads', icon: MessageSquare, title: 'Análise de Leads', 
    badge: 'NLP Engine',
    description: 'Processamento de linguagem natural para extrair intenção de compra em milissegundos.',
    textColor: 'text-emerald-400', iconHover: 'group-hover:text-emerald-400',
    bgGlow: 'bg-emerald-500/20', gradient: 'from-emerald-500/10 to-transparent',
    borderHover: 'hover:border-emerald-500/50', glow: 'hover:shadow-[0_0_40px_rgba(52,211,153,0.4)]'
  },
  { 
    id: 'qualify', icon: Target, title: 'Qualificação IA', 
    badge: 'Smart Scoring',
    description: 'Filtro inteligente de objeções e cálculo de probabilidade de fechamento em tempo real.',
    textColor: 'text-violet-400', iconHover: 'group-hover:text-violet-400',
    bgGlow: 'bg-violet-500/20', gradient: 'from-violet-500/10 to-transparent',
    borderHover: 'hover:border-violet-500/50', glow: 'hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]'
  },
  { 
    id: 'crm', icon: Database, title: 'Gestão de CRM', 
    badge: 'Auto-Sync',
    description: 'Sincronização bidirecional. Atualiza funil, tags e histórico sem nenhum toque humano.',
    textColor: 'text-blue-400', iconHover: 'group-hover:text-blue-400',
    bgGlow: 'bg-blue-500/20', gradient: 'from-blue-500/10 to-transparent',
    borderHover: 'hover:border-blue-500/50', glow: 'hover:shadow-[0_0_40px_rgba(59,130,246,0.4)]'
  },
  { 
    id: 'calendar', icon: Calendar, title: 'Agendamentos', 
    badge: 'Smart Calendar',
    description: 'Cruzamento de disponibilidade e marcação de reuniões direto na agenda do closer.',
    textColor: 'text-amber-400', iconHover: 'group-hover:text-amber-400',
    bgGlow: 'bg-amber-500/20', gradient: 'from-amber-500/10 to-transparent',
    borderHover: 'hover:border-amber-500/50', glow: 'hover:shadow-[0_0_40px_rgba(245,158,11,0.4)]'
  },
];

const tasks = [
  'Lendo histórico do WhatsApp',
  'Extraindo pontos-chave',
  'Identificando intenção de compra',
  'Verificando Google Calendar',
  'Atualizando RD Station'
];

const chatSequence = [
  { role: 'user', text: 'Olá! Vi o anúncio e queria saber como funciona a automação.' },
  { role: 'agent', text: 'Olá! Que ótimo ter você aqui. Nossa IA atende seus leads em segundos, qualifica e agenda reuniões direto no seu calendário. Qual o seu volume atual de leads por dia?' },
  { role: 'user', text: 'Cerca de 50 leads por dia. O time não dá conta de responder rápido.' },
  { role: 'agent', text: 'Perfeito! Com esse volume, a IA pode recuperar até 40% das vendas perdidas por demora no atendimento. Quer ver uma simulação na prática?' }
];

export function AiVideoDemo() {
  const [activeTab, setActiveTab] = useState<'chat' | 'workflow'>('workflow');
  const [progress, setProgress] = useState(0);
  
  // Chat Animation States
  const [chatStep, setChatStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Workflow Progress Simulation
  useEffect(() => {
    if (activeTab === 'workflow') {
      setProgress(0);
      const timer = setInterval(() => {
        setProgress(p => (p < tasks.length ? p + 1 : 0));
      }, 2500);
      return () => clearInterval(timer);
    }
  }, [activeTab]);

  // Chat Dialogue Simulation
  useEffect(() => {
    let mounted = true;
    if (activeTab === 'chat') {
      const runChat = async () => {
        setChatStep(0);
        setIsTyping(false);

        const delays = [
          { type: 'msg', delay: 800 },   // Show msg 1 (User)
          { type: 'type', delay: 600 },  // Typing...
          { type: 'msg', delay: 2500 },  // Show msg 2 (Agent)
          { type: 'type', delay: 1500 }, // Wait a bit before user types
          { type: 'msg', delay: 1500 },  // Show msg 3 (User)
          { type: 'type', delay: 800 },  // Typing...
          { type: 'msg', delay: 2500 },  // Show msg 4 (Agent)
        ];

        let currentStep = 0;
        for (const step of delays) {
          if (!mounted) break;
          if (step.type === 'type') {
            setIsTyping(true);
            await new Promise(r => setTimeout(r, step.delay));
          } else {
            setIsTyping(false);
            currentStep++;
            setChatStep(currentStep);
            // Auto-scroll
            setTimeout(() => {
              if (chatContainerRef.current) {
                chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
              }
            }, 100);
            await new Promise(r => setTimeout(r, step.delay));
          }
        }
      };
      runChat();
    }
    return () => { mounted = false; };
  }, [activeTab]);

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                Workspace Inteligente
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                Você sabe atrair leads. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Nós garantimos o atendimento.</span>
              </h2>
              <p className="text-lg text-zinc-400 leading-relaxed">
                O maior gargalo das empresas hoje não é gerar tráfego, é <strong>atender com velocidade e qualidade</strong>. Tráfego sem um atendimento eficiente é dinheiro jogado fora. Veja como nossa IA resolve isso na prática.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10 transition-colors duration-300">
                  <Database className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">Integração Total com CRM</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    A IA não apenas conversa, ela lê e alimenta seu CRM em tempo real. Ela sabe exatamente em qual etapa do funil o lead está.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-violet-500/50 group-hover:bg-violet-500/10 transition-colors duration-300">
                  <Target className="w-6 h-6 text-violet-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-violet-400 transition-colors duration-300">Abordagem Contextual</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Um lead frio recebe conteúdo de nutrição. Um lead quente recebe um link de checkout ou agendamento. Decisões estratégicas 24/7.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Claude-like Interactive Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-20"
          >
            <div className="relative h-[700px] md:h-[540px] bg-[#09090b]/90 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col">
              
              {/* Window Controls & Toggle Header */}
              <div className="flex flex-col border-b border-white/5 bg-zinc-900/50 rounded-t-2xl">
                <div className="flex items-center px-4 py-3 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <div className="ml-auto flex items-center gap-2 text-[10px] text-emerald-400 font-mono uppercase tracking-wider bg-emerald-500/10 px-2 py-1 rounded-full border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    System Online
                  </div>
                </div>
                
                <div className="flex justify-center pb-4">
                  <div className="bg-zinc-950 p-1 rounded-xl flex gap-1 border border-white/5 shadow-inner">
                    <button 
                      onClick={() => setActiveTab('workflow')}
                      className={`px-8 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                        activeTab === 'workflow' 
                          ? 'bg-zinc-800 text-white shadow-md border border-white/10' 
                          : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900'
                      }`}
                    >
                      <Bot className="w-4 h-4" />
                      Automação
                    </button>
                    <button 
                      onClick={() => setActiveTab('chat')}
                      className={`px-8 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                        activeTab === 'chat' 
                          ? 'bg-zinc-800 text-white shadow-md border border-white/10' 
                          : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900'
                      }`}
                    >
                      <MessageSquare className="w-4 h-4" />
                      Chat ao Vivo
                    </button>
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-1 relative p-4 md:p-6 bg-zinc-950/30 rounded-b-2xl overflow-y-auto md:overflow-visible custom-scrollbar">
                <AnimatePresence mode="wait">
                  {activeTab === 'workflow' ? (
                    <motion.div 
                      key="workflow"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="h-full relative flex flex-col md:flex-row gap-4 md:gap-6"
                    >
                      {/* Left: Folders Grid */}
                      <div className="grid grid-cols-2 gap-4 w-full md:w-[240px] h-fit shrink-0">
                        {workflowCards.map((card, i) => (
                          <div 
                            key={i} 
                            className={`group relative bg-zinc-900/80 border border-white/5 p-4 rounded-2xl transition-all duration-500 cursor-pointer flex flex-col items-center justify-center gap-3 aspect-square hover:z-50 hover:scale-105 ${card.borderHover} ${card.glow}`}
                          >
                            {/* Animated background gradient on hover */}
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className={`relative p-3 rounded-full bg-zinc-950 border border-white/5 group-hover:scale-110 transition-transform duration-500 z-10`}>
                              {/* Glow behind icon */}
                              <div className={`absolute inset-0 rounded-full ${card.bgGlow} blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                              <card.icon className={`relative w-6 h-6 text-zinc-500 ${card.iconHover} transition-colors duration-500 z-10`} />
                            </div>
                            <span className="relative text-[11px] text-zinc-400 group-hover:text-white font-medium text-center leading-tight z-10 transition-colors duration-500">
                              {card.title}
                            </span>

                            {/* Rich Tooltip */}
                            <div className="hidden md:block absolute -top-4 left-1/2 -translate-x-1/2 -translate-y-full w-56 bg-zinc-900/95 backdrop-blur-xl border border-white/10 p-4 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-2xl z-[100] pointer-events-none scale-95 group-hover:scale-100 origin-bottom">
                              {/* Tooltip inner glow */}
                              <div className={`absolute inset-0 bg-gradient-to-b ${card.gradient} opacity-20 rounded-xl`} />
                              <div className="relative z-10 flex flex-col gap-2">
                                <div className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider ${card.textColor}`}>
                                  <Sparkles className="w-3 h-3" />
                                  {card.badge}
                                </div>
                                <p className="text-xs text-zinc-300 leading-relaxed">
                                  {card.description}
                                </p>
                              </div>
                              {/* Arrow pointing down */}
                              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-zinc-900/95 border-b border-r border-white/10 transform rotate-45" />
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Right: Floating Panels */}
                      <div className="flex-1 relative flex flex-col gap-4 min-h-[300px]">
                        
                        {/* Progress List */}
                        <div className="flex-1 bg-zinc-900/80 backdrop-blur border border-white/5 rounded-2xl p-5 shadow-xl flex flex-col">
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">Progresso da IA</h4>
                            <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">
                              {Math.round((progress / tasks.length) * 100)}%
                            </span>
                          </div>
                          <div className="space-y-4 flex-1">
                            {tasks.map((task, i) => {
                              const isActive = progress === i;
                              const isDone = progress > i;
                              return (
                                <div key={i} className="flex items-start gap-3 relative">
                                  {/* Connection Line */}
                                  {i !== tasks.length - 1 && (
                                    <div className={`absolute left-2 top-5 bottom-[-16px] w-px ${isDone ? 'bg-emerald-500/50' : 'bg-zinc-800'}`} />
                                  )}
                                  
                                  <div className="relative z-10 bg-zinc-900">
                                    {isDone ? (
                                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                    ) : isActive ? (
                                      <Loader2 className="w-4 h-4 text-emerald-400 animate-spin shrink-0 mt-0.5 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                                    ) : (
                                      <Circle className="w-4 h-4 text-zinc-700 shrink-0 mt-0.5" />
                                    )}
                                  </div>
                                  
                                  <span className={`text-xs leading-tight transition-all duration-300 ${
                                    isDone ? 'text-zinc-500 line-through' : 
                                    isActive ? 'text-emerald-400 font-medium drop-shadow-[0_0_8px_rgba(52,211,153,0.3)]' : 
                                    'text-zinc-600'
                                  }`}>
                                    {task}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Context Sidebar */}
                        <div className="bg-zinc-900/80 backdrop-blur border border-white/5 rounded-2xl p-4 shadow-xl">
                          <h4 className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mb-3">Contexto Integrado</h4>
                          <div className="flex gap-3">
                            <div className="flex-1 bg-zinc-950 border border-white/5 rounded-xl p-2 flex flex-col items-center justify-center gap-1 hover:border-emerald-500/30 transition-colors cursor-pointer group">
                              <Smartphone className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
                              <span className="text-[9px] text-zinc-500 group-hover:text-zinc-300">WhatsApp</span>
                            </div>
                            <div className="flex-1 bg-zinc-950 border border-white/5 rounded-xl p-2 flex flex-col items-center justify-center gap-1 hover:border-blue-500/30 transition-colors cursor-pointer group">
                              <Database className="w-4 h-4 text-zinc-500 group-hover:text-blue-400 transition-colors" />
                              <span className="text-[9px] text-zinc-500 group-hover:text-zinc-300">CRM</span>
                            </div>
                            <div className="flex-1 bg-zinc-950 border border-white/5 rounded-xl p-2 flex flex-col items-center justify-center gap-1 hover:border-violet-500/30 transition-colors cursor-pointer group">
                              <Calendar className="w-4 h-4 text-zinc-500 group-hover:text-violet-400 transition-colors" />
                              <span className="text-[9px] text-zinc-500 group-hover:text-zinc-300">Agenda</span>
                            </div>
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="chat"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="h-full flex flex-col bg-zinc-950/50 rounded-2xl border border-white/5 overflow-hidden relative"
                    >
                      {/* Chat Header */}
                      <div className="bg-zinc-900/80 px-4 py-3 border-b border-white/5 flex items-center gap-3 shrink-0">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-[0_0_15px_rgba(52,211,153,0.3)]">
                          <Bot className="w-4 h-4 text-zinc-950" />
                        </div>
                        <div>
                          <h3 className="text-white font-medium text-xs">Assistente {CONFIG.brand.name}</h3>
                          <p className="text-emerald-400 text-[10px] flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Online
                          </p>
                        </div>
                      </div>

                      {/* Chat Messages */}
                      <div 
                        ref={chatContainerRef}
                        className="flex-1 overflow-y-auto flex flex-col gap-4 p-4 custom-scrollbar scroll-smooth"
                      >
                        <AnimatePresence>
                          {chatSequence.slice(0, chatStep).map((msg, idx) => (
                            <motion.div 
                              key={idx}
                              initial={{ opacity: 0, y: 10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              transition={{ duration: 0.3 }}
                              className={`max-w-[85%] text-sm shadow-sm ${
                                msg.role === 'user' 
                                  ? 'bg-zinc-800 text-zinc-200 p-3.5 rounded-2xl rounded-tr-sm self-end border border-white/5' 
                                  : 'bg-gradient-to-br from-emerald-500 to-emerald-600 text-white p-3.5 rounded-2xl rounded-tl-sm self-start shadow-[0_4px_20px_rgba(16,185,129,0.15)]'
                              }`}
                            >
                              {msg.text}
                            </motion.div>
                          ))}
                        </AnimatePresence>

                        {/* Typing Indicator */}
                        <AnimatePresence>
                          {isTyping && (
                            <motion.div 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, scale: 0.9 }}
                              className="bg-zinc-800/80 border border-white/5 p-3.5 rounded-2xl rounded-tl-sm self-start flex items-center gap-1.5 shadow-sm"
                            >
                              <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                              <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                              <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Chat Input Mockup */}
                      <div className="p-3 bg-zinc-900/80 border-t border-white/5 shrink-0">
                        <div className="bg-zinc-950 border border-white/10 rounded-full px-4 py-2 flex items-center justify-between">
                          <span className="text-xs text-zinc-600">Digite sua mensagem...</span>
                          <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                            <ArrowRight className="w-3 h-3 text-emerald-500" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

        </div>

        <div className="mt-24 flex justify-center">
          <ScrollIndicator text="Veja o passo a passo" />
        </div>
      </div>
    </section>
  );
}
