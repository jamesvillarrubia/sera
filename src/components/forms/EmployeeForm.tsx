import { useState } from 'react';
import { motion } from 'framer-motion';
import Input from '../common/Input';
import Button from '../common/Button';

interface FormData {
  email: string;
  name?: string;
  department?: string;
  message: string;
  isAnonymous: boolean;
}

const EmployeeForm = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    name: '',
    department: '',
    message: '',
    isAnonymous: true
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Implement actual form submission to Google Sheets
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      setSubmitStatus('success');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-xl mx-auto"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-yellow-50 p-4 rounded-lg mb-6">
          <p className="text-yellow-800 text-sm">
            Your privacy is our priority. Choose whether to remain anonymous or share your identity.
          </p>
        </div>

        <div className="flex items-center mb-6">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={formData.isAnonymous}
              onChange={(e) => setFormData({ ...formData, isAnonymous: e.target.checked })}
              className="form-checkbox h-5 w-5 text-primary rounded border-neutral-300 focus:ring-primary"
            />
            <span className="ml-2 text-neutral-700">Submit Anonymously</span>
          </label>
        </div>

        {!formData.isAnonymous && (
          <>
            <Input
              label="Name (Optional)"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your name"
            />

            <Input
              label="Department (Optional)"
              type="text"
              value={formData.department}
              onChange={(e) => setFormData({ ...formData, department: e.target.value })}
              placeholder="Your department"
            />
          </>
        )}

        <Input
          label="Contact Email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="your.email@example.com"
          helper="We'll use this to follow up on your report securely"
        />

        <div className="mb-4">
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            Your Message
          </label>
          <textarea
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
            rows={6}
            placeholder="Please describe your concern in detail..."
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Report'}
        </Button>

        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-600 text-center mt-4"
          >
            Your report has been submitted successfully.
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-600 text-center mt-4"
          >
            There was an error submitting your report. Please try again.
          </motion.div>
        )}
      </form>
    </motion.div>
  );
};

export default EmployeeForm;
