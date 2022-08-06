const GEODB_API_KEY = process.env.REACT_APP_GEODB_API_KEY;
const OPEN_WEATHER_API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

export const geoApiOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': GEODB_API_KEY,
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
  },
};
