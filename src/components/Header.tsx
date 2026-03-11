import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { waURL, CONFIG } from '../config';
import { Logo } from './Logo';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <Logo className="h-8" />
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
          <a href="#solucoes" className="hover:text-white transition-colors">Soluções AI</a>
          <a href="#jornada" className="hover:text-white transition-colors">Jornada de Valor</a>
          <a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a>
          <a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </nav>

        <div className="hidden md:block">
          <a 
            href={waURL(CONFIG.wa.msgHero)}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-emerald-500 hover:bg-emerald-400 text-zinc-950 px-6 py-2.5 rounded-full font-semibold transition-all transform hover:scale-105"
          >
            Falar com Especialista
          </a>
        </div>

        <button 
          className="md:hidden text-zinc-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-zinc-900 border-b border-white/10 p-6 flex flex-col gap-4"
        >
          <a href="#solucoes" onClick={() => setIsOpen(false)} className="text-zinc-300 hover:text-white font-medium">Soluções AI</a>
          <a href="#jornada" onClick={() => setIsOpen(false)} className="text-zinc-300 hover:text-white font-medium">Jornada de Valor</a>
          <a href="#sobre" onClick={() => setIsOpen(false)} className="text-zinc-300 hover:text-white font-medium">Sobre Nós</a>
          <a href="#depoimentos" onClick={() => setIsOpen(false)} className="text-zinc-300 hover:text-white font-medium">Depoimentos</a>
          <a href="#faq" onClick={() => setIsOpen(false)} className="text-zinc-300 hover:text-white font-medium">FAQ</a>
          <a 
            href={waURL(CONFIG.wa.msgHero)}
            target="_blank" 
            rel="noopener noreferrer"
            className="text-center bg-emerald-500 text-zinc-950 px-6 py-3 rounded-xl font-semibold mt-4"
          >
            Falar com Especialista
          </a>
        </motion.div>
      )}
    </header>
  );
}
