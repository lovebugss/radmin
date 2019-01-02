/**
 * Created by renjp on 2018/12/26.
 */
import React from 'react';
import {connect} from 'react-redux';
import {Layout, Row, Col,} from 'antd';
import Banner from './Banner';
import './style.css'
import ArticleList from '../list'
import Sidebar from '../sidebar'
import {Route, Switch} from "react-router-dom";
import Detail from '../detail';
const {Content} = Layout;

function Home() {
    return (
        <div>
            <Banner/>
            <Content style={{padding: '0 50px', marginTop: 12}}>
                <Row>
                    <Col xs={{span: 24}} sm={24} md={18} lg={18} xl={18} xxl={19}>
                        <div className="main-left">
                            <Switch>
                                <Route exact path="/" component={ArticleList}/>
                                <Route path="/detail/:id" component={Detail}/>
                            </Switch>
                        </div>
                    </Col>
                    <Col xs={0} sm={0} md={6} lg={6} xl={6} xxl={5}>
                        <div className="main-right">
                            <Sidebar/>
                        </div>
                    </Col>
                </Row>
            </Content>

        </div>
    );
}
const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);