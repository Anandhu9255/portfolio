import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

// Import card images
import bidwiseCard from '../images/projects/bidwise/card.png';
import movieAppCard from '../images/projects/movie app/card.png';
import schoolManagementCard from '../images/projects/school management system/card.png';
import waterQualityCard from '../images/projects/water quality monitoring system/card.png';
import shesafeCard from '../images/projects/shesafe/card.png';

// Import sample images
import bid1 from '../images/projects/bidwise/bid 1.png';
import bid2 from '../images/projects/bidwise/bid 2.png';
import bid3 from '../images/projects/bidwise/bid 3.png';
import bid4 from '../images/projects/bidwise/bid 4.png';
import bid5 from '../images/projects/bidwise/bid 5.png';
import bid6 from '../images/projects/bidwise/bid 6.png';
import bid7 from '../images/projects/bidwise/bid 7.png';

import mov1 from '../images/projects/movie app/mov 1.png';
import mov2 from '../images/projects/movie app/mov 2.png';
import mov3 from '../images/projects/movie app/mov 3.png';

import scho1 from '../images/projects/school management system/scho 1.png';
import scho2 from '../images/projects/school management system/scho 2.png';
import scho3 from '../images/projects/school management system/scho 3.png';

import wat1 from '../images/projects/water quality monitoring system/wat 1 (1).png';
import wat2 from '../images/projects/water quality monitoring system/wat 1 (2).png';
import wat3 from '../images/projects/water quality monitoring system/wat 1 (3).png';
import wat4 from '../images/projects/water quality monitoring system/wat 1 (4).png';
import wat5 from '../images/projects/water quality monitoring system/wat 1 (5).png';

import she1 from '../images/projects/shesafe/she 1 (1).png';
import she2 from '../images/projects/shesafe/she 1 (2).png';
import she3 from '../images/projects/shesafe/she 1 (3).png';
import she4 from '../images/projects/shesafe/she 1 (4).png';
import she5 from '../images/projects/shesafe/she 1 (5).png';
import she6 from '../images/projects/shesafe/she 1 (6).png';

const Project = ({ isDark }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
  {
    title: 'BidWise',
    desc: 'An auction platform that allows users to create, bid on, and manage auction items. Built with a Node.js + Express backend and React frontend.',
    img: bidwiseCard,
    sampleImages: [bid1, bid2, bid3, bid4, bid5, bid6, bid7],
    tech: [
      'React', 'Vite', 'React Router', 'Axios',
      'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Node-cron', 'CORS'
    ],
    github: 'https://github.com/Anandhu9255/BidWise.git',
    demo: '#'
  },
  {
    title: 'Movie App',
    desc: 'A full-stack movie management app where users can submit and manage movies while admins handle approvals. Includes authentication and image uploads.',
    img: movieAppCard,
    sampleImages: [mov1, mov2, mov3],
    tech: [
      'React 19', 'Vite', 'React Router', 'Axios', 'Bootstrap 5',
      'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Multer', 'bcryptjs'
    ],
    github: 'https://github.com/Anandhu9255/Moviee-Hubb.git',
    demo: '#'
  },
  {
    title: 'School Management System',
    desc: 'A full-stack platform to streamline school administration with user registration, authentication, and detailed profile management with image uploads.',
    img: schoolManagementCard,
    sampleImages: [scho1, scho2, scho3],
    tech: [
      'React', 'React Router', 'Bootstrap', 'Axios', 'React Hook Form',
      'Node.js', 'Express.js', 'MySQL2', 'bcryptjs', 'Multer', 'CORS'
    ],
    github: 'https://github.com/Anandhu9255/School-Management.git',
    demo: '#'
  },
  {
    title: 'Water Quality Monitoring System',
    desc: 'An IoT-based monitoring platform that tracks water parameters in real-time, visualizes data, and issues alerts when thresholds are exceeded.',
    img: waterQualityCard,
    sampleImages: [wat1, wat2, wat3, wat4, wat5],
    tech: [
      'React', 'Chart.js', 'CSS Grid', 'Flexbox',
      'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'CORS'
    ],
    github: 'https://github.com/Anandhu9255/Project-Water-Quality-Monitoring-System.git',
    demo: '#'
  },
  {
    title: 'SheSafe',
    desc: 'A women’s safety and emergency management platform that connects users with emergency contacts and police, featuring complaint management and live chat.',
    img: shesafeCard,
    sampleImages: [she1, she2, she3, she4, she5, she6],
    tech: [
      'Python', 'Django', 'SQLite', 'HTML', 'CSS', 'JavaScript'
    ],
    github: 'https://github.com/Anandhu9255/Project-SheSafe.git',
    demo: '#'
  }
];

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


          {/* Projects Title */}
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">My Projects</h2>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 animate-fadeInUp`} style={{ animationDelay: `${index * 0.2}s` }}>
                <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-4`}>{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-blue-500/20 text-blue-400 text-xs font-semibold px-2 py-1 rounded-full animate-bounce" style={{ animationDelay: `${techIndex * 0.1}s` }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors transform hover:scale-105 animate-bounce">
                      <span>💻</span>
                      GitHub
                    </a>
                    <button onClick={() => setSelectedProject(project)} className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors transform hover:scale-105 animate-bounce">
                      <span>👁️</span>
                      View Sample
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modal for View Sample */}
          {selectedProject && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeInUp">
              <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto`}>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold">{selectedProject.title} - Sample</h3>
                  <button onClick={() => setSelectedProject(null)} className="text-2xl hover:text-red-500 transition-colors">×</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedProject.sampleImages.map((sampleImg, idx) => (
                    <img key={idx} src={sampleImg} alt={`${selectedProject.title} sample ${idx + 1}`} className="w-full h-48 object-cover rounded-lg shadow-lg" />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
    </>
  );
};

export default Project;
