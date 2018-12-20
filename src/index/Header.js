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
        current: 'mail',
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
                style={{lineHeight: '64px', float: 'right'}}
            >
                <Menu.Item key="mail">
                    <Icon type="mail"/>Navigation One
                </Menu.Item>
                <Menu.Item key="app" disabled>
                    <Icon type="appstore"/>Navigation Two
                </Menu.Item>
                <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting"/>Navigation Three - Submenu</span>}>
                    <MenuItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
                <Menu.Item key="alipay">
                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
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