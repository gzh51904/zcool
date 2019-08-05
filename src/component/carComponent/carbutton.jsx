import React,{Component} from 'react';
import {Checkbox} from 'antd-mobile';
import axios from 'axios'


class Carbutton extends Component{
    constructor(props){
        super();
        this.state={
            oks:true

        }
    }

    del(e,i){
        this.props.del(e,i)

    }    
       


        //点击全选和全不选
        CheckedChange=(e)=>{
            this.props.CheckedChange(e);

        }

            //页面更新
    componentDidUpdate(){
        // console.log("更新了")
        var bool=this.props.datas.every((ele,index)=>{
            if(ele.checked==true){
                return true
            }else {
                return false
            }
        })
        // console.log(bool)
        if(bool==true){
            this.refs.quanxuan.checked=true
        }else {
            this.refs.quanxuan.checked=false
        }
    }

    render(){
        // let index = this.props.datas.;
        let zjs = this.props.zjs;
        return(
            <div className="bag-total">
            <div className="sel-all">

            
            <input
            ref="quanxuan"
             onChange={
                (e)=>{
                    this.CheckedChange(e)
                }
                             } type="checkbox"/>全选
            {/* <Checkbox onClick={this.opcheck.bind(this)} /> */}

            </div>
            <div className="bag-money">
                <p className="count">
                    <span className="zje">
                    合计<em className="p">￥{zjs}</em>
                    </span>
                    <br/>
                    <span className="s">总额:<em className="save">￥{zjs}</em> 
                    立减:<em className="save">0.00</em></span>
                
                </p>
            </div>
            <a className="go_pay fr" href="javascript:;">去结算(0)</a>
            <a onClick={this.del.bind(this)} className="del_good hide fr" href="javascript:;">删除</a>
            <a className="move_good hide fr" href="javascript:;">移入收藏夹</a>
        </div>
        )
    }
}

export default Carbutton;