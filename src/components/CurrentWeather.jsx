const CurrentWeather = ({ currentWeatherData }) => {
  return (
    <>
      {currentWeatherData ? (
        <>
          <div className='weather-container'>
            <h1>{currentWeatherData.name}</h1>
            <img
              alt='weather'
              className='weather-icon'
              src={`icons/${currentWeatherData.weather[0].icon}.png`}
            />
            <p>{Math.round(currentWeatherData.main.temp)}°C</p>
            <p>{currentWeatherData.weather[0].description}</p>
            <p>Feels like {Math.round(currentWeatherData.main.feels_like)}°C</p>
            <p>Wind: {currentWeatherData.wind.speed} m/s</p>
            <p>Humidity: {currentWeatherData.main.humidity}%</p>
          </div>
        </>
      ) : (
        <h1>Please select the city</h1>
      )}
    </>
  );
};

export default CurrentWeather;
