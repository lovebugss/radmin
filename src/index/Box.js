/**
 * Created by renjp on 2018/12/20.
 */
"use strict";
import React, {Component} from 'react';
import {Card, Icon, Avatar,Input,Tag } from 'antd';
import wechat from './wechat.png'

const Searchs = Input.Search;
const {Meta,Grid} = Card;

/**统计*/
function Statistics() {

    return (
        <div style={{background: '#ffffff', margin: '0px 0px 12px 0px'}}>
            <Card
                hoverable="true"
                title="站内统计"
            >
                <p>文章数量：0 篇</p>
                <p>文章分类：0 种</p>
                <p>总留言：0 条</p>
                <p>今日访问量：0 次</p>
                <p>总访问量：0 次</p>


            </Card>
        </div>);

}

function Tags() {

    return (
        <div style={{background: '#ffffff', margin: '0px 0px 12px 0px'}}>
            <Card
                hoverable="true"
                title="文章分类"
            >
                <div >
                    <Tag color="magenta">Java</Tag>
                    <Tag color="red">Spring</Tag>
                    <Tag color="volcano">React</Tag>
                </div>


            </Card>
        </div>);

}

function Search() {
    return (
        <div style={{background: '#ffffff', margin: '0px 0px 12px 0px'}}>
            <Card hoverable="true">
                <Searchs
                    placeholder="请输入关键字"
                    onSearch={value => console.log(value)}
                    enterButton
                />
            </Card>
        </div>
    );
}
function About() {
    return (
        <div>
            <Card
                hoverable="true"
                title="关于我"
            >
                <Meta
                    title="aaaa"
                    description="vbbbbbb">
                </Meta>
            </Card>
        </div>
    );
}

class Info extends Component {
    constructor() {
        super();
        this.state = {
            isInverse: false,
        };
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState({isInverse: !this.state.isInverse});

    };

    render() {

        let card;
        if (this.state.isInverse) {

            card = (<Card
                style={{width: 320}}//样式
                hoverable='true'//
                cover={<img alt="example" src={wechat}/>}
                actions={[<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=979668507&amp;site=qq&amp;menu=yes"><Icon
                    type="qq"/></a>, <a href="https://github.com/lovebugss"><Icon type="github"/></a>,
                    <a href="mailto:r979668507@gmail.com"><Icon type="mail"/></a>,
                    <a href="#" onClick={this.handleClick}><Icon type="wechat"/></a>]}
            >
            </Card>);
        } else {
            card = (<Card
                style={{width: 320}}//样式
                hoverable='true'//
                cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>}
                actions={[<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=979668507&amp;site=qq&amp;menu=yes"><Icon
                    type="qq"/></a>, <a href="https://github.com/lovebugss"><Icon type="github"/></a>,
                    <a href="mailto:r979668507@gmail.com"><Icon type="mail"/></a>,
                    <a href="#" onClick={this.handleClick}><Icon type="wechat"/></a>]}
            >
                <Meta
                    avatar={<Avatar src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"/>}
                    title="Card title"
                    description="This is the description"
                />
            </Card>);
        }
        return (
            <div style={{background: '#ffffff', margin: '0px 0px 12px 0px'}}>
                {card}
            </div>);
    }
}


function Box() {
    return (
        <div>
            <Info/>
            <Search/>
            <Statistics/>
            <Tags/>
            <About/>
        </div>
    );
}
export default Box;