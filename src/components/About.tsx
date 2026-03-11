import { motion } from 'motion/react';
import { Target, Lightbulb, Rocket, CheckCircle2 } from 'lucide-react';
import { fadeUp, stagger } from '../shared/animations';
import { CONFIG } from '../config';

const values = [
  {
    icon: Target,
    title: "Foco em Conversão",
    desc: "Não criamos apenas chatbots. Desenhamos funis de vendas inteligentes focados em aumentar seu faturamento."
  },
  {
    icon: Lightbulb,
    title: "Inteligência Real",
    desc: "Nossa IA entende contexto, intenção e objeções, oferecendo um atendimento natural e humanizado."
  },
  {
    icon: Rocket,
    title: "Escala sem Limites",
    desc: "Atenda 10 ou 10.000 leads simultaneamente com a mesma qualidade e tempo de resposta (menos de 3 segundos)."
  }
];

export function About() {
  return (
    <section id="sobre" className="py-24 bg-zinc-950 relative overflow-hidden border-t border-white/5">
      {/* Background Elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="flex flex-col gap-8"
          >
            <div>
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
                Sobre a {CONFIG.brand.name}
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
                Muito mais que automação. Uma <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">assessoria comercial</span> completa.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-zinc-400 leading-relaxed">
                Nascemos para resolver o maior gargalo das empresas modernas: o atendimento. Combinamos inteligência artificial de ponta com estratégias comerciais validadas para transformar seu WhatsApp em uma verdadeira máquina de vendas.
              </motion.p>
            </div>

            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              {values.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start bg-zinc-900/50 border border-white/5 p-5 rounded-2xl hover:bg-zinc-900 hover:border-emerald-500/20 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* Decorative Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            
            {/* Main Visual Card */}
            <div className="relative w-full max-w-md bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/20 blur-3xl rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-violet-500/20 blur-3xl rounded-full" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8 pb-8 border-b border-white/5">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                    <span className="text-2xl font-bold text-zinc-950">IN</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{CONFIG.brand.name}</h3>
                    <p className="text-emerald-400 text-sm font-medium">{CONFIG.brand.tagline}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    "Mapeamento de Processos",
                    "Treinamento de IA Personalizado",
                    "Integração com CRM",
                    "Acompanhamento de Resultados"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      <span className="text-zinc-300 font-medium">{text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-white/5">
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 flex items-center justify-between">
                    <div>
                      <p className="text-zinc-400 text-xs uppercase tracking-wider font-semibold mb-1">Nossa Missão</p>
                      <p className="text-emerald-400 font-medium text-sm">Escalar suas vendas sem perder a essência humana.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
