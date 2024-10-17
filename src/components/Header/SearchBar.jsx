import { useSearch } from '../../contexts/SearchContext';

export default function SearchBar() {
    const { searchParams, toggleSearch } = useSearch();
    const totalGuests = searchParams.guests.adults + searchParams.guests.children;

    return (
        <div className="mt-4 md:mt-0 shadow-md rounded-2xl border divide-x flex cursor-pointer">
            <div
                className="px-4 py-2 hover:bg-gray-50"
                onClick={toggleSearch}
            >
                <div className="text-sm font-semibold">Location</div>
                <div className="text-gray-600">{searchParams.location}</div>
            </div>

            <div
                className="px-4 py-2 hover:bg-gray-50"
                onClick={toggleSearch}
            >
                <div className="text-sm font-semibold">Guests</div>
                <div className="text-gray-600">
                    {totalGuests > 0 ? `${totalGuests} guests` : 'Add guests'}
                </div>
            </div>

            <button
                onClick={toggleSearch}
                className="px-4 py-2 text-primary hover:bg-gray-50"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </button>
        </div>
    );
}