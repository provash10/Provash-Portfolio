import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-secondary via-dark to-slate-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Provash Chandra Barman</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Full Stack Web Developer passionate about creating exceptional digital experiences 
              with modern technologies and clean code.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/provash10"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/provashchandrabarman/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="mailto:provash20cb@gmail.com"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <i className="fas fa-envelope"></i>
              </a>
              <a
                href="https://wa.me/8801710490345"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <i className="fas fa-envelope mr-2"></i>
                <a 
                  href="mailto:provash20cb@gmail.com"
                  className="hover:text-white transition-colors duration-300"
                >
                  provash20cb@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone mr-2"></i>
                <a 
                  href="tel:+8801710490345"
                  className="hover:text-white transition-colors duration-300"
                >
                  +880 1710 490345
                </a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt mr-2"></i>
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-6 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Provash Chandra Barman. All rights reserved.
            </p>
            <div className="flex items-center mt-4 md:mt-0">
              <p className="text-gray-400 text-sm mr-4">
                Built with ❤️ using React & Tailwind CSS
              </p>
              <div className="flex space-x-2">
                <span className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-400">React</span>
                <span className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-400">Tailwind</span>
                <span className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-400">JavaScript</span>
              </div>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm mb-4">
            If you like my work, consider supporting me:
          </p>
          <a
            href="https://wa.me/8801710490345"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-yellow-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-yellow-600 transition-colors duration-300"
          >
            <i className="fas fa-coffee mr-2"></i>
            Buy Me a Coffee
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;