/**
 * Created by renjp on 2018/12/20.
 */
"use strict";
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {Layout} from 'antd';

const {Footer} = Layout;

export default function () {

    return (
        <Footer style={{textAlign: 'center',background: '#fff'}}>
            ©2017-2018 ITRJP.COM版权所有 冀ICP备17025801号-1
        </Footer>
    )
}
