import React from 'react';
import { Code, Star, GitBranch, Eye } from 'lucide-react';
import { repositories } from '../data/repositories';

const PythonSection: React.FC = () => {
  return (
    <section id="python" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Python <span className="text-blue-600 dark:text-blue-400">Repositories</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of Python projects showcasing data analysis, machine learning, and automation solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repositories.map((repo) => (
            <div 
              key={repo.id} 
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="h-4 bg-gradient-to-r from-blue-500 to-teal-500"></div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Code size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{repo.name}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">{repo.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {repo.topics.map((topic) => (
                    <span 
                      key={topic} 
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-md text-xs font-medium"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
                  <div className="flex items-center gap-1">
                    <Star size={16} />
                    <span>{repo.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitBranch size={16} />
                    <span>{repo.forks}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye size={16} />
                    <span>{repo.watchers}</span>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                
                <a 
                  href={repo.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block w-full text-center px-6 py-2 bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white rounded-lg transition-colors"
                >
                  View Repository
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PythonSection;