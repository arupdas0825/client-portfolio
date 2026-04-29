import React from 'react';
import ScrollReveal from './ScrollReveal';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const ContactLink = ({ icon: Icon, label, value, href, colorClass }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center gap-5 group hover:-translate-x-2 transition-transform duration-300"
  >
    <div className={`glass-pink w-14 h-14 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg ${colorClass}`}>
      <Icon className="text-2xl" />
    </div>
    <div>
      <div className="font-body text-[10px] text-white/40 uppercase tracking-widest mb-1">{label}</div>
      <div className="font-body text-base text-white/80 group-hover:text-white transition-colors">{value}</div>
    </div>
  </a>
);

const Contact = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#1a0a2e]">
      {/* Background blobs */}
      <div
        className="blob animate-blob absolute w-96 h-96 bg-[#c084fc]/5 -left-40 top-0 pointer-events-none"
        style={{ zIndex: 0 }}
      />
      <div
        className="blob animate-blob absolute w-80 h-80 bg-[#f9a8d4]/5 -right-20 bottom-0 pointer-events-none"
        style={{ zIndex: 0, animationDelay: '3s' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="section-label">✦ Let's Connect</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="font-body text-white/60 max-w-2xl mx-auto">
              Whether it's a collaboration, a question, or just saying hi — my inbox is always open.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT — Contact Form */}
          <ScrollReveal delay={100}>
            <div className="glass-lavender p-8 md:p-10 shadow-2xl">
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-2">
                  <label className="font-body text-[10px] text-white/50 tracking-widest uppercase ml-1">Your Name</label>
                  <input
                    type="text"
                    placeholder="Shatarupa Basak"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white font-body text-sm outline-none focus:border-[#c084fc]/50 transition-colors placeholder:text-white/20"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="font-body text-[10px] text-white/50 tracking-widest uppercase ml-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="hello@example.com"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white font-body text-sm outline-none focus:border-[#c084fc]/50 transition-colors placeholder:text-white/20"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-body text-[10px] text-white/50 tracking-widest uppercase ml-1">Message</label>
                  <textarea
                    rows="5"
                    placeholder="Tell me about your project or just say hi..."
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white font-body text-sm outline-none focus:border-[#c084fc]/50 transition-colors placeholder:text-white/20 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="glass-pink px-8 py-5 font-body font-bold text-[#f9a8d4] text-sm uppercase tracking-widest rounded-full hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(249,168,212,0.3)] transition-all duration-300 border border-[rgba(249,168,212,0.3)] mt-2"
                >
                  Send Message ✦
                </button>
              </form>
            </div>
          </ScrollReveal>

          {/* RIGHT — Social Links */}
          <ScrollReveal delay={200}>
            <div className="glass p-8 md:p-10 flex flex-col gap-8 h-full">
              <ContactLink 
                icon={FaInstagram} 
                label="Instagram" 
                value="shatarupa__basak" 
                href="https://www.instagram.com/shatarupa__basak/"
                colorClass="text-[#f9a8d4]"
              />
              <ContactLink 
                icon={FaLinkedin} 
                label="LinkedIn" 
                value="Shatarupa Basak" 
                href="https://www.linkedin.com/in/shatarupa-basak-7a17463b2/"
                colorClass="text-[#c084fc]"
              />
              <ContactLink 
                icon={FaFacebook} 
                label="Facebook" 
                value="Shatarupa Basak" 
                href="https://www.facebook.com/Shatarupabasak.basak"
                colorClass="text-[#c084fc]"
              />
              <ContactLink 
                icon={MdEmail} 
                label="Email" 
                value="shatarupabasak872@gmail.com" 
                href="mailto:shatarupabasak872@gmail.com"
                colorClass="text-white/60"
              />
              
              <div className="mt-auto pt-8 border-t border-white/5 text-center lg:text-left">
                <p className="font-body text-white/30 text-xs leading-relaxed uppercase tracking-widest">
                  © 2024 Shatarupa Basak. All rights reserved.
                </p>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default Contact;
