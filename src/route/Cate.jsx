import React, { Component } from 'react';
import { Icon } from 'antd';
import '../static/cate.scss';
import axios from 'axios';
import Mycontext from '../context/index'

import Catehead from '../component/cateComponent/catehead';
import Catexuan from '../component/cateComponent/catexuan';
import Catelist from '../component/cateComponent/catelist';

import {connect} from 'react-redux';//引入redux
import {bindActionCreators} from 'redux';
import cateAction from '../store/cateAction';

class Cate extends Component {

    constructor() {
        super();
        this.state = {
            database1: [],
            page1: { num: 1 },
            send: { bool: true },
            location1: { to: 654 }
        }
    }
2


    gotoback() {
        let { history } = this.props;
        let cate = "/indexs/classify/goo1";
        history.push(cate);
    }

    render() {
        return (
            <div className="cate">
                {/* 类目头部 */}
                <Catehead gotoback={this.gotoback} />
                {/* 类目筛选栏 */}
                <Catexuan />
                {/* 类目商品表 */}
                <Catelist />
            </div>


        )


    }
}

let mapStateToProps = (state,ownprops)=>{
    return {
        cateGoodsList : state.cateGoodsList
    }
}

let mapDispacthToProps = (dispatch,ownprops)=>{
    return bindActionCreators(cateAction,dispatch)
}

Cate = connect(mapStateToProps,mapDispacthToProps)(Cate)

export default Cate;