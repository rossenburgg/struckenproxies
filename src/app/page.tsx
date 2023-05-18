import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white sm:flex-row">
      {/* Left side */}
      <div className="flex flex-col items-center justify-center w-full sm:w-1/2 p-8 sm:p-24">
        {/* Left side content */}
      </div>

      {/* Right side */}
      <div className="flex flex-col items-center justify-center w-full sm:w-1/2 p-8 sm:p-24 bg-gray-800">
        {/* Right side content */}
      </div>
    </div>
  );
}
