import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../common/Card';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  items: FAQItem[];
}

const FAQSection = ({ title = "Frequently Asked Questions", items }: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="py-12">
      <h2 className="text-3xl font-display font-bold text-center mb-12">{title}</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {items.map((item, index) => (
          <Card
            key={index}
            hover={false}
            className="cursor-pointer"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium pr-8">{item.question}</h3>
              <span className="text-primary text-2xl">
                {openIndex === index ? '−' : '+'}
              </span>
            </div>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="mt-4 text-neutral-600">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
