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
        this.comeback=this.comeback.bind(this);
    }

    comeback(){
        var {history} = this.props;
        var cates = "/indexs/cate";
        history.push(cates);
        // console.log('dfsfs',this.props.history);
    }
    render(){
        return (
        <section className="app-content">
            {/* 头部 */}
            <button onClick={this.comeback.bind(this)}>fsdfsdf</button>
            <Cardhead goo={this.comeback}/>
            
            <div className="ajaxHtml">
            {/* 未购物的时候显示 */}
            <Carnone/>
        {/* 购物车时候显示 */}
            <Carlist/>  
        {/* <div className="member-bottom"></div> */}
        {/* 结算和编辑按钮 */}
            <Carbutton/>  
            </div>
        </section>
        )
    }

 
}
Car = withRouter(Car)
export default Car;