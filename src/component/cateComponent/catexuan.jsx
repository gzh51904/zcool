import React,{Component}from 'react';
import {Icon} from 'antd';

import {withRouter} from 'react-router-dom';

import { connect } from 'react-redux';//引入redux
import { bindActionCreators } from 'redux';
import cateAction from '../../store/cateAction';

class Catexuan extends Component{
    constructor(props){
        super();
        this.state = {}
        this._gain = this._gain.bind(this);
    }
    componentDidMount(){
        console.log(this.props)
    }
    _gain(val){
        //改变仓库cate的状态status
        this.props.changeStatus(val);
        console.log(this.props);
    }
    render(){
        return(
    //类目筛选栏
    <div className="goodssortscroll">
        <div className="goodssortscrollbox">
            <div className="goodssort">
                <div className="goodssortbox">
                    <table>
                        <tbody>
                            <tr>
                                <td onClick={this._gain.bind(this,'推荐')} className="all">推荐</td>
                                <td onClick={this._gain.bind(this,'价格')} className="price">
                                    <span>价格</span>
                                    <span className="sorticon"></span>
                                </td>
                                <td onClick={this._gain.bind(this,'销量')} className="sales">销量</td>
                                <td onClick={this._gain.bind(this,'上新')} className="start_time">上新</td>
                                <td onClick={this._gain.bind(this,'筛选')} className="screen">
                                    <span>筛选</span>
                                    <Icon className="sorticon" type="filter" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

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

Catexuan = connect(mapStateToProps, mapDispacthToProps)(Catexuan)
Catexuan = withRouter(Catexuan);
export default Catexuan;