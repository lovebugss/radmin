/**
 * Created by renjp on 2018/12/29.
 */
import React from 'react';
import './style.css'
import {Card} from 'antd';
import {connect} from  'react-redux'

const {Meta} = Card;

function Photo() {

    return (
        <div>
            <Card
                hoverable
                style={{width: 240}}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
            >
                <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                />
            </Card>
        </div>
    )
}


function Gallery() {

    return(
        <div>

        <Photo/>
        <Photo/>
        <Photo/>
        <Photo/>
        <Photo/>
        <Photo/>
        <Photo/>
        <Photo/>
        <Photo/>
        <Photo/>
        <Photo/>
        <Photo/>
        </div>
    );

}
const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
