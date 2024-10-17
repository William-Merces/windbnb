import { useSearch } from '../../contexts/SearchContext';
import { useStays } from '../../hooks/useStays';
import StayCard from './StayCard';

export default function StaysList() {
    const { searchParams } = useSearch();
    const { data: stays } = useStays(searchParams);

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Stays in Finland</h1>
                <span className="text-gray-600">{stays.length}+ stays</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {stays.map(stay => (
                    <StayCard key={stay.id} stay={stay} />
                ))}
            </div>
        </div>
    );
}