import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Dribbble, ArrowUpCircle } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-24 pb-12 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-white-100/[0.05]"></div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-6 relative max-w-[1400px] z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* About Section */}
          <div className="lg:col-span-5">
            <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-white">ASKER HAMZA</h3>
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed">
              Creative designer focused on crafting beautiful and functional digital experiences.
              Specializing in UI/UX design, brand identity, and visual communication.
            </p>
            
            {/* Social Links */}
            {/* <div className="flex space-x-4 mt-6">
              <a href="#" className="bg-gray-700 hover:bg-blue-600 p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-blue-600 p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-blue-600 p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1">
                <Dribbble className="h-5 w-5" />
              </a>
            </div> */}
          </div>
          
          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-bold mb-6 text-white after:content-[''] after:block after:w-12 after:h-1  after:rounded-full after:mt-2">Navigation</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Skills', 'Portfolio', 'Experience', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-300 hover:text-white transition-colors duration-300 inline-flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-blue-400 inline-block mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h3 className="text-xl font-bold mb-6 text-white after:content-[''] after:block after:w-12 after:h-1  after:rounded-full after:mt-2">Contact Info</h3>
            <ul className="space-y-5">
              <li className="flex items-start group">
                <div className="bg-gray-700 p-3 rounded-lg mr-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:askerm4u@gmail.com" className="text-gray-200 hover:text-white transition-colors">askerm4u@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="bg-gray-700 p-3 rounded-lg mr-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a href="tel:+971502026590" className="text-gray-200 hover:text-white transition-colors">+971 50 202 6590</a>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="bg-gray-700 p-3 rounded-lg mr-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <span className="text-gray-200">Dubai, United Arab Emirates</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-700 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Asker Hamza. All rights reserved.</p>
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-gray-800 hover:bg-blue-600 p-2 rounded-full transition-all duration-300 transform hover:-translate-y-1 flex items-center"
          >
            <ArrowUpCircle className="h-6 w-6" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;