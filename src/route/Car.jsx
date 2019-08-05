import React,{Component} from 'react';
import '../static/car.scss'
import {withRouter} from 'react-router-dom'
import axios from 'axios';

import Cardhead from '../component/carComponent/carhead';
import Carnone from '../component/carComponent/carnone';
import Carlist from '../component/carComponent/carlist';
import Carbutton from '../component/carComponent/carbutton';
import Item from 'antd-mobile/lib/popover/Item';

import { connect } from 'react-redux';//引入redux
import { bindActionCreators } from 'redux';
import CartAction from '../store/CartAction';

class Car extends Component{
    constructor(){
        super();
        this.state={
            zhuant:'编辑',
            datas:[],
            delarr:[],
            // skuquarr:0,
            shuju:[],
            arr:[],
            zjs:0
   
        }
  
        this.comeback=this.comeback.bind(this);
        this.gotohome=this.gotohome.bind(this);

        
        // this.opcheck=this.opcheck.bind(this);
    }

    //获取单选框的值
getCheckedChange=(e,i)=>{
    //console.log(e.target.checked)
    //文本框的值 e.target.value 需要赋值给 json 数据的下标为index

    


    this.setState({
        arr:this.state.datas.map((ele,index)=>{
            if(index==i){
                ele.checked=e.target.checked
                // console.log('123')
                return ele
                
            }else{
                // console.log('456')
                return ele
            }
            
        })
    })
    
    this.SumPrice()
    console.log('cdd',this.state.zjs)
    console.log('tou',this.state.arr)
    
}

//点击全选和全不选
 CheckedChange=(e)=>{

    
 if(e.target.checked==true){
        this.setState({
            arr:this.state.datas.map((ele,index)=>{
                ele.checked=true
                return ele
            })
        })

    }else if(e.target.checked==false){
        this.setState({
            arr:this.state.datas.map((ele,index)=>{
                ele.checked=false
                return ele
            })
        })
    }
    console.log('dadada',this.state.arr)
    this.SumPrice()
    console.log('cdd',this.state.zjs)
}

   //计算总价
   SumPrice=()=>{
    var sum=0
    this.state.arr.forEach((ele,index)=>{
        if(ele.checked===true){
            sum+=ele.spri*ele.sps
        }
        
    })
    this.setState({
        zjs:sum
    })
}

   //删除
   del=(e,i)=>{
    this.setState({
        datas:this.state.datas.filter((ele,index)=>{
            if(ele.checked!=true ){
                return true
            }
        })
    })

    let arrs = this.state.datas.length;
    let gid = [];
    for(let j = 0; j < arrs; j++){
        gid.push(this.state.datas[j].gid);
        console.log('sfwsf',this.state.datas[j].gid)
        
    }
    let gidarr = Array.from(new Set(gid))
    // console.log('sfwsf',this.state.datas[0].gid)
    this.state.datas.forEach((ele,index)=>{
           if(ele.checked===true){
            axios.post('http://120.24.58.161:3001/cart/delcart',[
                {DataBaseName:"Cart"},
                {'gid':ele.gid}
            ])
            console.log('datas',ele.gid)
           }
    })
    
   
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
        // await console.log('iiiii',this.state.delarr)

         //更新总价

        let prib = document.querySelectorAll('.sks');
        let len = prib.length;
    }

          //获取Cookie的方法
          getCookie(name) {
            var str = document.cookie;
            var arr = str.split("; ");
            for (var i = 0; i < arr.length; i++) {
                //console.log(arr[i]);
                var newArr = arr[i].split("=");
                if (newArr[0] == name) {
                    return newArr[1];
                }
            }
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
            <Carlist 
            delarr={this.state.delarr} 
            datas={this.state.datas} 
            getCheckedChange={this.getCheckedChange.bind(this)}
            
            />  
        {/* <div className="member-bottom"></div> */}
        {/* 结算和编辑按钮 */}
            <Carbutton CheckedChange={this.CheckedChange.bind(this)} zjs={this.state.zjs} datas={this.state.datas} delarr={this.state.delarr} del={this.del.bind(this)}/>  
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

    async  componentWillMount(){
        
        let guser = this.getCookie('username')
        let {data} = await axios.post('http://120.24.58.161:3001/cart/find',[
            {DataBaseName:"Cart"},
            {'guser':guser}
        ])
        this.setState({datas:data})
        // console.log('xcxcc',this.state.datas)
    
        
    }

    componentDidUpdate(){
        let carnum = this.state.datas.length;
        this.props.carNumFn(carnum);
        // console.log(this.props)

        let delarr = this.state.delarr;
        let skuquarr = this.state.delarr;

        let skuquarrs = Array.from(new Set(delarr))
        // this.setState(this.state = {skuquarr : [skuquarrs]});
        // this.setState(this.state = {delarr : [delxiu,...this.state.delarr]});
        
        // console.log('去重',this.state.delarr)

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
       
  

 
        
    }

 
}


let mapstateToProps = (state)=>{
    return {cartNum : state.cartNum}
}
let mapDispatchToProps = (dispatch)=>{
    return bindActionCreators(CartAction,dispatch)
}
Car = connect(mapstateToProps,mapDispatchToProps)(Car)
Car = withRouter(Car);
export default Car;