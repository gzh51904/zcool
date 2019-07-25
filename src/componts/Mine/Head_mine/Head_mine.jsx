import React from 'react';
import './Head_mine.scss';
import { Icon } from 'antd';




function head_mine() {
    return(
        <header id="head">
            <div className="userTop">
                <a href="javasctipt:;" id="t-goback">
                    <Icon type="arrow-left"     />
                </a>
                <span id="t-index">个人中心</span>
            </div>
            <div className="user_login">
                <a href="javascript:;">注册</a>
                <i className="line"></i>
                <a href="javascript:;">登录</a>
            </div>
        </header>
    )
}


export default head_mine