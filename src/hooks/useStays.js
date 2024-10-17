import { useQuery } from '@tanstack/react-query';
import staysData from '../data/stays.json';

export function useStays(searchParams) {
    const fetchStays = async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const filteredStays = staysData.stays.filter(stay => {
                    const locationMatch = stay.city === searchParams.location.split(',')[0];
                    const totalGuests = searchParams.guests.adults + searchParams.guests.children;
                    const guestsMatch = totalGuests === 0 || stay.maxGuests >= totalGuests;

                    return locationMatch && guestsMatch;
                });
                resolve(filteredStays);
            }, 500);
        });
    };

    return useQuery({
        queryKey: ['stays', searchParams],
        queryFn: fetchStays,
        initialData: []
    });
}