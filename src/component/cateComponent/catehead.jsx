import React,{Component} from 'react';
import {Icon} from 'antd';
import {withRouter} from 'react-router-dom';

class Catehead extends Component{


    constructor(props){
        super();
        this.goback = this.goback.bind(this);

    }

    goback(){
        this.props.history.goBack(-1);
    }
    

    render(){
        return(
    //类目头部
    
    <div className="heads">
        <div className="fixtop">
            <span className="tfind">
                <a onClick={this.goback} className="btn" href="javascript:;">
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
Catehead = withRouter(Catehead)
export default Catehead;