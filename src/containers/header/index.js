/**
 * Created by renjp on 2018/12/26.
 */
import React from 'react';
import {connect} from 'react-redux';
import {
    Layout, Menu, Breadcrumb, Icon, Row, Col,
} from 'antd';
import './style.css';
import '../../static/font/iconfont.css';
import LoadingBar from 'react-redux-loading-bar';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";


const {
    Header, Footer, Sider, Content,
} = Layout;

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


function Logo() {
    return (
        <div className="logo">ITRJP.COM</div>
    )
}

function TopBar(props) {


    return (
        <Header className="header" style={{position: 'fixed', zIndex: 99, width: '100%'}}>

            <Row>
                <Col xs={24} sm={24} md={5} lg={5} xl={5} xxl={4}>
                    <Logo/>
                </Col>
                <Col xs={0} sm={0} md={19} lg={19} xl={19} xxl={20}>
                    <Menu
                        className="menu"
                        onClick={props.handleClick}
                        selectedKeys={[props.current]}
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{lineHeight: '60px', float: 'right'}}
                    >
                        <Menu.Item key="home">
                            <Link to="/">
                                <Icon type="home" theme="filled"/>Home
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="time">
                            <Link to="/time">
                                <i className="iconfont icon-Time"/> 时光
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="liuyan">
                            <Link to="/">
                                <i className="iconfont icon-Time"/> 留言
                            </Link>
                        </Menu.Item>
                        <SubMenu
                            title={<span className="submenu-title-wrapper"><Icon
                                type="setting"/>下载</span>}>
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
                            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">关于我</a>
                        </Menu.Item>
                    </Menu>
                </Col>
                <LoadingBar/>
            </Row>


        </Header>
    );
}
function mapStateToProps(state) {

    return {
        current: state.app.key
    }
}

function mapDispatchToProps(dispatch, ownProps) {

    return {
        handleClick: (e) => {

            console.log(ownProps)
            console.log(e)
            dispatch({
                type: 'CLICK_HEAD',
                key: e.key
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TopBar);