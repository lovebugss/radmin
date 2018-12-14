import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
import App from './App';
import Test from './Test'
import * as serviceWorker from './serviceWorker';

function formatName(user) {

    return user.firstName + ' ' + user.lastName
}
const user = {
    firstName: 'zhangsan',
    lastName: 'lisi'
}
const element = (
    <h1>hello,{formatName(user)}</h1>
);

function getGreeting(user) {

    if (user) {
        return <h1>Hello,{formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}

function Welcome(props) {
    return <h1>hello,{props.name}</h1>
}
function formatDate(date) {
    return date.toLocaleDateString();
    ;
}
const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
};
function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author}/>
            <div className="Comment-text">
                {props.text}
            </div>

            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

function Avatar(props) {
    return (
        <img className="Avatar"
             src={props.user.avatarUrl}
             alt={props.user.name}
        />
    );
}
function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user}/>
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}

class Click extends React.Component {

    constructor(props) {
        super(props)
        this.state = {date: new Date()}
    }

    // 在第一次渲染时调用
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    // 在组件从DOM中移除之前调用
    componentWillUnmount() {
        clearInterval(this.timerID)
    }
    render() {
        return (
            <div>
                <h1>hello world!</h1>
                <h2>this is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

class Popper extends React.Component{
    constructor(){
        super();
        this.state = {name:"hello world"}
    }
    preventPop(name,e){
        e.preventDefault();
        alert(name)
    }
    render (){
        return(
            <div>
                <p>hello</p>
                <a href="https://reactjs.org" onClick={this.preventPop.bind(this,this.state.name)}>click</a>
            </div>

        );
}
}
function Main() {
    return (
        <div>
            <Comment
                date={comment.date}
                text={comment.text}
                author={comment.author}
            />
            <Click/>
            <Test/>
            <Popper/>

        </div>
    );
}

ReactDOM.render(
    <Main/>
    ,
    document.getElementById('root')
);
{/*// function tick() {*/
}
//     const element = (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
//     ReactDOM.render(element, document.getElementById('root'));
// }
//
// setInterval(tick, 1000);
// ReactDOM.render(myElement, document.getElementById('root'));

// ReactDOM.render(<App msg="hello worlds"/>, document.getElementById('root'));
// const element = <h1>Hello, world!</h1>;
// ReactDOM.render(
//     element,
//     document.getElementById('root')
// );
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
