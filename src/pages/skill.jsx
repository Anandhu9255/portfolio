import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Skill = ({ isDark }) => {
  const skills = {
    frontend: [
      { name: 'React', icon: '⚛️', desc: 'UI Library' },
      { name: 'JavaScript', icon: '🟨', desc: 'Language' },
      { name: 'HTML5', icon: '🏗️', desc: 'Markup' },
      { name: 'CSS3', icon: '🎨', desc: 'Styling' },
      { name: 'Tailwind CSS', icon: '💨', desc: 'Framework' }
    ],
    backend: [
      { name: 'Node.js', icon: '🟢', desc: 'Runtime' },
      { name: 'Express.js', icon: '⚡', desc: 'Framework' }
    ],
    database: [
      { name: 'MongoDB', icon: '🍃', desc: 'NoSQL DB' },
      { name: 'MySQL', icon: '🗄️', desc: 'SQL DB' }
    ],
    tools: [
      { name: 'Git', icon: '📚', desc: 'Version Control' },
      { name: 'GitHub', icon: '🐙', desc: 'Hosting' },
      { name: 'VS Code', icon: '💻', desc: 'Editor' },
      { name: 'Postman', icon: '📮', desc: 'API Client' },
      { name: 'npm', icon: '📦', desc: 'Package Manager' }
    ]
  };

  return (
    <>
      <style>
        {`
          @keyframes slideInLeft {
            from { transform: translateX(-100px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          @keyframes slideInRight {
            from { transform: translateX(100px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          @keyframes fadeInUp {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes rotateGlow {
            0% { transform: rotate(0deg) scale(1); box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
            50% { transform: rotate(180deg) scale(1.1); box-shadow: 0 0 40px rgba(59, 130, 246, 0.8); }
            100% { transform: rotate(360deg) scale(1); box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
          }
          .animate-slideInLeft { animation: slideInLeft 1.2s ease-out; }
          .animate-slideInRight { animation: slideInRight 1.2s ease-out 0.3s both; }
          .animate-fadeInUp { animation: fadeInUp 1s ease-out; }
          .animate-rotateGlow { animation: rotateGlow 4s infinite linear; }
        `}
      </style>
      <div className="max-w-6xl mx-auto px-4 py-8">


          {/* Tech Stack Title */}
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Tech Stack</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </div>

          {/* Frontend Skills */}
          <section className="mb-12 animate-fadeInUp">
            <h3 className="text-2xl font-semibold mb-6">Frontend</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {skills.frontend.map((skill, index) => (
                <div key={index} className={`${isDark ? 'bg-gray-900' : 'bg-white'} rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 animate-fadeInUp`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-5xl mb-3 animate-bounce">{skill.icon}</div>
                  <h4 className="text-lg font-semibold mb-1">{skill.name}</h4>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>{skill.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Backend Skills */}
          <section className="mb-12 animate-fadeInUp">
            <h3 className="text-2xl font-semibold mb-6">Backend</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.backend.map((skill, index) => (
                <div key={index} className={`${isDark ? 'bg-gray-900' : 'bg-white'} rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 animate-fadeInUp`} style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="text-5xl mb-3 animate-bounce">{skill.icon}</div>
                  <h4 className="text-lg font-semibold mb-1">{skill.name}</h4>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>{skill.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Database Skills */}
          <section className="mb-12 animate-fadeInUp">
            <h3 className="text-2xl font-semibold mb-6">Database</h3>
            <div className="grid md:grid-cols-1 gap-6">
              {skills.database.map((skill, index) => (
                <div key={index} className={`${isDark ? 'bg-gray-900' : 'bg-white'} rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 animate-fadeInUp`} style={{ animationDelay: `${index * 0.3}s` }}>
                  <div className="text-5xl mb-3 animate-bounce">{skill.icon}</div>
                  <h4 className="text-lg font-semibold mb-1">{skill.name}</h4>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>{skill.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tools & DevOps */}
          <section className="animate-fadeInUp">
            <h3 className="text-2xl font-semibold mb-6">Tools & DevOps</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {skills.tools.map((skill, index) => (
                <div key={index} className={`${isDark ? 'bg-gray-900' : 'bg-white'} rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 animate-fadeInUp`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-5xl mb-3 animate-bounce">{skill.icon}</div>
                  <h4 className="text-lg font-semibold mb-1">{skill.name}</h4>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>{skill.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
    </>
  );
};

export default Skill;
