import React, { Component } from 'react';

import { Tabs, Badge } from 'antd-mobile';
import axios from 'axios';

import List from '../home-List/List'
// import MyContext from '../../context/index';

import './goods.scss';

class Goods extends Component {
    constructor() {
        super();
        this.state = {
            tabs: [
                { title: <Badge>精选专场</Badge> },
                { title: <Badge>精选单品</Badge> },
            ],
            database: [] //请求回来的数据
        }
    }
    componentDidMount() {//挂在后请求数据
        // axios.get('https://webservice.juanpi.com/api/getIndexNavSkip?page=1&zy_ids=p8_c4_l4&app_name=zhe&catname=newest_zhe', {
        // }).then((res) => {
        //     this.setState(this.state.database = res.data.GoodsRes.goods, () => {
        //         console.log(this.state.database);
        //     });
        // }).catch((error) => {
        //     console.log(error)//错误处理 相当于error
        // })
    }
    render() {
        return <div className="goods">
                <div className="goods_tab">
                    <Tabs tabs={this.state.tabs}
                        initialPage={0}
                        // onChange={(tab, index) => { console.log('onChange', index, tab); }}
                        tabBarActiveTextColor={"#ff464e"}
                        tabBarInactiveTextColor={"#333"}
                    >
                        <div className="goods_zhuanchang" style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                            <List />
                        </div>
                        <div className="goods_danpin" style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                            <List />
                        </div>
                    </Tabs>
                </div>
            </div>

    }
}

export default Goods;