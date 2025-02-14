import { motion } from 'framer-motion';
import { FaLock, FaUserShield, FaCheckDouble } from 'react-icons/fa';
import Card from '../common/Card';

const trustFeatures = [
  {
    icon: <FaLock className="w-8 h-8 text-primary" />,
    title: "End-to-End Encryption",
    description: "Your data is encrypted at every step, ensuring complete privacy and security."
  },
  {
    icon: <FaUserShield className="w-8 h-8 text-primary" />,
    title: "Identity Protection",
    description: "Choose your level of anonymity. Your identity is never revealed without your explicit consent."
  },
  {
    icon: <FaCheckDouble className="w-8 h-8 text-primary" />,
    title: "Verified Processing",
    description: "Every report is handled with care and processed through our secure AI system."
  }
];

const TrustSection = () => {
  return (
    <div className="bg-neutral-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-bold mb-4">
            Trust & Security
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Your security and privacy are our top priorities. We've built SERA with industry-leading protection measures.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {trustFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full">
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-neutral-600">{feature.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-sm text-neutral-600">
            SERA is compliant with GDPR, CCPA, and other major privacy regulations.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default TrustSection;
