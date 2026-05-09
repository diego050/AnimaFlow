import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Copy } from 'lucide-react';
import { A4Page } from '../components/A4Page';

const colors = [
  { name: 'Deep Slate', hex: '#0F172A', rgb: '15, 23, 42', hsl: '222, 47%, 11%', desc: 'Fondo principal (80% de la interfaz). Dark mode nativo para reducir fatiga visual en edición.', bgClass: 'bg-deep-slate', category: 'Background', darkText: false, usage: 'Fondos base' },
  { name: 'Surface Panel', hex: '#1E293B', rgb: '30, 41, 59', hsl: '217, 33%, 22%', desc: 'Paneles laterales, cards, controles. Siempre contenido dentro de bordes definidos.', bgClass: 'bg-surface-panel', category: 'Surface', darkText: false, usage: 'Paneles y cards' },
  { name: 'Steel Blue', hex: '#2C3E50', rgb: '44, 62, 80', hsl: '210, 29%, 24%', desc: 'Primario estructural. Comunica estabilidad y profundidad técnica.', bgClass: 'bg-steel-blue', category: 'Primary', darkText: false, usage: 'Estructura y headers' },
  { name: 'Mint Precision', hex: '#00FFAB', rgb: '0, 255, 171', hsl: '160, 100%, 50%', desc: 'Acento/CTA. Acciones positivas y estados de "Sync Ready". Destaca claridad tecnológica.', bgClass: 'bg-mint-precision', category: 'Accent', darkText: true, usage: 'CTAs y Sync Ready' },
  { name: 'Cadmium Orange', hex: '#FF8C00', rgb: '255, 140, 0', hsl: '33, 100%, 50%', desc: 'Exclusivo para indicadores de precisión, timestamps y alertas. Rompe frialdad sin ser agresivo.', bgClass: 'bg-cadmium-orange', category: 'Warning', darkText: true, usage: 'Timestamps y alertas (máx 5% UI)' },
  { name: 'Border Technical', hex: '#334155', rgb: '51, 65, 85', hsl: '215, 25%, 27%', desc: 'Bordes 1px técnicos, dividers, grids. Define la arquitectura geométrica.', bgClass: 'bg-border-tech', category: 'Border', darkText: false, usage: 'Grids y separadores' },
];

export function Colors() {
  const [copied, setCopied] = useState(null);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  const renderColorCard = (color, idx) => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.1, duration: 0.4 }}
      key={color.hex} 
      className="group bg-surface-panel border border-border-tech rounded-lg overflow-hidden hover:border-mint-precision/50 transition-all duration-300"
    >
      <div className={`h-24 w-full ${color.bgClass} relative flex items-end p-4 border-b border-border-tech`}>
        <div className={`absolute top-4 right-4 ${color.darkText ? 'bg-deep-slate border-deep-slate text-mint-precision' : 'bg-surface-panel border-border-tech text-text-primary'} px-3 py-1 rounded border shadow-sm`}>
          <span className="font-mono text-[10px]">Aa Contrast</span>
        </div>
        <div className="w-full flex justify-between items-end">
          <span className={`font-display font-bold text-3xl ${color.darkText ? 'text-deep-slate' : 'text-text-primary'}`}>
            Aa
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-display font-semibold text-base text-text-primary">{color.name}</h3>
            <span className="font-mono text-[10px] text-text-secondary uppercase tracking-wider">{color.category}</span>
          </div>
          
          <button 
            onClick={() => copyToClipboard(color.hex)}
            className="flex items-center gap-1.5 px-2 py-1 bg-deep-slate border border-border-tech rounded hover:border-text-primary transition-colors cursor-pointer group/btn"
          >
            <span className="font-mono text-xs text-mint-precision">{color.hex}</span>
            {copied === color.hex ? <Check size={12} className="text-mint-precision" /> : <Copy size={12} className="text-text-secondary group-hover/btn:text-text-primary" />}
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-2 mb-2 pb-2 border-b border-border-tech/50">
          <div>
            <span className="block font-mono text-[9px] text-text-secondary mb-0.5">RGB</span>
            <span className="font-mono text-xs text-text-primary">{color.rgb}</span>
          </div>
          <div>
            <span className="block font-mono text-[9px] text-text-secondary mb-0.5">HSL</span>
            <span className="font-mono text-xs text-text-primary">{color.hsl}</span>
          </div>
        </div>
        
        <p className="font-body text-[11px] text-text-secondary leading-relaxed mb-2 line-clamp-2">
          {color.desc}
        </p>
        
        <div className="bg-deep-slate/50 border border-border-tech rounded p-2">
          <span className="block font-mono text-[9px] text-text-secondary uppercase mb-0.5">Uso Funcional</span>
          <span className="font-body text-xs font-medium text-text-primary">{color.usage}</span>
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      <A4Page className="p-8 flex flex-col justify-center">
        <header className="mb-6 border-b border-border-tech pb-4">
          <span className="font-mono text-xs text-mint-precision mb-1 block">PALETTE.02</span>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-2">The Blueprint Palette</h1>
          <p className="font-body text-sm text-text-secondary max-w-3xl">
            Evitamos el "AI purple" genérico en favor de tonos que evocan ingeniería e interfaces de edición técnica. 
            Solo colores esenciales, con alto contraste y legibilidad.
          </p>
        </header>

        <div className="grid grid-cols-2 gap-6">
          {colors.slice(0, 2).map((color, idx) => renderColorCard(color, idx))}
        </div>
      </A4Page>

      <A4Page className="p-8 flex flex-col justify-center">
        <div className="grid grid-cols-2 gap-6">
          {colors.slice(2, 4).map((color, idx) => renderColorCard(color, idx + 2))}
        </div>
      </A4Page>
      
      <A4Page className="p-8 flex flex-col justify-center">
        <div className="grid grid-cols-2 gap-6">
          {colors.slice(4, 6).map((color, idx) => renderColorCard(color, idx + 4))}
        </div>
      </A4Page>
    </>
  );
}
