import React from 'react';
import ReactDOM from 'react-dom';
import {persistStore} from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import App from './App.js';

ReactDOM.render(
    <Provider store={configureStore()} >
        <App />
    </Provider>,
    document.getElementById('root'),
);