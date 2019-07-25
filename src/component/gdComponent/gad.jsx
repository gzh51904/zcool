import React,{Component} from 'react';
import {Icon} from 'antd';



class Gad extends Component{
    constructor(){
        super();
        this.state={
          currentIndex: 0,
          mashuIndex:0,
          yanse:'颜色',
          mashu:'码数'
        
        }
        this.setCurrentIndex = this.setCurrentIndex.bind(this)
        this.setmashuIndex = this.setmashuIndex.bind(this)
        this.boxshow=this.boxshow.bind(this);
        this.boxclose=this.boxclose.bind(this);
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
  }

  setmashuIndex(event) {
    this.setState({
      mashuIndex: parseInt(event.currentTarget.getAttribute('index'), 10),
      mashu:event.currentTarget.getAttribute('text')
    })
  }


    render(){
      let categoryArr = ['黑色', '白色', '蓝色', '绿色',
              '橘色'];
              let itemList = [];
    for(let i = 0; i < categoryArr.length; i++) {
      itemList.push(<div key={i}
               className={this.state.currentIndex === i ? 'gXzicJ' : 'kpMuTa'}
               text={categoryArr[i]} index={i} onClick={this.setCurrentIndex}
             >{categoryArr[i]}</div>);   
    }

    let mashuArr = ['M', 'S', 'X', 'XL',
    '均码'];
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
                    <img className="iwQlpP" src="https://goods5.juancdn.com/bao/170420/8/2/58f86720a43d1f0671769a5a_180x90.png?iopcmd=convert&Q=88&dst=png" alt=""/>
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
                  <div className="gsNOod AQZKI">
                    <Icon className="hZzUdy" type="home" />
                    <span className="jFebcI">首页</span>
                  </div>
                  <div className="jIGqoB iVwfSH">
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
                      <img className="gGteGu" src="https://goods2.juancdn.com/goods/190511/3/e/5cd6337f33b089078d45a318_800x800.jpg?imageMogr2/thumbnail/200x200!/quality/80!/format/jpg" alt=""/>
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
                       <span className="dGBIdN">-</span>
                       <span className="iMLzwQ">1</span>
                       <span className="dcPVBu">+</span>
                     </div>
                    </div>
                  </div>
                  <div className="ixMtuT">确定</div>
                </div>
              </div>
            </div>
          </div>
     
    
    
        )
    }
}

export default Gad;