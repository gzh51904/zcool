import React,{Component} from 'react';
import {Icon} from 'antd';



class Gad extends Component{
    constructor(){
        super();
        this.state={
          active:false
        
        }
        this.boxshow=this.boxshow.bind(this);
        this.boxclose=this.boxclose.bind(this);
        this.changcol=this.changcol.bind(this);
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

  changcol(){
    this.setState({active:true})

  }

    render(){
      // let testClass = classNames({
      //   "kpMuTa": true,
      //   gXzicJ: this.state.active
      // });
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
                <p className="gSaRQX">已选择： 白色 均码</p>
                <Icon className="wstDz" type="right" />
              </div>
            </div>
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
                      <div className="bECJpj">已选择 白色 均码</div>
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
                      <div className="kpMuTa">黄色</div>
                      <div className="gXzicJ">白色色</div>
                      <div className="kpMuTa">黑色色</div>
                      <div className="kpMuTa">绿色色</div>
                      <div className="jbxric">橘色</div>
                    </div>
                    <span className="djINZm">尺码</span>
                    <div className="iGRxGB">
                      <div className="kpMuTa">均码</div>
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