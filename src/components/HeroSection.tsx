import React from 'react';
import { ChevronDown, Database, Github } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToNextSection = () => {
    const powerBISection = document.querySelector('#powerbi');
    if (powerBISection) {
      powerBISection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
              Data Insights &<br />
              <span className="text-blue-600 dark:text-blue-400">Python Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
              Showcasing professional Power BI dashboards and Python repositories
              that transform raw data into actionable business intelligence.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#powerbi" 
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2"
              >
                <Database size={20} />
                View Power BI Reports
              </a>
              <a 
                href="#python" 
                className="px-8 py-3 bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white rounded-lg transition-colors flex items-center gap-2"
              >
                <Github size={20} />
                Explore Python Projects
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative w-full h-[400px] overflow-hidden rounded-xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-purple-600/80 rounded-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-5/6 h-4/5 bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 shadow-xl">
                  <div className="w-full h-8 flex items-center mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="ml-4 text-white/80 text-xs">DataAnalytics.py</div>
                  </div>
                  <div className="space-y-2 text-white/80 font-mono text-sm">
                    <div><span className="text-blue-300">import</span> pandas <span className="text-blue-300">as</span> pd</div>
                    <div><span className="text-blue-300">import</span> matplotlib.pyplot <span className="text-blue-300">as</span> plt</div>
                    <div><span className="text-blue-300">from</span> sklearn.model_selection <span className="text-blue-300">import</span> train_test_split</div>
                    <div className="mt-4"><span className="text-purple-300">def</span> <span className="text-yellow-300">analyze_data</span>(data):</div>
                    <div className="ml-4"><span className="text-green-300"># Process the data</span></div>
                    <div className="ml-4">results = data.describe()</div>
                    <div className="ml-4"><span className="text-purple-300">return</span> results</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block absolute -bottom-8 -left-8 w-64 h-64 bg-teal-500/10 backdrop-blur-sm rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="hidden lg:block absolute -top-8 -right-8 w-64 h-64 bg-purple-500/10 backdrop-blur-sm rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToNextSection}
            aria-label="Scroll down"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm dark:bg-gray-800/30 hover:bg-white/30 dark:hover:bg-gray-800/50 transition-colors"
          >
            <ChevronDown className="text-gray-700 dark:text-gray-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;