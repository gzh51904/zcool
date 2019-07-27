import React, { Component } from 'react';
import './reg.scss';

import { List, InputItem, Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import Axios from 'axios';

import Qs from 'qs'









class reg extends Component {
    constructor() {
        super();
        this.gotoMine = this.gotoMine.bind(this)
        this.phoneNumber = this.phoneNumber.bind(this)
        this.showToast = this.showToast.bind(this)
        this.RandomCode = this.RandomCode.bind(this)
        this.state = {
            Code: '',
            disabled: false
        }

    }
    //注册成功则跳转首页
    handleClick = async () => {
        this.inputRef.focus();
        let tel = this.autoFocusInst.state.value;
        //手机号码非空验证
        if (tel.length) {
            let { data } = await Axios.get('http://localhost:3001/checkTel', { params: { tel: tel } })

            if (data.code == 1000) {
                //号码未注册
                //非空验证
                let Code = this.inputRef.state
                if (Code.value) {
                    //比对验证码的正确
                    if (this.state.Code.toLocaleLowerCase() == this.inputRef.state.value.toLocaleLowerCase()) {
                        this.regSucc(this)
                        //验证成功，把用户的手机号码存进数据库
                        Axios.post('http://localhost:3001/reg', { tel: tel })

                        //跳转首页
                        setTimeout(() => {
                            this.props.history.push('/indexs/home')
                        }, 1000);
                    }
                } else {
                    this.regNoEmpty(this)
                }
            } else {
                this.PhoneisNoTrue(this)
            }
        } else {
            this.NoZero(this)
        }





        // console.log(this.autoFocusInst.state.value)//电话号码
    }

    showToast() {
        Toast.info('发送验证成功', 1);
    }
    regSucc() {
        Toast.info('注册成功，即将跳转首页', 1);
    }
    regFali() {
        Toast.info('验证码有误', 1);
    }
    NoZero() {
        Toast.info('手机号码不能为空', 1);
    }
    TelNumNoZero() {
        Toast.info('手机号码有误，请重试', 1);
    }
    PhoneisTrue() {
        Toast.info('恭喜你，该号码可以注册', 1);
    }
    PhoneisNoTrue() {
        Toast.info('您的号码已注册', 1);
    }
    regNoEmpty() {
        Toast.info('验证码为空？', 1);
    }


    //点击发送验证码
    RandomCode() {
        //获取手机号码
        let tel = this.autoFocusInst.state.value;
        if(tel.length == 0) {
            this.NoZero(this)
        }else{
            Axios.get('http://localhost:3001/checkTel', {
            params: {
                tel: tel
            }
        }).then(({ data }) => {
            let code = data.code
            if (code == 1000) {
                this.showToast(this)


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
                //num为验证码
                let num = randomCode();

                console.log(num)
                this.state.Code = num;
                Axios.post('http://localhost:3001/PhoneCode', {
                    tel: tel,
                    num: num
                })
                // this.refs.RandomCode.disabled=true
                console.log(this.refs.RandomCode.props.disabled)
                this.setState({
                    disabled: true
                })
            } else {
                this.PhoneisNoTrue(this)
            }
            console.log(code)

        })
        }

        

    }

    //检测手机号码是否已验证
    phoneNumber() {
        let phone = this.autoFocusInst.state.value;
        if (phone.length) {
            if (!(/^1[3456789]\d{9}$/.test(phone))) {
                // alert("手机号码有误，请重填");
                this.TelNumNoZero(this)
            } else {
                Axios.get('http://localhost:3001/checkTel', {
                    params: {
                        tel: phone
                    }
                }).then(({ data }) => {
                    let code = data.code
                    if (code == 1000) {
                        this.PhoneisTrue(this)
                    } else {
                        this.PhoneisNoTrue(this)
                    }


                })
            }

        } else {
            this.NoZero(this)

        }

    }

    gotoMine() {
        this.props.history.push('/indexs/mine')
    }



    render() {
        return (
            <div className="reg_box">
                <div id="header">
                    <div className="fixtop">

                        <a href="javascript:;" className="t-fine" onClick={this.gotoMine.bind(this)}>
                            <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/user/arrow_black.png?578e3149-1&sv=449ce9ee" alt="" />
                        </a>

                        <span id="t-index">注册</span>
                    </div>
                </div>
                <div className="wap_login">
                    <p className="reg_notice">请确保你的手机畅通，用于接收验证码短信</p>
                    <form action="" id="mobileFrom" style={{ position: 'relative' }}>

                        <List renderHeader={() => '请确保你的手机畅通，用于接收验证码短信'}>
                            <InputItem
                                clear
                                placeholder="请输入手机号码"
                                ref={el => this.autoFocusInst = el}
                                onBlur={this.phoneNumber}
                            ></InputItem>
                            <InputItem
                                clear
                                placeholder="输入验证码"
                                type='text'
                                ref={el => this.inputRef = el}

                            >
                            </InputItem>
                            <List.Item>
                                <div style={{ marginTop: '25px', background: '#dbdbdb', textAlign: 'center', fontSize: '18px', lineHeight: '60px', height: '60px', color: '#fff' }}
                                    onClick={this.handleClick}>
                                    下一步
                                </div>
                            </List.Item>
                        </List>

                        <a href="javascript:;" className="PUMA"
                        >
                            <Button size="small"
                                ref="RandomCode"
                                onClick={this.RandomCode.bind(this)}
                                disabled={this.state.disabled}
                            >
                                发送验证码

                            </Button>
                        </a>

                    </form>
                </div>

            </div>
        )
    }
}




export default reg;