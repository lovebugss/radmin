/**
 * Created by renjp on 2018/12/20.
 */
"use strict";
import React, {Component} from 'react';
import {Card, Icon, Avatar} from 'antd';

const {Meta} = Card;

function Search() {
    return(
        <div>

        </div>
    );
}
function About() {
    return(
        <div>
            <Card
                hoverable="true"
                title="关于我"
                actions={[<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=979668507&amp;site=qq&amp;menu=yes"><Icon type="qq" /></a>, <Icon type="github" />, <Icon type="mail" />]}
            >
                <Meta
                    title="aaaa"
                    description="vbbbbbb">
                </Meta>
            </Card>
        </div>
    );
}

function Info() {

    return (
        <div style={{background: '#ffffff',margin:'0px 0px 12px 0px'}}>
            <Card
                style={{width: 320, padding: '12px'}}//样式
                hoverable='true'//
                cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>}
            >
                <Meta
                    avatar={<Avatar src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"/>}
                    title="Card title"
                    description="This is the description"
                />
            </Card>
        </div>);
}

function Box() {
    return (
        <div>
            <Info/>
            <Search/>
            <About/>
        </div>
    );
}
export default Box;