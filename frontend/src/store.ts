import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import root from './reducers/root';

const initialState = {};
const middlewares = [thunk];

const store = createStore(
    root,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares)),
)

export default store;
