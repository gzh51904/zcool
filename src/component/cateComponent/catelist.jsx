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
        let data = await axios.get('http://localhost:3001/catelist', {
            params: {
                URL: 'https://shop.juanpi.com/gsort',
                type: {
                    key: key,
                    type: 50,
                    zhouyi_ids: 'p8_c4_l4',
                    machining: 'danpin',
                    page: 1,
                    rows: 10,
                    dtype: 'JSONP',
                    price_range: '',
                    cat_threeids: '',
                    filter_id: '',
                    callback: 'gsort_callback'
                }
            }
        })
        let l = '(';
        let r = ')';
        var firstIndex = data.data.indexOf(l);
        var lastIndex = data.data.lastIndexOf(r);
        var jsonStr = data.data.substring(firstIndex, lastIndex + 1);
        var jsonObj = eval("(" + jsonStr + ")");
        //将数据存入redux
        // jsonObj.aggs是筛选数据
        this.props.setcateGoods(jsonObj.list);
        console.log(this.props)

    }
    async scrollFn() {
        let cate = document.querySelector('.cate');
        let windowY = window.scrollY;
        if ( this.state.rej && windowY >= cate.scrollHeight - 670 ) {//关闭开关
            this.setState(this.state = { rej: false });
            let newpage = this.state.pages + 1;
            this.setState(this.state = { pages: newpage }); //页码+1
            //到达零界点发送请求
            let key = this.props.location.query.name//拿到参数
            let data = axios.get('http://localhost:3001/catelist', {
                params: {
                    URL: 'https://shop.juanpi.com/gsort',
                    type: {
                        key: key,
                        type: 50,
                        zhouyi_ids: 'p8_c4_l4',
                        machining: 'danpin',
                        page: newpage,
                        rows: 10,
                        dtype: 'JSONP',
                        price_range: '',
                        cat_threeids: '',
                        filter_id: '',
                        callback: 'gsort_callback'
                    }
                }
            }).then((data) => {
                let l = '(';
                let r = ')';
                var firstIndex = data.data.indexOf(l);
                var lastIndex = data.data.lastIndexOf(r);
                var jsonStr = data.data.substring(firstIndex, lastIndex + 1);
                var jsonObj = eval("(" + jsonStr + ")");
                //将数据存入redux
                // jsonObj.aggs是筛选数据
                this.props.addcateGoods(jsonObj.list);
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
                                <li key={item.goods_id} id={item.goods_id}>
                                    <a className="goodsa" href="javascript:;">
                                        <img src={item.pic_url} alt="" />
                                    </a>
                                    <a className="clickjs" href="javascript:;">
                                        <div className="listprice">
                                            <span className="pricenew ">
                                                <i>￥</i>
                                                {item.cprice}
                                            </span>
                                            <i className="del">¥{item.oprice}</i>
                                            <span className="onlytime">{item.residue}</span>
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