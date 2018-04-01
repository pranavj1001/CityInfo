import { FETCH_INFO } from '../../ENVIRONMENT_VARIABLES';

export default (state = [], action) => {
    switch (action.type) {
      case FETCH_INFO:
        // return state.concat([action.payload.data]);
        // or
        return [action.payload.data, ...state];
      default:
        return state;
    }
};
