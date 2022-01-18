import { combineReducers } from "redux-immutable";

import mainReducer from "containers/main/reducer";

/**
 * Create root reducer, containing
 * all features of the application
 */
const rootReducer = combineReducers({
  main: mainReducer,
});

export default rootReducer;
