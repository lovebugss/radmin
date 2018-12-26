/**
 * Created by renjp on 2018/12/26.
 */
import React from 'react';
import {connect} from 'react-redux';
import {Layout, Row, Col,} from 'antd';
import Banner from './Banner';
import './style.css'

const {Content} = Layout;

function Home() {
    return (
        <div>
            <Banner/>
            <Content style={{padding: '0 50px', marginTop: 12}}>
                <Row>
                    <Col xs={0} sm={0} md={18} lg={18} xl={18} xxl={20}>
                        <div className="main-left">
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                            <p>1111111</p>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6} xl={6} xxl={4}>
                        <div className="main-right">
                            <p>1111111</p>
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