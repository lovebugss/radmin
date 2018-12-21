/**
 * Created by renjp on 2018/12/21.
 */
"use strict";
import React, {Component} from 'react';
import './static/css/App.css';
// import { Provider } from 'react-redux' // React-Redux 提供Provider组件，可以让容器组件拿到state
import Box from './index/Box'
import {BrowserRouter as Router, Route, Link, Switch, IndexLink,} from "react-router-dom";
import {
    Layout,
    Menu,
    Breadcrumb,
    Icon,
    Skeleton,
    Switcha,
    List,
    Avatar,
    Button,
    Carousel,
    Timeline,
} from 'antd';
import two from './index/2.jpg';
import one from './index/3.jpg'

const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

// 导航栏
class TopBar extends Component {

    constructor() {
        super()
    }

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
            <Header style={{background: '#ffffff'}}>
                <div className="logo">
                    <p className="text">ITRJP.COM</p>
                </div>

                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                    // theme="dark"
                    defaultSelectedKeys={['2']}
                    style={{lineHeight: '64px', float: 'right', fontSize: '18px'}}
                >
                    <Menu.Item key="home">
                        <Link to="/">
                            <Icon type="home"/>首页
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="app">
                        <Link to="time">
                            <Icon type="appstore"/>时间轴
                        </Link>
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
            </Header>
        );
    }
}

// 底部描述
function Foot() {

    return (
        <Footer style={{textAlign: 'center', background: '#fff'}}>
            ©2017-2018 ITRJP.COM版权所有 冀ICP备17025801号-1
        </Footer>
    )
}

// 文章列表

const listData = [];
for (let i = 0; i < 18; i++) {
    listData.push({
        href: '/topic',
        title: `ant design part ${i}`,
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
}

const IconText = ({type, text}) => (
    <span>
    <Icon type={type} style={{marginRight: 8}}/>
        {text}
  </span>
);

class ArticleList extends React.Component {
    state = {
        loading: false,
    }

    onChange = (checked) => {
        this.setState({loading: !checked});
    }

    render() {
        const {loading} = this.state;

        return (
            <div style={{background: '#ffffff', padding: '0px 12px 12px'}}>
                {/*<Switcha checked={!loading} onChange={this.onChange}/>*/}

                <List
                    itemLayout="vertical"
                    size="large"
                    dataSource={listData}
                    pagination={{
                        onChange: (page) => {
                            console.log(page);
                        },
                        pageSize: 5,
                    }}
                    renderItem={item => (
                        <List.Item
                            key={item.title}
                            actions={!loading && [<IconText type="tags-o" text="java"/>,
                                <IconText type="user-o" text="admin"/>,
                                <IconText type="eye" text="2"/>,
                                <IconText type="contacts" text="2018-12-10 15:30:21"/>]}
                            extra={!loading && <img width={272} height={168} style={{width: '272px',}} alt="logo"
                                                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"/>}
                        >
                            <Skeleton loading={loading} active avatar>
                                <List.Item.Meta
                                    avatar={<Avatar src={item.avatar}/>}
                                    title={<a href={item.href}>{item.title}</a>}
                                    description={item.description}
                                />
                                {item.content}
                            </Skeleton>
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}
class Time extends Component {

    constructor() {
        super()
    }

    render() {
        return (
            <Content>
                <Content style={{padding: '0 180px'}}>
                    <Breadcrumb style={{margin: '24px 0px 0px 0px', background: '#fff'}}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout style={{padding: '24px 0px'}}>
                        <Content style={{minHeight: 480, background: '#f0f2f5'}}>
                            <div style={{background: '#ffffff'}}>
                                <Timeline mode="alternate">
                                    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                                    <Timeline.Item color="green">Solve initial network problems
                                        2015-09-01</Timeline.Item>
                                    <Timeline.Item dot={<Icon type="clock-circle-o" style={{fontSize: '16px'}}/>}>Sed ut
                                        perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                                        quasi
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
                </Content>

            </Content>
        );

    }
}

function Home() {

    return (
        <Content>
            <Carousel aotuload>
                <div><img src={two}/></div>
                <div><img src={one}/></div>
            </Carousel>
            <Content style={{padding: '0 180px'}}>
                {/*<Breadcrumb style={{margin: '24px 0px 0px 0px', background: '#fff'}}>*/}
                {/*<Breadcrumb.Item>Home</Breadcrumb.Item>*/}
                {/*<Breadcrumb.Item>List</Breadcrumb.Item>*/}
                {/*<Breadcrumb.Item>App</Breadcrumb.Item>*/}
                {/*</Breadcrumb>*/}
                <Layout style={{padding: '24px 0px'}}>
                    <Content style={{minHeight: 480, background: '#f0f2f5'}}>
                        <ArticleList/>
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
            </Content>
        </Content>

    );
}

class ArticleContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            html: '1111111111',
        };
    }

    render() {
        return (
            <div>
                <div dangerouslySetInnerHTML={{__html: this.state.html}}></div>
            </div>

        );
    }
}

function Index() {
    return (
        <Layout className="layout">
            <TopBar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/time" component={Time}/>
                <Route path="/topic/:id" component={ArticleContent}/>
            </Switch>
            <Foot/>
        </Layout>
    );
}

function NotFound() {

    return (
        <div>404</div>
    );
}
// 程序主入口
class Main extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Router>
                <Layout className="layout">
                    <TopBar/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/time" component={Time}/>
                        <Route path="/topic/:id" component={ArticleContent}/>
                    </Switch>
                    <Foot/>
                </Layout>
            </Router>
        );
    }

}
export default Main;

