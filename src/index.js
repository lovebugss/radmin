import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {AppContainer} from 'react-hot-loader';
import './static/css/index.css';
import './static/css/animate.css';
import configureStore from './configureStore';


const store = configureStore();

ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <App />
        </Provider>
    </AppContainer>
    ,
    document.getElementById('root')
);
serviceWorker.unregister();
