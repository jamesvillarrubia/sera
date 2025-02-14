import { useState } from 'react';
import { motion } from 'framer-motion';
import Input from '../common/Input';
import Button from '../common/Button';

interface FormData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  employeeCount: string;
  message: string;
}

const EmployerForm = () => {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    employeeCount: '',
    message: ''
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
        <Input
          label="Company Name"
          type="text"
          required
          value={formData.companyName}
          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
          placeholder="Your company name"
        />

        <Input
          label="Contact Name"
          type="text"
          required
          value={formData.contactName}
          onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
          placeholder="Your full name"
        />

        <Input
          label="Business Email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="you@company.com"
        />

        <Input
          label="Phone Number"
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          placeholder="(555) 555-5555"
        />

        <Input
          label="Number of Employees"
          type="text"
          required
          value={formData.employeeCount}
          onChange={(e) => setFormData({ ...formData, employeeCount: e.target.value })}
          placeholder="e.g., 100-500"
        />

        <div className="mb-4">
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            Additional Information
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200"
            rows={4}
            placeholder="Tell us about your company's needs..."
          />
        </div>

        <Button
          type="submit"
          variant="secondary"
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? 'Submitting...' : 'Request Demo'}
        </Button>

        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-600 text-center mt-4"
          >
            Thank you for your interest! We'll be in touch soon.
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-600 text-center mt-4"
          >
            There was an error submitting your request. Please try again.
          </motion.div>
        )}
      </form>
    </motion.div>
  );
};

export default EmployerForm;
