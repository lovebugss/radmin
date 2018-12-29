/**
 * Created by renjp on 2018/12/28.
 */
import React from 'react';
import {connect} from 'react-redux';
import {Layout} from 'antd'
const {Content} = Layout;

function Time() {
    return (
        <div>
            <Content style={{padding: '0 50px', marginTop: 12}}>
                <p>time</p>
                <p>time</p>
                <p>time</p>
                <p>time</p>
                <p>time</p>
                <p>time</p>
                <p>time</p>
            </Content>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Time);
