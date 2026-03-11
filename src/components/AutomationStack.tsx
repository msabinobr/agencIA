import { motion } from 'motion/react';
import { Network, Database, Zap, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

const automations = [
    {
        title: 'Integração com n8n',
        desc: 'Conectamos seu WhatsApp a centenas de ferramentas (CRM, Planilhas, Email) com fluxos inteligentes.',
        icon: Network,
        features: ['Sincronização em tempo real', 'Webhooks personalizados', 'Lógica condicional avançada']
    },
    {
        title: 'Aquisição de Leads',
        desc: 'Automatizamos o transbordo de anúncios direto para o funil de atendimento sem perda de dados.',
        icon: Users,
        features: ['Trackeamento de origem', 'Qualificação imediata', 'Distribuição inteligente']
    },
    {
        title: 'CRM & Follow-up',
        desc: 'Nunca mais esqueça um lead. A IA atualiza seu CRM e faz follow-ups em horários estratégicos.',
        icon: Database,
        features: ['Gestão de pipeline', 'Lembretes automáticos', 'Histórico centralizado']
    }
];

export function AutomationStack() {
    return (
        <section id="automacao" className="py-32 bg-zinc-950 relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-2 mb-6"
                    >
                        <Zap className="w-5 h-5 text-accent-cyan fill-accent-cyan/20" />
                        <span className="text-sm font-bold text-accent-cyan tracking-widest uppercase">Poder de Automação</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-white mb-6"
                    >
                        O Cérebro da sua <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-cyan">Escala Comercial</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-zinc-400"
                    >
                        Não usamos apenas ferramentas, construímos ecossistemas que trabalham 24/7 enquanto você foca na estratégia.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {automations.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative p-8 rounded-[32px] bg-zinc-900/50 border border-white/5 hover:border-accent-blue/30 transition-all duration-500 overflow-hidden"
                            >
                                {/* Hover Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent-blue group-hover:rotate-6 transition-all duration-500">
                                        <Icon className="w-7 h-7 text-accent-cyan group-hover:text-white transition-colors" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent-cyan transition-colors">{item.title}</h3>
                                    <p className="text-zinc-400 leading-relaxed mb-8">{item.desc}</p>

                                    <ul className="space-y-3">
                                        {item.features.map(feature => (
                                            <li key={feature} className="flex items-center gap-3 text-sm text-zinc-300 font-medium">
                                                <CheckCircle2 className="w-4 h-4 text-accent-cyan flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-8 pt-6 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                                        <button className="flex items-center gap-2 text-accent-cyan text-sm font-bold uppercase tracking-wider hover:gap-3 transition-all">
                                            Ver detalhes <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Integration Showcase (Subtle Logos/Names) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700"
                >
                    {['HubSpot', 'Salesforce', 'n8n.io', 'Google Sheets', 'ActiveCampaign', 'Pipedrive'].map(brand => (
                        <span key={brand} className="text-xl font-black text-white px-2 tracking-tighter opacity-50">{brand}</span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
