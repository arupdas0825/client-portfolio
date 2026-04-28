import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from './GlassCard';
import ScrollReveal from './ScrollReveal';
import { LuAward, LuFileText, LuX } from 'react-icons/lu';

const Certificates = () => {
  const [view, setView] = useState('categories'); // 'categories' | 'grid'
  const [selectedCert, setSelectedCert] = useState(null);

  const seminarCerts = [
    { id: 1, name: "Molecular Biology Workshop", image: "/images/cert1.jpg" },
    { id: 2, name: "Bioinformatics Seminar", image: "/images/cert2.jpg" },
    { id: 3, name: "Clinical Lab Management", image: "/images/cert3.jpg" },
  ];

  return (
    <section className="py-24 px-6 md:px-20 bg-[#020818]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-[#00D4FF] text-xs tracking-widest block mb-2 uppercase">// orbital vault</span>
          <h2 className="font-display text-4xl font-bold text-white">Certificates & Achievements</h2>
        </div>

        <AnimatePresence mode="wait">
          {view === 'categories' ? (
            <motion.div 
              key="categories"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="grid md:grid-cols-2 gap-8"
            >
              <div onClick={() => setView('grid')} className="cursor-pointer">
                <GlassCard className="p-12 text-center group" animClass="animate-float1">
                  <LuAward size={48} className="mx-auto mb-6 text-[#00D4FF] group-hover:scale-110 transition-transform" />
                  <h3 className="font-display text-2xl font-semibold text-white mb-2">Seminar Certificates</h3>
                  <p className="font-mono text-[10px] text-white/40 tracking-widest uppercase">Access Files &rarr;</p>
                </GlassCard>
              </div>
              
              <div className="cursor-default opacity-80">
                <GlassCard className="p-12 text-center" animClass="animate-float2" glowColor="beauty">
                  <LuAward size={48} className="mx-auto mb-6 text-[#00FFA3]" />
                  <h3 className="font-display text-2xl font-semibold text-white mb-2">Achievements</h3>
                  <p className="font-mono text-[10px] text-[#00FFA3] tracking-widest uppercase animate-pulse">Coming Soon</p>
                </GlassCard>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <button 
                onClick={() => setView('categories')}
                className="mb-10 font-mono text-xs text-[#00D4FF] hover:opacity-100 opacity-60 flex items-center gap-2"
              >
                &larr; BACK TO VAULT
              </button>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {seminarCerts.map((cert) => (
                  <GlassCard 
                    key={cert.id} 
                    className="overflow-hidden cursor-pointer p-2"
                    onClick={() => setSelectedCert(cert)}
                  >
                    <div className="aspect-[4/3] rounded-lg overflow-hidden relative group">
                      <div className="w-full h-full bg-[#0A2540] flex items-center justify-center">
                        <LuFileText className="text-white/20" size={40} />
                      </div>
                      <div className="absolute inset-0 bg-[#00D4FF]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="p-4">
                      <p className="font-mono text-[10px] text-white/70 text-center uppercase tracking-tight truncate">{cert.name}</p>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#020818]/90 backdrop-blur-[20px] z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="glass-biotech glow-cyan p-6 max-w-2xl w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute -top-12 md:top-4 right-0 md:-right-12 glass-biotech w-10 h-10 flex items-center justify-center text-white/70 hover:text-white"
              >
                <LuX size={20} />
              </button>
              <div className="aspect-video bg-[#0A2540] rounded-lg flex items-center justify-center">
                <LuAward size={80} className="text-[#00D4FF] opacity-20" />
              </div>
              <h3 className="font-display text-xl text-white text-center mt-6 uppercase tracking-wider">{selectedCert.name}</h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
