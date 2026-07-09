import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const ContactLink = ({ icon: Icon, label, value, href, colorClass }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    aria-label={`Visit Shatarupa on ${label}`}
    className="flex items-center gap-5 group hover:-translate-x-2 transition-transform duration-300 focus-visible:ring-2 focus-visible:ring-[#ff7eb3] focus-visible:outline-none rounded-xl"
  >
    <div className={`glass-pink w-14 h-14 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg ${colorClass}`}>
      <Icon className="text-2xl" />
    </div>
    <div>
      <div className="font-body text-[10px] text-[#fdfbf7]/60 uppercase tracking-widest mb-1">{label}</div>
      <div className="font-body text-base text-[#fdfbf7]/80 group-hover:text-[#fdfbf7] transition-colors">{value}</div>
    </div>
  </a>
);

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setStatus('error-empty');
      return;
    }

    // Formspree Integration Endpoint
    // Replace with your Formspree endpoint (e.g. "https://formspree.io/f/your-id")
    const FORMSPREEE_ENDPOINT = ""; 

    if (FORMSPREEE_ENDPOINT) {
      setStatus('sending');
      fetch(FORMSPREEE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState)
      })
      .then(response => {
        if (response.ok) {
          setStatus('success');
          setFormState({ name: '', email: '', message: '' });
        } else {
          setStatus('error-server');
        }
      })
      .catch(() => {
        setStatus('error-server');
      });
    } else {
      // Fallback: Mailto link
      const subject = encodeURIComponent(`Portfolio Message from ${formState.name}`);
      const body = encodeURIComponent(`${formState.message}\n\nFrom: ${formState.name} (${formState.email})`);
      window.location.href = `mailto:shatarupabasak872@gmail.com?subject=${subject}&body=${body}`;
      setStatus('success-fallback');
      setFormState({ name: '', email: '', message: '' });
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24 md:mb-32">
          <ScrollReveal>
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#ff7eb3]/80 mb-3 block">
              GET IN TOUCH
            </span>
            <h2 className="font-display text-[40px] md:text-[52px] lg:text-[64px] font-bold leading-tight tracking-tight relative mb-6">
              <span className="bg-gradient-to-r from-[#FAF6F0] via-[#FBCFE8] to-[#D8B4FE] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(216,180,254,0.15)]">
                Contact
              </span>
            </h2>
            <p className="font-body text-white/75 text-lg max-w-[700px] mx-auto leading-relaxed text-center">
              Whether it's a collaboration, a question, or just saying hi — my inbox is always open.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT — Contact Form */}
          <ScrollReveal delay={100}>
            <div className="glass-teal p-8 md:p-10 shadow-2xl">
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-body text-[10px] text-[#fdfbf7]/60 tracking-widest uppercase ml-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Shatarupa Basak"
                    className="bg-[#fdfbf7]/5 border border-[#fdfbf7]/10 rounded-xl px-4 py-4 text-[#fdfbf7] font-body text-sm outline-none focus:ring-2 focus:ring-[#ff7eb3] focus:border-transparent transition-all placeholder:text-[#fdfbf7]/20"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-body text-[10px] text-[#fdfbf7]/60 tracking-widest uppercase ml-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="hello@example.com"
                    className="bg-[#fdfbf7]/5 border border-[#fdfbf7]/10 rounded-xl px-4 py-4 text-[#fdfbf7] font-body text-sm outline-none focus:ring-2 focus:ring-[#ff7eb3] focus:border-transparent transition-all placeholder:text-[#fdfbf7]/20"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-body text-[10px] text-[#fdfbf7]/60 tracking-widest uppercase ml-1">Message</label>
                  <textarea
                    rows="5"
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hi..."
                    className="bg-[#fdfbf7]/5 border border-[#fdfbf7]/10 rounded-xl px-4 py-4 text-[#fdfbf7] font-body text-sm outline-none focus:ring-2 focus:ring-[#ff7eb3] focus:border-transparent transition-all placeholder:text-[#fdfbf7]/20 resize-none"
                  ></textarea>
                </div>

                {status === 'success' && (
                  <p className="text-emerald-400 text-xs font-bold font-body">Message sent successfully! ✦</p>
                )}
                {status === 'success-fallback' && (
                  <p className="text-emerald-400 text-xs font-bold font-body">Opening your mail client... ✦</p>
                )}
                {status === 'sending' && (
                  <p className="text-[#ff7eb3] text-xs font-bold font-body">Sending message...</p>
                )}
                {status === 'error-empty' && (
                  <p className="text-red-400 text-xs font-bold font-body">Please fill in all fields.</p>
                )}
                {status === 'error-server' && (
                  <p className="text-red-400 text-xs font-bold font-body">Something went wrong. Please try again or email directly.</p>
                )}

                <button
                  type="submit"
                  aria-label="Send message"
                  className="glass-pink px-8 py-5 font-body font-bold text-[#ff7eb3] text-sm uppercase tracking-widest rounded-full hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(255, 126, 179,0.3)] transition-all duration-300 border border-[rgba(255, 126, 179,0.3)] mt-2 focus-visible:ring-2 focus-visible:ring-[#ff7eb3] focus-visible:outline-none btn-sheen"
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
                colorClass="text-[#ff7eb3]"
              />
              <ContactLink 
                icon={FaLinkedin} 
                label="LinkedIn" 
                value="Shatarupa Basak" 
                href="https://www.linkedin.com/in/shatarupa-basak-7a17463b2/"
                colorClass="text-[#14b8a6]"
              />
              <ContactLink 
                icon={FaFacebook} 
                label="Facebook" 
                value="Shatarupa Basak" 
                href="https://www.facebook.com/Shatarupabasak.basak"
                colorClass="text-[#14b8a6]"
              />
              <ContactLink 
                icon={MdEmail} 
                label="Email" 
                value="shatarupabasak872@gmail.com" 
                href="mailto:shatarupabasak872@gmail.com"
                colorClass="text-[#fdfbf7]/60"
              />
              
              <div className="mt-auto pt-8 border-t border-[#fdfbf7]/5 text-center lg:text-left">
                <p className="font-body text-[#fdfbf7]/60 text-xs leading-relaxed uppercase tracking-widest">
                  © 2026 Shatarupa Basak. All rights reserved.
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
