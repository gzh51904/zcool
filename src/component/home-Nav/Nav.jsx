import React, { Component } from 'react';

import './nav.scss';

class Nav extends Component {
    render() {
        return <div className="nav">
            <div className="nav_item">
                <a href="javascript:;" className="fengqiang"></a>
            </div>
            <div className="nav_item">
                <a href="javascript:;" className="miaosha"></a>
            </div>
            <div className="nav_item">
                <a href="javascript:;" className="temai"></a>
            </div>
            <div className="nav_item">
                <a href="javascript:;" className="chaoshi"></a>
            </div>
        </div>
    }
}

export default Nav;