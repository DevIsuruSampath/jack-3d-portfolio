import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Check, Mail, MessageSquare, Sparkles } from 'lucide-react';
import { ContactButton } from './ContactButton';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '3D Modeling',
    budget: '$3k - $5k',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full max-w-xl bg-[#0C0C0C] border-2 border-[#D7E2EA]/30 rounded-[30px] sm:rounded-[40px] p-6 sm:p-8 md:p-10 shadow-2xl z-10 text-[#D7E2EA]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-[#D7E2EA]/70 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            >
              <X size={20} />
            </button>

            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-600 to-pink-600 flex items-center justify-center text-white">
                  <Check size={32} />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-wider hero-heading">
                  Message Sent!
                </h3>
                <p className="text-[#D7E2EA]/80 max-w-md font-light">
                  Thanks for reaching out! Jack will review your project details and get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="text-xs font-semibold tracking-widest text-[#D7E2EA]/60 uppercase flex items-center gap-1.5 mb-2">
                    <Sparkles size={14} className="text-purple-400" /> Let's Work Together
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight hero-heading">
                    Start a Project
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-medium mb-1 text-[#D7E2EA]/80">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#161616] border border-[#D7E2EA]/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 text-white placeholder-white/30"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-medium mb-1 text-[#D7E2EA]/80">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#161616] border border-[#D7E2EA]/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 text-white placeholder-white/30"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-medium mb-1 text-[#D7E2EA]/80">
                        Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-[#161616] border border-[#D7E2EA]/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 text-white"
                      >
                        <option value="3D Modeling">3D Modeling</option>
                        <option value="Rendering">Rendering</option>
                        <option value="Motion Design">Motion Design</option>
                        <option value="Branding">Branding</option>
                        <option value="Web Design">Web Design</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-medium mb-1 text-[#D7E2EA]/80">
                        Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-[#161616] border border-[#D7E2EA]/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 text-white"
                      >
                        <option value="< $3k">&lt; $3,000</option>
                        <option value="$3k - $5k">$3,000 - $5,000</option>
                        <option value="$5k - $10k">$5,000 - $10,000</option>
                        <option value="$10k+">$10,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-medium mb-1 text-[#D7E2EA]/80">
                      Project Details
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Tell me about your goals, timeline, or vision..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#161616] border border-[#D7E2EA]/20 rounded-xl p-4 text-sm focus:outline-none focus:border-purple-500 text-white placeholder-white/30 resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-xs text-[#D7E2EA]/50 font-light hidden sm:inline">
                      Or email directly: jack@3dcreator.studio
                    </span>
                    <ContactButton label="Submit Proposal" className="w-full sm:w-auto" />
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
