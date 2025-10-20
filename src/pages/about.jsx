import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import avatarImg from '../images/avatar/avatar 1.jpeg';

const About = ({ isDark }) => {
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


          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative animate-slideInLeft">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mx-auto animate-pulse"></div>
              <div className="absolute inset-0 w-80 h-80 bg-gradient-to-br from-green-400 to-blue-600 rounded-full mx-auto animate-rotateGlow opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img src={avatarImg} alt="Avatar" className="w-80 h-80 rounded-full object-cover" />
              </div>
            </div>
            <div className="space-y-6 animate-slideInRight">
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">About Me</h2>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-lg leading-relaxed`}>
                I'm a passionate Full Stack MERN Developer with a knack for creating elegant and efficient web applications. With a background in both front-end and back-end development, I thrive on building seamless user experiences from concept to deployment. My journey in tech has been driven by a relentless curiosity and a desire to solve real-world problems.
              </p>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-lg leading-relaxed`}>
                When I'm not coding, you can find me exploring new hiking trails, experimenting with new recipes, or diving into a good book. I believe in continuous learning and am always looking for new challenges to tackle.
              </p>
              <Link to="/educandcontact" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors transform hover:scale-105 inline-block animate-bounce">
                Let's Connect
              </Link>
            </div>
          </div>

          {/* Animation and Quote Section */}
          <section className="text-center animate-fadeInUp">
            <div className="mb-8">
              <div className="inline-block">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mx-auto animate-spin-slow flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-600 rounded-full animate-pulse flex items-center justify-center">
                    <span className="text-4xl">🚀</span>
                  </div>
                </div>
              </div>
            </div>
            <blockquote className="text-2xl font-semibold italic text-blue-400 mb-4">
              "The best way to predict the future is to create it."
            </blockquote>
            <cite className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-lg`}>- Peter Drucker</cite>
          </section>
        </div>
    </>
  );
};

export default About;
