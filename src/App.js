import { useState } from 'react';
import Search from './components/Search';
import CurrentWeather from './components/CurrentWeather';

const OPEN_WEATHER_API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
const OPEN_WEATHER_API_URL = process.env.REACT_APP_OPEN_WEATHER_API_URL;

function App() {
  const [currentWeatherData, setCurrentWeatherData] = useState(null);

  const handleSearchChange = async (searchData) => {
    const [lat, lon] = searchData.value.split(' ');

    const response = await fetch(
      `${OPEN_WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=metric
      `
    );
    const data = await response.json();

    console.log(data);
    setCurrentWeatherData(data);
  };

  return (
    <div className='container'>
      <Search onSearchChange={handleSearchChange} />
      <CurrentWeather currentWeatherData={currentWeatherData} />
    </div>
  );
}

export default App;
