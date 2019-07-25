import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './nav.scss';

class Nav extends Component {
    constructor(props) {
        super();
        this.state = {

        }
        this.gotoFn = this.gotoFn.bind(this)
    }

    gotoFn(path) {
        this.props.history.push('/' + path)
    }
    render() {
        return <div className="nav">
            <div onClick={this.gotoFn.bind(this, "fengqiang")} className="nav_item">
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