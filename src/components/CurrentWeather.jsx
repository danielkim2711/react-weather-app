import landingImage from '../assets/images/landing.png';

const CurrentWeather = ({ currentWeatherData }) => {
  const [weatherDescription1, weatherDescription2] = currentWeatherData
    ? currentWeatherData.weather[0].description.split(' ')
    : '';

  return (
    <>
      {currentWeatherData ? (
        <>
          <h1 className='weather__city'>
            {currentWeatherData.name}, {currentWeatherData.sys.country}
          </h1>
          <div className='weather__container flex--column'>
            <img
              src={`icons/${currentWeatherData.weather[0].icon}.png`}
              alt='weather'
              className='weather__icon'
            />
            <p className='weather__description'>
              {weatherDescription1 && weatherDescription2
                ? `${
                    weatherDescription1.charAt(0).toUpperCase() +
                    weatherDescription1.slice(1)
                  } ${
                    weatherDescription2.charAt(0).toUpperCase() +
                    weatherDescription2.slice(1)
                  }`
                : currentWeatherData.weather[0].description
                    .charAt(0)
                    .toUpperCase() +
                  currentWeatherData.weather[0].description.slice(1)}
            </p>
            <p className='weather__temperature'>
              {Math.round(currentWeatherData.main.temp)}°C
            </p>
            <div className='weather__info__container'>
              <div>
                <p>Feels like</p>
                <span>{Math.round(currentWeatherData.main.feels_like)}°C</span>
              </div>
              <div>
                <p>Wind:</p>
                <span>{currentWeatherData.wind.speed} m/s</span>
              </div>
              <div>
                <p>Humidity: </p>
                <span>{currentWeatherData.main.humidity}%</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className='landing__container flex--column'>
          <img src={landingImage} alt='landing' className='landing__image' />
          <h1>
            Weather <span className='landing__title'>App</span>
          </h1>
          <p className='landing__description'>
            Find current weather for cities at your fingertips!
          </p>
        </div>
      )}
    </>
  );
};

export default CurrentWeather;
