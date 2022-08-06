import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';

const Search = ({ onSearchChange }) => {
  const [searchCity, setSearchCity] = useState(null);

  const loadOptions = (inputValue) => {};

  const handleChange = (searchData) => {
    setSearchCity(searchData);
    onSearchChange(searchData);
  };

  return (
    <>
      <AsyncPaginate
        placeholder='Please search for city'
        debounceTimeout={500}
        value={searchCity}
        onChange={handleChange}
        loadOptions={loadOptions}
      />
    </>
  );
};

export default Search;
