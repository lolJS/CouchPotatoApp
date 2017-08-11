/* global __DEV__ */
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';

import promise from './middleware/promise';
import reducers from './index';


const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

const logger = createLogger({
  predicate: () => isDebuggingInChrome,
  collapsed: true,
  duration: true,
});

const createCpStore = applyMiddleware(thunk, promise, logger)(createStore);

export default function configureStore(onComplete) {
  const store = autoRehydrate()(createCpStore)(reducers);

  persistStore(store, { storage: AsyncStorage }, onComplete);

  if (isDebuggingInChrome) {
    window.store = store;
  }

  return store;
}
