import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string | ReactNode;
  subtitle?: string | ReactNode;
  children?: ReactNode;
  className?: string;
  align?: 'left' | 'center' | 'right';
  background?: 'light' | 'dark' | 'gradient';
}

const Hero = ({ 
  title, 
  subtitle, 
  children, 
  className = '', 
  align = 'center',
  background = 'light' 
}: HeroProps) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  const backgroundClasses = {
    light: 'bg-white',
    dark: 'bg-neutral-900 text-white',
    gradient: 'bg-gradient-to-r from-primary to-secondary text-white'
  };

  return (
    <div className={`py-20 ${backgroundClasses[background]} ${className}`}>
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto ${alignmentClasses[align]}`}>
          <motion.h1 
            className="text-4xl md:text-6xl font-display font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p 
              className="text-xl opacity-90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {subtitle}
            </motion.p>
          )}

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
