"use strict";
import React, {Component} from 'react';
import './App.css';
import Routers from  './config/Routers';
// import { Provider } from 'react-redux' // React-Redux 提供Provider组件，可以让容器组件拿到state

import {BrowserRouter as Router, Route, Link} from "react-router-dom";
const navsData = [{
    id: 1,
    url: '/',
    name: 'Home'
}, {
    id: 2,
    url: '/about',
    name: 'About'
}, {
    id: 3,
    url: '/topics',
    name: 'Topics'
}];

// class App extends Component {
//     render() {
//         return (
//                 <div>
//                     {Routers}
//                 </div>
//         );
//     }
// }

function App() {

    return(<p style={{color:'red'}}>Hello World</p>)
}

export default App;
