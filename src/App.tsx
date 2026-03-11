/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PainSolution } from './components/PainSolution';
import { AiVideoDemo } from './components/AiVideoDemo';
import { Solutions } from './components/Solutions';
import { CustomerJourney } from './components/CustomerJourney';
import { ConnectionBridge } from './components/ConnectionBridge';
import { HumanSupervision } from './components/HumanSupervision';
import { SocialProof } from './components/SocialProof';
import { About } from './components/About';
import { Team } from './components/Team';
import { FAQ } from './components/FAQ';
import { CTAFinal } from './components/CTAFinal';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { AgentSimulator } from './components/AgentSimulator';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [showSimulator, setShowSimulator] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-emerald-500/30">
      <Header />
      <main>
        <Hero onOpenSimulator={() => setShowSimulator(true)} />
        <PainSolution />
        <AiVideoDemo />
        <CustomerJourney />
        <Solutions />
        <ConnectionBridge />
        <HumanSupervision />
        <About />
        <SocialProof />
        <Team />
        <FAQ />
        <CTAFinal />
      </main>

      <WhatsAppFloat />

      <AnimatePresence>
        {showSimulator && (
          <AgentSimulator onClose={() => setShowSimulator(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
