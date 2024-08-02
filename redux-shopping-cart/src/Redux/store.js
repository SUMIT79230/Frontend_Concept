// The store is the object that brings everything together. 
// It holds the application's state, allows access to the state, dispatches actions, and registers listeners via `subscribe`.

import { createStore , applyMiddleware , combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import cartReducer from './reducers';

const rootReducer = combineReducers({
    cart : cartReducer,
});

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;
