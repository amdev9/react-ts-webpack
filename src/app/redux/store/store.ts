import { createStore, applyMiddleware } from 'redux';
// import { createEpicMiddleware } from 'redux-observable';
 
import { compose } from 'redux';
 

import rootReducer from './root-reducer';
// import rootEpic from './root-epic';
// import services from '../epics';

// export const epicMiddleware = createEpicMiddleware();


function configureStore(initialState?: object) {
  // configure middlewares
  const middlewares = []; //epicMiddleware
  // compose enhancers

 
  const enhancer = compose(applyMiddleware(...middlewares));
  // create store
  return createStore(rootReducer, initialState!, enhancer);
}

// pass an optional param to rehydrate state on app start
const store = configureStore();

// rootEpic, {
//   dependencies: services,
// });


// epicMiddleware.run(rootEpic);

// export store singleton instance
export default store;
