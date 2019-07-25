import React, { Component } from 'react';
import axios from 'axios';
import { array, number } from 'prop-types';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';//引入redux
import { bindActionCreators } from 'redux';
import cateAction from '../../store/cateAction';

class Catelist extends Component {

    constructor(props) {
        super();
        this.state = {
            pages: 1,
            rej: true
        }
        this.scrollFn = this.scrollFn.bind(this);
    }

    async componentWillMount() {
        let key = this.props.location.query.name//拿到参数
        let path = this.props.location.query.path
        let data = await axios.get('http://localhost:3001/catelist', {
            params: {
                URL: path,
                type: {
                    page: 1,
                    ...key
                }
            }
        })
        if (typeof (data.data) == 'string') {//判断是否为字符串，如果是字符串则需要切割
            let l = '(';
            let r = ')';
            var firstIndex = data.data.indexOf(l);
            var lastIndex = data.data.lastIndexOf(r);
            var jsonStr = data.data.substring(firstIndex, lastIndex + 1);
            var jsonObj = eval("(" + jsonStr + ")");
            this.props.setcateGoods(jsonObj.list);//将数据存入redux
            // jsonObj.aggs是筛选数据
        } else {
            let jsonObj = data.data.data
            this.props.setcateGoods(jsonObj.list);
            console.log(this.props)
        }



    }
    scrollFn() {
        let cate = document.querySelector('.cate');
        let windowY = window.scrollY;
        if (this.state.rej && windowY >= cate.scrollHeight - 670) {//关闭开关
            this.setState(this.state = { rej: false });
            let newpage = this.state.pages + 1;
            this.setState(this.state = { pages: newpage }); //页码+1
            //到达零界点发送请求
            let key = this.props.location.query.name//拿到参数
            let path = this.props.location.query.path
            let data = axios.get('http://localhost:3001/catelist', {
                params: {
                    URL: path,
                    type: {
                        page: newpage,
                        ...key
                    }
                }
            }).then((data) => {
                if (typeof (data.data) == 'string') {//判断是否为字符串，如果是字符串则需要切割
                    let l = '(';
                    let r = ')';
                    var firstIndex = data.data.indexOf(l);
                    var lastIndex = data.data.lastIndexOf(r);
                    var jsonStr = data.data.substring(firstIndex, lastIndex + 1);
                    var jsonObj = eval("(" + jsonStr + ")");
                    this.props.addcateGoods(jsonObj.list);//将数据存入redux
                    // jsonObj.aggs是筛选数据
                } else {
                    if (data.data.data.list !== undefined) {
                        let jsonObj = data.data.data
                        this.props.addcateGoods(jsonObj.list);
                    } else {
                        console.log('没有数据了')
                    }
                }
            })
        }
        this.setState(this.state = { rej: true });
    }
    componentDidMount() {
        window.addEventListener('scroll', this.scrollFn, true);
    }
    componentWillUnmount() {
        window.addEventListener('scroll', this.scrollFn, true);
    }

    render() {
        return (
            //类目商品表
            <div className="categoods" >
                <ul className="goodslist">
                    {
                        this.props.cateGoodsList.map((item) => {
                            return (
                                <li key={item.goods_id ? item.goods_id : item.title} id={item.goods_id}>
                                    <a className="goodsa" href="javascript:;">
                                        {
                                            item.pic_url ? <img src={item.pic_url} alt="" /> : <img src={item.picurl} alt="" />
                                        }

                                    </a>
                                    <a className="clickjs" href="javascript:;">
                                        <div className="listprice">
                                            <span className="pricenew">
                                                <i>￥</i>
                                                {item.cprice}
                                            </span>
                                            <i className="del">¥{item.oprice}</i>
                                        </div>
                                        <h3 className="long"> {item.title}</h3>
                                    </a>
                                </li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}
let mapStateToProps = (state, ownprops) => {
    return {
        cateGoodsList: state.cateGoodsList
    }
}

let mapDispacthToProps = (dispatch, ownprops) => {
    return bindActionCreators(cateAction, dispatch)
}

Catelist = connect(mapStateToProps, mapDispacthToProps)(Catelist)
Catelist = withRouter(Catelist);
export default Catelist;