/**
 * Created by renjp on 2018/12/21.
 */
"use strict";
import React, {Component} from 'react';
import {
    Layout, Menu, Breadcrumb, Icon, Carousel, Timeline,
} from 'antd';
import Box from '../index/Box'

const {SubMenu} = Menu;
const {
    Header, Content, Footer, Sider,
} = Layout;


class Main extends Component {

    constructor() {
        super()
    }

    render() {
        return (
            <Layout style={{padding: '24px 0px'}}>
                <Content style={{minHeight: 480, background: '#f0f2f5'}}>
                    <div style={{ background: '#ffffff'}}>
                        <Timeline mode="alternate">
                            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                            <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
                            <Timeline.Item dot={<Icon type="clock-circle-o" style={{fontSize: '16px'}}/>}>Sed ut
                                perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto beatae vitae dicta sunt explicabo.</Timeline.Item>
                            <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
                            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                            <Timeline.Item dot={<Icon type="clock-circle-o" style={{fontSize: '16px'}}/>}>Technical
                                testing 2015-09-01</Timeline.Item>
                        </Timeline>
                    </div>

                </Content>
                <Sider
                    width={320}
                    theme="right"
                    style={{margin: '0px 0px 0px 12px', background: '#f0f2f5'}}
                    breakpoint='xs'
                    collapsedWidth='0'>
                    <Box/>
                </Sider>
            </Layout>
        );

    }
}

export default function () {

    return (
        <Content>
            <Content style={{padding: '0 180px'}}>
                <Breadcrumb style={{margin: '24px 0px 0px 0px', background: '#fff'}}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Main/>
            </Content>

        </Content>)
}