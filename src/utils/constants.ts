export const COMPANY_NAME = 'TalkToSera.ai';
export const CONTACT_EMAIL = 'support@talktosera.ai';

export const ROUTES = {
  HOME: '/',
  EMPLOYEES: '/employees',
  EMPLOYERS: '/employers',
  FAQ: '/faq',
  REPORT: '/report',
};

export const FAQ_ITEMS = {
  EMPLOYEES: [
    {
      question: 'Is my report really anonymous?',
      answer: 'Yes, when you choose anonymous reporting, your identity is completely protected. We use advanced encryption and never store identifying information without your explicit consent.',
    },
    {
      question: 'What happens after I submit a report?',
      answer: 'Your report is securely processed by SERA and forwarded to the appropriate HR personnel. You\'ll receive a tracking number to monitor the status of your report.',
    },
    {
      question: 'Can I communicate after submitting a report?',
      answer: 'Yes, you can add information or respond to questions through our secure platform while maintaining your chosen level of anonymity.',
    },
  ],
  EMPLOYERS: [
    {
      question: 'How does SERA protect against false reports?',
      answer: 'SERA uses AI-driven verification systems to identify patterns and validate reports while maintaining reporter privacy.',
    },
    {
      question: 'Can SERA integrate with our existing HR systems?',
      answer: 'Yes, SERA offers secure API integration with major HR management systems while maintaining all privacy and security features.',
    },
    {
      question: 'What kind of analytics do we receive?',
      answer: 'You receive anonymized trend analysis, response time metrics, and issue resolution statistics to help improve workplace culture.',
    },
  ],
};

export const NAVIGATION_ITEMS = [
  { name: 'Home', path: ROUTES.HOME },
  { name: 'For Employees', path: ROUTES.EMPLOYEES },
  { name: 'For Employers', path: ROUTES.EMPLOYERS },
  { name: 'FAQ', path: ROUTES.FAQ },
];
