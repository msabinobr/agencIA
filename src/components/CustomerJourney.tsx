import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Megaphone, 
  MessageCircle, 
  UserPlus, 
  CalendarCheck, 
  Sparkles, 
  TrendingUp, 
  Star, 
  Share2,
  Flag,
  Play
} from 'lucide-react';
import { CONFIG } from '../config';

const steps = [
  { 
    id: 1, 
    title: 'Atração', 
    subtitle: 'Awareness',
    desc: 'O lead vê seu anúncio (Meta/Google) e clica para o WhatsApp.', 
    icon: Megaphone, 
    color: 'from-pink-500 to-rose-500', 
    borderColor: 'border-pink-500',
    shadow: 'hover:shadow-[0_0_40px_rgba(236,72,153,0.3)]',
    textColor: 'text-pink-400'
  },
  { 
    id: 2, 
    title: 'Engajamento', 
    subtitle: 'Engage',
    desc: 'A IA atende em 3 segundos. O lead é engajado no pico de interesse, sem vácuo.', 
    icon: MessageCircle, 
    color: 'from-orange-500 to-amber-500', 
    borderColor: 'border-orange-500',
    shadow: 'hover:shadow-[0_0_40px_rgba(249,115,22,0.3)]',
    textColor: 'text-orange-400'
  },
  { 
    id: 3, 
    title: 'Captura', 
    subtitle: 'Subscribe',
    desc: 'A IA coleta nome, email e entende a dor principal do lead de forma natural na conversa.', 
    icon: UserPlus, 
    color: 'from-amber-500 to-yellow-500', 
    borderColor: 'border-amber-500',
    shadow: 'hover:shadow-[0_0_40px_rgba(245,158,11,0.3)]',
    textColor: 'text-amber-400'
  },
  { 
    id: 4, 
    title: 'Conversão', 
    subtitle: 'Convert',
    desc: 'A IA quebra objeções e agenda a reunião direto na agenda do closer (ou faz a venda).', 
    icon: CalendarCheck, 
    color: 'from-emerald-500 to-teal-500', 
    borderColor: 'border-emerald-500',
    shadow: 'hover:shadow-[0_0_40px_rgba(16,185,129,0.3)]',
    textColor: 'text-emerald-400'
  },
  { 
    id: 5, 
    title: 'Encantamento', 
    subtitle: 'Excite',
    desc: 'O lead se surpreende com a experiência fluida, sem filas de espera ou "digite 1".', 
    icon: Sparkles, 
    color: 'from-teal-500 to-cyan-500', 
    borderColor: 'border-teal-500',
    shadow: 'hover:shadow-[0_0_40px_rgba(20,184,166,0.3)]',
    textColor: 'text-teal-400'
  },
  { 
    id: 6, 
    title: 'Ascensão', 
    subtitle: 'Ascend',
    desc: 'Após a venda, a IA faz follow-up automático oferecendo upsells ou renovações.', 
    icon: TrendingUp, 
    color: 'from-cyan-500 to-blue-500', 
    borderColor: 'border-cyan-500',
    shadow: 'hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]',
    textColor: 'text-cyan-400'
  },
  { 
    id: 7, 
    title: 'Defesa', 
    subtitle: 'Advocate',
    desc: 'A IA solicita feedback (NPS). Clientes satisfeitos avaliam sua empresa no Google.', 
    icon: Star, 
    color: 'from-blue-500 to-indigo-500', 
    borderColor: 'border-blue-500',
    shadow: 'hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]',
    textColor: 'text-blue-400'
  },
  { 
    id: 8, 
    title: 'Promoção', 
    subtitle: 'Promote',
    desc: 'A IA gera links de indicação. O cliente traz novos leads, reiniciando o ciclo.', 
    icon: Share2, 
    color: 'from-violet-500 to-purple-500', 
    borderColor: 'border-violet-500',
    shadow: 'hover:shadow-[0_0_40px_rgba(139,92,246,0.3)]',
    textColor: 'text-violet-400'
  },
];

function StepRow({ step, index }: { step: typeof steps[0], index: number }) {
  const isEven = index % 2 === 0;
  const Icon = step.icon;
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax effect: even and odd items move at slightly different speeds
  // to create a subtle sense of depth and floating.
  const yOffset = isEven ? 40 : 70;
  const y = useTransform(scrollYProgress, [0, 1], [yOffset, -yOffset]);

  return (
    <div ref={ref} className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
      
      {/* Empty space for desktop alignment */}
      <div className="hidden md:block md:w-1/2" />

      {/* Node (Board Game Space) */}
      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
          className={`w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${step.color} p-1 shadow-lg`}
        >
          <div className="w-full h-full bg-zinc-950 rounded-full flex items-center justify-center border-2 border-transparent bg-clip-padding">
            <Icon className={`w-6 h-6 md:w-7 md:h-7 text-white`} />
          </div>
        </motion.div>
        
        {/* Step Number Badge */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-white text-zinc-950 rounded-full flex items-center justify-center text-xs font-bold shadow-md">
          {step.id}
        </div>
      </div>

      {/* Card with Parallax Wrapper */}
      <motion.div 
        style={{ y }}
        className={`w-full md:w-1/2 pl-24 md:pl-0 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}
      >
        <motion.div
          initial={{ opacity: 0, x: isEven ? -30 : 30, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={`group bg-zinc-900/40 backdrop-blur-sm border border-white/5 p-6 md:p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 ${step.shadow} relative overflow-hidden`}
        >
          {/* Card Inner Glow */}
          <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
          
          <div className={`text-xs font-bold tracking-wider uppercase mb-2 ${step.textColor}`}>
            Fase {step.id} • {step.subtitle}
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">
            {step.title}
          </h3>
          <p className="text-zinc-400 leading-relaxed">
            {step.desc}
          </p>
        </motion.div>
      </motion.div>

    </div>
  );
}

export function CustomerJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="jornada" className="py-24 relative overflow-hidden bg-zinc-950">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6"
          >
            <Play className="w-4 h-4" />
            O Jogo da Conversão
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            A Jornada de Valor do Cliente
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-400"
          >
            Como a IA da {CONFIG.brand.name} conduz seu lead do clique à indicação, passo a passo, de forma 100% automatizada.
          </motion.p>
        </div>

        {/* Board Game Container */}
        <div className="relative max-w-5xl mx-auto" ref={containerRef}>
          
          {/* The Path (Dashed Background) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1.5 -translate-x-1/2 bg-zinc-800/50 rounded-full" />
          
          {/* The Path (Animated Fill) */}
          <motion.div 
            className="absolute left-8 md:left-1/2 top-0 w-1.5 -translate-x-1/2 bg-gradient-to-b from-emerald-500 via-blue-500 to-violet-500 rounded-full origin-top"
            style={{ height: pathHeight }}
          />

          {/* Start Point */}
          <div className="relative flex justify-start md:justify-center mb-16">
            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 bg-zinc-950 border-4 border-dashed border-zinc-700 rounded-full flex items-center justify-center z-10">
              <span className="text-zinc-500 font-bold text-xs tracking-widest">START</span>
            </div>
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-12 md:gap-24 py-8">
            {steps.map((step, index) => (
              <StepRow key={step.id} step={step} index={index} />
            ))}
          </div>

          {/* End Point */}
          <div className="relative flex justify-start md:justify-center mt-16">
            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center z-10 shadow-[0_0_30px_rgba(52,211,153,0.4)]">
              <Flag className="w-7 h-7 text-zinc-950" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
