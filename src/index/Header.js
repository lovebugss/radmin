/**
 * Created by renjp on 2018/12/20.
 */
"use strict";
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
import './index.css';

const {Header, Content, Footer} = Layout;

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class TopBar extends React.Component {
    state = {
        current: 'home',
    };

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
                // theme="dark"
                defaultSelectedKeys={['2']}
                style={{lineHeight: '64px', float: 'right', fontSize: '18px'}}
            >
                <Menu.Item key="home">
                    <a href="/">
                        <Icon type="home"/>首页
                    </a>
                </Menu.Item>
                <Menu.Item key="app">
                    <a href="time">

                        <Icon type="appstore"/>时间轴
                    </a>
                </Menu.Item>
                <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting"/>???</span>}>
                    <MenuItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
                <Menu.Item key="about">

                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer"><Icon
                        type="solution"/>关于我</a>
                </Menu.Item>
            </Menu>
        );
    }
}


function Logo() {

    return (
        <div className="logo">
            <p className="text">ITRJP.COM</p>
        </div>
    )
}

export default function () {

    return (
        <Header style={{background: '#ffffff'}}>
            <Logo/>
            <TopBar/>
        </Header>)
}