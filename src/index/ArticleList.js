/**
 * Created by renjp on 2018/12/20.
 */
"use strict";
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
    Skeleton, Switch, List, Avatar, Icon,
} from 'antd';

const listData = [];
for (let i = 0; i < 5; i++) {
    listData.push({
        href: 'http://ant.design',
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
            <div style={{background:'#ffffff',padding: '0px 12px'}}>
                {/*<Switch checked={!loading} onChange={this.onChange}/>*/}

                <List
                    itemLayout="vertical"
                    size="large"
                    dataSource={listData}
                    renderItem={item => (
                        <List.Item
                            key={item.title}
                            actions={!loading && [<IconText type="tags-o" text="java"/>,
                                <IconText type="user-o" text="admin"/>, <IconText type="eye" text="2"/>,<IconText type="contacts" text="2018-12-10 15:30:21"/>]}
                            extra={!loading && <img width={272} alt="logo"
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