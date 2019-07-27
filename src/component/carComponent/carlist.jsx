import React,{Component} from 'react';
import {Icon} from 'antd';

class Carlist extends Component{
    constructor(){
        super();
        this.state={
            shul:'1'

        }
        this.addshul=this.addshul.bind(this);
        this.jianshul=this.jianshul.bind(this);
    }

      //增加数量
  addshul(){
    let nums = document.querySelector('.increase');
    let zjzs = Number(document.querySelector('.amount').text) ;

    let zjz = this.state.shul;
    zjzs = zjz;
    zjz++;
    this.setState({shul:zjz})
    // console.log(zjzs)
  }
    //减少数量
    jianshul(){
      let jian = document.querySelector('.decrease');
      let zjzs = Number(document.querySelector('.amount').text) ;

      let jianz = this.state.shul;
      zjzs = jianz;
      
      if(this.state.shul > 1){
        jianz--;
      }
      this.setState({shul:jianz});
    }

    render(){
        return(
            <div className="item_cart">
            <div className="item_head_box">
                <div className="item_head">
                    <div className="head_radio">
                        {/* <span className="yixuanzhong"></span> */}
                        <input type="checkbox"/>
                    </div>
                    <div className="head_type">
                        <a className="bc" href="javascript:;">
                            <span className="imgiconBox">
                                <img src="http://s2.juancdn.com/bao/170615/2/d/594233d5a43d1f45d646cb90_72x72.png" alt=""/>
                            </span>
                            <span className="dianpu">艾路丝婷女装小店</span>
                            <Icon className="jingru" type="right" />
                        </a>
                    </div>
                    <div className="head_action"></div>
                </div>
            </div>
            <div className="item_body">
                <div className="item_group">
                    {/* <a className="marketing" href="jacascript:;">
                        <div className="tag">满件减</div>
                    </a> */}
                    <ul className="good_list">
                        <li className="good_item">
                            <div className="good_radio">
                                {/* <span className="yixuanzhong"></span> */}
                                <input type="checkbox"/>
                            </div>
                            <a className="good_info clear" href="javascript:;">
                                <div className="pic">
                                    <img src="https://goods7.juancdn.com/goods/180526/d/8/5b09179c33b0897a035e2f74_800x800.jpg?iopcmd=thumbnail&type=11&height=310&width=310%7Ciopcmd=convert&Q=88&dst=jpg" alt=""/>
                                </div>
                                <div className="info_box">
                                    <div className="info_first clear">
                                        <p className="title">纯色V领修身短袖T恤</p>
                                    </div>
                                    <div className="info_second clear">
                                        <p className="">军绿色 XXXL</p>
                                    </div>
                                    <div className="info_third clear">
                                        <div className="fd">
                                            <p className="price fr"></p>
                                        </div>
                                        <p className="price fl">
                                            <span className="s1">￥39</span>
                                            <span className="s2">￥69</span>
                                        </p>
                                        <p className="num fr">
                                            <span className="changeNum">
                                                <i onClick={this.jianshul.bind(this)} className="decrease no">-</i>
                                                <input placeholder={this.state.shul}  className="amount" type="text"/>
                                                <i onClick={this.addshul.bind(this)} className="increase">+</i>
                                            </span>
                                            <span className="showNum">X1</span>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        )
    }
}

export default Carlist;