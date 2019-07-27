import React, { Component } from 'react';
import axios from 'axios';
import { array, number } from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Icon } from 'antd';
import { Drawer, List } from 'antd-mobile';
import Catexuan from './catexuan';

import { connect } from 'react-redux';//引入redux
import { bindActionCreators } from 'redux';
import cateAction from '../../store/cateAction';


class Catelist extends Component {

    constructor(props) {
        super();
        this.state = {
            pages: 1,
            rej: true,
            open: false
        }
        this.scrollFn = this.scrollFn.bind(this);
        this.onOpenChange = this.onOpenChange.bind(this)
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
        }



    }
    scrollFn() {
        let a = document.querySelector('.categoods');
        let b = document.querySelector('.goodslist');
        if (this.state.rej && (a.scrollTop + document.documentElement.clientHeight) >= (b.offsetHeight+80)) {//关闭开关
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
                this.setState(this.state = { rej: true });
            })
        }
    }
    componentDidMount() {
        let a = document.querySelector('.categoods');
        a.addEventListener('scroll', this.scrollFn, true);
    }
    componentWillUnmount() {
        let a = document.querySelector('.categoods');
        a.removeEventListener('scroll', this.scrollFn, true);
        this.scrollFn = null
    }
    Dressing() {
        let _record = this.props.cateGoodsList.goods;
        switch (this.props.cateGoodsList.status) {
            case '价格':
                return _record.sort((a, b) => {
                    return a.cprice - b.cprice
                })
            case '销量':
                return _record.sort((a, b) => {
                    return parseInt(a.inventory) - parseInt(b.inventory)
                })
            case '上新':
                return _record.sort((a, b) => {
                    return parseInt(a.start_time) - parseInt(b.start_time)
                })
            case '推荐':
                return _record.sort((a, b) => {
                    return parseInt(b.end_time) - parseInt(a.end_time)
                })
            default: return this.props.cateGoodsList.goods;
        }
    }
    onOpenChange = (...args) => {
        console.log(args);
        this.setState({ open: !this.state.open });
    }
    render() {
        const sidebar = (<List>
            <div className="filter_title">筛选</div>
            <div className="filter_only">
                <div className="only_item">会员专属</div>
                <div className="only_item">卷皮优选</div>
                <div className="only_item">卷皮直发</div>
            </div>
            <div className="price_title">价格区间</div>
            <div className="price_input">
                <input type="number" placeholder="最低价" className="low"/>
                <div className="line"></div>
                <input type="number" placeholder="最高价" className="high"/>
            </div>
            <div className="category">分类</div>
            <div className="categorys">
                <div>女士连衣裙</div>
            </div>
            <div className="filter_bnt">
                <div className="reset">重置</div>
                <div className="ensure">确定</div>
            </div>
        </List>);
        let arr_sort = this.Dressing();
        return (
            <div className="listbox">
                {/* 类目筛选栏 */}
                <Catexuan drawer={this.onOpenChange.bind(this)}/>
                {/* //类目商品表 */}
                <Drawer
                    className="my-drawer"
                    style={{ minHeight: document.documentElement.clientHeight }}
                    enableDragHandle
                    contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
                    sidebar={sidebar}
                    open={this.state.open}
                    position={'right'}
                    onOpenChange={this.onOpenChange}
                    touch={false}
                >
                    <div className="categoods" >
                        <ul className="goodslist">
                            {
                                arr_sort.map((item) => {
                                    return (
                                        <li key={item.id ? item.id : item.goods_id} id={item.goods_id}>
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
                </Drawer>

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