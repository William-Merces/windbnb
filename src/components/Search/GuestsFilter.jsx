import { useSearch } from '../../contexts/SearchContext';

export default function GuestsFilter() {
    const { searchParams, updateGuests } = useSearch();
    const { adults, children } = searchParams.guests;

    const handleUpdateGuests = (type, operation) => {
        const currentValue = searchParams.guests[type];
        const newValue = operation === 'add' ? currentValue + 1 : Math.max(0, currentValue - 1);
        updateGuests(type, newValue);
    };

    return (
        <div className="space-y-6">
            <div>
                <h4 className="font-semibold">Adults</h4>
                <p className="text-gray-500 text-sm">Ages 13 or above</p>
                <div className="flex items-center space-x-4 mt-2">
                    <button
                        onClick={() => handleUpdateGuests('adults', 'subtract')}
                        className="border w-8 h-8 rounded-md flex items-center justify-center"
                    >
                        -
                    </button>
                    <span>{adults}</span>
                    <button
                        onClick={() => handleUpdateGuests('adults', 'add')}
                        className="border w-8 h-8 rounded-md flex items-center justify-center"
                    >
                        +
                    </button>
                </div>
            </div>

            <div>
                <h4 className="font-semibold">Children</h4>
                <p className="text-gray-500 text-sm">Ages 2-12</p>
                <div className="flex items-center space-x-4 mt-2">
                    <button
                        onClick={() => handleUpdateGuests('children', 'subtract')}
                        className="border w-8 h-8 rounded-md flex items-center justify-center"
                    >
                        -
                    </button>
                    <span>{children}</span>
                    <button
                        onClick={() => handleUpdateGuests('children', 'add')}
                        className="border w-8 h-8 rounded-md flex items-center justify-center"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}