'use client';
import { FaMoon, FaSun } from 'react-icons/fa';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const captchaRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleFormSubmit = () => {
    // Handle form submission logic here
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://www.google.com/recaptcha/api.js?render=6LdAIB0mAAAAAJkoDf1D1eaYMKjc_aKV2kOINaA7';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const storedMode = localStorage.getItem('darkMode');
    if (storedMode) {
      setDarkMode(storedMode === 'true');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', String(darkMode));
    document.documentElement.setAttribute(
      'data-theme',
      darkMode ? 'dark' : 'light'
    );
  }, [darkMode]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-800 text-white">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-500"></div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-blue-500'} text-white sm:flex-row transition-all duration-500`}>
      {/* Dark mode toggle icon */}
      <div className="absolute top-0 right-0 m-4">
        <button
          className="rounded-full bg-gray-900 hover:bg-gray-700 p-2"
          onClick={toggleDarkMode}
        >
          {darkMode ? (
            <FaSun size={20} color="white" />
          ) : (
            <FaMoon size={20} color="white" />
          )}
        </button>
      </div>

      {/* Left side */}
      <div className={`flex flex-col items-center justify-center w-full sm:w-1/2 p-6 sm:p-12 ${darkMode ? 'bg-gray-900' : 'bg-blue-500'}`}>
        {/* Left side content */}
      </div>

      {/* Right side */}
      <div className={`flex flex-col items-center justify-center w-full sm:w-1/2 p-4 sm:p-8 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        {/* Right side content */}
        <div className="w-full max-w-md mx-auto">
          <form
            className={`${
              darkMode ? 'bg-gray-700' : ''
            } shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}
          >
            <h2 className="mb-4 text-3xl font-bold text-left">
              Sign In
            </h2>
            <p
              className={`text-gray-400 mb-6 text-left ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Sign in to your account to continue
            </p>
            <div className="mb-4">
              <label
                className={`block text-sm font-bold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-800'
                }`}
                htmlFor="email"
              >
                Email
              </label>
              <input
                className={`${
                  darkMode
                    ? 'bg-gray-600 border-gray-500 text-gray-300'
                    : 'bg-white border-gray-400 text-gray-800'
                } shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline`}
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label
                className={`block text-sm font-bold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-800'
                }`}
                htmlFor="password"
              >
                Password
              </label>
              <input
                className={`${
                  darkMode
                    ? 'bg-gray-600 border-gray-500 text-gray-300'
                    : 'bg-white border-gray-400 text-gray-800'
                } shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
                id="password"
                type="password"
                placeholder="******************"
              />
            </div>
            <div className="mb-4">
              <div id="captcha" ref={captchaRef} />
            </div>
            <div className="mb-6">
              <button
                className={`bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full ${
                  darkMode ? 'hover:text-white' : 'hover:text-gray-800'
                }`}
                type="button"
                onClick={handleFormSubmit}
              >
                Sign In
              </button>
            </div>
            <div className="text-center">
              <a
                className={`inline-block align-baseline font-bold text-sm ${
                  darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-500'
                }`}
                href="#"
              >
                Forgot Password?
              </a>
              <p className={`text-gray-400 mt-4 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                Not registered?
                <a
                  className={`text-blue-500 hover:text-blue-600 mx-1 ${
                  darkMode ? 'hover:text-white' : 'hover:text-gray-800'
                }`}
                  href="#"
                >
                  Create an account
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
