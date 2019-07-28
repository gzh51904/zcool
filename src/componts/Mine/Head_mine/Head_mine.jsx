import React, { Component, useReducer } from 'react';
import { withRouter } from 'react-router';
import './Head_mine.scss';
import { Icon } from 'antd';

import { connect } from 'react-redux';//引入redux
import { bindActionCreators } from 'redux';
import mineAction from '../../../store/mineAction';
// console.log(login)




class head_mine extends Component {
    constructor(props) {
        super();
        this.state = {
            Cookies: false,
            username:''
        }
        this.gotoLogin = this.gotoLogin.bind(this);
        this.gotoReg = this.gotoReg.bind(this);
        this.GoBack = this.GoBack.bind(this);
        this.RemoveCookies = this.RemoveCookies.bind(this)

    }
    //获取Cookie的方法
    getCookie(name) {
        var str = document.cookie;
        var arr = str.split(";");
        for (var i = 0; i < arr.length; i++) {
            //console.log(arr[i]);
            var newArr = arr[i].split("=");
            if (newArr[0] == name) {
                return newArr[1];
            }
        }
    }
    //设置Cookie的方法
    setCookie(name,value,n){
        var oDate = new Date();
        oDate.setDate(oDate.getDate()+n);
        document.cookie = name+"="+value+";expires="+oDate;
    }
    //点击退出账户的方法
    RemoveCookies() {   
        //先获取cookie
        let username = this.getCookie('username')
        console.log(username)
        this.setCookie('username',username,-1)
        this.setState({
            username:''
        })
        this.setState({
            Cookies:false
        })
    }
    componentWillMount() {
        var str = document.cookie;
        var arr = str.split("=");
        let username = arr[1];
        if (username) {
            this.setState({
                Cookies:true,
                username:username
            })
            
        } else {
            this.setState({
                Cookies:false
            })
        }
    }

    //点击退出

    gotoReg() {
        // console.log(this.props)
        this.props.history.push('/reg');
    }
    gotoLogin() {
        this.props.history.push('/login')
    }
    GoBack() {
        this.props.history.goBack(-1);
    }
    render() {
        return <header id="head">
            <div className="userTop">
                <a href="javasctipt:;" id="t-goback" onClick={this.GoBack.bind(this)}>
                    <Icon type="arrow-left" />
                </a>
                <span id="t-index">个人中心</span>
                <a href="javascript:;" 
                style={{ fontSize: '14px',color:'#fff',position:'absolute',top:'0',right:'0'}}
                onClick={this.RemoveCookies}
                className={this.state.Cookies?'show':'hidden'}
                >退出</a>
            </div>

            {/* 未登录 */}
            {
                this.state.Cookies ?
                    <div className="user_box_person">
                        <div className="user">
                            <div className="head_img">

                            </div>
                            <div className="message">
                                <p className="tel">{this.state.username}</p>
                                <div className="message_detal">
                                    <span>我的账号</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="user_login">
                        <a href="javascript:;" onClick={this.gotoReg.bind(this)}>
                            注册
                </a>
                        <i className="line"></i>
                        <a href="javascript:;" onClick={this.gotoLogin.bind(this)}>
                            登录
                </a>
                    </div>
            }


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

let mapStateToProps = (state, ownprops) => {
    return {
        logiStatus: state.logiStatus,
        loginNum: state.loginNum
    }
}

let mapDispacthToProps = (dispatch, ownprops) => {
    return bindActionCreators(mineAction, dispatch)
}

head_mine = connect(mapStateToProps, mapDispacthToProps)(head_mine)
head_mine = withRouter(head_mine)
export default head_mine