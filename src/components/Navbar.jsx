import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ isDark, toggleTheme }) => {
  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap');
    @keyframes pulseGlow {
      0%, 100% { text-shadow: 0 0 10px rgba(59, 130, 246, 0.5); }
      50% { text-shadow: 0 0 20px rgba(59, 130, 246, 1); }
    }
    .animate-pulseGlow { animation: pulseGlow 2s infinite; }
    .navbar-font { font-family: 'Montserrat', sans-serif; }
  `;
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/certificates', label: 'Certificates' },
    { path: '/educandcontact', label: 'Education & Contact' }
  ];

  return (
    <>
      <style>{styles}</style>
      <nav className={`fixed top-0 left-0 right-0 z-50 ${isDark ? 'bg-[#0a1128]/95' : 'bg-white/95'} backdrop-blur-md shadow-lg border-b ${isDark ? 'border-gray-700' : 'border-gray-200'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left: Title */}
            <div className="flex-shrink-0">
              <h1 className={`text-lg md:text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 animate-pulseGlow navbar-font ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Full Stack Web Developer
              </h1>
            </div>

            {/* Center: Navigation Links */}
            <div className="flex space-x-2 md:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-xs md:text-sm font-bold px-2 md:px-3 py-2 rounded-md transition-colors animate-pulseGlow navbar-font ${
                    location.pathname === item.path
                      ? `${isDark ? 'text-blue-400 bg-blue-900/20' : 'text-blue-600 bg-blue-50'}`
                      : `${isDark ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'}`
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Right: Theme Toggle */}
            <div className="flex items-center">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-md transition-colors ${
                  isDark
                    ? 'bg-gray-700 hover:bg-gray-600 text-white'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                }`}
                aria-label="Toggle theme"
              >
                {isDark ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
