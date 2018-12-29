/**
 * Created by renjp on 2018/12/29.
 */
import React from 'react';
import {connect} from 'react-redux';
import './style.css'
import {Layout, List, Avatar, Icon, Comment, Tooltip} from 'antd';
import moment from 'moment';
const {Content} = Layout;
const data = [];
for (let i = 0; i < 2; i++) {
    data.push({
        id: i,
        actions: "评论",
        author: "zhangsan",
        avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        content: "aaaaaaaaaaaa",
        datetime: "2014/15/12 12:55"
    });
}


function MessageBoard(props) {


    return (
        <div className="message-board">
            <Content >
                <List
                    className="comment-list"
                    header={`${data.length} 条留言`}
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                        <Comment
                            actions={[
                                <span>
                                    <Tooltip title="Like">
                                       <Icon
                                           type="like"
                                           theme={props.action === 'liked' ? 'filled' : 'outlined'}
                                           onClick={props.like}
                                       />
                                    </Tooltip>
                                    <span style={{paddingLeft: 8, cursor: 'auto'}}>
                                      {props.likes}
                                    </span>
                                </span>,
                                <span>
                                    <Tooltip title="Dislike">
                                        <Icon
                                          type="dislike"
                                          theme={props.action === 'disliked' ? 'filled' : 'outlined'}
                                          onClick={props.dislike}
                                        />
                                    </Tooltip>
                                    <span style={{paddingLeft: 8, cursor: 'auto'}}>
                                      {props.dislikes}
                                    </span>
                                </span>,
                                <span>评论</span>,
                            ]}
                            author={item.author}
                            avatar={item.avatar}
                            content={(<p>{item.content}</p>)}
                            datetime={(
                                <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
                                    <span>{item.datetime}</span>
                                </Tooltip>
                            )}
                        />
                    )}
                />
            </Content>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        likes: 10,
        dislikes: 2,
        action: null,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        like: () => {

        },
        dislike: () => {

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MessageBoard);