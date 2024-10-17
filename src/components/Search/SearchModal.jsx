import { useSearch } from '../../contexts/SearchContext';
import LocationFilter from './LocationFilter';
import GuestsFilter from './GuestsFilter';

export default function SearchModal() {
    const { isSearchOpen, toggleSearch, searchParams, updateLocation } = useSearch();

    const cities = [
        'Helsinki, Finland',
        'Turku, Finland',
        'Oulu, Finland',
        'Vaasa, Finland'
    ];

    if (!isSearchOpen) return null;

    return (
        <div className="fixed inset-0 bg-white z-50">
            <div className="container mx-auto px-4 py-6">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-xl">Edit your search</h2>
                    <button onClick={toggleSearch} className="p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 shadow-lg rounded-2xl border">
                    <div className="p-4 border-b md:border-b-0 md:border-r">
                        <h3 className="font-bold mb-2">LOCATION</h3>
                        <LocationFilter cities={cities}
                            selectedCity={searchParams.location}
                            onSelect={updateLocation}
                        />
                    </div>

                    <div className="p-4">
                        <h3 className="font-bold mb-2">GUESTS</h3>
                        <GuestsFilter />
                    </div>
                </div>

                <div className="mt-8 flex justify-center">
                    <button
                        onClick={toggleSearch}
                        className="bg-primary text-white px-6 py-3 rounded-2xl flex items-center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
}