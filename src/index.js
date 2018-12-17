"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Home from './Home'
import About from './About'
import Time from './Time'
import Topics from './Topics'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
ReactDOM.render(
    <App/>
    ,
    document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
