import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Project } from '../types';
import { LiveProjectButton } from './LiveProjectButton';
import { FadeIn } from './FadeIn';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'nextlevel-studio',
    number: '01',
    name: 'Nextlevel Studio',
    category: 'Client',
    col1Image1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    col1Image2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    description:
      '3D modeling and motion environment design created for Nextlevel Studio, featuring photorealistic light dynamics and brand showcase assets.',
    tags: ['3D Modeling', 'Motion Design', 'Rendering'],
  },
  {
    id: 'aura-brand-identity',
    number: '02',
    name: 'Aura Brand Identity',
    category: 'Personal',
    col1Image1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    col1Image2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    description:
      'A holistic brand identity and 3D product visualizer exploring futuristic glass refraction, metallic textures, and fluid compositions.',
    tags: ['Branding', '3D Visuals', 'Product Design'],
  },
  {
    id: 'solaris-digital',
    number: '03',
    name: 'Solaris Digital',
    category: 'Client',
    col1Image1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    col1Image2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    description:
      'Digital web experience and interactive 3D hero assets created for Solaris, combining conversion-driven web design with high-end 3D graphics.',
    tags: ['Web Design', '3D Assets', 'Client Experience'],
  },
];

interface ProjectCardProps {
  project: Project;
  index: number;
  totalCards: number;
  onProjectSelect: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  totalCards,
  onProjectSelect,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="sticky top-20 sm:top-24 md:top-28 mb-12 sm:mb-16 md:mb-20 w-full"
      style={{
        top: `calc(5rem + ${index * 28}px)`,
      }}
    >
      <motion.div
        style={{ scale }}
        className="w-full bg-[#0C0C0C] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8 shadow-2xl transition-shadow duration-300 hover:border-white"
      >
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8 pb-4 border-b border-[#D7E2EA]/20">
          <div className="flex flex-wrap items-baseline gap-3 sm:gap-6">
            {/* Number (huge, same style as services) */}
            <span
              className="font-black text-[#D7E2EA] leading-none select-none"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 120px)' }}
            >
              {project.number}
            </span>

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
              <span className="text-xs sm:text-sm font-light uppercase tracking-widest text-[#D7E2EA]/70">
                ({project.category})
              </span>
              <h3
                className="font-medium uppercase text-[#D7E2EA] tracking-tight"
                style={{ fontSize: 'clamp(1.2rem, 3vw, 2.5rem)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>

          <LiveProjectButton onClick={() => onProjectSelect(project)} />
        </div>

        {/* Bottom row: Two-column image grid */}
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 w-full">
          {/* Left column (40% width) with 2 stacked images */}
          <div className="w-full md:w-[40%] flex flex-col gap-4 sm:gap-6">
            <div
              className="w-full overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] border border-[#D7E2EA]/20 group cursor-pointer"
              onClick={() => onProjectSelect(project)}
            >
              <img
                src={project.col1Image1}
                alt={`${project.name} preview 1`}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ height: 'clamp(130px, 16vw, 230px)' }}
              />
            </div>
            <div
              className="w-full overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] border border-[#D7E2EA]/20 group cursor-pointer"
              onClick={() => onProjectSelect(project)}
            >
              <img
                src={project.col1Image2}
                alt={`${project.name} preview 2`}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ height: 'clamp(160px, 22vw, 340px)' }}
              />
            </div>
          </div>

          {/* Right column (60% width) with 1 tall image */}
          <div
            className="w-full md:w-[60%] overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] border border-[#D7E2EA]/20 group cursor-pointer flex"
            onClick={() => onProjectSelect(project)}
          >
            <img
              src={project.col2Image}
              alt={`${project.name} main feature`}
              className="w-full h-full min-h-[300px] md:min-h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface ProjectsSectionProps {
  onProjectSelect: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onProjectSelect }) => {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading: "Project" (singular) */}
        <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-28">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Project
          </h2>
        </FadeIn>

        {/* 3 Sticky-stacking project cards */}
        <div className="relative flex flex-col space-y-8 sm:space-y-12">
          {PROJECTS_DATA.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              totalCards={PROJECTS_DATA.length}
              onProjectSelect={onProjectSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
