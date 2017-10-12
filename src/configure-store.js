import { createStore, compose, combineReducers } from 'redux';

import DevTools from './dev-tools';
import reducers from './reducers';

const store = createStore(
  combineReducers({
    contacts: reducers
  })
  );

// Dev only
window.store = store;

export default store;
