import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { ScrollIndicator } from './ScrollIndicator';

const testimonials = [
  {
    name: "Marcos Silva",
    role: "CEO, Empresa de Serviços",
    content: "Antes da automação, perdíamos dezenas de leads nos finais de semana. Agora, a IA qualifica e já agenda as reuniões para segunda-feira. Nossa conversão aumentou 40%.",
    results: "+40% em Vendas",
    image: "https://i.pravatar.cc/150?img=11"
  },
  {
    name: "Ana Paula",
    role: "Diretora Comercial, E-commerce",
    content: "O tráfego pago sempre funcionou, mas o time de vendas não dava conta de responder rápido. A IA assumiu a linha de frente e o custo de aquisição (CAC) despencou.",
    results: "-60% no CAC",
    image: "https://i.pravatar.cc/150?img=5"
  },
  {
    name: "Roberto Almeida",
    role: "Fundador, Clínica de Estética",
    content: "A integração com nosso CRM foi o divisor de águas. O robô sabe exatamente se o cliente é novo ou recorrente e faz o atendimento perfeito para cada caso.",
    results: "Atendimento 24/7",
    image: "https://i.pravatar.cc/150?img=8"
  }
];

export function SocialProof() {
  return (
    <section id="depoimentos" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Resultados que falam <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">por si mesmos.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-400"
          >
            Não acredite apenas em nós. Veja o impacto real da nossa automação nos negócios dos nossos clientes.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-zinc-900/40 backdrop-blur-sm border border-white/5 p-8 rounded-3xl overflow-hidden hover:border-emerald-500/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(16,185,129,0.1)] hover:-translate-y-2 flex flex-col"
            >
              {/* Cinematic Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Large Watermark Quote */}
              <Quote className="absolute -top-4 -right-4 w-32 h-32 text-white/[0.02] group-hover:text-emerald-500/[0.05] transition-colors duration-500 transform -scale-x-100 rotate-12" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                    ))}
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                    {testimonial.results}
                  </div>
                </div>
                
                <p className="text-lg text-zinc-300 leading-relaxed mb-10 flex-1 font-medium">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4 pt-6 border-t border-white/10 group-hover:border-emerald-500/20 transition-colors duration-500">
                  <div className="relative">
                    <div className="absolute inset-0 bg-emerald-500 rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      referrerPolicy="no-referrer"
                      className="relative w-14 h-14 rounded-full object-cover border-2 border-zinc-800 group-hover:border-emerald-500/50 transition-colors duration-500"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-zinc-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <ScrollIndicator text="Descubra a Jornada de Valor" />
        </div>
      </div>
    </section>
  );
}
