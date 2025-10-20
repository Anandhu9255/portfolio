import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import emailjs from '@emailjs/browser';

// Import card images for projects
import waterQualityCard from '../images/projects/water quality monitoring system/card.png';
import shesafeCard from '../images/projects/shesafe/card.png';

// Import sample images
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

const Educandcontact = ({ isDark }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [formData, setFormData] = useState({
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus('');

    emailjs.send(
      'service_r8rf01j',
      'template_oi7q24e',
      {
        message: formData.message,
        to_email: 'contactmeanandhuanilkumar@gmail.com'
      },
      'nXPD3gH2BnfBFuj__'
    )
    .then((result) => {
      setStatus('Message sent successfully!');
      setFormData({ message: '' });
    }, (error) => {
      setStatus('Failed to send message. Please try again.');
      console.error('EmailJS error:', error);
    })
    .finally(() => {
      setIsSending(false);
    });
  };

  const projects = [
    {
      title: 'Mini Project - Water Quality Monitoring System',
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
      title: 'Main Project - SheSafe',
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


        {/* Education Section */}
        <section className="mb-16 animate-fadeInUp">
          <h2 className="text-3xl font-bold mb-8 border-b-2 border-blue-500 w-fit text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Education</h2>
          <div className="space-y-8">
            <div className="flex items-start gap-6 animate-slideInLeft">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl animate-bounce">
                  💻
                </div>
                <div className="w-0.5 h-20 bg-gray-600 mt-4"></div>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Bachelor of Computer Application (BCA)</h3>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Mahatma Gandhi University, 2022 - 2025</p>
              </div>
            </div>
            <div className="flex items-start gap-6 animate-slideInRight">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl animate-bounce">
                  🧮
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Computer Science in Higher Secondary School</h3>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Kerala State Board, 2020-2022</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16 animate-fadeInUp">
          <h2 className="text-3xl font-bold mb-8 border-b-2 border-blue-500 w-fit text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Academic Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 animate-fadeInUp`} style={{ animationDelay: `${index * 0.2}s` }}>
                <img src={project.img} alt={project.title} className="w-full h-48 object-contain" />
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
                    <button onClick={() => setSelectedProject(project)} className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors transform hover:scale-105 animate-bounce">
                      <span>👁️</span>
                      View Project
                    </button>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors transform hover:scale-105 animate-bounce">
                      <span>💻</span>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="get-in-touch" className="animate-fadeInUp">
          <h2 className="text-3xl font-bold mb-8 border-b-2 border-blue-500 w-fit text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Get in Touch</h2>
          <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-lg mb-8 max-w-2xl`}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to get in touch with me.
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 animate-fadeInUp`}>
                <div className="flex items-center gap-4">
                  <span className="text-3xl animate-bounce">📧</span>
                  <a href="mailto:contactmeanandhuanilkumar@gmail.com" className="text-lg font-semibold hover:text-blue-400 transition-colors">
                    contactmeanandhuanilkumar@gmail.com
                  </a>
                </div>
              </div>
              <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 animate-fadeInUp`} style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center gap-4">
                  <span className="text-3xl animate-pulse">💼</span>
                  <a href="https://www.linkedin.com/in/anandhuanilkumar-web-developer/" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:text-blue-400 transition-colors">
                    LinkedIn
                  </a>
                </div>
              </div>
              <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 animate-fadeInUp`} style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center gap-4">
                  <span className="text-3xl animate-spin-slow">💻</span>
                  <a href="https://github.com/Anandhu9255" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:text-blue-400 transition-colors">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <form onSubmit={sendEmail} className="space-y-4 animate-slideInRight">
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-2 rounded-lg border ${isDark ? 'bg-gray-800 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                  placeholder="Please include your name and email in the message..."
                ></textarea>
              </div>
              {status && (
                <p className={`text-sm ${status.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
                  {status}
                </p>
              )}
              <button
                type="submit"
                disabled={isSending}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors transform hover:scale-105 animate-bounce ${
                  isSending
                    ? 'bg-gray-500 cursor-not-allowed'
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </section>

        {/* Modal for Project View */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto`}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                <button onClick={() => setSelectedProject(null)} className="text-2xl">&times;</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {selectedProject.sampleImages.map((img, idx) => (
                  <img key={idx} src={img} alt={`${selectedProject.title} ${idx + 1}`} className="w-full h-48 object-cover rounded-lg" />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Educandcontact;
