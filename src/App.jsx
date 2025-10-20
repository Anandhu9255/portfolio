import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import About from './pages/about';
import Skill from './pages/skill';
import Project from './pages/project';
import Certificates from './pages/certificates';
import Educandcontact from './pages/educandcontact';

import Navbar from './components/Navbar';

function App() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    try {
      return savedTheme ? JSON.parse(savedTheme) : false;
    } catch (e) {
      console.error('Error parsing theme from localStorage:', e);
      return false;
    }
  });

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(isDark));
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <Router>
      <div className={`min-h-screen ${isDark ? 'bg-[#0a1128]' : 'bg-gray-50'} ${isDark ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Homepage isDark={isDark} />} />
            <Route path="/about" element={<About isDark={isDark} />} />
            <Route path="/skills" element={<Skill isDark={isDark} />} />
            <Route path="/projects" element={<Project isDark={isDark} />} />
            <Route path="/certificates" element={<Certificates isDark={isDark} />} />
            <Route path="/educandcontact" element={<Educandcontact isDark={isDark} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
