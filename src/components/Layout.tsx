import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/menu', label: 'Menu' },
    { to: '/about', label: 'About' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-base-light dark:bg-base-dark text-text-body-light dark:text-text-body-dark">
      {/* Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-base-light/95 dark:bg-base-dark/95 shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-text-heading-light dark:text-text-heading-dark">
              Bella Italia
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-text-body-light dark:text-text-body-dark hover:text-accent dark:hover:text-accent transition-colors ${
                    location.pathname === link.to ? 'text-accent dark:text-accent' : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/reservation"
                className="btn btn-primary"
              >
                Book a Table
              </Link>
              <button
                onClick={toggleTheme}
                className="text-text-body-light dark:text-text-body-dark hover:text-accent dark:hover:text-accent transition-colors"
                aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
              >
                {isDarkMode ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-text-body-light dark:text-text-body-dark hover:text-accent dark:hover:text-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-base-light dark:bg-base-dark"
            >
              <div className="container mx-auto px-4 py-4">
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`text-text-body-light dark:text-text-body-dark hover:text-accent dark:hover:text-accent transition-colors ${
                        location.pathname === link.to ? 'text-accent dark:text-accent' : ''
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    to="/reservation"
                    className="btn btn-primary w-full text-center"
                  >
                    Book a Table
                  </Link>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-section-light dark:bg-section-dark py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-text-heading-light dark:text-text-heading-dark mb-4">Bella Italia</h3>
              <p className="text-text-body-light dark:text-text-body-dark">
                Experience authentic Italian cuisine in a warm and welcoming atmosphere.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-text-heading-light dark:text-text-heading-dark mb-4">Contact</h3>
              <p className="text-text-body-light dark:text-text-body-dark">
                123 Italian Street<br />
                New York, NY 10001<br />
                Phone: (555) 123-4567<br />
                Email: info@bellaitalia.com
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-text-heading-light dark:text-text-heading-dark mb-4">Hours</h3>
              <p className="text-text-body-light dark:text-text-body-dark">
                Monday - Thursday: 11am - 10pm<br />
                Friday - Saturday: 11am - 11pm<br />
                Sunday: 11am - 9pm
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-ui-border-light dark:border-ui-border-dark text-center text-text-body-light dark:text-text-body-dark">
            <p>&copy; {new Date().getFullYear()} Bella Italia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 