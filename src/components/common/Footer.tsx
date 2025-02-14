import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-neutral-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link to="/" className="font-display text-xl text-primary">
              TalkToSera.ai
            </Link>
            <p className="mt-4 text-neutral-600">
              Your trusted AI Ombudsman for workplace concerns.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-neutral-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/employees" className="text-neutral-600 hover:text-primary">
                  For Employees
                </Link>
              </li>
              <li>
                <Link to="/employers" className="text-neutral-600 hover:text-primary">
                  For Employers
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-neutral-600 hover:text-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-medium text-neutral-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-neutral-600 hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-neutral-600 hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-medium text-neutral-900 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-neutral-600">
                support@talktosera.ai
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-200 mt-12 pt-8 text-center text-neutral-600">
          <p>© {currentYear} TalkToSera.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
