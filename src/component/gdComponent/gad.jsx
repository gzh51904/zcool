import React,{Component} from 'react';
import {Icon} from 'antd';
import axios from 'axios';
import { Promise, async } from 'q';

import { connect } from 'react-redux';//引入redux
import { bindActionCreators } from 'redux';
import CartAction from '../../store/CartAction';


class Gad extends Component{
    constructor(props){
        super();
        this.state={
          currentIndex: '',
          mashuIndex:'',
          yanse:'颜色',
          mashu:'码数',
          shul:'1'
        
        }
        

        this.setCurrentIndex = this.setCurrentIndex.bind(this)
        this.setmashuIndex = this.setmashuIndex.bind(this)
        this.boxshow=this.boxshow.bind(this);
        this.boxclose=this.boxclose.bind(this);
        this.addshul=this.addshul.bind(this);
        this.jianshul=this.jianshul.bind(this);
        this.jiaru=this.jiaru.bind(this);

  
    }

  boxshow(){
    let spbox = document.querySelector('.cyOSJK');
    let spmbox = document.querySelector('.duugzz');
    spbox.style.visibility='visible';
    spbox.style.position='fixed';
    spmbox.style.transform='translateY(0%)';
  }

  boxclose(){
    let spbox = document.querySelector('.cyOSJK');
    let spmbox = document.querySelector('.duugzz');
    spbox.style.visibility='hidden';
    spbox.style.position='';
    spmbox.style.transform='translateY(100%)';
  }

  setCurrentIndex(event) {
    this.setState({
      currentIndex: parseInt(event.currentTarget.getAttribute('index'), 10),
      yanse:event.currentTarget.getAttribute('text')
      
    })
    let lisu = parseInt(event.currentTarget.getAttribute('index'), 10);
  }

  setmashuIndex(event) {
    this.setState({
      mashuIndex: parseInt(event.currentTarget.getAttribute('index'), 10),
      mashu:event.currentTarget.getAttribute('text')
    })
  }

