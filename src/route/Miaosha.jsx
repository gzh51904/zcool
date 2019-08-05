import React, { Component } from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';
import './miaosha.scss';

import { get } from '../request';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import miaosahAction from '../store/miaosahAction';

class Miaosha extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    async componentWillMount() {
        //判断是否有数据了，优化性能，减少请求
        if (!this.props.miaoshaList.goods.length) {
            //store没有数据就请求数据
            //设置到redux仓库存起来
            let data = await get('http://120.24.58.161:3001/search', {
                params: {
                    URL: 'https://m.juanpi.com/act/timebuy-xrgoodslist'
                }
            });
            let arrs = data.data.data.time_tabs.reverse();
            arrs.map((item) => {
                this.props.addmiaosha(item);
            }) //设置到redux仓库存起来
        }
    }
    timestampToTime(timestamp) {
        var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var h = this.change(date.getHours()) + ':';
        var m = this.change(date.getMinutes());
        return h + m;
    }
    change(t) {
        if (t < 10) {
            return "0" + t;
        } else {
            return t;
        }
    }
    tabs() {
        let MapGoods = this.props.miaoshaList.goods
        let arr = [];
        MapGoods.map((item) => {
            var timer = this.timestampToTime(item.start_time);
            arr.push({ title: timer + item.tab_txt });
        })
        return arr;
    }
    // renderContent = tab =>
    // (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
    //         <p>Content of {tab.title}</p>
    //     </div>);
    render() {
        return (<div className="miaosha">
            <Tabs swipeable animated tabBarActiveTextColor={'#fff'} tabs={this.tabs()} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={2.5} />
            }>
                {/* {this.renderContent} */}
                {
                    this.props.miaoshaList.goods.map((item, index) => {
                        return <div className="goodsBox" key={item.tab_id}>
                            <ul className="goodsList">
                                {
                                    this.props.miaoshaList.goods[index].goodslist.map((a, idx) => {
                                        //判断是否在已开启
                                        if (item.tab_txt == "已开抢" || item.tab_txt == "抢购中") {
                                            return <li className="goodsItem" key={a.goods_id}>
                                                <a href="javasctipt:;">
                                                    <div className="imgbox">
                                                        <img src={a.pic_url} alt={a.qimi_url} />
                                                    </div>
                                                    <div className="infobox">
                                                        <p className="goods_name">{a.title_long}</p>
                                                        <p className="goods_price">
                                                            <i className="tip">限量价:</i>
                                                            <i className="now_price">￥{a.cprice}</i>
                                                            <i className="goods_old_price">￥{a.oprice}</i>
                                                        </p>
                                                        <p className="progress">
                                                            <i className="cover-bar" style={{width: `${a.progress_info.percent*100}%`}}></i>
                                                            <i className="txt">{a.progress_info.txt}</i>
                                                        </p>
                                                        <span className="buy_btn">{a.mkt_text}</span>
                                                    </div>
                                                </a>
                                            </li>
                                        }else{
                                            return <li className="goodsItem" key={a.goods_id}>
                                                <a href="javasctipt:;">
                                                    <div className="imgbox">
                                                        <img src={a.pic_url} alt={a.qimi_url} />
                                                    </div>
                                                    <div className="infobox">
                                                        <p className="goods_name">{a.title_long}</p>
                                                        <p className="goods_price">
                                                            <i className="tip">限量价:</i>
                                                            <i className="now_price">￥{a.cprice}</i>
                                                            <i className="goods_old_price">￥{a.oprice}</i>
                                                        </p>
                                                        <p className="limit-count">{a.rate_pre_txt}</p>
                                                        <span className="residue_span">{a.person_num}人准备抢</span>
                                                        <span className="collect_btn">{a.mkt_text}</span>
                                                    </div>
                                                </a>
                                            </li>
                                        }

                                    })
                                }
                            </ul>
                        </div>
                    })
                }
            </Tabs>
        </div >)

    }
}

let mapStateToProps = (state, ownprops) => {
    //这里写自定义props
    return {
        miaoshaList: state.miaoshaGoodsList
    }
}

let mapDispatchToProps = (dispatch, ownprops) => {
    //这里写自定义修改store的方法dispatch
    return bindActionCreators(miaosahAction, dispatch)

}

Miaosha = connect(mapStateToProps, mapDispatchToProps)(Miaosha);
export default Miaosha;