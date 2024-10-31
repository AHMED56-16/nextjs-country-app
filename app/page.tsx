import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">Welcome to the Country App</h1>
      <Link href="/country" passHref>
        <button className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
          Go to Country List
        </button>
      </Link>
    </div>
  );
}
