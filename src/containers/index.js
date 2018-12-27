/**
 * Created by renjp on 2018/12/26.
 */
import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import {Layout} from 'antd';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Header from './header';
import Footer from './footer';
import Home from './home';

let data = `{"list":[{"name":"哈密地区","value":10,"type":1},{"name":"洛阳市","value":46,"type":1},{"name":"泰安市","value":1,"type":2},{"name":"三亚市","value":71,"type":2},{"name":"吴忠市","value":1,"type":1},{"name":"离岛","value":77,"type":1},{"name":"香港岛","value":54,"type":1},{"name":"鹰潭市","value":24,"type":0},{"name":"海口市","value":96,"type":1},{"name":"嘉峪关市","value":69,"type":1},{"name":"上海市","value":70,"type":1},{"name":"潍坊市","value":10,"type":2},{"name":"齐齐哈尔市","value":26,"type":1},{"name":"泰州市","value":42,"type":2},{"name":"三亚市","value":49,"type":1},{"name":"鹤岗市","value":58,"type":2},{"name":"漯河市","value":47,"type":0},{"name":"温州市","value":89,"type":1},{"name":"台州市","value":40,"type":2},{"name":"南平市","value":83,"type":2},{"name":"内江市","value":4,"type":2},{"name":"汉中市","value":84,"type":2},{"name":"嘉峪关市","value":98,"type":0},{"name":"香港岛","value":10,"type":1},{"name":"阿克苏地区","value":77,"type":0},{"name":"黔南布依族苗族自治州","value":68,"type":1},{"name":"九龙","value":22,"type":1},{"name":"迪庆藏族自治州","value":23,"type":2},{"name":"中卫市","value":92,"type":2},{"name":"抚州市","value":59,"type":1},{"name":"重庆市","value":97,"type":0},{"name":"固原市","value":53,"type":1},{"name":"乌海市","value":73,"type":1},{"name":"重庆市","value":2,"type":2},{"name":"昌吉回族自治州","value":71,"type":1},{"name":"平凉市","value":16,"type":1},{"name":"澳门半岛","value":8,"type":2},{"name":"银川市","value":26,"type":1},{"name":"花莲县","value":17,"type":1},{"name":"苗栗县","value":14,"type":1},{"name":"石嘴山市","value":16,"type":0},{"name":"漳州市","value":5,"type":2},{"name":"海外","value":99,"type":1},{"name":"三亚市","value":18,"type":0},{"name":"北京市","value":7,"type":1},{"name":"淮北市","value":64,"type":1},{"name":"云林县","value":74,"type":1},{"name":"龙岩市","value":71,"type":1},{"name":"石嘴山市","value":51,"type":0},{"name":"海外","value":74,"type":2},{"name":"伊犁哈萨克自治州","value":8,"type":0},{"name":"松原市","value":92,"type":0},{"name":"柳州市","value":85,"type":2},{"name":"南平市","value":63,"type":0},{"name":"郴州市","value":96,"type":1},{"name":"那曲地区","value":42,"type":0},{"name":"新竹市","value":38,"type":2},{"name":"信阳市","value":13,"type":2},{"name":"林芝地区","value":96,"type":2},{"name":"资阳市","value":78,"type":1},{"name":"荆州市","value":71,"type":1},{"name":"鞍山市","value":80,"type":2},{"name":"泰安市","value":78,"type":1},{"name":"金华市","value":51,"type":0},{"name":"绍兴市","value":77,"type":0},{"name":"六盘水市","value":45,"type":1},{"name":"益阳市","value":8,"type":1},{"name":"桂林市","value":19,"type":0},{"name":"贵阳市","value":19,"type":2},{"name":"鄂尔多斯市","value":44,"type":1},{"name":"铜仁市","value":57,"type":0},{"name":"朔州市","value":25,"type":0},{"name":"淮北市","value":31,"type":1},{"name":"上海市","value":42,"type":1},{"name":"盐城市","value":45,"type":0},{"name":"大同市","value":100,"type":0},{"name":"昌都地区","value":65,"type":1},{"name":"黄山市","value":18,"type":1},{"name":"海北藏族自治州","value":92,"type":0},{"name":"文山壮族苗族自治州","value":43,"type":0},{"name":"九龙","value":61,"type":2},{"name":"毕节市","value":34,"type":1},{"name":"苏州市","value":69,"type":1},{"name":"南阳市","value":70,"type":0},{"name":"乐山市","value":27,"type":0},{"name":"阜新市","value":75,"type":2},{"name":"上海市","value":60,"type":1},{"name":"重庆市","value":57,"type":1},{"name":"河源市","value":87,"type":1},{"name":"广元市","value":50,"type":2},{"name":"兴安盟","value":32,"type":1},{"name":"凉山彝族自治州","value":57,"type":2},{"name":"廊坊市","value":39,"type":1},{"name":"日喀则地区","value":21,"type":2},{"name":"遵义市","value":88,"type":1},{"name":"重庆市","value":55,"type":1},{"name":"澳门半岛","value":77,"type":1},{"name":"抚顺市","value":21,"type":0},{"name":"克孜勒苏柯尔克孜自治州","value":4,"type":2},{"name":"锡林郭勒盟","value":60,"type":1}]}`;
class Main extends React.Component {

    render() {
        return (

            <Router>
                <Layout className="layout">
                    <Header/>
                    <Home/>
                    <div>
                    </div>
                    <Footer/>
                </Layout>
            </Router>
        )
    }
}

function mapStateToProps(state) {
    return {
        isFetching:state.app.isFetching
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);