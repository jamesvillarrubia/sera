import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  title?: string | ReactNode;
  subtitle?: string | ReactNode;
  children: ReactNode;
  className?: string;
  background?: 'white' | 'light' | 'dark' | 'gradient';
  spacing?: 'none' | 'sm' | 'md' | 'lg';
}

const Section = ({ 
  title, 
  subtitle, 
  children, 
  className = '',
  background = 'white',
  spacing = 'md'
}: SectionProps) => {
  const backgroundClasses = {
    white: 'bg-white',
    light: 'bg-neutral-50',
    dark: 'bg-neutral-900 text-white',
    gradient: 'bg-gradient-to-r from-primary to-secondary text-white'
  };

  const spacingClasses = {
    none: 'py-0',
    sm: 'py-8',
    md: 'py-16',
    lg: 'py-24'
  };

  return (
    <section className={`
      ${backgroundClasses[background]}
      ${spacingClasses[spacing]}
      ${className}
    `}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="max-w-3xl mx-auto text-center mb-12">
            {title && (
              <motion.h2 
                className="text-3xl font-display font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {title}
              </motion.h2>
            )}
            
            {subtitle && (
              <motion.p 
                className="text-xl opacity-90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default Section;
