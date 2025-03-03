import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ mobileMenuOpen, toggleMobileMenu }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-black">ASKER.</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <a href="#home" className="text-gray-800 hover:text-indigo-600 transition-colors">Home</a>
            <a href="#about" className="text-gray-800 hover:text-indigo-600 transition-colors">About</a>
            <a href="#skills" className="text-gray-800 hover:text-indigo-600 transition-colors">Skills</a>
            <a href="#portfolio" className="text-gray-800 hover:text-indigo-600 transition-colors">Portfolio</a>
            <a href="#experience" className="text-gray-800 hover:text-indigo-600 transition-colors">Experience</a>
            <a href="#contact" className="text-gray-800 hover:text-indigo-600 transition-colors">Contact</a>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-800 hover:text-indigo-600 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#home" 
              className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-indigo-600 hover:bg-gray-50 rounded-md"
              onClick={toggleMobileMenu}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-indigo-600 hover:bg-gray-50 rounded-md"
              onClick={toggleMobileMenu}
            >
              About
            </a>
            <a 
              href="#skills" 
              className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-indigo-600 hover:bg-gray-50 rounded-md"
              onClick={toggleMobileMenu}
            >
              Skills
            </a>
            <a 
              href="#portfolio" 
              className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-indigo-600 hover:bg-gray-50 rounded-md"
              onClick={toggleMobileMenu}
            >
              Portfolio
            </a>
            <a 
              href="#experience" 
              className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-indigo-600 hover:bg-gray-50 rounded-md"
              onClick={toggleMobileMenu}
            >
              Experience
            </a>
            {/* <a 
              href="#contact" 
              className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-indigo-600 hover:bg-gray-50 rounded-md"
              onClick={toggleMobileMenu}
            >
              Contact
            </a> */}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;