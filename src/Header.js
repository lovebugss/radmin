/**
 * Created by renjp on 2018/12/17.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
function Header(props) {
    let navs = [];
    let navData = props.navs;
    navData.forEach(n => {

        navs.push(<li key={n.id}><Link to={n.url}>{n.name}</Link></li>)
    });

    return (
        <ul>{navs}</ul>
    )
}

export default Header;