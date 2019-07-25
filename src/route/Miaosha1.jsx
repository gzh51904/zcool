import React, { Component } from 'react';
import './miaosha.scss';
import { get } from '../request';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import miaosahAction from '../store/miaosahAction';


class Miaosha extends Component {
    constructor(props) {
        super();
        this.state = {

        }
        this.scrollFn = this.scrollFn.bind(this);
        this.changeTabs = this.changeTabs.bind(this);
    }
    async componentWillMount() {
        //判断是否有数据了，优化性能，减少请求
        if (!this.props.miaoshaList.goods.length) {
            //store没有数据就请求数据
             //设置到redux仓库存起来
            let data = await get('http://localhost:8081/search', {
                params: {
                    URL: 'https://m.juanpi.com/act/timebuy-xrgoodslist'
                }
            });
            data.data.data.time_tabs.map((item)=>{
                this.props.addmiaosha(item);
            })
            console.log(this.props); //设置到redux仓库存起来
        }
    }
    scrollFn() {//监听滚动
        let b = document.querySelector('.timer_left');
        
        let range = b.scrollLeft;//滚动距离
        //根据页码移动到对应位置
    }
    componentDidMount() {//监听
        let b = document.querySelector('.timer_left');
        b.addEventListener('scroll', this.scrollFn, true);
    }
    componentWillUnmount() {//移除
        let b = document.querySelector('.timer_left');
        b.removeEventListener('scroll', this.scrollFn, true);
    }
    changeTabs(idx){//点击将store的page设置成当前下标
        let pages = this.props.changepage(idx);
        let step = 75;//步长
        let b = document.querySelector('.timer_left');
        b.scrollTo(step*pages.payload,0);
    }
    render() {
        return (
            <>
            <div className="timer">
                <div className="timer_box">
                    <div className="timer_box_ul">
                        <div className="timer_left">
                            <div className="ad">精选好货，底价狂欢</div>
                            {
                                this.props.miaoshaList.goods.map((item,idx) => {
                                    return <div className="timer_item" key={idx} onClick={this.changeTabs.bind(this,idx)}>
                                        <p className="num">10:00</p>
                                        <p className="txt">已开抢</p>
                                    </div>
                                })
                            }
                            <div className="ad">精选好货，底价狂欢</div>
                        </div>
                    </div>
                </div>
                <div className="timer_active_left"></div>
                <div className="timer_active_right"></div>
                <div className="timer_active"></div>
            </div>
            {
                this.props.miaoshaList.goods.map((item,index) => {
                    return <div className="miaosha_tabs" 
                    style={this.props.miaoshaList.page == index? {display:'block'}:{display:'none'}} key={index}>{index}</div>
                })
            }
            </>
        )
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