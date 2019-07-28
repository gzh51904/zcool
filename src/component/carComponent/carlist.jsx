import React,{Component} from 'react';
import {Icon} from 'antd';
import axios from 'axios';
import {Checkbox} from 'antd-mobile';


class Carlist extends Component{
    constructor(){
        super();
        this.state={
            shul:'1',
            jianl:'1',
            datas:[],
            delarr:[],
            oks:true

        }
        this.addshul=this.addshul.bind(this);
        this.jianshul=this.jianshul.bind(this);
        this.opcheck=this.opcheck.bind(this);
    }

      //增加数量
 async addshul(event){
      //inds为加号本身索引
    var inds = event.currentTarget.getAttribute('index');
    //zjzs为所有数字输入框的总和
    let zjzs = document.querySelectorAll('.amount') ;
    let nums = document.querySelectorAll('.showNum') ;
    

   let zjz = zjzs[inds].placeholder;
    zjz++;
    
    zjzs[inds].placeholder = zjz;
    let gid = this.state.datas[inds].gid
    let yans = this.state.datas[inds].yans
    let mas = this.state.datas[inds].mas
    let sps = zjzs[inds].placeholder
    
    let data = await axios.post('http://localhost:3001/cart/upda',[
        {DataBaseName:"Cart"},
        {gid,yans,mas,sps}
    ])

  }
    //减少数量
  async  jianshul(event){
        var inds = event.currentTarget.getAttribute('index');

      let zjzs = document.querySelectorAll('.amount') ;

      let jianz = zjzs[inds].placeholder;
      
      if(zjzs[inds].placeholder > 1){
        jianz--;
      }
      zjzs[inds].placeholder = jianz;
      let gid = this.state.datas[inds].gid
      let yans = this.state.datas[inds].yans
      let mas = this.state.datas[inds].mas
      let sps = zjzs[inds].placeholder

      let data = await axios.post('http://localhost:3001/cart/upda',[
        {DataBaseName:"Cart"},
        {gid,yans,mas,sps}
    ])
    }

   async  componentDidMount(){
        let guser = localStorage.getItem('username')
        let {data} = await axios.post('http://localhost:3001/cart/find',[
            {DataBaseName:"Cart"},
            {'guser':guser}
        ])
        this.setState({datas:data})
        console.log(data)
    }

    opcheck(event){
        // var onds = event.currentTarget.getAttribute('checked');
        // document.querySelector('am-checkbox')
        // console.log('fsdfsf',Boolean(onds))
        // let gids = event.currentTarget.getAttribute('index')
        // let rgid = this.state.datas[gids].gid;
        // this.setState({delarr:rgid})
        var oks = this.state.oks;
        if(oks){
            event.currentTarget.setAttribute('check',true);
        }else{
            event.currentTarget.removeAttribute('check',true);
        }
        this.setState({oks:!oks})
        

    }

    render(){
        return(
            <div className="item_cart">
            <div className="item_head_box">
                <div className="item_head">
                    <div className="head_radio">
                        {/* <span className="yixuanzhong"></span> */}
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
            {
                this.state.datas.map((item,idx)=>{
                    return(          
                <div index={idx} key={item.gid} className="item_body">
                    <div className="item_group">
                        {/* <a className="marketing" href="jacascript:;">
                            <div className="tag">满件减</div>
                        </a> */}
                        <ul className="good_list">
                            <li className="good_item">
                                <div className="good_radio">
                                    {/* <span className="yixuanzhong"></span> */}
                                    {/* <span index={idx} onClick={this.opcheck.bind(this)} className="amcheckbox">
                                    <Checkbox  className="checkbox" defaultChecked/>
                                    </span> */}
                                    <input className="checkboxs" index={idx} onClick={this.opcheck.bind(this)} type="checkbox"/>
                                </div>
                                <a className="good_info clear" href="javascript:;">
                                    <div className="pic">
                                        <img src={item.spic} alt=""/>
                                    </div>
                                    <div className="info_box">
                                        <div className="info_first clear">
                                            <p className="title">{item.spname}</p>
                                        </div>
                                        <div className="info_second clear">
                                            <p className="">{item.yans} {item.mas}</p>
                                        </div>
                                        <div className="info_third clear">
                                            <div className="fd">
                                                <p className="price fr"></p>
                                            </div>
                                            <p className="price fl">
                                                <span className="s1">￥{item.spri}</span>
                                                <span className="s2">￥{item.sori}</span>
                                            </p>
                                            <p className="num fr">
                                                <span className="changeNum">
                                                    <i index={idx} onClick={this.jianshul.bind(this)} className="decrease no">-</i>
                                                    <input placeholder={item.sps}  className="amount" type="text"/>
                                                    <i index={idx} onClick={this.addshul.bind(this)} className="increase">+</i>
                                                </span>
                                                <span className="showNum">X{item.sps}</span>
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>)
                })
            }
        </div>
        )
    }
}

export default Carlist;