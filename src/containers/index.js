/**
 * Created by renjp on 2018/12/26.
 */
import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import {Layout} from 'antd';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Header from './header'
import Footer from './footer'
import Home from './home'

class Main extends React.Component {

    render() {
        return (

            <Router>
                <Layout className="layout">
                    <Header/>
                    <Home/>

                    <Footer/>
                </Layout>
            </Router>
        )
    }
}

function mapStateToProps(state) {
    return {
        isFetching:state.app.isFetching
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);