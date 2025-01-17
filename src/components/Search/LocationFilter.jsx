export default function LocationFilter({ cities, selectedCity, onSelect }) {
    return (
        <div className="space-y-4">
            {cities.map((city) => (
                <button
                    key={city}
                    onClick={() => onSelect(city)}
                    className={`flex items-center w-full p-2 rounded-lg hover:bg-gray-100 ${selectedCity === city ? 'bg-gray-100' : ''
                        }`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {city}
                </button>
            ))}
        </div>
    );
}