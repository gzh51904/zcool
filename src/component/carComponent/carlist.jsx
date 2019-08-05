import React, { Component } from 'react';
import { Icon } from 'antd';
import axios from 'axios';
import { Checkbox } from 'antd-mobile';


class Carlist extends Component {
    constructor(props) {
        super();
        this.state = {
            shul: '1',
            jianl: '1',
            // datas:[],
            // delarr:[],
            oks: '',
            checkeds: '',
            status: false


        }
        this.addshul = this.addshul.bind(this);
        this.jianshul = this.jianshul.bind(this);
        this.opchecks=this.opchecks.bind(this);

    }

    //增加数量
    async addshul(event) {
        //inds为加号本身索引
        var inds = event.currentTarget.getAttribute('index');
        //zjzs为所有数字输入框的总和
        let zjzs = document.querySelectorAll('.amount');
        let nums = document.querySelectorAll('.showNum');


        let zjz = zjzs[inds].placeholder;
        zjz++;

        zjzs[inds].placeholder = zjz;
        let gid = this.props.datas[inds].gid
        let yans = this.props.datas[inds].yans
        let mas = this.props.datas[inds].mas
        let sps = zjzs[inds].placeholder

        let data = await axios.post('http://120.24.58.161:3001/cart/upda', [
            { DataBaseName: "Cart" },
            { gid, yans, mas, sps }
        ])

    }
    //减少数量
    async  jianshul(event) {
        var inds = event.currentTarget.getAttribute('index');

        let zjzs = document.querySelectorAll('.amount');

        let jianz = zjzs[inds].placeholder;

        if (zjzs[inds].placeholder > 1) {
            jianz--;
        }
        zjzs[inds].placeholder = jianz;
        let gid = this.props.datas[inds].gid
        let yans = this.props.datas[inds].yans
        let mas = this.props.datas[inds].mas
        let sps = zjzs[inds].placeholder

        let data = await axios.post('http://120.24.58.161:3001/cart/upda', [
            { DataBaseName: "Cart" },
            { gid, yans, mas, sps }
        ])
    }



    async opchecks(event) {
        // console.log(this.props)
        // var onds = event.currentTarget.getAttribute('checked');
        // document.querySelector('am-checkbox')
        // console.log('fsdfsf',Boolean(onds))
        let inds = event.currentTarget.getAttribute('index')
        let ibox = document.querySelectorAll('.checkboxs')
        let kbox = document.querySelectorAll('.good_item')
        let bbox = kbox[inds];
        let iboxx = ibox[inds];
        let rgid = this.props.datas[inds].gid;
        let yans = this.props.datas[inds].yans;
        let mas = this.props.datas[inds].mas;
        // console.log(iboxx.checked)
        if(iboxx.checked == true){
            this.props.opcheck(rgid)
            bbox.className="good_item sks"
            
        }else{
            bbox.className="good_item"
        }    
        
    }


    render() {
        
        return (
            <div className="item_cart">
                <div className="item_head_box">
                    <div className="item_head">
                        <div className="head_radio">
                            {/* <span className="yixuanzhong"></span> */}
                        </div>
                        <div className="head_type">
                            <a className="bc" href="javascript:;">
                                <span className="imgiconBox">
                                    <img src="http://s2.juancdn.com/bao/170615/2/d/594233d5a43d1f45d646cb90_72x72.png" alt="" />
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
                            {
                                this.props.datas.map((item, idx) => {
                                    return (<li index={idx} key={idx} className="good_item">
                                        <div className="good_radio">
                                            {/* <span className="yixuanzhong"></span> */}
                                            {/* <span index={idx} onClick={this.opcheck.bind(this)} className="amcheckbox">
                                        <Checkbox  className="checkbox" defaultChecked/>
                                        </span> */}
                                            <input className="checkboxs"
                                                
                                                // checked={this.state.status}
                                                ref="abc" index={idx}
                                                onClick={this.opchecks.bind(this)}
                                                // onClick={this.opchecks.bind(this)}
                                                type="checkbox"
                                                // onChange={this.changCheck}
                                            />
                                        </div>
                                        <a className="good_info clear" href="javascript:;">
                                            <div className="pic">
                                                <img src={item.spic} alt="" />
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
                                                            <input placeholder={item.sps} className="amount" type="text" />
                                                            <i index={idx} onClick={this.addshul.bind(this)} className="increase">+</i>
                                                        </span>
                                                        <span className="showNum">X{item.sps}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>)
                                })

                            }

                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Carlist;