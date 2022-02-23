import { createStore, applyMiddleware, compose } from 'redux';

import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import registerSagasWithMiddleware from 'setup/redux/store/sagaRegistry';

import rootReducer from 'setup/redux/store/reducerRegistry';
import withProvider from './withProvider';

/**
 * Initialize Redux Dev Tools, if they are installed in browser.
 */
/** Use Redux compose, if browser doesn't have Redux devtools */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/** Create Redux store with root reducer and middleware included */
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

/**
 *
 * Register all our sagas to our Middleware
 *
 *  */
registerSagasWithMiddleware(sagaMiddleware);

/**
 *
 * Create HOC, which wraps given Component with Redux Provider
 */
export default withProvider({ store, Provider });
