/**
 * Created by renjp on 2018/12/17.
 */

import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Home from '../Home'
import About from '../About'
import Time from '../Time'
import Topics from '../Topics'

function Routers() {
    return(
        <Router>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/topics" component={Topics}/>
            <Route path="/time" component={Time}/>
        </Router>
    );
}

export default Routers;