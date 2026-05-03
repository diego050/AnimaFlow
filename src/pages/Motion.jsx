import { motion } from 'framer-motion';

export function Motion() {
  return (
    <div className="max-w-5xl">
      <header className="mb-12 border-b border-border-tech pb-8">
        <span className="font-mono text-sm text-mint-precision mb-2 block">MOTION.06</span>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary tracking-tight mb-4">Motion & Animation</h1>
        <p className="font-body text-lg text-text-secondary max-w-3xl">
          El movimiento es determinista, rápido y no distrae. Nada de rebotes "juguetones". Los datos se mueven como capas de renderizado.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Timing Scale */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          className="bg-surface-panel border border-border-tech rounded-lg p-8"
        >
          <h2 className="font-mono text-cadmium-orange text-sm mb-6 tracking-widest uppercase">Timing Scale</h2>
          
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-end mb-2">
                <span className="font-mono text-sm text-mint-precision">Fast</span>
                <span className="font-mono text-xs text-text-secondary">150ms</span>
              </div>
              <div className="w-full h-2 bg-deep-slate border border-border-tech rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }} animate={{ width: '100%' }}
                  transition={{ duration: 0.15, repeat: Infinity, repeatDelay: 1, ease: "linear" }}
                  className="h-full bg-mint-precision"
                ></motion.div>
              </div>
              <p className="font-body text-xs text-text-secondary mt-2">Para microinteracciones (hovers, tooltips).</p>
            </div>

            <div>
              <div className="flex justify-between items-end mb-2">
                <span className="font-mono text-sm text-steel-blue">Normal</span>
                <span className="font-mono text-xs text-text-secondary">250ms</span>
              </div>
              <div className="w-full h-2 bg-deep-slate border border-border-tech rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }} animate={{ width: '100%' }}
                  transition={{ duration: 0.25, repeat: Infinity, repeatDelay: 1, ease: "linear" }}
                  className="h-full bg-steel-blue"
                ></motion.div>
              </div>
              <p className="font-body text-xs text-text-secondary mt-2">Para transiciones de estado en UI (menús, modales).</p>
            </div>

            <div>
              <div className="flex justify-between items-end mb-2">
                <span className="font-mono text-sm text-cadmium-orange">Slow</span>
                <span className="font-mono text-xs text-text-secondary">400ms</span>
              </div>
              <div className="w-full h-2 bg-deep-slate border border-border-tech rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }} animate={{ width: '100%' }}
                  transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 1, ease: "linear" }}
                  className="h-full bg-cadmium-orange"
                ></motion.div>
              </div>
              <p className="font-body text-xs text-text-secondary mt-2">Para transiciones de página completas.</p>
            </div>
          </div>
        </motion.div>

        {/* Easing & Microinteractions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-surface-panel border border-border-tech rounded-lg p-8 flex flex-col gap-8"
        >
          <div>
            <h2 className="font-mono text-cadmium-orange text-sm mb-4 tracking-widest uppercase">Standard Ease</h2>
            <div className="font-mono text-xs bg-deep-slate border border-border-tech px-3 py-2 text-text-secondary mb-4">
              cubic-bezier(0.4, 0, 0.2, 1)
            </div>
            
            {/* SVG Easing curve visualization */}
            <div className="w-full h-32 border border-border-tech bg-deep-slate relative overflow-hidden flex items-center justify-center">
               <svg viewBox="0 0 100 100" className="w-full h-full stroke-border-tech overflow-visible p-4">
                 <line x1="0" y1="100" x2="100" y2="100" strokeWidth="1" />
                 <line x1="0" y1="100" x2="0" y2="0" strokeWidth="1" />
                 <path d="M 0 100 C 40 100, 20 0, 100 0" fill="none" stroke="#00FFAB" strokeWidth="2" />
                 <circle cx="0" cy="100" r="3" fill="#00FFAB" />
                 <circle cx="100" cy="0" r="3" fill="#00FFAB" />
               </svg>
            </div>
          </div>

          <div>
            <h2 className="font-mono text-cadmium-orange text-sm mb-4 tracking-widest uppercase">Microinteracción (Hover)</h2>
            <div className="flex items-center gap-6">
               <div className="group border border-border-tech bg-deep-slate hover:border-2 hover:border-mint-precision transition-all duration-150 ease-in-out cursor-pointer h-12 px-6 flex items-center justify-center rounded-sm text-text-secondary group-hover:text-text-primary">
                  <span className="font-mono text-sm">Borde 1px → 2px</span>
               </div>
               <span className="font-mono text-[10px] text-text-secondary">Duración: 150ms</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
