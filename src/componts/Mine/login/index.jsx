import React, { Component } from 'react';
import './login.scss';

import { Tabs } from 'antd-mobile';
import { List, InputItem, Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import { relative } from 'path';

import Axios from 'axios';


class login extends Component {
    constructor() {
        super();
        this.state = {
            tabs: [
                { title: '手机快捷登录' },
            ],
            PhoneNum: '',//输入框
            Code: '',//Code为验证码
            disabled: false,
            background: '#ff464e'

        }
        this.goBack = this.goBack.bind(this)
        this.checkPhoneNum = this.checkPhoneNum.bind(this)
        this.SendCode = this.SendCode.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    PhoneNumIsVip() {
        Toast.info('号码验证通过', 1);
    }
    PhoneNumNoVip() {
        Toast.info('该号码未注册', 1);
    }
    CodeIsEmpty() {
        Toast.info('验证码为空', 1);
    }
    CodeIsTrue() {
        Toast.info('验证码正确，即将跳转首页', 1);
    }
    CodeIsfalse() {
        Toast.info('验证码错误，请重新输入', 1);
    }
    FalseTelNum() {
        Toast.info('错误的号码，请重新输入！！', 1);
    }
    PhoneNumNoEmpry() {
        Toast.info('手机号码不能为空', 1);
    }
    //失焦验证手机是否注册以及非空验证
    checkPhoneNum(e) {
        let tel = e;
        if (e.length == 0) {
            //手机号码不能为空
            this.PhoneNumNoEmpry(this)
        } else {
            if (!(/^1[3456789]\d{9}$/.test(tel))) {
                //错误的号码
                this.FalseTelNum(this)

            } else {


                Axios.get('http://localhost:3001/checkTel', {
                    params: {
                        tel: tel
                    }
                }).then(({ data }) => {
                    let code = data.code;
                    //如果code为250，证明该号码注册过可以登录。否则不允许登录
                    if (code == 250) {
                        this.PhoneNumIsVip(this)
                    } else {
                        this.PhoneNumNoVip(this)
                    }

                })
            }
        }


    }
    //点击发送验证码
    SendCode() {
        function randomCode() {
            //随机验证码
            var html = '0987654321zxcvbnmkjhgfdsaqwertyuioplZXCVBNMLKJHGFDSAQWERTYUIOP';
            var num = ''; //存四位数的
            for (var i = 0; i < 4; i++) {
                //随机数范围：0-html.length-1
                var now = parseInt(Math.random() * html.length); //0-html.length-1
                num += html[now];
            }

            return num; //返回
        }
        //num 为验证码
        let num = randomCode();
        //把验证码存到仓库
        this.state.Code = num

        //tel为手机号码
        let tel = this.autoFocusInst.state.value
        if (tel.length == 0) {
            this.PhoneNumNoEmpry(this)
        } else {
            Axios.post('http://localhost:3001/PhoneCode', {
                tel: tel,
                num: num
            })


            // console.log(this.refs.RandomCode.props.disabled)
            this.setState({
                disabled: true
            })
            console.log(num)
        }


    }

    //点击下一步，验证码符合则登录
    handleClick() {
        // console.log(this.inputRef.state.value)
        // let tel = this.autoFocusInst.state.value
        // console.log(tel)
        if (this.autoFocusInst.state.value.length == 0) {
            //手机号码非空验证
            this.PhoneNumNoEmpry(this)
        } else {
            if (this.inputRef.state.value == 0) {
                //验证码未输入
                this.CodeIsEmpty(this)
            } else {
                if (this.state.Code.toLocaleLowerCase() == this.inputRef.state.value.toLocaleLowerCase()) {
                    //验证码正确，即将跳转首页
                    this.CodeIsTrue(this)

                  
                    setTimeout(() => {
                        this.props.history.push('/indexs/home')
                    }, 1000);
                } else {
                    //验证码错误，请重新输入
                    this.CodeIsfalse(this)
                }
            }
        }
    }

    goBack() {
        this.props.history.push('/indexs/mine')
    }
    render() {
        return (
            <div className="login_box">
                <div className="login_head">
                    <div className="login_bg">
                        <a href="javascript:;" style={{ zIndex: 999, position: 'relative' }} onClick={this.goBack.bind(this)}>
                            <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/arrow_white.png?5123297e-1&sv=449ce9ee" alt="" />
                        </a>
                        <span className="login_color login_Fsize">登录</span>
                        <a href="javascript:;" className="login_color login_reg">
                            注册
                        </a>
                    </div>
                </div>
                {/* 登录 */}
                <Tabs tabs={this.state.tabs} animated swipeable  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                        {/* 手机快捷登录 */}

                        <List style={{ width: '100%' }}>
                            <InputItem
                                clear
                                placeholder="请输入手机号码"
                                ref={el => this.autoFocusInst = el}
                                onBlur={this.checkPhoneNum}
                            ></InputItem>

                            <InputItem
                                clear
                                placeholder="请输入验证码"
                                type='text'
                                ref={el => this.inputRef = el}
                                className="Login_sendCode"

                            >
                            </InputItem>
                            <a href="javascript:;" className="Login_sendCode_a">
                                <Button size="small"
                                    ref="RandomCode"
                                    disabled={this.state.disabled}
                                    onClick={this.SendCode}
                                >
                                    发送验证码
                            </Button>
                            </a>
                        </List>

                    </div>
                </Tabs>

                <List.Item>
                    <div
                        style={{ marginTop: '25px', background: '#dbdbdb', textAlign: 'center', fontSize: '18px', lineHeight: '60px', height: '60px', color: '#fff' }}
                        onClick={this.handleClick}
                    >
                        下一步
            </div>
                </List.Item>

                {/* 两周内免登陆、忘记密码 */}
                <div id="login_l">
                    {/* <label className="freeLogin " >
                        <input type="checkbox" className="ck" />
                            <i className="before"
                            ref={el => this.freeLogin = el} 
                            onClick={this.cookies}
                            background={this.background}
                            >
                            <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/label_on.png?63443b91-1&sv=449ce9ee" alt="" /></i>
                            两周内免登陆
                        </label> */}
                    <a href="javascript:;">
                        忘记密码？
                        </a>
                </div>
                {/* 第三方账号快速登录 */}
                <div className="wap_app ">
                    <h3 className="third_txt">第三方账号快速登录</h3>
                    <div className="third_app clearfix">
                        <a href="javascript:;">
                            <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/tencent.png?29cf7667-1&sv=449ce9ee" alt="" />
                        </a>
                        <a href="javascript:;">
                            <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/taobao.png?b6b2268f-1&sv=449ce9ee" alt="" />
                        </a>
                        <a href="javascript:;">
                            <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/sina.png?e6100489-1&sv=449ce9ee" alt="" />
                        </a>
                    </div>
                </div>

                {/* 全场包邮 */}
                <ul className="protection clearfix">
                    <li className="fl">
                        <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/unexpress.png?6a15f6a5-1&sv=449ce9ee" alt="" />

                        <span>全场包邮</span>
                    </li>
                    <li>
                        <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/search.png?597c2e82-1&sv=449ce9ee" alt="" />
                        100%人工质检
                        </li>
                    <li className="fr">
                        <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/seven.png?902d32d9-1&sv=449ce9ee" alt="" />
                        7天放心退
                        </li>
                </ul>

                {/* 尾部div */}
            </div>
        )
    }
}

export default login