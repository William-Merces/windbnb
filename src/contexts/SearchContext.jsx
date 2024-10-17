import { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [searchParams, setSearchParams] = useState({
    location: 'Helsinki, Finland',
    guests: {
      adults: 0,
      children: 0
    }
  });

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const updateLocation = (location) => {
    setSearchParams(prev => ({
      ...prev,
      location
    }));
  };

  const updateGuests = (type, value) => {
    setSearchParams(prev => ({
      ...prev,
      guests: {
        ...prev.guests,
        [type]: value
      }
    }));
  };

  const toggleSearch = () => {
    setIsSearchOpen(prev => !prev);
  };

  return (
    <SearchContext.Provider 
      value={{
        searchParams,
        isSearchOpen,
        updateLocation,
        updateGuests,
        toggleSearch
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export const useSearch = () => useContext(SearchContext);