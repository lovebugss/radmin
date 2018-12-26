/**
 * Created by renjp on 2018/12/26.
 */
import React from 'react';
import {connect} from 'react-redux';
import {Layout} from 'antd';
import Banner from './Banner';
import './style.css'

const {Content} = Layout;

function Home() {
    return (
        <div>
            <Banner/>
            <Content>
                <p>aaa</p>
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