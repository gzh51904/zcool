import React,{Component} from 'react';
import {Checkbox} from 'antd-mobile';


class Carbutton extends Component{
    constructor(props){
        super();
        this.state={
            oks:true

        }
        this.delgoo = this.delgoo.bind(this);
        this.opcheck=this.opcheck.bind(this);
    }

    delgoo(){
        // var cbox = document.querySelectorAll('.checkboxs')
        // var cbos  = cbox[0].getAttribute('checked',true);
        // var boxx = cbox[0].getAttribute('checked');
        // // for(var i =0; i<cbox.length;i++){
        // //     if(boxx == true){
        // //         alert('删除成功')
        // //     }else{
        // //         alert('fail')
        // //     }
        // // }
        // if(boxx[0] === true){
        //     alert('you win')
        // }else{
        //     alert('you lose')
        // }
        // if(cbos){
        //     console.log(cbox)
        // }
        // console.log(this)
        let gid = this.props.delarr.rgid;
        let yans = this.props.delarr.yans;
        let mas = this.props.delarr.mas;
        let datas = this.props.datas;
        datas = datas.filter(item=>item.gid!=gid&item.yans!=yans&item.mas!=mas);
        // console.log(this.props.delarr)
        // this.state.datas.filter(item=>item.gid!==gid&&item.yans!==yans&&item.mas!==mas)
        // this.props.opcheck('')
        // goodslist:state.goodslist.filter(item=>item.id!==action.payload)
        // let doto  = {datas}
        // console.log('sdf',doto)
        // this.props.delgoo(datas)
        // console.log(datas)
        // let data = await axios.post('http://localhost:3001/cart/upda',[
        //     {DataBaseName:"Cart"},
        //     {gid,yans,mas,sps}
        // ])
        
 
    }

    opcheck(event){
        var cbox = document.querySelectorAll('.checkboxs');
        // var onds = event.currentTarget.getAttribute('index');
        // event.currentTarget.setAttribute('class-name','checkall');
        // document.querySelector('am-checkbox')
        // console.log('fsdfsf',cbox)
        var oks = this.state.oks;
        if(oks){
            for(var i =0;i<cbox.length;i++){
                cbox[i].setAttribute('checked',true)
            }
        }else{
            for(var i =0;i<cbox.length;i++){
                cbox[i].removeAttribute('checked',true)
            }
        }
        this.setState({oks:!oks})
        
        // for(var i =0;i<cbox.length;i++){
            
        //     // cbox[i].removeAttribute('checked',true)
        //     cbox[i].setAttribute('checked',true)
        //     var aii =  cbox[i].setAttribute('checked',true)
        //     if(aii){
        //         cbox[i].setAttribute('checked',true)
                
        //     }else{
        //         cbox[i].removeAttribute('checked',true)
        //     }
            
        // }
     

       

    }

    render(){
        return(
            <div className="bag-total">
            <div className="sel-all">

            
            <input onClick={this.opcheck.bind(this)} type="checkbox"/>全选
            {/* <Checkbox onClick={this.opcheck.bind(this)} /> */}

            </div>
            <div className="bag-money">
                <p className="count">
                    <span className="zje">
                    合计<em className="p">￥0.00</em>
                    </span>
                    <br/>
                    <span className="s">总额:<em className="save">￥0.00</em> 
                    立减:<em className="save">0.00</em></span>
                
                </p>
            </div>
            <a className="go_pay fr" href="javascript:;">去结算(0)</a>
            <a onClick={this.delgoo.bind(this)} className="del_good hide fr" href="javascript:;">删除</a>
            <a className="move_good hide fr" href="javascript:;">移入收藏夹</a>
        </div>
        )
    }
}

export default Carbutton;