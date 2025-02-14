import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

const Card = ({ children, className = '', hover = true, onClick }: CardProps) => {
  return (
    <motion.div
      className={`bg-white rounded-xl shadow-soft p-6 ${className}`}
      whileHover={hover ? { y: -5, shadow: '0 8px 30px rgba(0,0,0,0.12)' } : {}}
      transition={{ duration: 0.2 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default Card;
