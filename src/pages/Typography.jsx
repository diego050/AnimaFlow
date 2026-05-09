import { useState } from 'react';
import { motion } from 'framer-motion';
import { A4Page } from '../components/A4Page';

export function Typography() {
  return (
    <>
      <A4Page className="p-8 flex flex-col justify-center">
        <header className="mb-4 border-b border-border-tech pb-4 flex justify-between items-end">
          <div>
            <span className="font-mono text-xs text-mint-precision mb-1 block">TYPO.03</span>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-2">Precision & Clarity</h1>
            <p className="font-body text-sm text-text-secondary max-w-3xl">
              Equilibra la estética de diseño moderno con la rigurosidad de un entorno de desarrollo.
            </p>
          </div>
        </header>

        <div className="space-y-4">
          {/* Display / Headings */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="bg-surface-panel border border-border-tech rounded-lg p-5"
          >
            <div className="flex justify-between items-start mb-4 pb-3 border-b border-border-tech/50">
              <div>
                <span className="font-mono text-[10px] text-cadmium-orange uppercase tracking-widest block mb-1">DISPLAY / HEADINGS</span>
                <h2 className="font-display text-xl text-text-primary">Inter Tight</h2>
              </div>
              <div className="text-right">
                <span className="font-mono text-[10px] text-text-secondary block">Weights: 600, 700, 800</span>
                <span className="font-mono text-[10px] text-text-secondary block">Tracking: -0.02em</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
                <span className="font-mono text-[10px] text-text-secondary w-10 shrink-0">72px</span>
                <div className="font-display font-bold tracking-tighter leading-none text-text-primary overflow-hidden text-ellipsis whitespace-nowrap text-3xl md:text-5xl w-full">
                  PromptVideo Infra
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
                <span className="font-mono text-[10px] text-text-secondary w-10 shrink-0">48px</span>
                <div className="font-display font-bold tracking-tight leading-tight text-text-primary text-2xl md:text-3xl">
                  Sistema Determinista
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
                <span className="font-mono text-[10px] text-text-secondary w-10 shrink-0">24px</span>
                <div className="font-display font-semibold tracking-tight leading-snug text-text-primary text-lg md:text-xl">
                  Exportación Nivel Capa a After Effects
                </div>
              </div>
            </div>
            
            <div className="mt-4 border-t border-border-tech pt-3 overflow-x-auto">
              <table className="w-full text-left font-mono text-[10px]">
                <thead>
                  <tr className="text-text-secondary border-b border-border-tech/50">
                    <th className="pb-1 font-normal">Tamaño</th>
                    <th className="pb-1 font-normal">Line Height</th>
                    <th className="pb-1 font-normal">Letter Spacing</th>
                    <th className="pb-1 font-normal">Weight</th>
                  </tr>
                </thead>
                <tbody className="text-text-primary">
                  <tr><td className="py-1.5">72px</td><td className="py-1.5">1.0 (None)</td><td className="py-1.5">-0.04em</td><td className="py-1.5">800 (ExtraBold)</td></tr>
                  <tr className="border-t border-border-tech/30"><td className="py-1.5">48px</td><td className="py-1.5">1.1 (Tight)</td><td className="py-1.5">-0.02em</td><td className="py-1.5">700 (Bold)</td></tr>
                  <tr className="border-t border-border-tech/30"><td className="py-1.5">24px</td><td className="py-1.5">1.2 (Snug)</td><td className="py-1.5">-0.01em</td><td className="py-1.5">600 (SemiBold)</td></tr>
                </tbody>
              </table>
            </div>
          </motion.section>
        </div>
      </A4Page>

      <A4Page className="p-8 flex flex-col justify-center">
        <div className="space-y-6">
          {/* Body / UI */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-surface-panel border border-border-tech rounded-lg p-6"
          >
            <div className="flex justify-between items-start mb-6 pb-4 border-b border-border-tech/50">
              <div>
                <span className="font-mono text-[10px] text-cadmium-orange uppercase tracking-widest block mb-1">BODY / UI</span>
                <h2 className="font-display text-xl text-text-primary">Inter Regular</h2>
              </div>
              <div className="text-right">
                <span className="font-mono text-[10px] text-text-secondary block">Weights: 400, 500, 600</span>
                <span className="font-mono text-[10px] text-text-secondary block">Line Height: 1.5</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row items-start gap-2 md:gap-4">
                <span className="font-mono text-[10px] text-text-secondary w-10 shrink-0 pt-1">16px</span>
                <p className="font-body text-text-secondary leading-relaxed max-w-3xl text-sm">
                  El estándar de oro para interfaces SaaS por su claridad en tamaños pequeños. La legibilidad es fundamental cuando los usuarios pasan horas interactuando con parámetros y timelines complejos. Evitamos fuentes decorativas en la UI para minimizar la fatiga visual.
                </p>
              </div>
            </div>
            
            <div className="mt-6 border-t border-border-tech pt-4 overflow-x-auto">
              <table className="w-full text-left font-mono text-[10px]">
                <thead>
                  <tr className="text-text-secondary border-b border-border-tech/50">
                    <th className="pb-1 font-normal">Tamaño</th>
                    <th className="pb-1 font-normal">Line Height</th>
                    <th className="pb-1 font-normal">Letter Spacing</th>
                    <th className="pb-1 font-normal">Weight</th>
                  </tr>
                </thead>
                <tbody className="text-text-primary">
                  <tr><td className="py-1.5">16px (Base)</td><td className="py-1.5">1.5 (Relaxed)</td><td className="py-1.5">0em</td><td className="py-1.5">400 (Regular)</td></tr>
                  <tr className="border-t border-border-tech/30"><td className="py-1.5">14px (Small)</td><td className="py-1.5">1.5 (Relaxed)</td><td className="py-1.5">0em</td><td className="py-1.5">500 (Medium)</td></tr>
                  <tr className="border-t border-border-tech/30"><td className="py-1.5">12px (Caption)</td><td className="py-1.5">1.5 (Relaxed)</td><td className="py-1.5">0.01em</td><td className="py-1.5">500 (Medium)</td></tr>
                </tbody>
              </table>
            </div>
          </motion.section>
        </div>
      </A4Page>

      <A4Page className="p-8 flex flex-col justify-center">
        <div className="space-y-6">
          {/* Monospace / Data */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-surface-panel border border-border-tech rounded-lg p-6 relative overflow-hidden"
          >
            <div className="flex justify-between items-start mb-6 pb-4 border-b border-border-tech/50 relative z-10">
              <div>
                <span className="font-mono text-[10px] text-cadmium-orange uppercase tracking-widest block mb-1">MONOSPACE / DATA</span>
                <h2 className="font-mono text-xl text-mint-precision font-bold">Space Grotesk</h2>
              </div>
              <div className="text-right">
                <span className="font-mono text-[10px] text-text-secondary block">Weights: 500, 700</span>
                <span className="font-mono text-[10px] text-text-secondary block">Tracking: +0.02em</span>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-6 relative z-10">
              <div>
                <span className="block font-mono text-[10px] text-text-secondary uppercase mb-2">Timestamps</span>
                <div className="font-mono text-2xl text-text-primary tracking-wider font-bold mb-4">
                  00:01:23:<span className="text-mint-precision">14</span>
                </div>
                
                <span className="block font-mono text-[10px] text-text-secondary uppercase mb-2">Tags & Labels</span>
                <div className="flex gap-2">
                  <span className="font-mono text-[10px] bg-deep-slate border border-border-tech px-2 py-1 rounded text-mint-precision">RENDER_READY</span>
                  <span className="font-mono text-[10px] bg-deep-slate border border-border-tech px-2 py-1 rounded text-cadmium-orange">SYNC_WARN</span>
                </div>
              </div>
              
              <div className="bg-deep-slate border border-border-tech p-3 rounded text-xs overflow-x-auto h-full flex flex-col justify-center">
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
      </A4Page>
    </>
  );
}
