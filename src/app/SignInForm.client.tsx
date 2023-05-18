// SignInForm.client.tsx
import { useState } from 'react';

export default function SignInForm() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      {/* Dark mode toggle button */}
      <button onClick={toggleDarkMode} className="absolute top-0 right-0 m-4 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded">
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <div className="w-full max-w-md mx-auto">
        <form className={`shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} text-${darkMode ? 'white' : 'gray-800'}`}>
          {/* Rest of the form code */}
        </form>
      </div>
    </>
  );
}
