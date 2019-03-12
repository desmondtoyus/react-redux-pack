import reduxThunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {createStore, applyMiddleware} from "redux";
import configureStore from './redux/configureStore';

const middleware = [reduxThunk];

export const store = createStore(configureStore, {}, composeWithDevTools(applyMiddleware(...middleware)));