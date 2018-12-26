import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link,Switch} from "react-router-dom";
import {Layout} from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Main from './containers';
import Loading from './components/Load'


class App extends React.Component {

    render() {
        let {isFetching} = this.props;
        return (

            <Router>
                <Layout className="layout">
                    <Main/>
                    {isFetching && <Loading/>}

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

export default connect(mapStateToProps, mapDispatchToProps)(App);
