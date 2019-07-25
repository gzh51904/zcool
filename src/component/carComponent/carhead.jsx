import React,{Component} from 'react';
import {Icon} from 'antd';

class Carhead extends Component{
    constructor(){
        super();
        this.state={

        }
        this.gobacks = this.gobacks.bind(this);
    }

    gobacks(){
        this.props.goo();
    }

    render(){
        return(
            <header className="head">
            <div className="fixtop">
                <span className="t-find">
                    <a onClick={this.gobacks.bind(this)} className="btn-left" href="javascript:;">
                    <Icon className="fanhui" type="left" />
                    </a>
                </span>
                <span className="t-index">购物车</span>
                <span className="t-user">编辑</span>
            </div>
        </header>
        )
    }
}

export default Carhead;