import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white sm:flex-row">
      {/* Left side */}
      <div className="flex flex-col items-center justify-center w-full sm:w-1/2 p-8 sm:p-24">
        <h1 className="text-4xl mb-8">
          <span className="tattoo-text">Strucken</span> Proxies
        </h1>
        <Image
          src="/next.svg"
          alt="Character holding lightning"
          width={300}
          height={300}
          priority
        />
      </div>

      {/* Right side */}
      <div className="flex flex-col items-center justify-center w-full sm:w-1/2 p-8 sm:p-24 bg-gray-800">
        <div className="mt-12 bg-gray-700 p-6 rounded">
          <form className="max-w-md">
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:border-gray-300 text-gray-900"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2">
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:border-gray-300 text-gray-900"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-sm">
            Not registered? <a href="#">Create an account</a>
          </p>
        </div>
      </div>
    </div>
  );
}
