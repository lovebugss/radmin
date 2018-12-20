/**
 * Created by renjp on 2018/12/20.
 */
"use strict";
import React, {Component} from 'react';
import {Card, Icon, Avatar} from 'antd';

const {Meta} = Card;

export default function () {

    return (
        <Card
            style={{width: 300}}
            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>}
            actions={[<Icon type="setting"/>, <Icon type="edit"/>, <Icon type="ellipsis"/>]}
        >
            <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                title="Card title"
                description="This is the description"
            />
        </Card>);
}