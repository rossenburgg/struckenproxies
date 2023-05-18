import { FaMoon } from 'react-icons/fa';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800 text-white sm:flex-row">
      {/* Dark mode toggle icon */}
      <div className="absolute top-0 right-0 m-4">
        <button className="rounded-full bg-gray-900 hover:bg-gray-700 p-2">
          <FaMoon size={24} color="white" />
        </button>
      </div>
      
      {/* Left side */}
      <div className="flex flex-col items-center justify-center w-full sm:w-1/2 p-6 sm:p-12 bg-gray-900">
        {/* Left side content */}
      </div>

      {/* Right side */}
      <div className="flex flex-col items-center justify-center w-full sm:w-1/2 p-4 sm:p-8 bg-gray-800">
        {/* Right side content */}
        <div className="w-full max-w-md mx-auto">
          <form className="bg-gray-700 text-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
            <h2 className="mb-4 text-3xl font-bold text-left">Sign In</h2>
            <p className="text-gray-400 mb-6 text-left">Sign in to your account to continue</p>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-gray-600 border-gray-500" id="email" type="email" placeholder="Email" />
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-600 border-gray-500" id="password" type="password" placeholder="******************" />
            </div>
            <div className="mb-6">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="button">
                Sign In
              </button>
            </div>
            <div className="text-center">
              <a className="inline-block align-baseline font-bold text-sm text-gray-400 hover:text-gray-300" href="#">
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
