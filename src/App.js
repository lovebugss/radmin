"use strict";
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './static/css/App.css';
import Routers from  './config/Routers';
import {BrowserRouter as Router, Route, Link,Switch} from "react-router-dom";
import {Layout} from 'antd';
import { Provider } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AppContainer } from 'react-hot-loader';

function App() {

    return (
        <Router >
            <div>
                <Layout className="layout">
                    <Header/>
                    <Route exact path="/" component={Main}/>
                    <Route exact path="/topic" component={Topics}/>
                    <Route exact path="/time" component={Time}/>
                    <Foot/>
                </Layout>
            </div>
        </Router>
    )
}

export default App;
