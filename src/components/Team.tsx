import { motion } from 'motion/react';
import { fadeUp, stagger } from '../shared/animations';

const team = [
  {
    name: 'Marcos',
    role: 'Full Stack Marketer',
    description: 'Arquiteto de funis de venda, automações e integrações. Certificado pela Digital Marketer.',
    image: 'https://i.pravatar.cc/600?img=11',
  },
  {
    name: 'Danilo',
    role: 'Comercial',
    description: 'O motor de vendas. Focado em fechar negócios e expandir a agência.',
    image: 'https://i.pravatar.cc/600?img=12',
  },
  {
    name: 'Letícia',
    role: 'Atendimento / SDR',
    description: 'A linha de frente. Garante que cada lead seja bem recebido e qualificado.',
    image: 'https://i.pravatar.cc/600?img=5',
  },
  {
    name: 'Rafaela',
    role: 'Atendimento / SDR',
    description: 'Conexão com o cliente. Transforma conversas em oportunidades reais.',
    image: 'https://i.pravatar.cc/600?img=9',
  },
  {
    name: 'Edileuza',
    role: 'Tráfego',
    description: 'A estrategista de dados. Otimiza campanhas para o máximo de ROI.',
    image: 'https://i.pravatar.cc/600?img=44',
  },
];

export function Team() {
  return (
    <section id="equipe" className="py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="flex flex-col items-center gap-4"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-medium text-zinc-300 uppercase tracking-wider">Especialistas em Escala</span>
            </motion.div>
            
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              A inteligência por trás da <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Automação</span>
            </motion.h2>
            
            <motion.p variants={fadeUp} className="text-lg text-zinc-400">
              Nossa equipe combina expertise humana com inteligência artificial para entregar resultados fora da curva.
            </motion.p>
          </motion.div>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={fadeUp}
              className="group relative h-[420px] rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 hover:border-emerald-500/30 transition-colors duration-500"
            >
              {/* Image */}
              <img 
                src={member.image} 
                alt={member.name}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${member.name}&background=059669&color=fff&size=512&font-size=0.33`;
                }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="mb-3 inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md">
                    <span className="text-xs font-semibold text-emerald-400">{member.role}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  
                  <p className="text-sm text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>

              {/* Top Glow Line on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
