import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import PlatformCard from './PlatformCard';

const ContentCreator = () => {
  const [collabOpen, setCollabOpen] = useState(false);

  return (
    <section className="py-24 relative overflow-hidden bg-[#1a0a2e]">
      {/* Background blobs */}
      <div
        className="blob animate-blob absolute w-80 h-80 bg-[#c084fc]/10 top-20 right-0 pointer-events-none"
        style={{ zIndex: 0 }}
      />
      <div
        className="blob animate-blob absolute w-64 h-64 bg-[#f9a8d4]/10 bottom-0 left-0 pointer-events-none"
        style={{ zIndex: 0, animationDelay: '2s' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center mb-16">
        <ScrollReveal>
          <span className="section-label">✦ Creative Side</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Content Creator</h2>
          <p className="font-body text-white/50 max-w-2xl mx-auto">
            Sharing my life, beauty tips, and academic journey with a growing community.
          </p>
        </ScrollReveal>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Platform Cards Grid */}
        <ScrollReveal delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 max-w-5xl mx-auto px-4">

            {/* Instagram */}
            <PlatformCard
              href="https://www.instagram.com/shatarupa__basak/"
              gradientColors="linear-gradient(135deg, #f9a8d4, #e040fb, #f97316, #f9a8d4)"
              animationClass="animate-gradientIG"
              icon={<FaInstagram className="text-[#f9a8d4]" />}
              platform="Instagram"
              stat="1K+"
              statLabel="Followers"
              statStyle="text-gradient-rose"
            />

            {/* YouTube */}
            <PlatformCard
              href="https://www.youtube.com"
              gradientColors="linear-gradient(135deg, #ff0000, #ff6b6b, #ff0000)"
              animationClass="animate-gradientYT"
              icon={<FaYoutube className="text-[#ff6b6b]" />}
              platform="YouTube"
              stat="Upcoming"
              statLabel="Coming Soon"
              statStyle="text-[#ff6b6b]"
            />

            {/* Facebook */}
            <PlatformCard
              href="https://www.facebook.com/Shatarupabasak.basak"
              gradientColors="linear-gradient(135deg, #1877f2, #42a5f5, #1877f2)"
              animationClass="animate-gradientFB"
              icon={<FaFacebook className="text-[#42a5f5]" />}
              platform="Facebook"
              stat="Active"
              statLabel="Community"
              statStyle="text-[#42a5f5]"
            />

          </div>
        </ScrollReveal>

        {/* Collaboration Button & Dropdown */}
        <ScrollReveal delay={300}>
          <div className="relative flex flex-col items-center mt-16">
            <button
              onClick={() => setCollabOpen(!collabOpen)}
              className="animate-collab glass-pink px-10 py-5 font-body font-semibold text-[#f9a8d4] text-base tracking-wide rounded-full hover:scale-105 transition-all duration-300 border border-[rgba(249,168,212,0.4)] relative z-20"
            >
              ✦ Open for Collaboration
            </button>

            <AnimatePresence>
              {collabOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  className="glass-pink mt-6 p-6 w-80 flex flex-col gap-5 shadow-2xl relative z-10"
                >
                  <a
                    href="https://www.instagram.com/shatarupa__basak/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-[#f9a8d4] hover:text-white transition-colors font-body text-sm group"
                  >
                    <div className="w-10 h-10 rounded-full glass flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FaInstagram className="text-xl" />
                    </div>
                    <span>@shatarupa__basak</span>
                  </a>
                  
                  <div className="border-t border-white/10" />
                  
                  <a
                    href="mailto:shatarupabasak872@gmail.com"
                    className="flex items-center gap-4 text-[#c084fc] hover:text-white transition-colors font-body text-sm group"
                  >
                    <div className="w-10 h-10 rounded-full glass flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MdEmail className="text-xl" />
                    </div>
                    <span className="truncate">shatarupabasak872@gmail.com</span>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContentCreator;
