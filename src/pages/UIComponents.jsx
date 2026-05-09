import { motion } from 'framer-motion';
import { A4Page } from '../components/A4Page';

export function UIComponents() {
  return (
    <>
      <A4Page className="p-12 flex flex-col justify-center">
        <header className="mb-10 border-b border-border-tech pb-6">
          <span className="font-mono text-sm text-mint-precision mb-2 block">COMPONENTS.07</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary tracking-tight mb-4">UI Components</h1>
          <p className="font-body text-base text-text-secondary max-w-3xl">
            Inventario técnico completo. Se exige respeto por la jerarquía visual mediante bordes duros de 1px, 
            cero sombras difusas, padding matemático (base 4px) y contraste accesible AAA.
          </p>
        </header>

        <div className="space-y-8">
          {/* Buttons */}
          <section>
            <h2 className="font-mono text-cadmium-orange text-sm mb-6 tracking-widest uppercase flex items-center gap-4">
              <span>Buttons</span>
              <div className="h-[1px] flex-1 bg-border-tech"></div>
            </h2>
            <div className="grid lg:grid-cols-3 gap-6">
              
              {/* Primary */}
              <div className="bg-surface-panel border border-border-tech rounded p-6">
                <span className="font-mono text-[10px] text-text-secondary uppercase mb-4 block">Primary (Actionable)</span>
                <div className="space-y-4">
                  <button className="w-full bg-mint-precision text-deep-slate font-mono font-bold text-sm px-4 py-2.5 rounded-sm hover:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.4)] transition-all duration-150">
                    EXPORT (.AEP)
                  </button>
                  <button className="w-full bg-mint-precision/50 text-deep-slate font-mono font-bold text-sm px-4 py-2.5 rounded-sm cursor-not-allowed opacity-50" disabled>
                    DISABLED
                  </button>
                </div>
              </div>

              {/* Secondary */}
              <div className="bg-surface-panel border border-border-tech rounded p-6">
                <span className="font-mono text-[10px] text-text-secondary uppercase mb-4 block">Secondary (Outline)</span>
                <div className="space-y-4">
                  <button className="w-full bg-transparent text-text-primary border border-border-tech font-mono font-semibold text-sm px-4 py-2.5 rounded-sm hover:border-text-secondary hover:bg-white/5 transition-all duration-150">
                    CANCEL SYNC
                  </button>
                  <button className="w-full bg-transparent text-text-secondary border border-border-tech/30 font-mono font-semibold text-sm px-4 py-2.5 rounded-sm cursor-not-allowed" disabled>
                    DISABLED
                  </button>
                </div>
              </div>

              {/* Ghost */}
              <div className="bg-surface-panel border border-border-tech rounded p-6">
                <span className="font-mono text-[10px] text-text-secondary uppercase mb-4 block">Ghost (Tertiary)</span>
                <div className="space-y-4">
                  <button className="w-full bg-transparent text-text-secondary font-mono font-semibold text-sm px-4 py-2.5 rounded-sm hover:text-text-primary hover:bg-white/5 transition-all duration-150">
                    EDIT TIMELINE
                  </button>
                  <button className="w-full bg-transparent text-mint-precision font-mono font-semibold text-sm px-4 py-2.5 rounded-sm hover:bg-mint-precision/10 transition-all duration-150">
                    + NEW NODE
                  </button>
                </div>
              </div>

            </div>
          </section>
        </div>
      </A4Page>

      <A4Page className="p-12 flex flex-col justify-center">
        <div className="space-y-10">
          {/* Inputs */}
          <section>
            <h2 className="font-mono text-cadmium-orange text-sm mb-6 tracking-widest uppercase flex items-center gap-4">
              <span>Inputs & Forms</span>
              <div className="h-[1px] flex-1 bg-border-tech"></div>
            </h2>
            <div className="bg-surface-panel border border-border-tech rounded p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {/* Default Input */}
                  <div>
                    <div className="flex justify-between items-baseline mb-2">
                      <label className="font-mono text-[10px] text-text-secondary uppercase">Project ID</label>
                    </div>
                    <input 
                      type="text" 
                      placeholder="PRJ_8849_SYNC" 
                      className="w-full bg-deep-slate border border-border-tech rounded-sm px-4 py-2 text-sm text-text-primary font-mono focus:outline-none hover:border-text-secondary transition-colors"
                    />
                  </div>

                  {/* Focus Input */}
                  <div>
                    <div className="flex justify-between items-baseline mb-2">
                      <label className="font-mono text-[10px] text-mint-precision uppercase">Keyframe Offset</label>
                      <span className="font-mono text-[10px] text-mint-precision">Focus</span>
                    </div>
                    <input 
                      type="text" 
                      defaultValue="14ms" 
                      className="w-full bg-deep-slate border border-mint-precision rounded-sm px-4 py-2 text-sm text-text-primary font-mono outline-none shadow-[0_0_0_1px_rgba(0,255,171,0.2)]"
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Error Input */}
                  <div>
                    <div className="flex justify-between items-baseline mb-2">
                      <label className="font-mono text-[10px] text-red-400 uppercase">Render Node</label>
                      <span className="font-mono text-[10px] text-red-400">Error</span>
                    </div>
                    <input 
                      type="text" 
                      defaultValue="node-x1-offline" 
                      className="w-full bg-red-500/5 border border-red-400 rounded-sm px-4 py-2 text-sm text-red-200 font-mono focus:outline-none"
                    />
                    <span className="font-mono text-[10px] text-red-400 mt-2 block">Node not reachable in cluster.</span>
                  </div>

                  {/* Disabled Input */}
                  <div>
                    <div className="flex justify-between items-baseline mb-2">
                      <label className="font-mono text-[10px] text-text-secondary uppercase">FPS Lock</label>
                    </div>
                    <input 
                      type="text" 
                      value="60.00" 
                      disabled
                      className="w-full bg-deep-slate/50 border border-border-tech/50 rounded-sm px-4 py-2 text-sm text-text-secondary font-mono cursor-not-allowed"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Badges */}
          <section>
            <h2 className="font-mono text-cadmium-orange text-sm mb-6 tracking-widest uppercase flex items-center gap-4">
              <span>Badges de Estado</span>
              <div className="h-[1px] flex-1 bg-border-tech"></div>
            </h2>
            <div className="bg-surface-panel border border-border-tech rounded p-8 flex flex-wrap gap-6 items-center">
              
              <div className="flex flex-col items-center gap-2">
                <span className="inline-flex items-center gap-2 bg-mint-precision/10 border border-mint-precision/30 px-3 py-1.5 rounded-sm">
                  <span className="w-1.5 h-1.5 bg-mint-precision rounded-full animate-[pulse_2s_infinite]"></span>
                  <span className="font-mono text-[10px] font-semibold tracking-wider text-mint-precision">SYNC_READY</span>
                </span>
                <span className="font-mono text-[10px] text-text-secondary">Success/Active</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <span className="inline-flex items-center gap-2 bg-cadmium-orange/10 border border-cadmium-orange/30 px-3 py-1.5 rounded-sm">
                  <span className="w-1.5 h-1.5 bg-cadmium-orange rounded-full"></span>
                  <span className="font-mono text-[10px] font-semibold tracking-wider text-cadmium-orange">DRIFT_WARN</span>
                </span>
                <span className="font-mono text-[10px] text-text-secondary">Warning/Drift</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <span className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 px-3 py-1.5 rounded-sm">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>
                  <span className="font-mono text-[10px] font-semibold tracking-wider text-red-400">CRIT_ERROR</span>
                </span>
                <span className="font-mono text-[10px] text-text-secondary">Error/Halt</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <span className="inline-flex items-center gap-2 bg-steel-blue/10 border border-steel-blue/30 px-3 py-1.5 rounded-sm">
                  <span className="w-1.5 h-1.5 border border-text-secondary rounded-full"></span>
                  <span className="font-mono text-[10px] font-semibold tracking-wider text-text-primary">PROCESSING</span>
                </span>
                <span className="font-mono text-[10px] text-text-secondary">Neutral/Async</span>
              </div>

            </div>
          </section>
        </div>
      </A4Page>

      <A4Page className="p-12 flex flex-col justify-center">
        <div className="space-y-10">
          {/* Alerts */}
          <section>
            <h2 className="font-mono text-cadmium-orange text-sm mb-6 tracking-widest uppercase flex items-center gap-4">
              <span>Alertas Semánticas</span>
              <div className="h-[1px] flex-1 bg-border-tech"></div>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Info Alert */}
              <div className="bg-deep-slate border border-border-tech border-l-2 border-l-mint-precision p-5 rounded-sm relative">
                <button className="absolute top-4 right-4 text-text-secondary hover:text-text-primary transition-colors">×</button>
                <h4 className="font-mono text-xs text-mint-precision font-semibold mb-2">Build Finalizado</h4>
                <p className="font-body text-sm text-text-secondary pr-6">El archivo .aep y los assets vinculados se han guardado con éxito en el directorio local. Pipeline terminado en 12.4s.</p>
              </div>
              
              {/* Warning Alert */}
              <div className="bg-cadmium-orange/5 border border-border-tech border-l-2 border-l-cadmium-orange p-5 rounded-sm relative">
                <button className="absolute top-4 right-4 text-cadmium-orange hover:text-orange-300 transition-colors">×</button>
                <h4 className="font-mono text-xs text-cadmium-orange font-semibold mb-2">Divergencia de Timestamps</h4>
                <p className="font-body text-sm text-orange-200/80 pr-6">El audio de entrada es 2.4s más largo que la composición base. Se requiere recorte manual para evitar black-frames.</p>
              </div>

              {/* Error Alert */}
              <div className="bg-red-500/5 border border-border-tech border-l-2 border-l-red-500 p-5 rounded-sm relative">
                <button className="absolute top-4 right-4 text-red-500 hover:text-red-300 transition-colors">×</button>
                <h4 className="font-mono text-xs text-red-500 font-semibold mb-2">Sync Error E_704</h4>
                <p className="font-body text-sm text-red-200/80 pr-6">Los keyframes del layer "Main_Comp" no pueden ser transpuestos. El formato de la capa de video no es compatible.</p>
              </div>

              {/* Note Alert */}
              <div className="bg-surface-panel border border-border-tech p-5 rounded-sm relative">
                <h4 className="font-mono text-[10px] text-text-secondary font-semibold uppercase tracking-wider mb-2">Nota de Infraestructura</h4>
                <p className="font-body text-sm text-text-secondary pr-6">Este proyecto utiliza aceleración de GPU remota. Los costos se facturan por frame procesado (0.0014 créditos/frame).</p>
              </div>

            </div>
          </section>
        </div>
      </A4Page>
    </>
  );
}
