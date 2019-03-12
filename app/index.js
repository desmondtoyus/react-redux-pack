import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import reduxThunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {createStore, applyMiddleware} from "redux";
import 'bootstrap/dist/css/bootstrap.css';
import './scss/app.scss';
import '!file-loader?name=[name].[ext]!./assets/images/favicon.png'; // load favicon and dont change the name
import configureStore from './redux/configureStore';
const middleware = [reduxThunk];
const store = createStore(configureStore, {}, composeWithDevTools(applyMiddleware(...middleware)));
const MOUNT_NODE = document.getElementById('react-container');

const render = () => {
    ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, MOUNT_NODE);
};

if (module.hot) {
    // Hot reloadable React components and translation json files modules.hot.accept
    // does not accept dynamic dependencies, have to be constants at compile-time
    module.hot.accept(['App'], () => {
            ReactDOM.unmountComponentAtNode(MOUNT_NODE);
            render();
        });
}
render();