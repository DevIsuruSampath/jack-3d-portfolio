import React from 'react';
import { ContactButton } from './ContactButton';
import { FadeIn } from './FadeIn';
import { ArrowUpRight, Heart } from 'lucide-react';

interface FooterProps {
  onContactClick: () => void;
  onNavClick: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onContactClick, onNavClick }) => {
  return (
    <footer className="w-full bg-[#0C0C0C] text-[#D7E2EA] px-6 md:px-12 py-16 sm:py-24 border-t border-[#D7E2EA]/10 relative z-20">
      <div className="max-w-6xl mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Top Callout */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#D7E2EA]/10">
          <div className="space-y-3">
            <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight hero-heading">
              Have a project in mind?
            </h3>
            <p className="text-[#D7E2EA]/70 font-light max-w-md text-sm sm:text-base">
              Available for freelance opportunities, full 3D production, motion branding, and creative direction.
            </p>
          </div>
          <ContactButton onClick={onContactClick} />
        </div>

        {/* Links & Socials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div className="space-y-3">
            <span className="text-xs uppercase font-semibold text-[#D7E2EA]/50 tracking-widest block">
              Navigation
            </span>
            <ul className="space-y-2 uppercase font-medium tracking-wider">
              <li>
                <button onClick={() => onNavClick('about')} className="hover:text-white transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('services')} className="hover:text-white transition-colors">
                  Price & Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('projects')} className="hover:text-white transition-colors">
                  Projects
                </button>
              </li>
              <li>
                <button onClick={onContactClick} className="hover:text-white transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-xs uppercase font-semibold text-[#D7E2EA]/50 tracking-widest block">
              Services
            </span>
            <ul className="space-y-2 text-[#D7E2EA]/80 font-light">
              <li>3D Modeling & Assets</li>
              <li>Photorealistic Rendering</li>
              <li>3D Motion & Graphics</li>
              <li>Brand Visual Identity</li>
              <li>Modern Web Experience</li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-xs uppercase font-semibold text-[#D7E2EA]/50 tracking-widest block">
              Connect
            </span>
            <ul className="space-y-2 font-medium">
              {[
                { name: 'X / Twitter', url: 'https://x.com' },
                { name: 'Instagram', url: 'https://instagram.com' },
                { name: 'Dribbble', url: 'https://dribbble.com' },
                { name: 'Behance', url: 'https://behance.net' },
                { name: 'LinkedIn', url: 'https://linkedin.com' },
              ].map((s) => (
                <li key={s.name}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-white transition-colors"
                  >
                    {s.name} <ArrowUpRight size={14} className="opacity-60" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-xs uppercase font-semibold text-[#D7E2EA]/50 tracking-widest block">
              Direct Contact
            </span>
            <p className="text-sm font-medium text-white">jack@3dcreator.studio</p>
            <p className="text-xs text-[#D7E2EA]/60 font-light">
              Based in Los Angeles, CA.
              <br />
              Working worldwide.
            </p>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#D7E2EA]/50 font-light pt-8 border-t border-[#D7E2EA]/10 gap-4">
          <p>© {new Date().getFullYear()} Jack -- 3D Creator. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with precision &amp; 3D passion
          </p>
        </div>
      </div>
    </footer>
  );
};
