import landingImage from '../assets/images/landing.png';

const CurrentWeather = ({ currentWeatherData }) => {
  return (
    <>
      {currentWeatherData ? (
        <>
          <div className='flex--column'>
            <h1>
              {currentWeatherData.name}, {currentWeatherData.sys.country}
            </h1>
            <img
              src={`icons/${currentWeatherData.weather[0].icon}.png`}
              alt='weather'
              className='weather-icon'
            />
            <p>{Math.round(currentWeatherData.main.temp)}°C</p>
            <p>{currentWeatherData.weather[0].description}</p>
            <p>Feels like {Math.round(currentWeatherData.main.feels_like)}°C</p>
            <p>Wind: {currentWeatherData.wind.speed} m/s</p>
            <p>Humidity: {currentWeatherData.main.humidity}%</p>
          </div>
        </>
      ) : (
        <div className='flex--column'>
          <img src={landingImage} alt='landing' className='landing__image' />
          <h1>
            Weather <span className='landing__title'>App</span>
          </h1>
          <p className='landing__description'>
            Find weather for cities at your fingertips!
          </p>
        </div>
      )}
    </>
  );
};

export default CurrentWeather;
