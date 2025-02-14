import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
  category: 'employee' | 'employer' | 'security';
}

const faqs: FAQItem[] = [
  {
    question: "Is my report really anonymous?",
    answer: "Yes, your report is completely anonymous unless you choose to reveal your identity. SERA uses advanced encryption and never stores identifying information without explicit consent.",
    category: "employee"
  },
  {
    question: "How does SERA protect against false reports?",
    answer: "SERA uses AI-driven verification systems while maintaining anonymity. Our system helps identify patterns while protecting individual privacy.",
    category: "employer"
  },
  {
    question: "How is my data protected?",
    answer: "We use enterprise-grade encryption and follow strict data protection protocols. Your information is stored securely and access is strictly controlled.",
    category: "security"
  }
];

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'employee' | 'employer' | 'security'>('all');
  const [openItem, setOpenItem] = useState<number | null>(null);

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-display font-bold text-center mb-12">
          Frequently Asked Questions
        </h1>

        {/* Category Filters */}
        <div className="flex justify-center gap-4 mb-12">
          {['all', 'employee', 'employer', 'security'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category as any)}
              className={`px-4 py-2 rounded-lg ${
                activeCategory === category 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-neutral-600 hover:bg-neutral-100'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="max-w-2xl mx-auto">
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => setOpenItem(openItem === index ? null : index)}
                className="w-full text-left p-4 bg-white rounded-lg shadow-soft hover:shadow-medium transition-shadow duration-200"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{faq.question}</span>
                  <span className="text-primary">
                    {openItem === index ? '−' : '+'}
                  </span>
                </div>
                <AnimatePresence>
                  {openItem === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="mt-2 text-neutral-600"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
