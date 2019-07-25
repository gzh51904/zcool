import React, { Component } from 'react';
import Head_mine from '../componts/Mine/Head_mine/Head_mine';
import YewuList from '../componts/Mine/YewuList/YewuList';
import MyList from '../componts/Mine/MyList/MyList';
import Kefu from '../componts/Mine/Kefu'
import './Mine.scss';

class Mine extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="app">
                <div className="userCenter">
                    <Head_mine />
                </div>
                <div className="userBox">
                    <a href="javascript">
                        <span className="fl">我的订单</span>
                        <span className="label fr">全部订单</span>
                    </a>
                </div>
                <YewuList/>
                {/* 模块广告 */}
                <MyList/>

                {/* 客服 */}
                <Kefu />

                <div className="foot_nav clearfix">
                    <a href="javascript:;" className="fl">返回首页</a>
                    <a href="javascript:;">客户端</a>
                    <a href="javascript:;" className="fr">电脑端</a>
                </div>
            </div>
        )
    }
}

export default Mine;