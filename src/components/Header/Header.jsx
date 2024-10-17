import { useSearch } from '../../contexts/SearchContext';
import SearchBar from './SearchBar';
import SearchModal from '../Search/SearchModal';

export default function Header() {
    return (
        <>
            <header className="flex flex-col md:flex-row justify-between items-center">
                <div className="logo text-primary text-2xl font-bold">
                    windbnb
                </div>
                <SearchBar />
            </header>
            <SearchModal />
        </>
    );
}