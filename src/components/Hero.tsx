import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-24 pb-32 md:pt-36 md:pb-48 overflow-hidden bg-gradient-to-b from-white to-blue-50">
      {/* Background elements - refined to blue tones */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-blue-50 rounded-full blur-3xl opacity-40"></div>
        
        {/* Added subtle wave patterns */}
        <svg className="absolute bottom-0 right-0 w-full opacity-10" viewBox="0 0 1200 120" preserveAspectRatio="none">
  <path d="M0,120V73.71c47.79-22.2,103.59-32.17,158-28,70.36,5.37,136.33,33.31,206.8,37.5C438.64,87.57,512.34,66.33,583,47.95c69.27-18,138.3-24.88,209.4-13.08,36.15,6,69.85,17.84,104.45,29.34C989.49,95,1113,134.29,1200,67.53V120Z" opacity=".25" className="fill-blue-800"></path>
  <path d="M0,120V104.19C13,83.08,27.64,63.14,47.69,47.95,99.41,8.73,165,9,224.58,28.42c31.15,10.15,60.09,26.07,89.67,39.8,40.92,19,84.73,46,130.83,49.67,36.26,2.85,70.9-9.42,98.6-31.56,31.77-25.39,62.32-62,103.63-73,40.44-10.79,81.35,6.69,119.13,24.28s75.16,39,116.92,43.05c59.73,5.85,113.28-22.88,168.9-38.84,30.2-8.66,59-6.17,87.09,7.5,22.43,10.89,48,26.93,60.65,49.24V120Z" opacity=".5" className="fill-blue-600"></path>
  <path d="M0,120V114.37C149.93,61,314.09,48.68,475.83,77.43c43,7.64,84.23,20.12,127.61,26.46,59,8.63,112.48-12.24,165.56-35.4C827.93,42.78,886,24.76,951.2,30c86.53,7,172.46,45.71,248.8,84.81V120Z" className="fill-blue-400"></path>
</svg>

      </div>
      
      <div className="container mx-auto px-4 max-w-[1400px] sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Content area */}
          <div className="w-full md:w-1/2 md:pr-8">
            {/* <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
              Available for projects
            </div> */}
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl  font-bold text-gray-900 leading-tight tracking-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">Asker Hamza</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mt-4 tracking-tight">
              Creative <span className="text-blue-700">Graphic Designer</span>
            </h2>
            
            <p className="mt-6 text-lg text-gray-600 max-w-2xl leading-relaxed">
              I transform ideas into visually compelling designs that captivate audiences and elevate brands through thoughtful, strategic creative solutions.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a 
                href="#portfolio" 
                className="inline-flex items-center justify-center px-6 py-4 text-base font-medium rounded-full text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Image area */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              {/* Decorative elements - updated to blue theme */}
              <div className="absolute -top-8 -left-8 w-64 h-64 rounded-full border-8 border-blue-100"></div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full border-8 border-blue-200"></div>
              
              {/* Added geometric blue elements */}
              <div className="absolute top-12 right-20 w-12 h-12 bg-blue-700 rounded rotate-45 opacity-70"></div>
              <div className="absolute bottom-16 left-16 w-8 h-8 bg-blue-600 rounded-full opacity-60"></div>
              <div className="absolute top-32 left-4 w-6 h-6 bg-blue-500 rounded-full opacity-50"></div>
              
              {/* Image container with blue border */}
              <div className="relative z-10 w-72 bg-white h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <div className="absolute inset-0 bg-white opacity-20"></div>
                <img 
                  src="/profile.png" 
                  alt="Asker Hamza, Graphic Designer" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Experience badge - updated to blue */}
              {/* <div className="absolute -top-4 -right-4 bg-blue-700 text-white rounded-full px-4 py-2 font-medium shadow-lg z-20">
                UI/UX Expert
              </div> */}
              
              {/* Added a floating skill badge */}
              {/* <div className="absolute -bottom-2 left-8 bg-white text-blue-700 border border-blue-100 rounded-lg px-3 py-2 text-sm font-medium shadow-md z-20 flex items-center">
                <svg className="w-4 h-4 mr-1 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                Brand Strategy
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;