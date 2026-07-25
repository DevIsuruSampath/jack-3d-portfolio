import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { ProjectModal } from './components/ProjectModal';
import { Project } from './types';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="bg-[#0C0C0C] text-[#D7E2EA] font-['Kanit',sans-serif] min-h-screen relative"
      style={{ overflowX: 'clip' }}
    >
      {/* SECTION ORDER */}
      {/* 1. HeroSection */}
      <HeroSection
        onContactClick={() => setIsContactOpen(true)}
        onNavClick={handleNavClick}
      />

      {/* 2. MarqueeSection */}
      <MarqueeSection />

      {/* 3. AboutSection */}
      <AboutSection onContactClick={() => setIsContactOpen(true)} />

      {/* 4. ServicesSection */}
      <ServicesSection />

      {/* 5. ProjectsSection */}
      <ProjectsSection
        onProjectSelect={(project) => setSelectedProject(project)}
      />

      {/* Footer */}
      <Footer
        onContactClick={() => setIsContactOpen(true)}
        onNavClick={handleNavClick}
      />

      {/* Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onContactClick={() => setIsContactOpen(true)}
      />
    </div>
  );
}
