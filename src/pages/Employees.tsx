import { motion } from 'framer-motion';
import { FaComments, FaCheckCircle } from 'react-icons/fa';
import { FaShield } from 'react-icons/fa6';

const Employees = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-display font-bold text-neutral-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Speak Up Safely.<br />
            SERA Has Your Back.
          </motion.h1>
          <motion.p 
            className="text-xl text-neutral-600 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Workplace concerns? Report them anonymously with SERA. 
            We protect your identity unless you choose otherwise.
          </motion.p>
          <motion.button 
            className="btn-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Start a Confidential Report
          </motion.button>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaComments className="w-8 h-8 text-primary" />,
                title: "Submit Your Concern",
                description: "Choose anonymous or named reporting - you're in control."
              },
              {
                icon: <FaShield className="w-8 h-8 text-primary" />,
                title: "SERA Acts as Your Proxy",
                description: "Your identity stays hidden unless you choose otherwise."
              },
              {
                icon: <FaCheckCircle className="w-8 h-8 text-primary" />,
                title: "HR Receives & Reviews",
                description: "Your issue is addressed while maintaining your privacy."
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className="text-center p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
              >
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-neutral-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Employees;