  //增加数量
  addshul(){
    let nums = document.querySelector('.iMLzwQ');
    let zjz = this.state.shul;
    zjz++;
    this.setState({shul:zjz})
  }
    //减少数量
    jianshul(){
      let jian = document.querySelector('.iMLzwQ');
      let jianz = this.state.shul;
      
      if(this.state.shul > 1){
        jianz--;
      }
      this.setState({shul:jianz});
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

    //加入购物车
  async  jiaru(){
    // ge.setItem('username','longs')
      let yans = this.state.yanse;
      let mas = this.state.mashu;
      let spname = this.props.data.goods_title;
      let spic = this.props.data.goods_origin_url;
      let spri = this.props.data.fprice;
      let sori = this.props.data.oprice;
      let sps = this.state.shul;
      let guser = this.getCookie('username')
      let gid = this.props.gid;
      if(guser){
        if(yans === '颜色'){
          alert('请选择颜色')
    
        }else{
          if(mas === '码数'){
            alert('请选择码数')
          }else{
            let data = await axios.post('http://120.24.58.161:3001/cart',[
              {DataBaseName:"Cart"},
              {'guser':guser},
              {
                yans,
                mas,
                spname,
                spic,
                spri,
                sori,
                sps,
                guser,
                gid
          }
          ]).then(({data})=>{
            if(data.code==1000){
              alert('添加商品成功')
            }
          })
          }
        }
      }else{
        this.props.gotomine();
        // console.log('77',this.props)
      }
      
      

  
 

    }

    //跳转购物车
    gotoshop(){
      this.props.gotoshop()
    }

    
    //跳转首页
    gotohome(){
      this.props.gotohome()
    }

    //跳转我的
    gotomine(){
      this.props.gotomine()
    }

    componentDidMount(){
      let xiaoyuan = document.querySelector('.ejYqGn');
      let cnums = this.props.cartNum
      if(cnums>0){
        xiaoyuan.style.display = 'block'
      }else{
        xiaoyuan.style.display = 'none'
      }
    }





    render(){
      let shuju = this.props.data;
      let yan = this.props.yanse;
      let mas = this.props.mashu;
      let xiaotu = this.props.pics;
      let categoryArr = yan;
      let xis = this.state.currentIndex;
              let itemList = [];
    for(let i = 0; i < categoryArr.length; i++) {
      itemList.push(<div key={i}
               className={this.state.currentIndex === i ? 'gXzicJ' : 'kpMuTa'}
               text={categoryArr[i]} index={i} onClick={this.setCurrentIndex}
             >{categoryArr[i]}</div>);   
    }

    let mashuArr = mas;
    let mashulist = [];
for(let j = 0; j < mashuArr.length; j++) {
mashulist.push(<div key={j}
     className={this.state.mashuIndex === j ? 'gXzicJ' : 'kpMuTa'}
     text={mashuArr[j]} index={j} onClick={this.setmashuIndex}
   >{mashuArr[j]}</div>);

   
}
        return(
          <div className="p3">
            <section></section>
            <div className="homj">
              <div className="shouhoub">
                <p className="shouhou">
                  <span className="evvHOT">24小时发货</span>
                  <span className="evvHOT">7天包退</span>
                  <span className="evvHOT">售后补贴</span>
                </p>
                <Icon className="glmRdv" type="ellipsis" />
              </div>
            </div>
            <div className="homj"></div>
            <div className="homj">
              <div onClick={this.boxshow.bind(this)} className="beBVBG">
                <p className="gSaRQX">已选择： {this.state.yanse} {this.state.mashu}</p>
                <Icon className="wstDz" type="right" />
              </div>
            </div>
            {/* 店铺 */}
            <div className="homj">
              <div>
                <div className="gHyDBV">
                  <div className="iWGNAQ">
                    {/* 小图片 */}
                    <img className="iwQlpP" src="https://goods5.juancdn.com/bao/170309/9/9/58c1186aa43d1f717a5117f3_180x90.png?iopcmd=convert&Q=88&dst=png"/>
                  </div>
                  <div className="ewzTJI">
                    <div className="eAUfqE">艾路丝婷女装小店</div>
                    <div className="WySNi">共14件商品</div>
                  </div>
                  <div className="jinru">
                    <a className="dsGqKv" href="jacascript:;">
                      <span className="ebsHjU">进入店铺</span>
                      <Icon className="efcxPt" type="right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* 商品图片 */}
            {/* <div className="homj">
              <div className="kNAwVG">
                <div className="epeevU">
                  <div className="dyihyA">
                    <img className="fNsQUK" src="https://goods2.juancdn.com/goods/180526/2/d/5b091a2533b08927d52d3208_790x978.jpg" alt=""/>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="biqBpV">
                  <div onClick={this.gotohome.bind(this)} className="gsNOod AQZKI">
                    <Icon className="hZzUdy" type="home" />
                    <span className="jFebcI">首页</span>
                  </div>
                  <div onClick={this.gotoshop.bind(this)} className="jIGqoB iVwfSH">
                    <div className="ejYqGn">{this.props.cartNum}</div>
                  <Icon className="gLOWyV" type="shopping-cart" />
                    <span className="ktUUzU">购物车</span>
                  </div>
                  <div className="aLTFY">
                    <div onClick={this.boxshow.bind(this)} className="eBSgt">
                      <div className="jYITyy">立即购买</div>
                    </div>
                    <div onClick={this.boxshow.bind(this)} className="eSPJkQ">
                      <div className="jYITyy">加入购物车</div>
                    </div>
                  </div>
            </div>
            <div  className="cyOSJK">
              <div className="duugzz">
                <div>
                  <div className="jYjmxa">
                    <div className="kdcqpr">
                      {/* 商品小图 */}
                      <img className="gGteGu" src={xiaotu[0+xis]} alt=""/>
                    </div>
                    <div className="kLnIRP">
                      <div className="jHnhrY">￥49</div>
                      <div className="bECJpj">已选择 {this.state.yanse} {this.state.mashu}</div>
                    </div>
                    <div className="jCKkwU">
                      <div>
                      <Icon onClick={this.boxclose.bind(this)} className="iXbonv" type="close" />
                      </div>
                    </div>
                  </div>
                  <div className="eePJwY">
                    <span className="djINZm">颜色</span>
                    <div className="dRKsrh">
                    {itemList}
                    </div>
                    <span className="djINZm">尺码</span>
                    <div className="iGRxGB">
                    {mashulist}
                    </div>
                    <div className="hzewHz">
                        <span className="gJDKLw">购买数量</span>
                     <div className="fecqhx">
                       <span onClick={this.jianshul.bind(this)} className="dGBIdN">-</span>
                       <span className="iMLzwQ">{this.state.shul}</span>
                       <span onClick={this.addshul.bind(this)} className="dcPVBu">+</span>
                     </div>
                    </div>
                  </div>
                  <div onClick={this.gotohome.bind(this)} onClick={this.jiaru.bind(this)} className="ixMtuT">确定</div>
                </div>
              </div>
            </div>
          </div>
     
    
    
        )
    }
}

let mapstateToProps = (state)=>{
  return {cartNum : state.cartNum}
}
let mapDispatchToProps = (dispatch)=>{
  return bindActionCreators(CartAction,dispatch)
}
Gad = connect(mapstateToProps,mapDispatchToProps)(Gad)

export default Gad;