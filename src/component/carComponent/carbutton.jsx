import React,{Component} from 'react';


class Carbutton extends Component{
    constructor(){
        super();
        this.state={

        }
    }

    render(){
        return(
            <div className="bag-total">
            <div className="sel-all">
                <input type="checkbox"/>全选
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
            <a className="del_good hide fr" href="javascript:;">删除</a>
            <a className="move_good hide fr" href="javascript:;">移入收藏夹</a>
        </div>
        )
    }
}

export default Carbutton;