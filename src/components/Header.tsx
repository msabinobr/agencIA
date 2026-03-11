import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { waURL, CONFIG } from '../config';
import { Logo } from './Logo';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <Logo className="h-10" />
        </a>

        <nav className="hidden xl:flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400">
          <a href="#automacao" className="hover:text-accent-cyan transition-colors">Automação</a>
          <a href="#marketing" className="hover:text-accent-cyan transition-colors">Marketing</a>
          <a href="#jornada" className="hover:text-accent-cyan transition-colors">Jornada</a>
          <a href="#educacional" className="hover:text-accent-cyan transition-colors">Educacional</a>
          <a href="#blog" className="hover:text-accent-cyan transition-colors">Blog</a>
          <a href="#faq" className="hover:text-accent-cyan transition-colors">FAQ</a>
        </nav>

        <div className="hidden md:block">
          <a
            href={waURL(CONFIG.wa.msgHero)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent-blue hover:bg-accent-blue/90 text-white px-8 py-3 rounded-2xl font-black uppercase tracking-widest text-[11px] transition-all transform hover:scale-105 shadow-[0_10px_20px_rgba(0,150,255,0.2)]"
          >
            Falar com Especialista
          </a>
        </div>

        <button
          className="xl:hidden text-zinc-300 p-2 bg-white/5 rounded-xl border border-white/10"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden absolute top-[96px] left-0 right-0 bg-zinc-900 border-b border-white/10 p-8 flex flex-col gap-6 backdrop-blur-2xl"
          >
            {[
              { label: 'Automação', href: '#automacao' },
              { label: 'Marketing', href: '#marketing' },
              { label: 'Jornada', href: '#jornada' },
              { label: 'Educacional', href: '#educacional' },
              { label: 'Blog', href: '#blog' },
              { label: 'FAQ', href: '#faq' }
            ].map(link => (
              <a key={link.label} href={link.href} onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white font-black uppercase tracking-[0.2em] text-xs">
                {link.label}
              </a>
            ))}
            <a
              href={waURL(CONFIG.wa.msgHero)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center bg-accent-blue text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs mt-4 shadow-xl"
            >
              Falar com Especialista
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
