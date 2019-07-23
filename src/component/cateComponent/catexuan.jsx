import React,{Component}from 'react';
import {Icon} from 'antd';

class Catexuan extends Component{
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
                                <td className="all">推荐</td>
                                <td className="price">
                                    <span>价格</span>
                                    <span className="sorticon"></span>
                                </td>
                                <td className="sales">销量</td>
                                <td className="start_time">上新</td>
                                <td className="screen">
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

export default Catexuan;