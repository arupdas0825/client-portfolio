import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from './GlassCard';
import ScrollReveal from './ScrollReveal';
import { LuFileDown, LuEye, LuX } from 'react-icons/lu';

const CV = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="py-24 px-6 md:px-20 bg-[#020818]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="max-w-md mx-auto">
            <GlassCard className="p-12 text-center" animClass="animate-float2" glowColor="cyan">
              <div className="w-20 h-20 bg-[#00D4FF]/10 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-[#00D4FF]/20">
                <LuFileDown className="text-[#00D4FF]" size={40} />
              </div>
              
              <h2 className="font-display text-3xl font-bold text-white mb-4">Academic CV</h2>
              <p className="font-mono text-[10px] text-white/40 mb-10 tracking-[0.2em] uppercase">
                [ Requesting Access to Classified Document ]
              </p>
              
              <div className="flex flex-col gap-4">
                <button 
                  onClick={() => setShowModal(true)}
                  className="glass-biotech px-6 py-4 text-[#00D4FF] font-display font-semibold hover:-translate-y-1 hover:glow-cyan transition-all duration-300 border-[#00D4FF]/20 flex items-center justify-center gap-2"
                >
                  <LuEye size={18} /> View CV
                </button>
                <button className="bg-[#00D4FF] text-[#020818] font-display font-bold px-6 py-4 rounded-xl hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,212,255,0.4)] transition-all duration-300 flex items-center justify-center gap-2">
                  <LuFileDown size={18} /> Download PDF
                </button>
              </div>
            </GlassCard>
          </div>
        </ScrollReveal>
      </div>

      {/* CV Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#020818]/92 backdrop-blur-[20px] z-[60] p-4 flex flex-col items-center"
            onClick={() => setShowModal(false)}
          >
            <div className="w-full max-w-5xl flex justify-end mb-4">
               <button 
                onClick={() => setShowModal(false)}
                className="glass-biotech w-10 h-10 flex items-center justify-center text-white/70 hover:text-white"
              >
                <LuX size={20} />
              </button>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="glass-biotech w-full max-w-5xl flex-1 p-2 overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full h-full bg-[#0A2540] rounded-lg flex items-center justify-center">
                {/* iframe src will be /cv.pdf */}
                <p className="font-mono text-[#00D4FF] animate-pulse">SYSTEM_LOADING_PREVIEW...</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CV;
