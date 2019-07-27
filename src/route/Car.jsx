import React,{Component} from 'react';
import '../static/car.scss'
import {withRouter} from 'react-router-dom'

import Cardhead from '../component/carComponent/carhead';
import Carnone from '../component/carComponent/carnone';
import Carlist from '../component/carComponent/carlist';
import Carbutton from '../component/carComponent/carbutton';

class Car extends Component{
    constructor(){
        super();
        this.state={
            zhuant:'编辑'
        }
  
        this.comeback=this.comeback.bind(this);
        // this.bianji=this.bianji.bind(this);
    }

    comeback(){
        var {history} = this.props;
        var cates = "/indexs/cate";
        history.push(cates);
        // console.log('dfsfs',this.props.history);
    }

    // bianji(){
    //     var oks = false;
    //     if(oks=false){
    //         this.setState({zhuant:'关闭'})

    //     }

    // }

    render(){
        return (
        <section className="app-content">
            {/* 头部 */}
            <Cardhead zhuant={this.state.zhuant} bianji={this.bianji} goo={this.comeback}/>
            
            <div className="ajaxHtml">
            {/* 未购物的时候显示 */}
            <Carnone/>
        {/* 购物车时候显示 */}
            <Carlist/>  
        {/* <div className="member-bottom"></div> */}
        {/* 结算和编辑按钮 */}
            <Carbutton/>  
            </div>
            <div className="alert_fullbg"></div>
            <div className="normal_loading">
                <div className="box other">
                    <div className="loading2">
                        <img src="//jp.juancdn.com/jpwebapp/images/icon/loading_bag.png?ts=2019022511127111014-1&sv=449ce9ee" alt=""/>
                        <img className="circle-rotating" src="//jp.juancdn.com/jpwebapp/images/icon/loading_circle.png?ts=2019022511127111014-1&sv=449ce9ee" alt=""/>
                    </div>
                </div>
            </div>
        </section>
        )
    }

 
}
Car = withRouter(Car)
export default Car;