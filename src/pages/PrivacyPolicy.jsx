import { Link } from 'react-router-dom';

export function PrivacyPolicy() {
  return (
    <div className="bg-deep-slate text-text-secondary font-body min-h-screen relative selection:bg-mint-precision selection:text-deep-slate">
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 md:px-8 h-16 max-w-7xl mx-auto left-1/2 -translate-x-1/2 border-b border-border-tech bg-deep-slate/80 backdrop-blur-md">
        <Link to="/" className="text-text-primary font-display font-bold text-2xl tracking-tight hover:text-mint-precision transition-colors">AnimaFlow</Link>
        <Link to="/" className="text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors">← Volver al Inicio</Link>
      </nav>
      <main className="pt-32 pb-24 px-4 md:px-8 max-w-3xl mx-auto relative z-10">
        <h1 className="font-display font-bold text-4xl md:text-5xl text-text-primary mb-8 tracking-tight">Política de Privacidad</h1>
        <div className="space-y-8 text-base leading-relaxed text-text-secondary/90">
          <p className="text-sm font-mono text-text-secondary/60 uppercase tracking-widest border-b border-border-tech pb-4">Última actualización: Mayo 2026</p>
          
          <section>
            <h2 className="text-2xl text-text-primary font-display font-bold mt-8 mb-4">1. Recopilación de Información</h2>
            <p>En AnimaFlow, valoramos su privacidad por encima de todo. Al ser una infraestructura determinista B2B, recopilamos únicamente la información técnica y de contacto estrictamente necesaria para proveer el servicio, incluyendo su correo electrónico corporativo al registrarse en nuestra Beta Privada.</p>
          </section>

          <section>
            <h2 className="text-2xl text-text-primary font-display font-bold mt-8 mb-4">2. Uso de los Datos (Local-First)</h2>
            <p className="mb-4">Nos tomamos muy en serio la seguridad de los activos de su empresa:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Sus datos, guiones y parámetros <strong>NO</strong> son utilizados para entrenar modelos de IA de terceros.</li>
              <li>Garantizamos un enfoque Local-First para los procesos de renderizado siempre que la configuración de su cuenta lo permita.</li>
              <li>La telemetría recopilada es puramente técnica (rendimiento de exportación, uso de nodos) y completamente anónima.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl text-text-primary font-display font-bold mt-8 mb-4">3. Seguridad Estructural</h2>
            <p>Implementamos medidas de seguridad de grado empresarial y cifrado de extremo a extremo para proteger sus guiones, pistas de audio locales y flujos de edición nodal (archivos de proyecto .AEP y JSON) durante el tránsito y en reposo.</p>
          </section>

          <section className="mt-12 pt-8 border-t border-border-tech text-sm text-center">
            <p>Si tiene alguna duda sobre nuestra arquitectura de privacidad, contáctenos directamente en <a href="mailto:privacy@animaflow.io" className="text-mint-precision hover:underline">privacy@animaflow.io</a></p>
          </section>
        </div>
      </main>
    </div>
  );
}
