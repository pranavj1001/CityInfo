import { combineReducers } from 'redux';
import reducerCityInfo from './reducer_city_info';

const rootReducer = combineReducers({
  city_info: reducerCityInfo
});

export default rootReducer;
