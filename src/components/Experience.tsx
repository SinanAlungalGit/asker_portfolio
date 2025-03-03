import React from 'react';
import { ChevronRight } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      period: "2021 - 2024",
      title: "Graphic Designer",
      company: "Vega Digital IT Solution Dubai",
      description: "Designed print and digital materials for clients across various industries. Collaborated with development team to implement design solutions.",
      achievements: [
        "Created brand identities and marketing materials for major clients",
        "Implemented design systems that improved workflow efficiency",
        "Collaborated with cross-functional teams to deliver high-quality design solutions"
      ]
    },
    {
      period: "2020 - 2021",
      title: "Graphic Designer",
      company: "SV Colour Graphic Bangalore",
      description: "Developed visual assets, branding materials, and graphic elements for print and digital media projects.",
      achievements: [
        "Designed marketing collateral that increased client engagement",
        "Created visual concepts for advertising campaigns",
        "Optimized design workflows for increased productivity"
      ]
    },
    {
      period: "2016 - 2018",
      title: "Lead Graphic Designer",
      company: "Maxpro Technologies Pvt. Ltd India",
      description: "Led design initiatives for corporate clients, overseeing brand development and marketing material creation.",
      achievements: [
        "Managed a team of junior designers on multiple projects",
        "Established design guidelines that improved brand consistency",
        "Introduced new design techniques that enhanced visual communication"
      ]
    }
  ];

  const education = [
    {
      period: "2013 - 2015",
      degree: "Diploma in Multimedia-Editing & Special Effects",
      institution: "IHT Collage of media studies, Tirur, Kerala, India",
      description: "Specialized in multimedia editing techniques and special effects for digital media."
    },
    {
      period: "2011 - 2013",
      degree: "+2 Higher Secondary Education",
      institution: "Higher Secondary Education Board Kerala, India",
      description: "Completed higher secondary education with focus on visual arts and communication."
    },
    {
      period: "2009 - 2011",
      degree: "SSLC",
      institution: "Dept. of General Education, Kerala, India",
      description: "Completed secondary school certificate with good academic standing."
    }
  ];

  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-[1400px] sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Experience & Education</h2>
          <div className="mt-2 h-1 w-24 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Work Experience</h3>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-blue-200">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-2">
                    {exp.period}
                  </span>
                  <h4 className="text-xl font-bold text-gray-900">{exp.title}</h4>
                  <p className="text-blue-600 font-medium">{exp.company}</p>
                  <p className="mt-2 text-gray-600">{exp.description}</p>
                  <ul className="mt-4 space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-blue-600 flex-shrink-0 mr-1" />
                        <span className="text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Education</h3>
            <div className="space-y-12">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-blue-200">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-2">
                    {edu.period}
                  </span>
                  <h4 className="text-xl font-bold text-gray-900">{edu.degree}</h4>
                  <p className="text-blue-600 font-medium">{edu.institution}</p>
                  <p className="mt-2 text-gray-600">{edu.description}</p>
                </div>
              ))}
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-16 mb-8">Language Skills</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-800">English</span>
                  <span className="text-blue-600 font-medium">Read, Write & Speak</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full" 
                    style={{ width: '95%' }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-800">Arabic</span>
                  <span className="text-blue-600 font-medium">Read, Write</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full" 
                    style={{ width: '65%' }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-800">Malayalam</span>
                  <span className="text-blue-600 font-medium">Native</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full" 
                    style={{ width: '100%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;