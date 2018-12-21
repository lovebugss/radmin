/**
 * Created by renjp on 2018/12/20.
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
    Skeleton, Switch, List, Avatar, Icon, Button,
} from 'antd';


import reqwest from 'reqwest';

const count = 5;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;

class LoadMoreList extends React.Component {
    state = {
        initLoading: true,
        loading: false,
        data: [],
        list: [],
    }

    componentDidMount() {
        this.getData((res) => {
            this.setState({
                initLoading: false,
                data: res.results,
                list: res.results,
            });
        });
    }

    getData = (callback) => {
        reqwest({
            url: fakeDataUrl,
            type: 'json',
            method: 'get',
            contentType: 'application/json',
            success: (res) => {
                callback(res);
            },
        });
    }

    onLoadMore = () => {
        this.setState({
            loading: true,
            list: this.state.data.concat([...new Array(count)].map(() => ({loading: true, name: {}}))),
        });
        this.getData((res) => {
            const data = this.state.data.concat(res.results);
            this.setState({
                data,
                list: data,
                loading: false,
            }, () => {
                // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
                // In real scene, you can using public method of react-virtualized:
                // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
                window.dispatchEvent(new Event('resize'));
            });
        });
    }

    render() {
        const {initLoading, loading, list} = this.state;
        const loadMore = !initLoading && !loading ? (
            <div style={{
                textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px',
            }}
            >
                <Button onClick={this.onLoadMore}>loading more</Button>
            </div>
        ) : null;

        return (
            <List
                className="demo-loadmore-list"
                loading={initLoading}
                itemLayout="horizontal"
                loadMore={loadMore}

                dataSource={list}
                renderItem={item => (
                    <List.Item actions={[<a>edit</a>, <a>more</a>]}>
                        <Skeleton avatar title={false} loading={item.loading} active>
                            <List.Item.Meta
                                avatar={<Avatar
                                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                                title={<a href="https://ant.design">{item.name.last}</a>}
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                            <div>content</div>
                        </Skeleton>
                    </List.Item>
                )}
            />
        );
    }
}

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
                {/*<Switch checked={!loading} onChange={this.onChange}/>*/}

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

export default ArticleList;