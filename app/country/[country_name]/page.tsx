"use client";
import { countries } from '../../../main';

type Params = {
  params: {
    country_name: string;
  };
};

const CountryDetails = ({ params }: Params) => {
  const country = countries[params.country_name];

  if (!country) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h1 className="text-red-500 text-3xl font-bold text-center mb-4">Country not found.</h1>
        <p className="text-lg text-gray-600 text-center">Please check the country name and try again.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="max-w-2xl w-full p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold mb-4 text-center text-blue-600">{country.name}</h1>
        <p className="text-lg text-center">Population: <span className="font-semibold">{country.population}</span></p>
        <p className="text-lg text-center">Capital: <span className="font-semibold">{country.capital}</span></p>
      </div>
    </div>
  );
};

export default CountryDetails;
