import React, { Component } from 'react';

import {withRouter} from 'react-router-dom';
import './list.scss';


class List extends Component {
    constructor(props) {
        super();
        this.state = {

        }
        this.goto = this.goto.bind(this)
    }
    goto(id){
        this.props.history.push('/gdetails/'+id);
    }
    render() {
        let db = this.props.database
        return (<div className="list">
            {
                db.map((item) => {
                    return <div onClick={this.goto.bind(this,item.goods_id)} className="list_item" key={item.goods_id}>
                        <a href="javascript:;">
                            <div className="list_item_content">
                                <div className="list_img">
                                    <img src={item.pic_url} alt="a" />
                                </div>
                                <div className="list_price">
                                    <span className="list_newprice" >￥ {item.cprice}</span><span className="list_oldprice">￥ {item.oprice}</span>
                                </div>
                                <div className="list_title">
                                    {item.title}
                                    <p>{item.time_left}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                })
            }
        </div>)
    }
}

List = withRouter(List)
export default List;