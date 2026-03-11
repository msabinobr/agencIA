import { motion } from 'motion/react';
import { Newspaper, Flame, ThermometerSun, MousePointerClick, ArrowRight } from 'lucide-react';

const articles = [
    { id: 1, title: 'Como a IA está reduzindo o custo por lead em 40%', tag: 'Case de Sucesso' },
    { id: 2, title: 'Por que seu atendimento humano está matando suas vendas', tag: 'Análise' },
];

export function BlogNourishment() {
    return (
        <section id="blog" className="py-32 bg-zinc-950 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-20 items-center">

                    {/* Visual: Lead Temperature */}
                    <div className="flex-1 order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative p-10 rounded-[40px] bg-zinc-900/50 border border-white/5 overflow-hidden"
                        >
                            <div className="space-y-8 relative z-10">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-bold text-white uppercase tracking-tight">Lead Temperature</h3>
                                    <ThermometerSun className="w-6 h-6 text-orange-500 animate-pulse" />
                                </div>

                                {/* Cold Lead */}
                                <div className="p-5 rounded-2xl bg-white/5 border border-white/5 opacity-50">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold italic">?</div>
                                        <div>
                                            <p className="text-sm font-bold text-white">Lead Frio</p>
                                            <p className="text-xs text-zinc-500">Acabou de clicar no anúncio</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-center -my-4 h-8">
                                    <div className="w-px bg-gradient-to-b from-blue-500 to-orange-500" />
                                </div>

                                {/* Warming Up (Blog) */}
                                <div className="p-6 rounded-3xl bg-accent-blue/10 border border-accent-blue/30 relative shadow-2xl scale-105 z-20">
                                    <div className="absolute -top-3 left-6 px-3 py-1 bg-accent-blue text-white text-[10px] font-black uppercase tracking-widest rounded-full">Blog & Conteúdo</div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-accent-blue/20 flex items-center justify-center">
                                            <Newspaper className="w-6 h-6 text-accent-cyan" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-white">Aquecimento Estratégico</p>
                                            <p className="text-xs text-accent-cyan/70 font-medium">Consumindo autoridade e quebrando objeções</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-center -my-4 h-8">
                                    <div className="w-px bg-gradient-to-b from-orange-500 to-rose-500" />
                                </div>

                                {/* Hot lead */}
                                <div className="p-5 rounded-2xl bg-orange-500/10 border border-orange-500/20">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center tracking-tighter text-orange-500 font-black">$$$</div>
                                        <div>
                                            <p className="text-sm font-bold text-white">Lead no Ponto de Compra</p>
                                            <p className="text-xs text-orange-400">Pronto para fechar com o Closer</p>
                                        </div>
                                        <Flame className="w-5 h-5 text-orange-500 ml-auto" />
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/10 blur-3xl opacity-50" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-500/10 blur-3xl opacity-50" />
                        </motion.div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 space-y-8 order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-bold tracking-widest uppercase"
                        >
                            <Flame className="w-4 h-4" />
                            Lead Nourishment
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-black text-white leading-tight"
                        >
                            Crie Desejo antes <br /> do <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-500">Primeiro "Olá"</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-xl text-zinc-400 leading-relaxed"
                        >
                            Um blog não serve apenas para SEO. Ele é a sua máquina de doutrinação que prepara o lead para comprar de você antes mesmo de falar com um vendedor.
                        </motion.p>

                        <div className="space-y-4 max-w-md">
                            {articles.map((article, idx) => (
                                <motion.div
                                    key={article.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-5 rounded-2xl bg-zinc-900 border border-white/5 hover:border-accent-blue/30 transition-all flex items-center justify-between group cursor-pointer"
                                >
                                    <div className="space-y-1">
                                        <span className="text-[10px] font-black uppercase text-accent-cyan tracking-widest">{article.tag}</span>
                                        <h4 className="text-sm font-bold text-white group-hover:text-accent-blue transition-colors">{article.title}</h4>
                                    </div>
                                    <MousePointerClick className="w-5 h-5 text-zinc-700 group-hover:text-accent-blue transition-all" />
                                </motion.div>
                            ))}
                        </div>

                        <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="px-8 py-4 rounded-2xl bg-accent-blue text-white font-bold flex items-center gap-3 hover:scale-105 transition-all shadow-[0_10px_20px_rgba(0,150,255,0.3)]"
                        >
                            Falar sobre Estratégia <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
}
