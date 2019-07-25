import React from 'react';
import { Icon } from 'antd';
import './YewuList.scss'

function YewuList() {
    return(
        <div className="userItem clearfix">
            <a href="javascript:;">
                <Icon type="switcher" />
                <span className="text">代付款</span>
            </a>
            <a href="javascript:;">
            <Icon type="usergroup-add" />
            <span className="text">待成团</span>
            </a>
            <a href="javascript:;">
            <Icon type="shopping-cart" />
            <span className="text">待收货</span>
            </a>
            <a href="javascript:;">
            <Icon type="transaction" />
            <span className="text">退款/售后</span>
            </a>
        </div>
    )
}

export default YewuList