import React from 'react';
import { Link } from 'react-router-dom';
import avatarImg from '../images/avatar/avatar 1.jpeg';
import bidwiseCard from '../images/projects/bidwise/card.png';
import movieAppCard from '../images/projects/movie app/card.png';
import shesafeCard from '../images/projects/shesafe/card.png';

const Homepage = ({ isDark }) => {
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


          {/* Hero Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 animate-slideInLeft">
              <h2 className="text-5xl font-bold leading-tight">Anandhu Anil Kumar</h2>
              <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Full Stack MERN Developer. Building innovative web solutions from front to back.
              </p>
              <div className="flex gap-4 mt-8">
                <Link to="/about" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 inline-block transform hover:scale-105 hover:shadow-lg animate-pulse">
                  Read More
                </Link>
                <a href="/src/images/resume/Anandhu_Anil_Kumar-cv(2).pdf" download="Anandhu_Anil_Kumar_Resume.pdf" className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 inline-block transform hover:scale-105 hover:shadow-lg animate-pulse">
                  Download Resume
                </a>
              </div>
            </div>
            <div className="relative animate-slideInRight">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mx-auto animate-pulse"></div>
              <div className="absolute inset-0 w-80 h-80 bg-gradient-to-br from-green-400 to-blue-600 rounded-full mx-auto animate-rotateGlow opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img src={avatarImg} alt="Avatar" className="w-80 h-80 rounded-full object-cover" />
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <section className="mb-16 animate-fadeInUp">
            <h3 className="text-3xl font-bold mb-8"> Featured Projects</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'BidWise',
                  desc: 'An auction platform that allows users to create, bid on, and manage auction items. Built with a Node.js + Express backend and React frontend.',
                  img: bidwiseCard,
                  github: 'https://github.com/Anandhu9255/BidWise.git'
                },
                {
                  title: 'Movie App',
                  desc: 'A full-stack movie management app where users can submit and manage movies while admins handle approvals. Includes authentication and image uploads.',
                  img: movieAppCard,
                  github: 'https://github.com/Anandhu9255/Moviee-Hubb.git'
                },
                {
                  title: 'SheSafe',
                  desc: 'A women\'s safety and emergency management platform that connects users with emergency contacts and police, featuring complaint management and live chat.',
                  img: shesafeCard,
                  github: 'https://github.com/Anandhu9255/Project-SheSafe.git'
                }
              ].map((project, index) => (
                <div key={index} className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 animate-fadeInUp`} style={{ animationDelay: `${index * 0.2}s` }}>
                  <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-4`}>{project.desc}</p>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">GitHub →</a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section className="animate-fadeInUp">
            <h3 className="text-3xl font-bold mb-8">Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'MongoDB', icon: '🍃' },
                { name: 'Express', icon: '⚡' },
                { name: 'React', icon: '⚛️' },
                { name: 'Node.js', icon: '🟢' },
                { name: 'JavaScript', icon: '🟨' },
                { name: 'HTML5', icon: '🏗️' },
                { name: 'TailwindCSS', icon: '💨' },
                { name: 'Git', icon: '📚' }
              ].map((skill, index) => (
                <div key={index} className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fadeInUp`} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-4xl mb-3 animate-bounce">{skill.icon}</div>
                  <h4 className="font-semibold">{skill.name}</h4>
                </div>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className={`mt-16 py-8 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'} animate-fadeInUp`}>
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center animate-bounce">
                  <svg fill="currentColor" viewBox="0 0 48 48" className="w-6 h-6">
                    <path d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold">Anandhu Anil Kumar</h4>
              </div>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-6 max-w-md mx-auto`}>
                Passionate Full Stack Developer creating innovative web solutions with modern technologies.
              </p>
              <div className="flex justify-center gap-6">
                <a href="https://www.linkedin.com/in/anandhuanilkumar-web-developer/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors transform hover:scale-110">
                  <span className="text-2xl">💼</span>
                  <span className="ml-2 text-sm font-medium">LinkedIn</span>
                </a>
                <a href="https://github.com/Anandhu9255" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition-colors transform hover:scale-110">
                  <span className="text-2xl">💻</span>
                  <span className="ml-2 text-sm font-medium">GitHub</span>
                </a>
                <a href="mailto:contactmeanandhuanilkumar@gmail.com" className="text-red-600 hover:text-red-800 transition-colors transform hover:scale-110">
                  <span className="text-2xl">📧</span>
                  <span className="ml-2 text-sm font-medium">Email</span>
                </a>
              </div>
            </div>
          </footer>
        </div>
    </>
  );
};

export default Homepage;
