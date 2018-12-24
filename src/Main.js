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
    Row,
    Col,
    Popover,
} from 'antd';
import two from './index/2.jpg';
import one from './index/3.jpg'
import TweenOne from 'rc-tween-one';
import PropTypes from 'prop-types';
import PathPlugin from 'rc-tween-one/lib/plugin/PathPlugin';
import BannerAnim, {Element} from 'rc-banner-anim';
import 'rc-banner-anim/assets/index.css';

import ReactMarkdown  from 'react-markdown/with-html';

const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const BgElement = Element.BgElement;

class Banner extends React.Component {
    render() {
        return (
            <BannerAnim prefixCls="banner-user" autoPlay>
                <Element key="aaa"
                         prefixCls="banner-user-elem"
                         followParallax={{
                             delay: 1000,
                             data: [
                                 {id: 'bg', value: 20, bgPosition: '50%', type: ['backgroundPositionX']},
                                 {id: 'title', value: 50, type: 'x'},
                                 {id: 'content', value: -30, type: 'x'},
                             ],
                         }}
                >
                    <BgElement
                        key="bg"
                        className="bg"
                        style={{
                            backgroundImage: `url(${two})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                        id="bg"
                    />
                    <TweenOne className="banner-user-title"
                              animation={{y: 30, opacity: 0, type: 'from'}}
                              id="title"
                    >
                        Ant Motion Banner
                    </TweenOne>
                    <TweenOne className="banner-user-text"
                              animation={{y: 30, opacity: 0, type: 'from', delay: 100}}
                              id="content"
                    >
                        The Fast Way Use Animation In React
                    </TweenOne>
                </Element>
                <Element key="bbb"
                         prefixCls="banner-user-elem"
                >
                    <BgElement
                        key="bg"
                        className="bg"
                        style={{
                            backgroundImage: `url(${one})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <TweenOne className="banner-user-title" animation={{y: 30, opacity: 0, type: 'from'}}>
                        Ant Motion Banner
                    </TweenOne>
                    <TweenOne className="banner-user-text"
                              animation={{y: 30, opacity: 0, type: 'from', delay: 100}}
                    >
                        The Fast Way Use Animation In React
                    </TweenOne>
                </Element>
            </BannerAnim>
        );
    }
}

function Logo(props) {

    return (
        <TweenOne
            animation={{
                x: 80,
                scale: 0.5,
                rotate: 120,
                yoyo: true, // demo 演示需要
                repeat: -1, // demo 演示需要
                duration: 1000
            }}
            paused={props.paused}
            style={{transform: 'translateX(-80px)'}}
            className="code-box-shape"
        />
    );
}
Logo.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    paused: PropTypes.bool,
};
TweenOne.plugins.push(PathPlugin);

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.path = `M3.5,175V19c0,0,1-8.75,8.25-11.5S26.5,8,26.5,8l54,53.25
      c0,0,7,8.25,14.5,0.75s51.5-52.25,51.5-52.25s9.75-7,18-2s7.75,11.5,7.75,11.5
      v104c0,0-0.5,15.75-15.25,15.75s-15.75-15-15.75-15V68.5c0,0-0.125-9.125-6-3.25
      s-36.25,36-36.25,36s-11.625,11.875-24-0.5S40.25,65.5,40.25,65.5
      s-5.75-5.25-5.75,2s0,107.25,0,107.25s-0.75,13.5-14.5,13.5S3.5,175,3.5,175z`;
        this.animation = {
            path: this.path,
            repeat: 1,
            duration: 5000,
            ease: 'linear'
        };
    }

    render() {
        return (
            <div style={{position: 'relative', height: 60, width: 60, margin: '10px auto'}}>
                <TweenOne
                    animation={this.animation}
                    style={{margin: 0, width: 20, height: 20, transform: 'translate(-10px, -10px)'}}
                    className="code-box-shape"
                    paused={this.props.paused}
                />
                <svg width="60" height="60">
                    <path d={this.path} fill="none" stroke="rgba(1, 155, 240, 0.2)"/>
                </svg>
            </div>
        );
    }
}
Demo.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    paused: PropTypes.bool,
};
function MinTopBar() {
    let text = 'title';
    let content = (
        <div>
            <p>content</p>
            <p>content</p>
            <p>content</p>
            <p>content</p>

        </div>);


    return (
        <Popover placement="bottomRight" title={text} content={content} trigger="click">
            <Button><Icon type="bars"/></Button>
        </Popover>
    );
}

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
                <Row>

                    <Col xs={24} sm={24} md={5} lg={5} xl={5} xxl={4}>
                        <div className="logo">
                            {/*<p className="text">ITRJP.COM</p>*/}
                            <Logo/>
                            {/*<Demo/>*/}
                        </div>
                        {/*<MinTopBar/>*/}
                    </Col>
                    <Col xs={0} sm={0} md={19} lg={19} xl={19} xxl={20}>
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
                    </Col>
                </Row>


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
            {/*<Carousel autoplay>*/}
            {/*<div><img src={two}/></div>*/}
            {/*<div><img src={one}/></div>*/}
            {/*</Carousel>*/}
            <Banner/>
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
            html: `##Spring常用注解
@Import 

	@Target(ElementType.TYPE)
	@Retention(RetentionPolicy.RUNTIME)
	@Documented
	public @interface Import {
		Class<?>[] value();
	}
这个注解是用来导入一个或者多个类（由Spring管理），或者配置类（配置类中的bean由Spring管理），因此 @Import 可以代替 @Component 和 @Configuration等注解。

##Spring 常用可拓展接口
CommandLineRunner  
Spring Boot应用程序在启动后，会遍历CommandLineRunner接口的实例并运行它们的run方法`,
        };
    }

    render() {
        return (
            <div>
                <ReactMarkdown
                    // source={this.state.html}
                    escapeHtml={false}>
                    {/*<div dangerouslySetInnerHTML={{__html: this.state.html}}></div>*/}

                </ReactMarkdown >
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

