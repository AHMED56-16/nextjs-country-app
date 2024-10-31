import Link from 'next/link';
import { countries } from '../../main';

const CountryListing = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="max-w-4xl w-full p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">Countries</h1>
        <ul className="flex flex-col gap-4">
          {Object.keys(countries).map((key) => (
            <li key={key} className="bg-gray-100 border border-gray-300 rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 hover:shadow-lg">
              <Link href={`/country/${key}`} className="text-lg font-semibold text-blue-600 hover:text-blue-800">
                {countries[key].name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CountryListing;
