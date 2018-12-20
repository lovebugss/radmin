"use strict";
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './static/css/App.css';
import Routers from  './config/Routers';
// import { Provider } from 'react-redux' // React-Redux 提供Provider组件，可以让容器组件拿到state

import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import Header from './index/Header'
import Main from './index/Main'
import Foot from './index/Foot'
import { Layout } from 'antd';


function App() {

    return(
        <Layout className="layout">
            <Header/>
            <Main/>
            <Foot/>
        </Layout>
    )
}

export default App;
