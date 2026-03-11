import { motion, useScroll, useTransform } from 'motion/react';
import { Bot, MessageSquare, Users, Zap, BarChart3, ShieldCheck } from 'lucide-react';
import { ScrollIndicator } from './ScrollIndicator';
import { useRef } from 'react';

const features = [
  {
    icon: <Zap className="w-6 h-6 text-violet-400" />,
    title: "1. Velocidade de Conversão",
    description: "O tempo de resposta é crucial para a conversão. O robô atende múltiplos clientes simultaneamente, 24 horas por dia, 7 dias por semana, garantindo que nenhum lead esfrie.",
    metric: "Tempo de resposta: < 3s",
    image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: <Bot className="w-6 h-6 text-emerald-400" />,
    title: "2. Atendimento Humanizado",
    description: "Nossa IA é treinada para conversar de forma natural, entendendo o contexto e a intenção do lead, sem parecer um robô engessado. Ela se adapta ao tom de voz da sua marca.",
    metric: "Taxa de engajamento: 85%+",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
    title: "3. Qualificação Inteligente",
    description: "A IA faz as perguntas certas para filtrar curiosos e entregar apenas leads quentes e qualificados para o seu time de vendas, otimizando o tempo da sua equipe.",
    metric: "Leads desqualificados filtrados: 60%",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-violet-400" />,
    title: "4. Agendamento Automático",
    description: "Integrado à sua agenda, o robô marca reuniões, envia links de pagamento e dispara lembretes automaticamente, reduzindo drasticamente o no-show.",
    metric: "Aumento em agendamentos: 3x",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: <Users className="w-6 h-6 text-emerald-400" />,
    title: "5. Transição Perfeita",
    description: "Quando necessário, o robô transfere o atendimento para um vendedor humano de forma suave, passando todo o histórico da conversa e o perfil do lead.",
    metric: "Satisfação do cliente (NPS): 92",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-violet-400" />,
    title: "6. Dados Estratégicos",
    description: "Acompanhe métricas de conversão, principais dúvidas dos clientes e o desempenho do seu funil diretamente no CRM. Decisões baseadas em dados, não em achismos.",
    metric: "Visibilidade do funil: 100%",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
  }
];

export function Solutions() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="solucoes" className="py-24 bg-zinc-950 relative overflow-hidden" ref={containerRef}>
      {/* Background Elements */}
      <div className="absolute -right-40 top-1/2 w-96 h-96 bg-violet-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <Bot className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-medium text-zinc-300 uppercase tracking-wider">O Motor de Vendas</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Como a IA transforma <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">curiosos em clientes.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-400"
          >
            Um fluxo contínuo e inteligente de qualificação. Veja como nosso robô atua em cada etapa do primeiro contato.
          </motion.p>
        </div>

        {/* Vertical Flow / Analytics Style */}
        <div className="relative max-w-5xl mx-auto">
          {/* Linha central de progresso (O "Caminho") */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 -translate-x-1/2">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-emerald-500 to-violet-500"
              style={{ height: pathHeight }}
            />
          </div>

          <div className="space-y-16 md:space-y-32">
            {features.map((feature, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Ponto na linha do tempo */}
                  <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-zinc-950 border-2 border-zinc-800 flex items-center justify-center z-10">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                    />
                  </div>

                  {/* Conteúdo de Texto */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`ml-16 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16 md:text-right'}`}
                  >
                    <div className={`flex flex-col ${isEven ? 'md:items-start' : 'md:items-end'} gap-4`}>
                      <div className="w-12 h-12 bg-zinc-900 border border-white/10 rounded-xl flex items-center justify-center shadow-lg">
                        {feature.icon}
                      </div>
                      
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                        <p className="text-zinc-400 leading-relaxed text-sm md:text-base mb-4">
                          {feature.description}
                        </p>
                        
                        {/* Métrica Analítica */}
                        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium ${isEven ? '' : 'md:flex-row-reverse'}`}>
                          <BarChart3 className="w-3 h-3" />
                          {feature.metric}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Imagem (Oculta no Mobile para não poluir) */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    className={`hidden md:flex md:w-1/2 ${isEven ? 'md:pr-16 justify-end' : 'md:pl-16 justify-start'}`}
                  >
                    <div className="relative w-full max-w-[320px] aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                      <div className="absolute inset-0 bg-emerald-500/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500" />
                      <img 
                        src={feature.image} 
                        alt={feature.title} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" 
                        referrerPolicy="no-referrer" 
                      />
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
