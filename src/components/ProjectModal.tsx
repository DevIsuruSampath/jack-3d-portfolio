import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Tag } from 'lucide-react';
import { Project } from '../types';
import { LiveProjectButton } from './LiveProjectButton';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onContactClick: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onContactClick }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full max-w-4xl bg-[#0C0C0C] border-2 border-[#D7E2EA]/30 rounded-[30px] sm:rounded-[50px] p-6 sm:p-8 md:p-10 shadow-2xl z-10 text-[#D7E2EA] max-h-[90vh] overflow-y-auto"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-[#D7E2EA]/70 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="flex flex-wrap items-baseline gap-4 mb-6">
              <span className="text-4xl sm:text-6xl font-black text-[#D7E2EA]">
                {project.number}
              </span>
              <div>
                <span className="text-xs uppercase font-light tracking-widest text-[#D7E2EA]/70 block">
                  {project.category} Project
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold uppercase tracking-tight text-[#D7E2EA]">
                  {project.name}
                </h2>
              </div>
            </div>

            {/* Image Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="space-y-4">
                <img
                  src={project.col1Image1}
                  alt={`${project.name} shot 1`}
                  className="w-full h-[220px] sm:h-[280px] object-cover rounded-[24px] sm:rounded-[36px] border border-[#D7E2EA]/20"
                />
                <img
                  src={project.col1Image2}
                  alt={`${project.name} shot 2`}
                  className="w-full h-[220px] sm:h-[280px] object-cover rounded-[24px] sm:rounded-[36px] border border-[#D7E2EA]/20"
                />
              </div>
              <div>
                <img
                  src={project.col2Image}
                  alt={`${project.name} main showcase`}
                  className="w-full h-full min-h-[300px] max-h-[580px] object-cover rounded-[24px] sm:rounded-[36px] border border-[#D7E2EA]/20"
                />
              </div>
            </div>

            {/* Details */}
            <div className="border-t border-[#D7E2EA]/20 pt-6 flex flex-wrap items-center justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <h3 className="text-lg font-semibold uppercase tracking-wider text-white">
                  About the Project
                </h3>
                <p className="text-sm sm:text-base font-light text-[#D7E2EA]/80 leading-relaxed">
                  {project.description ||
                    `Comprehensive 3D asset creation, photorealistic lighting, custom texture maps, and motion renders crafted specifically for ${project.name}.`}
                </p>
                {project.tags && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-[#D7E2EA]/80"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <LiveProjectButton
                  onClick={() => window.open(project.col2Image, '_blank')}
                  label="View Full Res"
                  className="w-full sm:w-auto"
                />
                <button
                  onClick={() => {
                    onClose();
                    onContactClick();
                  }}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium uppercase text-sm tracking-wider hover:opacity-90 transition-opacity"
                >
                  Request Similar
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
