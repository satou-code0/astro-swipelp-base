import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

interface AnimatedTitleProps {
  children: ReactNode;
  className?: string;
}

export const AnimatedTitle = ({ children, className = '' }: AnimatedTitleProps) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.h1
      className={className}
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      }}
      style={{
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </motion.h1>
  );
};

export const AnimatedText = ({ children, className = '' }: AnimatedTitleProps) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.p
      className={className}
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: [0.6, -0.05, 0.01, 0.99],
      }}
      style={{
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </motion.p>
  );
}; 