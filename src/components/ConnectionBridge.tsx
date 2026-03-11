import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function ConnectionBridge() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Efeito Parallax para o brilho de fundo e os textos
  const yGlow = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);
  const opacityGlow = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  
  const yText1 = useTransform(scrollYProgress, [0, 1], ["50%", "-50%"]);
  const yText2 = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);

  // Parallax para a faixa animada (pulso de energia)
  const yBand = useTransform(scrollYProgress, [0, 1], ["-150%", "150%"]);
  const opacityBand = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className="h-64 md:h-80 bg-gradient-to-b from-black via-emerald-950/60 to-black relative flex justify-center items-center overflow-hidden">
      {/* Parallax Glow */}
      <motion.div 
        style={{ y: yGlow, opacity: opacityGlow }} 
        className="absolute w-[400px] h-[400px] bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none" 
      />

      {/* Linha Contínua de Conexão */}
      <div className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-black via-emerald-500 to-black opacity-60" />

      {/* Pulso de Energia (Dados fluindo da IA para o Humano) - Agora com Parallax e Fade-out */}
      <motion.div
        style={{ top: yBand, opacity: opacityBand }}
        className="absolute left-1/2 -translate-x-1/2 w-1 h-48 bg-gradient-to-b from-transparent via-emerald-400 to-transparent shadow-[0_0_40px_rgba(16,185,129,1)]"
      />

      {/* Textos Flutuantes com Parallax (Contexto da Transição) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <motion.div style={{ y: yText1 }} className="flex items-center gap-3 opacity-40 ml-32 md:ml-48 mb-16">
          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_5px_rgba(16,185,129,0.8)]" />
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-emerald-400 font-medium">Processamento IA</span>
        </motion.div>
        
        <motion.div style={{ y: yText2 }} className="flex items-center gap-3 opacity-40 mr-32 md:mr-48 mt-16">
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-violet-400 font-medium">Análise Humana</span>
          <div className="w-1.5 h-1.5 bg-violet-500 rounded-full shadow-[0_0_5px_rgba(139,92,246,0.8)]" />
        </motion.div>
      </div>
    </div>
  );
}
