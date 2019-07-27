import React,{Component} from 'react';
import {Icon} from 'antd';

import {withRouter} from 'react-router-dom';

class Carhead extends Component{
    constructor(props){
        super();
        this.state={
           zts:'编辑',
           oks:true

        }
        this.gobacks = this.gobacks.bind(this);
        this.bianjis=this.bianjis.bind(this);
    }


    gobacks(){
        this.props.history.goBack(-1);
    }

    bianjis(){
        var show1 = document.querySelector('.del_good')
        var show2 = document.querySelector('.move_good')
        var show3 = document.querySelector('.go_pay')
        var show4 = document.querySelector('.bag-money')
        var oks = this.state.oks;
        if(oks){
            var guanbi = '完成'
            this.setState({zts:guanbi})
            show1.style.display='block';
            show2.style.display='block';
            show3.style.display='none';
            show4.style.display='none';

           
        }else{
            var kaiqi = '编辑'
            this.setState({zts:kaiqi})
            show1.style.display='none';
            show2.style.display='none';
            show3.style.display='block';
            show4.style.display='block';
            
        }
        this.setState({oks:!oks})
    }



 

    render(){
        // let zhuant = this.props.zhuant;
        
        return(
            <header className="head">
            <div className="fixtop">
                <span className="t-find">
                    <a onClick={this.gobacks.bind(this)} className="btn-left" href="javascript:;">
                    <Icon  className="fanhui" type="left" />
                    </a>
                </span>
                <span className="t-index">购物车</span>
                <span onClick={this.bianjis.bind(this)} className="t-user">{this.state.zts}</span>
            </div>
        </header>
        )
    }
}


Carhead = withRouter(Carhead)
export default Carhead;