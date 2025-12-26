import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
    { icon: FaEnvelope, url: 'mailto:your.email@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Portfolio</h3>
            <p className="text-gray-400">
              A Full Stack MERN Developer passionate about building scalable web applications.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-purple-400 transition">About</a></li>
              <li><a href="#projects" className="hover:text-purple-400 transition">Projects</a></li>
              <li><a href="#skills" className="hover:text-purple-400 transition">Skills</a></li>
              <li><a href="#contact" className="hover:text-purple-400 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition text-xl"
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} All rights reserved. Crafted with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
