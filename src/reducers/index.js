import { combineReducers } from 'redux';
import reducerCityInfo from './reducer_city_info';

const rootReducer = combineReducers({
  cityInfo: reducerCityInfo
});

export default rootReducer;
