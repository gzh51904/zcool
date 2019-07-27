<<<<<<< HEAD
import React,{Component} from 'react';
import {withRouter} from 'react-router';
import './Head_mine.scss';
import { Icon } from 'antd';


// console.log(login)




class head_mine extends Component {
    constructor(props){
        super();
        this.state = {}
        this.gotoLogin = this.gotoLogin.bind(this);
        this.gotoReg = this.gotoReg.bind(this)
    }
    gotoReg(){
        // console.log(this.props)
        this.props.history.push('/reg');
    }
    gotoLogin() {
        this.props.history.push('/login')
    }
    render(){
        return <header id="head">
            <div className="userTop">
                <a href="javasctipt:;" id="t-goback">
                    <Icon type="arrow-left"     />
                </a>
                <span id="t-index">个人中心</span>  
            </div>

            {/* 未登录 */}
            <div className="user_login">
                <a href="javascript:;" onClick={this.gotoReg.bind(this)}>
                    注册
                </a>
                <i className="line"></i>
                <a href="javascript:;" onClick={this.gotoLogin.bind(this)}>
                    登录
                </a>
            </div>

            {/* 已登录 */}
            {/* <div className="user_box_person">
                <div className="user">
                    <div className="head_img">

                    </div>
                    <div className="message">
                        <p className="tel">jp_8576b2b82</p>
                        <div className="message_detal">
                            <span>我的账号</span>
                        </div>
                    </div>
                </div>
            </div> */}
        </header>
    }
}

head_mine = withRouter(head_mine)
=======
import React from 'react';
import './Head_mine.scss';
import { Icon } from 'antd';




function head_mine() {
    return(
        <header id="head">
            <div className="userTop">
                <a href="javasctipt:;" id="t-goback">
                    <Icon type="arrow-left"/>
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


>>>>>>> 67ebff49ada8093a372cdf57b62e9ec5d5172352
export default head_mine