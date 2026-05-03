import { motion } from 'framer-motion';

const spacingScale = [
  { value: 4, name: 'Base Unit', css: 'w-1' },
  { value: 8, name: '2x Base', css: 'w-2' },
  { value: 16, name: '4x Base', css: 'w-4' },
  { value: 24, name: '6x Base', css: 'w-6' },
  { value: 32, name: '8x Base', css: 'w-8' },
  { value: 48, name: '12x Base', css: 'w-12' },
  { value: 64, name: '16x Base', css: 'w-16' },
];

export function Spacing() {
  return (
    <div className="max-w-5xl">
      <header className="mb-12 border-b border-border-tech pb-8">
        <span className="font-mono text-sm text-mint-precision mb-2 block">GRID.05</span>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary tracking-tight mb-4">Spacing & Layout</h1>
        <p className="font-body text-lg text-text-secondary max-w-3xl">
          El sistema está basado en una rígida cuadrícula técnica. Regla estricta: Múltiplos de 4px. Cero espacios arbitrarios.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Spacing Scale */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          className="bg-surface-panel border border-border-tech rounded-lg p-8"
        >
          <h2 className="font-mono text-cadmium-orange text-sm mb-6 tracking-widest uppercase">Base 4px Scale</h2>
          
          <div className="space-y-6">
            {spacingScale.map((item, idx) => (
              <div key={item.value} className="flex items-center gap-4">
                <div className="w-16 shrink-0 font-mono text-xs text-text-secondary text-right">{item.value}px</div>
                <div className={`h-6 bg-steel-blue border border-mint-precision ${item.css}`}></div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Grid System Diagram */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-surface-panel border border-border-tech rounded-lg p-8"
        >
          <h2 className="font-mono text-cadmium-orange text-sm mb-6 tracking-widest uppercase">Grid System (20px)</h2>
          
          <div className="w-full h-64 border border-border-tech bg-deep-slate relative overflow-hidden bg-grid">
            {/* Alignment Guides */}
            <div className="absolute top-0 left-10 w-[1px] h-full bg-mint-precision/50"></div>
            <div className="absolute top-10 left-0 w-full h-[1px] bg-mint-precision/50"></div>
            
            <div className="absolute top-10 left-10 w-20 h-20 border border-cadmium-orange bg-cadmium-orange/10 backdrop-blur-sm flex items-center justify-center">
              <span className="font-mono text-[10px] text-cadmium-orange">80x80</span>
            </div>
            
            <div className="absolute bottom-4 right-4 bg-deep-slate border border-border-tech px-2 py-1">
              <span className="font-mono text-[10px] text-text-secondary">GRID: 20px / SNAP: 4px</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
