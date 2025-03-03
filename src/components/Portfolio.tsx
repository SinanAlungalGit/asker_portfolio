import React, { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
  description: string;
  pdfPath?: string; // Path to the PDF file in the public folder
}

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  
  const projects: Project[] = [
    {
      "id": 1,
      "title": "Butterly Shop Flyer",
      "category": "brochure",
      "image": "/butterly.png",
      "link": "#",
      "description": "",
      "pdfPath": "/pdfs/Butterlynewmenu.pdf"
    },    
    {
      "id": 2,
      "title": "Magnolia Flyer",
      "category": "brochure",
      "image": "/Magnolia.png",
      "link": "#",
      "description": "",
      "pdfPath": "/pdfs/Magnolia.pdf"
    },    
    {
      id: 3,
      title: "Detoxfolks Flyer",
      category: "brochure",
      image: "/detoxfolks.png",
      link: "#",
      "description": "",
      pdfPath: "/pdfs/Detox_Brochure.pdf"
    },
    {
      id: 4,
      title: "Solis IT Solution Flyer",
      category: "brochure",
      image: "/solis2.png",
      link: "#",
      description: "",
      pdfPath: "/pdfs/solis.pdf"
    },
    {
      id: 5,
      title: "EWAY Prequalificaion Flyer",
      category: "brochure",
      image: "/eway.png",
      link: "#",
      description: "",
      pdfPath: "/pdfs/Eway_Prequalification_2023-24.pdf"
    },
    
    {
      id: 6,
      title: "Logo's",
      category: "logo",
      image: "/logo.jpg",
      link: "#",
      description: "",
      pdfPath: "/pdfs/Logos.pdf"
    },
    {
      id: 7,
      title: "Solis IT Solution Flyer",
      category: "brochure",
      image: "/solis12.png",
      link: "#",
      description: "",
      pdfPath: "/pdfs/solis2-compressed.pdf"
    },
    {
      id: 8,
      title: "Tech Cube IT Solution Logo",
      category: "logo",
      image: "/techcube.png",
      link: "#",
      description: "",
      pdfPath: "/pdfs/TechCubeLogo.pdf"
    },
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  const openPdfModal = (pdfPath: string) => {
    setSelectedPdf(pdfPath);
    setModalOpen(true);
    // Prevent scrolling of the background when modal is open
    document.body.style.overflow = 'hidden';
  };
  
  const closePdfModal = () => {
    setModalOpen(false);
    setSelectedPdf(null);
    // Re-enable scrolling when modal is closed
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <section id="portfolio" className="py-16 bg-white">
        <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">My Portfolio</h2>
            <div className="mt-2 h-1 w-24 bg-indigo-600 mx-auto"></div>
          </div>
          
          <div className="flex justify-center mb-12">
            <div className="inline-flex flex-wrap justify-center gap-2">
              <button 
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  filter === 'all' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              <button 
                onClick={() => setFilter('brochure')}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  filter === 'brochure' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                Flyer
              </button>
              <button 
                onClick={() => setFilter('logo')}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  filter === 'logo' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                Logo
              </button>
              {/* <button 
                onClick={() => setFilter('web')}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  filter === 'web' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                Web
              </button>
              <button 
                onClick={() => setFilter('print')}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  filter === 'print' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                Print
              </button> */}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-sm text-gray-200 mt-2">{project.description}</p>
                  <div className="mt-4 flex gap-4">
                    {project.pdfPath && (
                      <button 
                        onClick={() => openPdfModal(project.pdfPath!)}
                        className="inline-flex items-center text-sm font-medium text-white hover:text-indigo-300"
                      >
                        View Design <ExternalLink className="ml-1 h-4 w-4" />
                      </button>
                    )}
                    {/* <a 
                      href={project.link} 
                      className="inline-flex items-center text-sm font-medium text-white hover:text-indigo-300"
                    >
                      Project Details <ExternalLink className="ml-1 h-4 w-4" />
                    </a> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PDF Modal */}
      {modalOpen && selectedPdf && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <div className="relative bg-white rounded-lg w-full max-w-5xl h-[85vh] overflow-hidden flex flex-col">
            <div className="p-4 flex justify-between items-center border-b">
              <h3 className="text-xl font-semibold text-gray-900">
                {projects.find(p => p.pdfPath === selectedPdf)?.title} - Design Details
              </h3>
              <button 
                onClick={closePdfModal}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex-1 overflow-hidden">
              <iframe 
                src={selectedPdf} 
                title="PDF Viewer"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;