import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PowerBISection from './components/PowerBISection';
import PythonSection from './components/PythonSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'DataPortfolio | Data Analytics & Python Solutions';
  }, []);

  return (
    <div className="font-sans">
      <Header />
      <main>
        <HeroSection />
        <PowerBISection />
        <PythonSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;