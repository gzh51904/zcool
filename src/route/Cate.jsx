import React,{Component}from 'react';
import {Icon} from 'antd';
import '../static/cate.scss';
import axios from 'axios';
import Mycontext from '../context/index'

import Catehead from '../component/cateComponent/catehead';
import Catexuan from '../component/cateComponent/catexuan';
import Catelist from '../component/cateComponent/catelist';

class Cate extends Component{

    constructor(){
        super();
        this.state={
            database1:[],
            page1 : {num : 1},
            send : {bool : true},
            location1 :{to : 654}
        }
        // this.gotoback = this.gotoback.bind(this);
        // this.scrollFn = this.scrollFn.bind(this);
    }

    async  componentDidMount(){
        this.props.history.push('/indexs/cate/:db');
        
        // let {data} =  await axios.get('http://localhost:3001/catelist',{
        //     params:{
        //         page:1,
        //     }
        // })
        // let l = '(';
        // let r = ')';
        // var firstIndex = data.indexOf(l);
        //  var lastIndex = data.lastIndexOf(r);
        //  var jsonStr = data.substring(firstIndex,lastIndex+1);
        //  var jsonObj = eval("("+jsonStr+")");
        //  var datalists = jsonObj.list;
     
        //  this.state.datalist = datalists;
        //  this.setState(this.state.database1 = datalists);
        //  this.setState(this.state.database1 = datalists);
        //  //监听鼠标滚动
        // let a = document.querySelector('.categoods');
        // a.addEventListener("scroll", this.scrollFn, true);
         //监听鼠标滚动
        //  let a = document.querySelector('.App');
        //  a.addEventListener("scroll", this.scrollFn, true);
     
         }

        //  async scrollFn() {
            // let a = document.querySelector('.App');
            // if(a.scrollHeight - 618 <= a.scrollTop && this.state.send.bool){
            //     //关闭滚动事件  节流
            //     this.setState(this.state.send = {bool : false});
            //     //到达零界点渲染新的商品
            //     // let gotos = this.state.goto;
            //         let page1 = this.state.page1.num + 1;//页数++
            //         this.setState(this.state.page1 = {num : page1});
            //         let data = await get('http://localhost:3001/catelist', {
            //             params: {
            //                 page:page1
                 
            //             }
            //         });
            //         let db = this.state.database0;
            //         this.setState(this.state.database0 = [...db,...this.state.database0],()=>{
            //         });
            //         this.setState(this.state.database1 = [...db,...this.state.database0]);
            //     //重新开放请求
            //     this.setState(this.state.send = {bool : true});
            // }
            // let tops = document.querySelector('.goodssortscroll');
            // if(a.scrollY >= 1){
            //     tops.style.position = 'fixed';
            //     tops.style.top = '0';
            //     tops.style.left = '0';
            //     console.log('hi',a.scrollY)
            // }else{
            //     tops.style.position = '';
            //     tops.style.top = '';
            // }
        // }

        
    gotoback(){
        let {history} = this.props;
        let cate = "/indexs/classify/goo1";
        history.push(cate);
    }

    render(){
        return(
            <div className="cate">
    {/* 类目头部 */}
    <Catehead gotoback={this.gotoback}/>
    {/* 类目筛选栏 */}
    <Catexuan/>
    {/* 类目商品表 */}
    <Catelist database={this.state.database1}/>
    </div>

    
)
        

    }
}

export default Cate;