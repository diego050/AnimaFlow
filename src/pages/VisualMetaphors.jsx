import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { A4Page } from '../components/A4Page';

const allowed = [
  'Nodos y conectores (líneas 1px sólidas o punteadas)',
  'Layers separadas (z-index visual para enfatizar AE)',
  'Grids de referencia (puntos cada 20px, 10% opacity)',
  'Wireframes técnicos (esqueletos de carga)',
  'Marcadores de frame exactos (00:00:00:00)',
  'Keyframe diamonds (♦) y Pipeline arrows (→)'
];

const forbidden = [
  'Cerebros/Neuronas (Cliché de IA abstracto)',
  'Polvo de estrellas, sparkles, glow effects',
  'Humanoides o robots renderizados',
  'Gradientes iridiscentes ("startup genérica")',
  'Sombras difusas extremas (buscamos bordes)',
  'Bordes excesivamente redondeados (pill shapes)'
];

export function VisualMetaphors() {
  return (
    <>
      <A4Page className="p-8 flex flex-col justify-center">
        <header className="mb-8 border-b border-border-tech pb-6">
          <span className="font-mono text-xs text-mint-precision mb-1 block">VISUAL.04</span>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-2">Metáforas Visuales</h1>
          <p className="font-body text-sm text-text-secondary max-w-3xl">
            Reglas estrictas para elementos gráficos. Buscamos transmitir estructura, precisión y control, 
            alejándonos agresivamente de los clichés mágicos de la IA.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Allowed */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}
            className="bg-surface-panel border border-mint-precision/50 rounded-lg p-6"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border-tech/50">
              <div className="h-8 w-8 rounded-full bg-mint-precision/10 flex items-center justify-center text-mint-precision shrink-0">
                <Check size={18} strokeWidth={3} />
              </div>
              <h2 className="font-mono text-base text-mint-precision font-bold">ALLOWED (Técnico)</h2>
            </div>
            
            <ul className="space-y-3">
              {allowed.map((item, idx) => (
                <li key={idx} className="flex gap-3 text-text-primary">
                  <span className="text-border-tech shrink-0 mt-0.5">♦</span>
                  <span className="font-body text-sm leading-tight">{item}</span>
                </li>
              ))}
            </ul>
            
            {/* Mini Preview Box */}
            <div className="mt-6 p-4 bg-deep-slate border border-border-tech rounded flex flex-col items-center justify-center relative overflow-hidden h-28">
              <div className="absolute inset-0 bg-grid opacity-30"></div>
              <div className="relative z-10 flex flex-col items-center w-full gap-4">
                {/* Nodes and Connectors */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-8 border border-mint-precision bg-mint-precision/5 rounded-sm flex items-center justify-center">
                    <span className="font-mono text-[8px] text-mint-precision">NODE A</span>
                  </div>
                  <div className="w-8 h-[1px] bg-border-tech relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 border-l-[4px] border-y-[4px] border-l-border-tech border-y-transparent"></div>
                  </div>
                  <div className="w-16 h-8 border border-border-tech bg-surface-panel rounded-sm flex items-center justify-center">
                     <div className="w-2 h-2 bg-text-secondary rotate-45"></div>
                  </div>
                </div>
                
                {/* Timeline with keyframes */}
                <div className="w-full max-w-[180px] h-[1px] bg-border-tech relative mt-2">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-mint-precision border border-deep-slate"></div>
                  <div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-border-tech border border-deep-slate"></div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-mint-precision border border-deep-slate"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </A4Page>

      <A4Page className="p-8 flex flex-col justify-center">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="hidden md:block"></div>
          {/* Forbidden */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-surface-panel border border-red-500/30 rounded-lg p-6 relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border-tech/50 relative z-10">
              <div className="h-8 w-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 shrink-0">
                <X size={18} strokeWidth={3} />
              </div>
              <h2 className="font-mono text-base text-red-400 font-bold">FORBIDDEN (Cliché IA)</h2>
            </div>
            
            <ul className="space-y-3 relative z-10">
              {forbidden.map((item, idx) => (
                <li key={idx} className="flex gap-3 text-text-secondary">
                  <span className="text-border-tech shrink-0 mt-0.5">×</span>
                  <span className="font-body text-sm leading-tight">{item}</span>
                </li>
              ))}
            </ul>
            
            {/* Mini Preview Box - Strike */}
            <div className="mt-6 p-4 bg-deep-slate border border-border-tech rounded flex items-center justify-center gap-8 relative h-28 overflow-hidden">
               
               {/* Iridiscent Gradient */}
               <div className="relative w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-yellow-500 blur-md opacity-70 flex items-center justify-center">
                  {/* Brain Icon (simulated with SVG) */}
                  <svg className="w-6 h-6 text-white relative z-10 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 4c-3.3 0-6 2.7-6 6 0 1.2.4 2.3 1 3.2C6.3 14 6 15 6 16c0 2.2 1.8 4 4 4h4c2.2 0 4-1.8 4-4 0-1-.3-2-1-2.8.6-.9 1-2 1-3.2 0-3.3-2.7-6-6-6z"/>
                    <path d="M12 4v16"/>
                    <path d="M12 10h6"/>
                    <path d="M6 14h6"/>
                  </svg>
                  {/* Cross out */}
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-16 h-[2px] bg-red-500 -rotate-45"></div>
                  </div>
               </div>
               
            </div>
          </motion.div>
        </div>
      </A4Page>
    </>
  );
}
