import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';

import countersReducer from '../reducer';

const rootReducer = combineReducers({
  // router: routerReducer,
  counters: countersReducer,
});

export default rootReducer;
