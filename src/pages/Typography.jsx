import { useState } from 'react';
import { motion } from 'framer-motion';

export function Typography() {
  return (
    <div className="max-w-5xl">
      <header className="mb-12 border-b border-border-tech pb-8 flex justify-between items-end">
        <div>
          <span className="font-mono text-sm text-mint-precision mb-2 block">TYPO.03</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary tracking-tight mb-4">Precision & Clarity</h1>
          <p className="font-body text-lg text-text-secondary max-w-3xl">
            Equilibra la estética de diseño moderno con la rigurosidad de un entorno de desarrollo.
          </p>
        </div>
        
      </header>

      <div className="space-y-12">
        {/* Display / Headings */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          className="bg-surface-panel border border-border-tech rounded-lg p-8"
        >
          <div className="flex justify-between items-start mb-8 pb-4 border-b border-border-tech/50">
            <div>
              <span className="font-mono text-xs text-cadmium-orange uppercase tracking-widest block mb-2">DISPLAY / HEADINGS</span>
              <h2 className="font-display text-2xl text-text-primary">Inter Tight</h2>
            </div>
            <div className="text-right">
              <span className="font-mono text-xs text-text-secondary block">Weights: 600, 700, 800</span>
              <span className="font-mono text-xs text-text-secondary block">Tracking: -0.02em</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
              <span className="font-mono text-xs text-text-secondary w-12 shrink-0">72px</span>
              <div className="font-display font-bold tracking-tighter leading-none text-text-primary overflow-hidden text-ellipsis whitespace-nowrap text-4xl md:text-7xl w-full">
                PromptVideo Infra
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
              <span className="font-mono text-xs text-text-secondary w-12 shrink-0">48px</span>
              <div className="font-display font-bold tracking-tight leading-tight text-text-primary text-3xl md:text-5xl">
                Sistema Determinista
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
              <span className="font-mono text-xs text-text-secondary w-12 shrink-0">24px</span>
              <div className="font-display font-semibold tracking-tight leading-snug text-text-primary text-xl md:text-2xl">
                Exportación Nivel Capa a After Effects
              </div>
            </div>
          </div>
          
          <div className="mt-8 border-t border-border-tech pt-6 overflow-x-auto">
            <table className="w-full text-left font-mono text-xs">
              <thead>
                <tr className="text-text-secondary border-b border-border-tech/50">
                  <th className="pb-2 font-normal">Tamaño</th>
                  <th className="pb-2 font-normal">Line Height</th>
                  <th className="pb-2 font-normal">Letter Spacing</th>
                  <th className="pb-2 font-normal">Weight</th>
                </tr>
              </thead>
              <tbody className="text-text-primary">
                <tr><td className="py-2">72px</td><td className="py-2">1.0 (None)</td><td className="py-2">-0.04em</td><td className="py-2">800 (ExtraBold)</td></tr>
                <tr className="border-t border-border-tech/30"><td className="py-2">48px</td><td className="py-2">1.1 (Tight)</td><td className="py-2">-0.02em</td><td className="py-2">700 (Bold)</td></tr>
                <tr className="border-t border-border-tech/30"><td className="py-2">24px</td><td className="py-2">1.2 (Snug)</td><td className="py-2">-0.01em</td><td className="py-2">600 (SemiBold)</td></tr>
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Body / UI */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-surface-panel border border-border-tech rounded-lg p-8"
        >
          <div className="flex justify-between items-start mb-8 pb-4 border-b border-border-tech/50">
            <div>
              <span className="font-mono text-xs text-cadmium-orange uppercase tracking-widest block mb-2">BODY / UI</span>
              <h2 className="font-display text-2xl text-text-primary">Inter Regular</h2>
            </div>
            <div className="text-right">
              <span className="font-mono text-xs text-text-secondary block">Weights: 400, 500, 600</span>
              <span className="font-mono text-xs text-text-secondary block">Line Height: 1.5</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row items-start gap-2 md:gap-6">
              <span className="font-mono text-xs text-text-secondary w-12 shrink-0 pt-1">16px</span>
              <p className="font-body text-text-secondary leading-relaxed max-w-3xl text-base">
                El estándar de oro para interfaces SaaS por su claridad en tamaños pequeños. La legibilidad es fundamental cuando los usuarios pasan horas interactuando con parámetros y timelines complejos. Evitamos fuentes decorativas en la UI para minimizar la fatiga visual.
              </p>
            </div>
          </div>
          
          <div className="mt-8 border-t border-border-tech pt-6 overflow-x-auto">
            <table className="w-full text-left font-mono text-xs">
              <thead>
                <tr className="text-text-secondary border-b border-border-tech/50">
                  <th className="pb-2 font-normal">Tamaño</th>
                  <th className="pb-2 font-normal">Line Height</th>
                  <th className="pb-2 font-normal">Letter Spacing</th>
                  <th className="pb-2 font-normal">Weight</th>
                </tr>
              </thead>
              <tbody className="text-text-primary">
                <tr><td className="py-2">16px (Base)</td><td className="py-2">1.5 (Relaxed)</td><td className="py-2">0em</td><td className="py-2">400 (Regular)</td></tr>
                <tr className="border-t border-border-tech/30"><td className="py-2">14px (Small)</td><td className="py-2">1.5 (Relaxed)</td><td className="py-2">0em</td><td className="py-2">500 (Medium)</td></tr>
                <tr className="border-t border-border-tech/30"><td className="py-2">12px (Caption)</td><td className="py-2">1.5 (Relaxed)</td><td className="py-2">0.01em</td><td className="py-2">500 (Medium)</td></tr>
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Monospace / Data */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-surface-panel border border-border-tech rounded-lg p-8 relative overflow-hidden"
        >
          <div className="flex justify-between items-start mb-8 pb-4 border-b border-border-tech/50 relative z-10">
            <div>
              <span className="font-mono text-xs text-cadmium-orange uppercase tracking-widest block mb-2">MONOSPACE / DATA</span>
              <h2 className="font-mono text-2xl text-mint-precision font-bold">Space Grotesk</h2>
            </div>
            <div className="text-right">
              <span className="font-mono text-xs text-text-secondary block">Weights: 500, 700</span>
              <span className="font-mono text-xs text-text-secondary block">Tracking: +0.02em</span>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 relative z-10">
            <div>
              <span className="block font-mono text-[10px] text-text-secondary uppercase mb-3">Timestamps</span>
              <div className="font-mono text-4xl text-text-primary tracking-wider font-bold mb-6">
                00:01:23:<span className="text-mint-precision">14</span>
              </div>
              
              <span className="block font-mono text-[10px] text-text-secondary uppercase mb-3">Tags & Labels</span>
              <div className="flex gap-2">
                <span className="font-mono text-xs bg-deep-slate border border-border-tech px-2 py-1 rounded text-mint-precision">RENDER_READY</span>
                <span className="font-mono text-xs bg-deep-slate border border-border-tech px-2 py-1 rounded text-cadmium-orange">SYNC_WARN</span>
              </div>
            </div>
            
            <div className="bg-deep-slate border border-border-tech p-4 rounded text-sm overflow-x-auto h-full flex flex-col justify-center">
              <pre className="font-mono text-text-secondary leading-relaxed">
<code><span className="text-mint-precision">const</span> <span className="text-text-primary">exportConfig</span> = {'{'}
  <span className="text-cadmium-orange">format</span>: <span className="text-mint-precision">"aep"</span>,
  <span className="text-cadmium-orange">fps</span>: <span className="text-text-primary">60</span>,
  <span className="text-cadmium-orange">preserveLayers</span>: <span className="text-mint-precision">true</span>,
  <span className="text-cadmium-orange">timestamp</span>: <span className="text-text-primary">"00:01:23:14"</span>
{'}'};</code>
              </pre>
            </div>
          </div>
          
          {/* Decorative Grid BG */}
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-grid opacity-20 pointer-events-none rounded-br-lg" style={{ maskImage: 'linear-gradient(to top left, black, transparent)'}}></div>
        </motion.section>
      </div>
    </div>
  );
}
