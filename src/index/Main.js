/**
 * Created by renjp on 2018/12/20.
 */
"use strict";
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import two from './2.jpg';
import one from './3.jpg'
import {
    Layout, Menu, Breadcrumb, Icon, Carousel,
} from 'antd';
import ArticleList from './ArticleList';
import Box from './Box'

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
                    <ArticleList/>
                </Content>
                <Sider
                    width={320}
                    theme="right"
                    style={{ margin: '0px 0px 0px 12px',background: '#f0f2f5'}}
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
            <Carousel aotuload>
                <div><img src={two} /></div>
                <div><img src={one} /></div>
            </Carousel>

            <Content style={{padding: '0 180px'}}>
                {/*<Breadcrumb style={{margin: '24px 0px 0px 0px', background: '#fff'}}>*/}
                    {/*<Breadcrumb.Item>Home</Breadcrumb.Item>*/}
                    {/*<Breadcrumb.Item>List</Breadcrumb.Item>*/}
                    {/*<Breadcrumb.Item>App</Breadcrumb.Item>*/}
                {/*</Breadcrumb>*/}
                <Main/>
            </Content>

        </Content>)
}