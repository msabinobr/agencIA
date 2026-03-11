import { motion } from 'motion/react';
import { Layout, Target, MousePointer2, Layers, BarChart3, ShieldCheck } from 'lucide-react';

export function MarketingEngine() {
    return (
        <section id="marketing" className="py-32 bg-zinc-950 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-20 items-center">

                    {/* Left Side: Content */}
                    <div className="flex-1 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-sm font-bold tracking-widest uppercase"
                        >
                            <Target className="w-4 h-4" />
                            Engine for Scale
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-black text-white leading-tight"
                        >
                            Muito além de <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-cyan text-7xl md:text-8xl">Tráfego.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-xl text-zinc-400 leading-relaxed max-w-xl"
                        >
                            Fazer tráfego direto sem estrutura é queimar dinheiro. Nós construímos o ecossistema que transforma curiosos em conversões reais.
                        </motion.p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10">
                            {[
                                { icon: Layout, title: 'High-Convert LP', desc: 'Páginas otimizadas para carregamento rápido e foco em CTA.' },
                                { icon: MousePointer2, title: 'Pixel & Tracking', desc: 'Implementação avançada de GTM e Pixel para otimização de campanhas.' },
                                { icon: Layers, title: 'Funil de 3 Etapas', desc: 'Atração → Qualificação (IA) → Conversão (Closer).' },
                                { icon: ShieldCheck, title: 'Autoridade e Trust', desc: 'Estrutura profissional que transmite confiança imediata.' }
                            ].map((item, idx) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="space-y-3"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center">
                                        <item.icon className="w-5 h-5 text-accent-cyan" />
                                    </div>
                                    <h3 className="font-bold text-white text-lg">{item.title}</h3>
                                    <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Visual Logic */}
                    <div className="flex-1 w-full max-w-xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative p-8 md:p-12 rounded-[48px] bg-gradient-to-b from-zinc-900 to-zinc-950 border border-white/5 shadow-2xl overflow-hidden"
                        >
                            {/* Visual Glassmorphism Logic */}
                            <div className="space-y-6">
                                <div className="p-6 rounded-3xl bg-zinc-800/50 border border-white/5 relative">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-xs font-black uppercase text-zinc-400 tracking-widest">Setup Amador</span>
                                        <span className="text-xs font-bold text-rose-500 bg-rose-500/10 px-2 py-0.5 rounded-full">Alto Desperdício</span>
                                    </div>
                                    <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden">
                                        <div className="h-full w-1/3 bg-rose-500" />
                                    </div>
                                    <p className="mt-3 text-xs text-zinc-500 italic">Tráfego direto → WhatsApp → Vácuo do Atendente</p>
                                </div>

                                <div className="flex justify-center -my-3 relative z-10">
                                    <div className="w-10 h-10 rounded-full bg-accent-blue flex items-center justify-center shadow-[0_0_20px_rgba(0,150,255,0.4)]">
                                        <Layers className="w-5 h-5 text-white" />
                                    </div>
                                </div>

                                <div className="p-6 rounded-3xl bg-accent-blue/10 border border-accent-blue/20 relative shadow-[0_0_40px_rgba(0,150,255,0.1)]">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-xs font-black uppercase text-accent-cyan tracking-widest">Setup Intalky</span>
                                        <span className="text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">ROAS Máximo</span>
                                    </div>
                                    <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '85%' }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                            className="h-full bg-gradient-to-r from-accent-blue to-accent-cyan"
                                        />
                                    </div>
                                    <p className="mt-3 text-xs text-white/70 font-medium">Anúncio → LP (Pixel) → IA (Qualificação) → Venda 🔥</p>
                                </div>
                            </div>

                            {/* Dashboard Elements Decorations */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent-cyan/10 blur-3xl rounded-full" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5 pointer-events-none">
                                <BarChart3 className="w-full h-full text-white" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
