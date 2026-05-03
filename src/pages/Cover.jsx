import { motion } from 'framer-motion';

export function Cover() {
  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] justify-center items-center text-center">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className="relative w-32 h-24 border border-border-tech/50 bg-surface-panel/30 flex items-center justify-center mb-8 backdrop-blur-sm"
      >
        {/* Sync Frame Logo Animated */}
        <div className="absolute left-4 top-4 bottom-4 w-4 border-l-4 border-y-4 border-mint-precision"></div>
        <div className="absolute right-4 top-4 bottom-4 w-4 border-r-4 border-y-4 border-mint-precision"></div>
        
        <div className="absolute w-full h-[2px] bg-border-tech left-0 top-1/2 -translate-y-1/2 overflow-hidden">
           <motion.div 
             initial={{ x: '-100%' }} animate={{ x: '200%' }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
             className="w-1/2 h-full bg-gradient-to-r from-transparent via-mint-precision to-transparent opacity-50"
           />
        </div>
        
        <motion.div 
          animate={{ rotate: [0, 90, 180, 270, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="w-6 h-6 bg-mint-precision rotate-45 z-10"
        />
      </motion.div>
      
      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="font-display font-bold text-6xl md:text-8xl tracking-tighter mb-6 bg-gradient-to-br from-white to-text-secondary bg-clip-text text-transparent"
      >
        PromptVideo
      </motion.h1>
      
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="flex flex-col gap-2"
      >
        <p className="font-body text-xl md:text-2xl text-text-primary font-medium">Video generativo. Editabilidad nativa.</p>
        <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">Infraestructura determinista para profesionales.</p>
      </motion.div>
    </div>
  );
}
