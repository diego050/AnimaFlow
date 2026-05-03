import { motion } from 'framer-motion';
import { SlidersHorizontal, ShieldCheck, Layers, GitBranch } from 'lucide-react';

const principles = [
  {
    id: '01',
    title: 'Control sobre Automatización',
    desc: 'La IA acelera, el humano decide. Siempre exponer parámetros editables. El output nunca es un video plano, es una estructura editable (AE).',
    icon: SlidersHorizontal
  },
  {
    id: '02',
    title: 'Privacidad por Diseño',
    desc: 'Procesamiento local-first. Datos nunca abandonan el entorno del cliente sin consentimiento explícito.',
    icon: ShieldCheck
  },
  {
    id: '03',
    title: 'Editabilidad Nativa',
    desc: 'El output nunca es un video plano. Siempre exportar estructura editable (spec.json, .aep, capas separadas).',
    icon: Layers
  },
  {
    id: '04',
    title: 'Diferenciación Clara',
    desc: 'Mientras otros venden cajas negras ("un botón para hacer video"), nosotros ofrecemos un pipeline de producción profesional determinista.',
    icon: GitBranch
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } }
};

export function CoreIdentity() {
  return (
    <div className="max-w-5xl">
      <header className="mb-12 border-b border-border-tech pb-8">
        <span className="font-mono text-sm text-mint-precision mb-2 block">SYS.01</span>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary tracking-tight mb-4">Misión y Principios</h1>
        <p className="font-body text-lg text-text-secondary max-w-3xl">
          Establecer a PromptVideo como la infraestructura técnica líder para la producción de video SaaS, 
          priorizando la precisión determinista, el control humano y la integración profesional.
        </p>
      </header>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {principles.map((principle) => (
          <motion.div key={principle.id} variants={item} className="bg-surface-panel border border-border-tech rounded-lg p-6 hover:border-text-secondary transition-colors duration-200">
            <div className="flex items-center gap-3 mb-4 border-b border-border-tech pb-4">
              <div className="h-10 w-10 rounded border border-border-tech bg-deep-slate flex items-center justify-center text-text-secondary">
                <principle.icon size={20} />
              </div>
              <div>
                <span className="font-mono text-xs text-text-secondary">PRINCIPIO {principle.id}</span>
                <h2 className="font-display font-semibold text-xl text-text-primary">{principle.title}</h2>
              </div>
            </div>
            <p className="font-body text-text-secondary leading-relaxed">
              {principle.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="mt-12 bg-deep-slate border border-border-tech p-6 border-l-4 border-l-cadmium-orange rounded"
      >
        <h3 className="font-mono text-xs text-cadmium-orange mb-3 tracking-widest uppercase">Tono de Voz (Brand Voice)</h3>
        <p className="font-body text-text-primary text-lg italic leading-relaxed">
          "Preciso, directo, sin hype. Hablamos de infraestructura, no de magia. Validamos cada promesa con arquitectura o métrica. Técnico pero accesible. Cero adjetivos vacíos."
        </p>
      </motion.div>
    </div>
  );
}
