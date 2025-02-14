import { motion } from 'framer-motion';
import { FaChartLine, FaShieldAlt, FaUserFriends } from 'react-icons/fa';

const Employers = () => {
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
            Safer Workplaces.<br />
            Stronger Teams.
          </motion.h1>
          <motion.p 
            className="text-xl text-neutral-600 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Reduce risk, improve retention, and foster a culture of trust 
            with AI-driven reporting.
          </motion.p>
          <motion.button 
            className="btn-secondary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Schedule a Demo
          </motion.button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                stat: "73%",
                description: "of employees don't report issues due to fear of retaliation"
              },
              {
                stat: "45%",
                description: "improvement in HR response time with SERA"
              },
              {
                stat: "31%",
                description: "lower turnover in workplaces with anonymous reporting"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
              >
                <div className="text-4xl font-bold text-primary mb-2">{item.stat}</div>
                <p className="text-neutral-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Employers;
