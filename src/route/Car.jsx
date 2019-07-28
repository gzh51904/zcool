import React,{Component} from 'react';
import '../static/car.scss'
import {withRouter} from 'react-router-dom'
import axios from 'axios';

import Cardhead from '../component/carComponent/carhead';
import Carnone from '../component/carComponent/carnone';
import Carlist from '../component/carComponent/carlist';
import Carbutton from '../component/carComponent/carbutton';

class Car extends Component{
    constructor(){
        super();
        this.state={
            zhuant:'编辑',
            datas:[],
            delarr:[]
        }
  
        this.comeback=this.comeback.bind(this);
        
        // this.opcheck=this.opcheck.bind(this);
    }

    comeback(){
        var {history} = this.props;
        var cates = "/indexs/cate";
        history.goBack();
        console.log('dfsfs',this.props.history);
    }


  async  opcheck(delxiu){
        // let gids = event.currentTarget.getAttribute('index')
        // let rgid = this.state.datas[gids].gid;
        // this.setState({delarr:rgid})
        // console.log(this.state.delarr)
        await this.setState({
            delarr:delxiu
        });
        await console.log('iiiii',this.state.delarr)
        

    }

    async  delgoo(delgo){
        // let gids = event.currentTarget.getAttribute('index')
        // let rgid = this.state.datas[gids].gid;
        // this.setState({delarr:rgid})
        // console.log(this.state.delarr)
        await this.setState({
            datas:delgo
        });
        

    }

    async  componentWillMount(){
        let guser = localStorage.getItem('username')
        let {data} = await axios.post('http://localhost:3001/cart/find',[
            {DataBaseName:"Cart"},
            {'guser':guser}
        ])
        this.setState({datas:data})
        console.log('xcxcc',this.state.datas)
        
    }

    componentWillUpdate(){
        console.log('sfsfssss',this.state.datas)
    }


    render(){
        return (
        <section className="app-content">
            {/* 头部 */}
            <Cardhead zhuant={this.state.zhuant} goo={this.comeback}/>
            
            <div className="ajaxHtml">
            {/* 未购物的时候显示 */}
            <Carnone/>
        {/* 购物车时候显示 */}
            <Carlist delarr={this.state.delarr} datas={this.state.datas} opcheck={this.opcheck.bind(this)}/>  
        {/* <div className="member-bottom"></div> */}
        {/* 结算和编辑按钮 */}
            <Carbutton datas={this.state.datas} delarr={this.state.delarr} delgoo={this.delgoo.bind(this)}/>  
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