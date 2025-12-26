import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Skills', href: '/skills' },
    { label: 'Projects', href: '/projects' },
    { label: 'Education', href: '/education' },
    { label: 'Experience', href: '/experience' },
    { label: 'Certifications', href: '/certifications' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-lg z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 font-bold text-2xl gradient-text">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {'/>'} Portfolio
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-yellow-400"
            >
              {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
