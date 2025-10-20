import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import cer1 from '../images/certificates/cer1 (1).jpeg';
import cer2 from '../images/certificates/cer2 (2).jpeg';
import cer3 from '../images/certificates/cer3 (3).jpeg';
import cer4 from '../images/certificates/cer4 (4).jpeg';

const Certificates = ({ isDark }) => {
  const certificates = [
  {
    title: 'UNXT by Unnati - Soft Skill Development Program',
    issuer: 'SGBS Unnati Foundation',
    date: '30-08-2024 to 24-10-2024',
    img: cer4
  },
  {
    title: 'Full Stack Web Development with MERN & Computer Fundamentals',
    issuer: 'Edunet Foundation & KASE',
    date: '2024-25',
    img: cer1
  },
  {
    title: 'AI For All - Certificate of Participation',
    issuer: 'Intel & Digital India',
    date: '29-05-2025',
    img: cer3
  },
  {
    title: 'Foundations of Cybersecurity',
    issuer: 'Google (via Coursera)',
    date: 'July 2025',
    img: cer2
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
          @keyframes pulseGlow {
            0%, 100% { text-shadow: 0 0 10px rgba(59, 130, 246, 0.5); }
            50% { text-shadow: 0 0 20px rgba(59, 130, 246, 1); }
          }
          @keyframes slideInUp {
            from { transform: translateY(100px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          .animate-slideInLeft { animation: slideInLeft 1.2s ease-out; }
          .animate-slideInRight { animation: slideInRight 1.2s ease-out 0.3s both; }
          .animate-fadeInUp { animation: fadeInUp 1s ease-out; }
          .animate-rotateGlow { animation: rotateGlow 4s infinite linear; }
          .animate-pulseGlow { animation: pulseGlow 2s infinite; }
          .animate-slideInUp { animation: slideInUp 1s ease-out; }
        `}
      </style>
      <div className="max-w-6xl mx-auto px-4 py-8">


          {/* Certificates Title */}
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-4">Certificates & Achievements</h2>
          </div>

          {/* Certificates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div key={index} className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 border ${isDark ? 'border-gray-700 hover:border-blue-500' : 'border-gray-200 hover:border-blue-500'} animate-fadeInUp`} style={{ animationDelay: `${index * 0.2}s` }}>
                <img src={cert.img} alt={cert.title} className="w-full h-40 object-cover object-top" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{cert.title}</h3>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} text-base mb-1 font-medium`}>{cert.issuer}</p>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm font-medium`}>{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
    </>
  );
};

export default Certificates;
