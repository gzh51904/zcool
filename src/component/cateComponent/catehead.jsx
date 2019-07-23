import React,{Component}from 'react';
import {Icon} from 'antd';

class Catehead extends Component{
    render(){
        return(
    //类目头部
    <div className="heads">
        <div className="fixtop">
            <span className="tfind">
                <a className="btn" href="javascript:;">
                    <Icon type="left" />
                </a>
            </span>
            <span className="tindex">T恤</span>
            <a className="keywords" href="javascript:;">
            <Icon type="search" />
            </a>
            <div className="menumore">
            <Icon type="ellipsis" />
                <div className="menuitem" style={{display:"none"}}>
                    <div className="menuangle"></div>
                    <ul>
                        <li><a href="javascript:;"><span>首页</span></a></li>
                        <li><a href="javascript:;"><span>我的收藏</span></a></li>
                        <li><a href="javascript:;"><span>我的订单</span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>)
        

    }
}

export default Catehead;