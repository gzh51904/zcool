import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './nav.scss';

class Nav extends Component {
    constructor(props) {
        super();
        this.state = {

        }
        this.gotoFn = this.gotoFn.bind(this)
        this.gotofegqiang = this.gotofegqiang.bind(this)
    }

    gotoFn(path) {
        this.props.history.push('/' + path)
    }
    gotofegqiang(){
        let nan = {
            key: 'zuihoufengqiang',
            type: 1,
            zhouyi_ids: 'p8_c4_l4',
            machining: 'hotcoupon',
            rows: 10,
            dtype: 'JSONP',
            price_range: '',
            cat_threeids: '',
            filter_id: '',
            cm:1,
            cm_channel:4,
            callback: 'gsort_callback'
        }
        this.props.history.push({ pathname: "/fengqiang", query: { name: nan,path :'https://shop.juanpi.com/gsort'} })
    }
    render() {
        return <div className="nav">
            <div onClick={this.gotofegqiang.bind(this, "fengqiang")} className="nav_item">
                <a href="javascript:;" className="fengqiang"></a>
            </div>
            <div onClick={this.gotoFn.bind(this, "miaosha")} className="nav_item">
                <a href="javascript:;" className="miaosha"></a>
            </div>
            <div onClick={this.gotoFn.bind(this, "temai")} className="nav_item">
                <a href="javascript:;" className="temai"></a>
            </div>
            <div onClick={this.gotoFn.bind(this, "chaoshi")} className="nav_item">
                <a href="javascript:;" className="chaoshi"></a>
            </div>
        </div>
    }
}

Nav = withRouter(Nav);
export default Nav;