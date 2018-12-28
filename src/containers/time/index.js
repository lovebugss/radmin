/**
 * Created by renjp on 2018/12/28.
 */
import React from 'react';
import {connect} from 'react-redux'


function Time() {
return(
    <div>
        <p>time</p>
        <p>time</p>
        <p>time</p>
        <p>time</p>
        <p>time</p>
        <p>time</p>
        <p>time</p>
    </div>
)
}
const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}
export default connect(mapStateToProps,mapDispatchToProps)(Time);
