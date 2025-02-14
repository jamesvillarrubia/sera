import { motion } from 'framer-motion';
import { FaShield, FaComments, FaCheckCircle } from 'react-icons/fa';
import Card from '../common/Card';

const steps = [
  {
    icon: <FaComments className="w-8 h-8 text-primary" />,
    title: "Submit Your Report",
    description: "Easily submit your concerns through our secure platform. Choose between anonymous or identified reporting."
  },
  {
    icon: <FaShield className="w-8 h-8 text-primary" />,
    title: "SERA Processes",
    description: "Our AI system ensures your privacy while validating and processing your report for HR review."
  },
  {
    icon: <FaCheckCircle className="w-8 h-8 text-primary" />,
    title: "Resolution & Follow-up",
    description: "Track your report's progress and receive updates while maintaining your chosen privacy level."
  }
];

const HowItWorks = () => {
  return (
    <div className="py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-display font-bold mb-4">How It Works</h2>
        <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
          A simple, secure process designed to protect your privacy while ensuring your voice is heard.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <Card className="h-full">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-neutral-600">{step.description}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
