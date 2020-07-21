import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';

import createRootReducer from './reducers';
import routes from './routes/routes';
import './index.css';

const middlewares = [ thunk ];

const store = createStore(
    createRootReducer(),
    composeWithDevTools(applyMiddleware(...middlewares))
);

ReactDOM.render(
    <Provider store={store}>
        {routes}
    </Provider>,
    document.getElementById('root')
);