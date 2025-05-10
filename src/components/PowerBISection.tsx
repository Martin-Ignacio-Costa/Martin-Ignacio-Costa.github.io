import React, { useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { powerBIProjects } from '../data/powerBIProjects';

const PowerBISection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextProject = () => {
    setActiveIndex((prev) => (prev === powerBIProjects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev === 0 ? powerBIProjects.length - 1 : prev - 1));
  };

  const activeProject = powerBIProjects[activeIndex];

  return (
    <section id="powerbi" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Power BI <span className="text-blue-600 dark:text-blue-400">Dashboards</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Interactive data visualizations and reports that transform complex data into clear, actionable insights.
          </p>
        </div>

        <div className="relative mb-16">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
            <div className="aspect-video overflow-hidden">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{activeProject.title}</h3>
                <div className="flex gap-2 flex-wrap">
                  {activeProject.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{activeProject.description}</p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href={activeProject.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2"
                >
                  View Live Dashboard
                  <ExternalLink size={16} />
                </a>
                {activeProject.projectLink && (
                  <a 
                    href={activeProject.projectLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-6 py-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg transition-colors"
                  >
                    Project Details
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button 
            onClick={prevProject} 
            className="absolute top-1/2 left-4 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/70 dark:bg-gray-800/70 hover:bg-white dark:hover:bg-gray-800 shadow-lg backdrop-blur-sm transition-colors"
            aria-label="Previous project"
          >
            <ChevronLeft className="text-gray-700 dark:text-gray-300" />
          </button>
          <button 
            onClick={nextProject} 
            className="absolute top-1/2 right-4 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/70 dark:bg-gray-800/70 hover:bg-white dark:hover:bg-gray-800 shadow-lg backdrop-blur-sm transition-colors"
            aria-label="Next project"
          >
            <ChevronRight className="text-gray-700 dark:text-gray-300" />
          </button>
        </div>

        {/* Dots for navigation */}
        <div className="flex justify-center gap-2">
          {powerBIProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === activeIndex 
                  ? 'bg-blue-600 dark:bg-blue-400' 
                  : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PowerBISection;