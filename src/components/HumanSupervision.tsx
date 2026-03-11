import { motion } from 'motion/react';
import { Eye, UserCog, ShieldAlert, Activity } from 'lucide-react';
import { ScrollIndicator } from './ScrollIndicator';

export function HumanSupervision() {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <ShieldAlert className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-medium text-zinc-300 uppercase tracking-wider">O Nosso Diferencial</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight"
          >
            IA no volante. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Humanos na supervisão.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-400 leading-relaxed"
          >
            Assim como um carro autônomo precisa de monitoramento para garantir 100% de segurança, nossa automação não trabalha "às cegas". A IA executa em escala, mas as decisões críticas são sempre supervisionadas.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          
          {/* Visual / Abstract Dashboard (Radar) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-sm mx-auto">
              {/* Círculo Central (IA) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-zinc-900 border border-emerald-500/30 flex items-center justify-center relative z-10 shadow-[0_0_50px_rgba(16,185,129,0.2)]">
                  <Activity className="w-12 h-12 md:w-16 md:h-16 text-emerald-400 animate-pulse" />
                  
                  {/* Órbitas (Supervisão) */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    className="absolute inset-[-30px] md:inset-[-40px] border border-dashed border-white/10 rounded-full"
                  >
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-zinc-800 border border-white/20 rounded-full flex items-center justify-center">
                      <Eye className="w-4 h-4 text-violet-400" />
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                    className="absolute inset-[-60px] md:inset-[-80px] border border-white/5 rounded-full"
                  >
                    <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-8 h-8 bg-zinc-800 border border-white/20 rounded-full flex items-center justify-center">
                      <UserCog className="w-4 h-4 text-emerald-400" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content / Timeline Flow */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-0"
          >
            {/* Item 1: Auditoria da Agência */}
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shrink-0 z-10">
                  <Eye className="w-5 h-5 text-emerald-400" />
                </div>
                
                {/* Elemento Interativo / Animação de Conexão */}
                <div className="w-px h-24 md:h-32 bg-gradient-to-b from-emerald-500/50 to-violet-500/50 relative flex justify-center my-2">
                  <motion.div 
                    animate={{ y: [0, 80, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)] absolute top-2"
                  />
                </div>
              </div>
              
              <div className="pt-2 pb-8">
                <h3 className="text-white font-semibold text-xl md:text-2xl mb-3">Auditoria da Agência</h3>
                <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                  Nossa equipe monitora ativamente as interações da IA dentro do CRM, ajustando rotas, corrigindo desvios e garantindo que a qualificação esteja perfeitamente alinhada com a sua estratégia.
                </p>
              </div>
            </div>

            {/* Item 2: Controle Total do Cliente */}
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-violet-500/10 flex items-center justify-center border border-violet-500/20 shrink-0 z-10">
                  <UserCog className="w-5 h-5 text-violet-400" />
                </div>
              </div>
              
              <div className="pt-2">
                <h3 className="text-white font-semibold text-xl md:text-2xl mb-3">Controle Total do Cliente</h3>
                <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                  Sua equipe comercial tem acesso em tempo real. Se um lead de alto valor exigir um toque mais pessoal, seu vendedor pode assumir o controle da conversa instantaneamente, pausando a IA.
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        <div className="mt-24 flex justify-center">
          <ScrollIndicator text="Veja os resultados" />
        </div>
      </div>
    </section>
  );
}
