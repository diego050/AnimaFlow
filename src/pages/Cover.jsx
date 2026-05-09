import { motion } from 'framer-motion';
import { A4Page } from '../components/A4Page';

export function Cover() {
  return (
    <A4Page className="flex flex-col justify-center items-center text-center p-8">
      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="font-display font-bold text-6xl md:text-8xl tracking-tighter mb-6 bg-gradient-to-r from-mint-precision to-white bg-clip-text text-transparent pr-2 pb-1"
      >
        Animaflow
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
    </A4Page>
  );
}
