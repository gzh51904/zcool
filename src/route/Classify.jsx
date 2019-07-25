import React, { Component } from 'react';

import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import '../assets/css/list.scss'

import { bindActionCreators } from 'redux';//引入redux
import { connect } from 'react-redux';
import classifyAction from '../store/classifyAction';

import { get } from '../request'

//搜索栏
import ListSearch from '../component/listComponent/list-search';
// import Goo1 from '../component/listComponent/Goo1';
// import Goo2 from '../component/listComponent/Goo2';

class Classify extends Component {
    constructor() {
        super();

        //列表侧栏选项
        this.state = {
            act: 0,//控制高亮
        }
        this.changeAct = this.changeAct.bind(this);
        this.goto = this.goto.bind(this);
    }

    async componentWillMount() {
        if (!this.props.ClassifyGoodList.length) {//节流，判断redux是否有数据了
            let data = await get('http://localhost:3001/catelist', {
                params: {
                    URL: 'https://m.juanpi.com/cate/catelist',
                    type: {
                        pf: 8,
                        area: 4,
                        bi: 222,
                        dtype: 'jsonp',
                        _: 1564026892762,
                        callback: 'jsonp1'
                    }
                },
            });
            let l = '(';
            let r = ')';
            var firstIndex = data.data.indexOf(l);
            var lastIndex = data.data.lastIndexOf(r);
            var jsonStr = data.data.substring(firstIndex, lastIndex + 1);
            var jsonObj = eval("(" + jsonStr + ")");
            //将值传到redux仓库存储
            console.log(jsonObj);
            this.props.addClassifyGoods(jsonObj);
        }
    }


    changeAct(index) {//点击切换高亮
        this.setState(this.state = { act: index });
    }
    goto({ id, filt_rule, sort_rule }) {
        let cdt = JSON.parse(filt_rule);
        let order = JSON.parse(sort_rule);
        cdt.fcate = id
        cdt.sale_type = 2
        let a = JSON.stringify(cdt);
        let b = JSON.stringify(order);
        let db = '{"cdt" :' + a + ',"order" :' + b + '}';
        let nan = {
            key: db,
            type: 50,
            zhouyi_ids: 'p8_c4_l4',
            machining: 'danpin',
            rows: 10,
            dtype: 'JSONP',
            price_range: '',
            cat_threeids: '',
            filter_id: '',
            callback: 'gsort_callback'
        }
        this.props.history.push({ pathname: "/indexs/cate", query: { name: nan,path :'https://shop.juanpi.com/gsort'} });
    }
    render() {
        let { url,
            path } = this.props.match;
        return <div className="cate-list">
            {/* 搜索栏 */}
            <ListSearch></ListSearch>
            {/* 列表左侧 */}
            <div className="list-left">
                <ul>
                    <nav>
                        {
                            this.props.ClassifyGoodList.map((item, index) => {
                                return (
                                    // <NavLink className="wenzi" to={url + item.path} key={item.id} id={item.id} style={{ color: "#333" }} activeStyle={{ color: "#FF464E", background: "#FFF", border: "none", borderLeft: "2px solid #FF464E" }}>{item.name}</NavLink>
                                    <li onClick={this.changeAct.bind(this, index)} key={item.id} id={item.id} className={index == this.state.act ? 'color-red' : ''}>{item.name}</li>
                                )
                            })
                        }
                    </nav>
                </ul>
            </div>
            <div className="listright">
                {
                    this.props.ClassifyGoodList.map((item, index) => {
                        return <div key={item.id} className="wraper" style={index == this.state.act ? { display: "block" } : { display: 'none' }}>
                            <div className="third-cate">
                                {
                                    this.props.ClassifyGoodList[index].secondCateList.map((a, idx) => {
                                        return <div onClick={this.goto.bind(this, { id: a.id, filt_rule: a.filt_rule, sort_rule: a.sort_rule })} key={a.id} className="catesecond">
                                            <a href="javascript:;">
                                                <img className="imgs" src={'//s2.juancdn.com' + a.icon + '?iopcmd=convert&dst=webp'} alt="a" />
                                                <span>{a.name}</span>
                                            </a>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    })
                }
                <div className="catebottom"></div>
            </div>

            {/* 列表右侧*/}
            {/* <Listright/> */}
            {/* <Switch>
                <Route path={path + "/goo1"} component={Goo1} />
                <Route path={path + "/goo2"} component={Goo2} />
                <Route path={path + "/goo3"} component={Goo1} />
                <Route path={path + "/goo4"} component={Goo2} />
                <Route path={path + "/goo5"} component={Goo1} />
                <Route path={path + "/goo6"} component={Goo2} />
                <Route path={path + "/goo7"} component={Goo1} />
                <Route path={path + "/goo8"} component={Goo2} />
                <Route path={path + "/goo9"} component={Goo1} />
                <Route path={path + "/goo10"} component={Goo2} />
                <Route path={path + "/goo11"} component={Goo1} />
                <Route path={path + "/goo12"} component={Goo2} />
                <Route path={path + "/goo13"} component={Goo1} />
            </Switch> */}


        </div>




    }
}
let mapStateToProps = (state, ownprops) => {
    //这里写自定义props
    return {
        ClassifyGoodList: state.ClassifyGoodList
    }
}

let mapDispatchToProps = (dispatch, ownprops) => {
    //这里写自定义修改store的方法dispatch
    return bindActionCreators(classifyAction, dispatch)

}

Classify = connect(mapStateToProps, mapDispatchToProps)(Classify);
export default Classify;