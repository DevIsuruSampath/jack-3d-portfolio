import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface CharacterSpanProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const CharacterSpan: React.FC<CharacterSpanProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <motion.span style={{ opacity }} className="inline">
      {char}
    </motion.span>
  );
};

interface AnimatedTextProps {
  text?: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text = "With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!",
  className = '',
}) => {
  const targetRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const characters = text.split('');
  const total = characters.length;

  return (
    <p
      ref={targetRef}
      className={`text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] ${className}`}
      style={{
        fontSize: 'clamp(1rem, 2vw, 1.35rem)',
      }}
    >
      {characters.map((char, i) => {
        const start = i / total;
        const end = Math.min(1, start + 1 / total);
        return (
          <CharacterSpan
            key={i}
            char={char}
            progress={scrollYProgress}
            range={[start, end]}
          />
        );
      })}
    </p>
  );
};
