import { OPEN_WEATHER_MAP_API_KEY, FETCH_INFO } from '../../ENVIRONMENT_VARIABLES';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${OPEN_WEATHER_MAP_API_KEY}`;

export const fetchInfo = () => ({ type: FETCH_INFO });
