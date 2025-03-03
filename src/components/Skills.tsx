import React from 'react';

const Skills = () => {
  const designSkills = [
    { name: 'UI/UX Design', percentage: 95 },
    { name: 'Brand Identity', percentage: 90 },
    { name: 'Typography', percentage: 85 },
    { name: 'Illustration', percentage: 80 },
  ];

  const technicalSkills = [
    { name: 'Adobe Photoshop', percentage: 85 },
    { name: 'Adobe Illustrator', percentage: 70 },
    { name: 'CorelDraw', percentage: 65 },
    { name: 'Adobe Premier', percentage: 40 },
    { name: 'Adobe After Effects', percentage: 20 },
    { name: 'Adobe Dimension', percentage: 15 },
    { name: 'Autodesk 3ds Max', percentage: 40 },
    { name: 'SketchUp', percentage: 35 },
    { name: 'Drawing/illustration', percentage: 90 },
    { name: '& in HTML and Web Administration', percentage: 100 },
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b  from-blue-50 to-white relative">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-blue-100 rounded-full opacity-60 blur-2xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-blue-100 rounded-full opacity-60 blur-2xl"></div>
      
      <div className="container mx-auto px-4  sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
            Professional Capabilities
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-3">My <span className="text-blue-700">Skills</span></h2>
          <div className="h-1 w-16 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">A detailed breakdown of my professional capabilities in design and technical areas.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-50 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="bg-blue-100 text-blue-700 p-2 rounded-lg mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" />
                </svg>
              </span>
              Design Skills
            </h3>
            <div className="space-y-8">
              {designSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-800">{skill.name}</span>
                    <span className="text-blue-700 font-medium">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-blue-700 h-3 rounded-full transition-all duration-500 ease-in-out"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-50 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <span className="bg-blue-100 text-blue-700 p-2 rounded-lg mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </span>
              Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-800">{skill.name}</span>
                    <span className="text-blue-700 font-medium">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-blue-700 h-3 rounded-full transition-all duration-500 ease-in-out"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Tools & Technologies</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {['Photoshop', 'Illustrator', 'Figma', 'HTML5', 'CSS3', 'SketchUp'].map((tool, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow-md border border-blue-50 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-blue-700 font-bold text-xl">{tool.charAt(0)}</span>
                </div>
                <span className="block mt-3 text-sm font-medium text-gray-700">{tool}</span>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Skills;