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
            delarr:[],
            skuquarr:0
   
        }
  
        this.comeback=this.comeback.bind(this);
        this.gotohome=this.gotohome.bind(this);

        
        // this.opcheck=this.opcheck.bind(this);
    }

    comeback(){
        var {history} = this.props;
        var cates = "/indexs/cate";
        history.goBack();
        console.log('dfsfs',this.props.history);
    }

    
    gotohome(){
        var {history} = this.props;
        var home = "/indexs/home";
        history.push(home);
    }


  async  opcheck(delxiu){
  
        await this.setState(this.state = {delarr : [delxiu,...this.state.delarr]});
        await console.log('iiiii',this.state.delarr)

        let prib = document.querySelectorAll('.sks');
        let pribs = prib.length;
        let arrs = '';
        let zjs = 0;
        this.state.datas.map(item=>{
            zjs+= item.spri * item.sps
            
            })
            this.setState({skuquarr:zjs})
            console.log(this.state.skuquarr)
        

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
        // console.log('xcxcc',this.state.datas)
    
        
    }

    componentDidUpdate(){

        let delarr = this.state.delarr;
        let skuquarr = this.state.delarr;

        let skuquarrs = Array.from(new Set(delarr))
        // this.setState(this.state = {skuquarr : [skuquarrs]});
        // this.setState(this.state = {delarr : [delxiu,...this.state.delarr]});
        
        console.log('去重',this.state.delarr)

        let lbox = document.querySelector('.good_list')
        let zobx = document.querySelector('.item_cart');
        let nbox = document.querySelector('.my-bag');
        if(lbox.childElementCount === 0){
            zobx.style.display = 'none';
            nbox.style.display = 'block';
        }else{
            zobx.style.display = 'block';
            nbox.style.display = 'none';
        }

        //更新总价


     


 
        
    }


  




    render(){
        return (
        <section className="app-content">
            {/* 头部 */}
            <Cardhead zhuant={this.state.zhuant} goo={this.comeback}/>
            
            <div className="ajaxHtml">
            {/* 未购物的时候显示 */}
            <Carnone gotohome={this.gotohome}/>
        {/* 购物车时候显示 */}
            <Carlist delarr={this.state.delarr} datas={this.state.datas} opcheck={this.opcheck.bind(this)}/>  
        {/* <div className="member-bottom"></div> */}
        {/* 结算和编辑按钮 */}
            <Carbutton zongjia={this.state.skuquarr} datas={this.state.datas} delarr={this.state.delarr} delgoo={this.delgoo.bind(this)}/>  
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