import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { geoApiOptions } from '../services/api';

const GEO_API_URL = process.env.REACT_APP_GEO_API_URL;

const Search = ({ onSearchChange }) => {
  const [searchCity, setSearchCity] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.country}`,
            };
          }),
        };
      })
      .catch((error) => console.error(error));
  };

  const handleChange = (searchData) => {
    setSearchCity(searchData);
    onSearchChange(searchData);
  };

  return (
    <>
      <AsyncPaginate
        placeholder='Search a city'
        debounceTimeout={1000}
        value={searchCity}
        onChange={handleChange}
        loadOptions={loadOptions}
      />
    </>
  );
};

export default Search;
