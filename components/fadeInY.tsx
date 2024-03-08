'use client';

import { motion } from 'framer-motion';

interface FadeInYProps {
  children: React.ReactNode;
  delay?: number;
}

export default function FadeInY({ children, delay = 0 }: FadeInYProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.span>
  );
}