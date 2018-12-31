/**
 * Created by renjp on 2018/12/27.
 */
import React from 'react';
import {connect,} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actions} from '../../reducers/article'
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
import Layouts from '../index'

const {loadArticle} = actions;

const IconText = ({type, text}) => (
    <span>
    <Icon type={type} style={{marginRight: 8}}/>
        {text}
  </span>
);
class ArticleList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.loadArticle();
    }

    render() {
        return (
            <Layouts>
                <div style={{background: '#ffffff', padding: '0px 12px 12px'}}>
                    {/*<Switcha checked={!loading} onChange={this.onChange}/>*/}

                    <List
                        itemLayout="vertical"
                        size="large"
                        dataSource={this.props.listData}
                        pagination={{
                            onChange: (page) => {
                                console.log(page);
                            },
                            pageSize: this.props.pageSize,
                        }}
                        renderItem={item => (
                            <List.Item
                                key={item.id}
                                actions={!this.props.isLoading && [<IconText type="tags-o" text="java"/>,
                                    <IconText type="user-o" text="admin"/>,
                                    <IconText type="eye" text="2"/>,
                                    <IconText type="contacts" text="2018-12-10 15:30:21"/>]}
                                extra={!this.props.isLoading &&
                                <img width={272} height={168}
                                     style={{height: 'auto', maxWidth: '100%', display: 'block'}}
                                     alt="logo"
                                     src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"/>}
                            >
                                <Skeleton loading={this.props.isLoading} active avatar>
                                    <List.Item.Meta
                                        // avatar={<Avatar src={item.avatar}/>}
                                        title={<a href={item.href}>{item.title}</a>}
                                        description={item.description}
                                    />
                                    {item.content}
                                </Skeleton>
                            </List.Item>
                        )}
                    />
                </div>
            </Layouts>
        );
    }

}

const mapStateToProps = (state) => {
    return {

        listData: state.article.dataList,
        pageSize: state.article.pageSize,
        isLoading: state.article.isLoading
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        loadArticle: bindActionCreators(loadArticle, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);

