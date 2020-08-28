//importe o método applyMiddleware
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import reducer from '../reducers';
// import { composeWithDevTools } from 'redux-devtools-extension';

//aplique o middleware
const rootReducers = combineReducers({
  reducer,
});
const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
