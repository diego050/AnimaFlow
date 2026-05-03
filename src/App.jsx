import { Sidebar } from './components/layout/Sidebar';
import { Cover } from './pages/Cover';
import { CoreIdentity } from './pages/CoreIdentity';
import { Colors } from './pages/Colors';
import { Typography } from './pages/Typography';
import { VisualMetaphors } from './pages/VisualMetaphors';
import { Spacing } from './pages/Spacing';
import { Motion } from './pages/Motion';
import { UIComponents } from './pages/UIComponents';
import { Landing } from './pages/Landing';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

function BrandLayout() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  // Lógica de Swipe Universal (Mouse y Touch)
  const [dragStart, setDragStart] = useState(null);
  const [dragEnd, setDragEnd] = useState(null);

  const handlePointerDown = (e) => {
    setDragEnd(null);
    setDragStart(e.clientX);
  };

  const handlePointerMove = (e) => {
    if (dragStart !== null) {
      setDragEnd(e.clientX);
    }
  };

  const handlePointerUp = () => {
    if (dragStart === null || dragEnd === null) return;
    const distance = dragStart - dragEnd;
    const minSwipeDistance = 50;
    
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    // Abrir si desliza hacia la derecha desde el borde izquierdo (primeros 150px)
    if (isRightSwipe && dragStart < 150) {
      setIsSidebarOpen(true);
    }
    // Cerrar si desliza hacia la izquierda
    if (isLeftSwipe) {
      setIsSidebarOpen(false);
    }
    
    setDragStart(null);
    setDragEnd(null);
  };

  const handleExportPDF = () => {
    setIsExporting(true);
    // Esperamos un momento para que React monte todas las vistas y se limpie la pantalla
    setTimeout(() => {
      window.print();
    }, 800);
  };

  useEffect(() => {
    const handleAfterPrint = () => {
      setIsExporting(false);
    };
    window.addEventListener('afterprint', handleAfterPrint);
    return () => window.removeEventListener('afterprint', handleAfterPrint);
  }, []);

  if (isExporting) {
    return (
      <div className="bg-deep-slate text-text-primary min-h-screen print-container">
        {/* Forzar impresión de fondos y modo apaisado */}
        <style>{`
          @media print {
            @page {
              size: A4 landscape;
              margin: 10mm;
            }
            body, html { 
              background-color: #0F172A !important;
              margin: 0;
              padding: 0;
            }
            /* El truco mágico para forzar el layout Desktop en impresión */
            #full-brand-book {
              width: 1400px !important; 
              max-width: 1400px !important;
              zoom: 0.70 !important;
              margin: 0 auto !important;
            }
            * {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            .page-break {
              break-before: page;
              page-break-before: always;
              height: 0;
              margin: 0;
              padding: 0;
            }
            h1, h2, h3 {
              page-break-after: avoid;
              break-after: avoid;
            }
            /* Solo prevenimos el corte en elementos pequeños, no en contenedores gigantes */
            img, table, tr, .grid-item {
              page-break-inside: avoid;
              break-inside: avoid;
            }
            .print-loading-overlay {
              display: none !important;
            }
          }
        `}</style>

        <div id="full-brand-book" className="w-full max-w-7xl mx-auto relative overflow-hidden bg-deep-slate pb-10">
          
          {/* Todas las secciones apiladas secuencialmente para el PDF */}
          <div className="relative z-10 print-content-wrapper">
            <div className="h-[90vh] flex flex-col justify-center mb-8"><Cover /></div>
            <div className="page-break"></div>
            
            <div className="py-6"><CoreIdentity /></div>
            <div className="page-break"></div>
            
            <div className="py-6"><Colors /></div>
            <div className="page-break"></div>
            
            <div className="py-6"><Typography /></div>
            <div className="page-break"></div>
            
            <div className="py-6"><VisualMetaphors /></div>
            <div className="page-break"></div>
            
            <div className="py-6"><Spacing /></div>
            <div className="page-break"></div>
            
            <div className="py-6"><Motion /></div>
            <div className="page-break"></div>
            
            <div className="py-6"><UIComponents /></div>
          </div>
        </div>
        
        {/* Loading overlay for the user */}
        <div className="print-loading-overlay fixed inset-0 bg-deep-slate/90 z-50 flex flex-col items-center justify-center backdrop-blur-sm">
          <div className="w-16 h-16 border-4 border-mint-precision border-t-transparent rounded-full animate-spin mb-4"></div>
          <h2 className="font-display font-bold text-2xl text-text-primary mb-2">Generando Exportación PDF</h2>
          <p className="font-mono text-sm text-mint-precision animate-pulse">Procesando todas las secciones...</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="flex h-screen overflow-hidden bg-deep-slate text-text-primary"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} onExport={handleExportPDF} />

      <main className="flex-1 overflow-y-auto w-full relative">
        
        {/* Background Grid Pattern */}
        <div className="fixed inset-0 pointer-events-none bg-grid opacity-50 z-0"></div>
        
        <div id="brand-content-area" className="relative z-10 p-6 lg:p-12 max-w-7xl mx-auto min-h-full overflow-x-hidden bg-deep-slate">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageWrapper><Cover /></PageWrapper>} />
              <Route path="identity" element={<PageWrapper><CoreIdentity /></PageWrapper>} />
              <Route path="colors" element={<PageWrapper><Colors /></PageWrapper>} />
              <Route path="typography" element={<PageWrapper><Typography /></PageWrapper>} />
              <Route path="metaphors" element={<PageWrapper><VisualMetaphors /></PageWrapper>} />
              <Route path="spacing" element={<PageWrapper><Spacing /></PageWrapper>} />
              <Route path="motion" element={<PageWrapper><Motion /></PageWrapper>} />
              <Route path="components" element={<PageWrapper><UIComponents /></PageWrapper>} />
              {/* Fallback routes for undefined pages */}
              <Route path="*" element={<PageWrapper><div className="flex items-center justify-center h-full"><h1 className="font-mono text-2xl text-cadmium-orange">Work in Progress / Missing Route</h1></div></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsOfService />} />
      <Route path="/brand/*" element={<BrandLayout />} />
    </Routes>
  );
}
