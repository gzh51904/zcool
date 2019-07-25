import React, { Component } from 'react';

import { Tabs, Badge } from 'antd-mobile';
import axios from 'axios';

import { get } from '../../request.js';
import List from '../home-List/List';

import './goods.scss';

class Goods extends Component {
    constructor() {
        super();
        this.state = {
            tabs: [
                { title: <Badge>精选专场</Badge> },
                { title: <Badge>精选单品</Badge> },
            ],
            database1: [],//请求回来的数据
            database2: [],
            goto: 1,//判断切换了哪个选项卡
            page1: { num: 1 },
            page2: { num: 1 },
            send: { bool: true },//是否允许请求
            location1: { to: 654 }, //记录滚动条位置
            location2: { to: 654 }
        }
        this.scrollFn = this.scrollFn.bind(this);
        this.goto = this.goto.bind(this);
    }
    async componentDidMount() {//挂在后请求数据
        //在这里拿到goods组件传过来的值进行请求
        let data1 = await get('https://webservice.juanpi.com/api/getGoods', {
            params: {
                page: 1,
                zy_ids: 'p8_c4_l4',
                app_name: 'zhe',
                catname: 'tab_hpzc',
                flag: 'tab_hpzc'
            }
        });
        let data2 = await get('https://webservice.juanpi.com/api/getGoods', {
            params: {
                page: 1,
                zy_ids: 'p8_c4_l4',
                app_name: 'zhe',
                catname: 'tab_hpdp',
                flag: 'tab_hpdp'
            }
        });
        this.setState(this.state.database = data1.data.data.goods);
        this.setState(this.state.database1 = data1.data.data.goods);
        this.setState(this.state.database = data2.data.data.goods);
        this.setState(this.state.database2 = data2.data.data.goods);
        //监听鼠标滚动
        let a = document.querySelector('.am-tabs-pane-wrap');
        a.addEventListener("scroll", this.scrollFn, true);
    }
    async scrollFn() {
        let a = document.querySelector('.am-tabs-pane-wrap');
        
        if (a.scrollHeight - 618 <= a.scrollTop && this.state.send.bool) {
            //关闭滚动事件  节流
            this.setState(this.state.send = { bool: false });
            //到达零界点渲染新的商品
            let gotos = this.state.goto;
            if (gotos === 1) {//判断在哪个选项卡
                let page1 = this.state.page1.num + 1;//页数++
                this.setState(this.state.page1 = { num: page1 });
                let data = await get('https://webservice.juanpi.com/api/getGoods', {
                    params: {
                        page: page1,
                        zy_ids: 'p8_c4_l4',
                        app_name: 'zhe',
                        catname: 'tab_hpzc',
                        flag: 'tab_hpzc'
                    }
                });
                let db = this.state.database;
                this.setState(this.state.database = [...db, ...data.data.data.goods]);
                this.setState(this.state.database1 = [...db, ...data.data.data.goods]);
            } else {
                let page2 = this.state.page2.num + 1;
                this.setState(this.state.page2 = { num: page2 })
                let data = await get('https://webservice.juanpi.com/api/getGoods', {
                    params: {
                        page: page2,
                        zy_ids: 'p8_c4_l4',
                        app_name: 'zhe',
                        catname: 'tab_hpdp',
                        flag: 'tab_hpdp'
                    }
                });
                console.log(data);
                let db = this.state.database;
                this.setState(this.state.database = [...db, ...data.data.data.goods]);
                this.setState(this.state.database2 = [...db, ...data.data.data.goods]);
            }
            //重新开放请求
            this.setState(this.state.send = { bool: true });
        }
        let tops = document.querySelector('.am-tabs-tab-bar-wrap');
        if (a.scrollTop >= 697) {
            tops.style.position = 'fixed';
            tops.style.top = '0';
        } else {
            tops.style.position = '';
            tops.style.top = '';
        }
    }
    componentWillUnmount() {
        let a = document.querySelector('.am-tabs-pane-wrap');
        a.removeEventListener('scroll', this.scrollFn, true);//要移出监听，第二个参数是函数不能带参数，带参数则表示不同函数。
    }
    goto(index) {
        let indexs = index + 1;
        this.setState(this.state.goto = { goto: indexs });//设置目前在哪个选项卡;
        //设置滚动条位置;
        let a = document.querySelector('.am-tabs-pane-wrap');
        if (indexs == 1) {//存储滚动条
            this.setState(this.state.location2 = { to: a.scrollTop });
            a.scrollTo(0, this.state.location1.to);
        } else {
            this.setState(this.state.location1 = { to: a.scrollTop });
            a.scrollTo(0, this.state.location2.to);
        }
    }
    render() {
        return (<div className="goods">
            <div className="goods_tab">
                <Tabs tabs={this.state.tabs}
                    initialPage={0}
                    tabBarActiveTextColor={"#ff464e"}
                    tabBarInactiveTextColor={"#333"}
                    onTabClick={(tab, index) => { this.goto(index) }}
                >
                    <div className="goods_zhuanchang" style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                        <List database={this.state.database1} />
                    </div>
                    <div className="goods_danpin" style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                        <List database={this.state.database2} />
                    </div>
                </Tabs>
            </div>
        </div>)
    }
}

export default Goods;