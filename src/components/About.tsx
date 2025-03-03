import React from 'react';
import { Phone, Mail, Calendar, MapPin, Download, ExternalLink } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decorative elements - updated to blue theme */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-50 rounded-full -mr-16 -mt-16"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full -ml-16 -mb-16"></div>
      
      {/* Subtle wave pattern for background */}
      {/* <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <svg className="absolute top-1/2 transform -translate-y-1/2" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#1e40af" fillOpacity="1" d="M0,192L60,197.3C120,203,240,213,360,197.3C480,181,600,139,720,138.7C840,139,960,181,1080,186.7C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div> */}
      
      <div className="container mx-auto px-4 sm:px-6 max-w-[1400px] lg:px-8 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4">
            <span className="mr-2">👋</span>
            Get To Know Me
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-center">
            About <span className="text-blue-700">Me</span>
          </h2>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
          {/* Image column - takes 2/5 of the grid */}
          <div className="md:col-span-1">
            <div className="relative">
              {/* Image decorative elements - updated to blue theme */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-blue-100 rounded-2xl transform rotate-3"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 rounded-xl transform rotate-12"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-200 rounded-lg transform -rotate-6"></div>
              
              {/* Added geometric elements for consistency */}
              <div className="absolute top-12 right-0 w-8 h-8 bg-blue-700 rounded opacity-20"></div>
              <div className="absolute bottom-8 left-8 w-6 h-6 bg-blue-600 rounded-full opacity-20"></div>
              
              {/* Main image */}
             
            </div>
          </div>
          
          {/* Content column - takes 3/5 of the grid */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-blue-50">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Passionate Designer <span className="text-blue-700">& Creative Thinker</span>
              </h3>
              
              <div className="space-y-4 text-gray-600 mb-8">
                <p>
                  I'm a dedicated graphic designer with over 8 years of experience transforming ideas into captivating visual narratives. My design philosophy blends artistic intuition with strategic thinking to create meaningful experiences that resonate with audiences and drive results.
                </p>
                <p>
                  After completing my Diploma in Multimedia-Editing & Special Effects from IHT College of Media Studies, I've collaborated with forward-thinking companies including Maxpro Technologies, SV Color Graphic, and Vega Digital IT Solution to deliver exceptional design solutions across various industries.
                </p>
                <p>
                  While design is my passion, I find creative inspiration through hiking scenic trails, attending industry workshops, and exploring emerging design trends. This continuous pursuit of growth keeps my work fresh, innovative, and impactful.
                </p>
              </div>
              
              {/* Personal info cards - updated to blue theme */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 rounded-xl p-4 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <Mail className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500">Email</h4>
                    <p className="font-medium text-gray-800">askerm4u@gmail.com</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-4 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <Phone className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500">Phone</h4>
                    <p className="font-medium text-gray-800">+971 50 202 6590</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-4 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <MapPin className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500">Location</h4>
                    <p className="font-medium text-gray-800">Dubai, UAE</p>
                  </div>
                </div>
                
                {/* <div className="bg-blue-50 rounded-xl p-4 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <Calendar className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500">Availability</h4>
                    <p className="font-medium text-gray-800">Freelance & Full-time</p>
                  </div>
                </div> */}
              </div>
              
              {/* Skills tags - updated to blue theme */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-gray-900 mb-3">My Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {['UI/UX Design', 'Brand Identity', 'Logo Design', 'Print Design', 'Social Media Graphics', 'Motion Graphics', 'Photo Editing', 'Typography'].map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* CTA Buttons - updated to blue theme */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="/pdfs/resume.pdf" 
                  download
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors shadow-md"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
                <a 
                  href="#portfolio" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-blue-700 text-blue-700 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View Portfolio
                </a>
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;