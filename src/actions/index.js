import { OPEN_WEATHER_MAP_API_KEY, FETCH_INFO } from '../../ENVIRONMENT_VARIABLES';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${OPEN_WEATHER_MAP_API_KEY}`;

export const fetchInfo = (cityName) => {
  const url = `${ROOT_URL}&q=${cityName}`;
  return {
    type: FETCH_INFO,
    payload: url
  };
};
