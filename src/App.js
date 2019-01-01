import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link,Switch} from "react-router-dom";
import {Layout} from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Layouts from './containers';
import Loading from './components/load';
import ArticleList from './containers/list'
import Time from './containers/time';
import  MessageBoard from './containers/comment';
import Gallery from'./containers/photo';
import Header from './containers/header';


class App extends React.Component {

    render() {
        let {isFetching} = this.props;
        return (

            <Router>
                <Layout className="layout">
                    <Header/>
                        <Switch>
                        <Route exact path="/" component={ArticleList}/>
                        <Route path="/time" component={Time}/>
                        <Route path="/message" component={MessageBoard}/>
                        <Route path="/photo" component={Gallery}/>
                        </Switch>
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
