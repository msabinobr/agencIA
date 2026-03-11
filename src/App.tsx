import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AutomationStack } from './components/AutomationStack';
import { MarketingEngine } from './components/MarketingEngine';
import { CustomerJourney } from './components/CustomerJourney';
import { EducationalSuite } from './components/EducationalSuite';
import { BlogNourishment } from './components/BlogNourishment';
import { PainSolution } from './components/PainSolution';
import { AiVideoDemo } from './components/AiVideoDemo';
import { Solutions } from './components/Solutions';
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
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-accent-blue/30 selection:text-white transition-colors duration-500">
      <Header />
      <main>
        <Hero onOpenSimulator={() => setShowSimulator(true)} />

        {/* Core AI Automation Stack */}
        <AutomationStack />

        {/* Marketing Engine (LP, Pixel, Funnel) */}
        <MarketingEngine />

        {/* Interactive Customer Journey Game */}
        <CustomerJourney />

        {/* Educational Suite (Netflix Style) */}
        <EducationalSuite />

        {/* Lead Nourishment Blog */}
        <BlogNourishment />

        {/* Supporting Context & Authority */}
        <PainSolution />
        <AiVideoDemo />
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
