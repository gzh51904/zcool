import React,{Component} from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import Gdlunbo from '../component/gdComponent/gdlunbo';
import Gdinf from '../component/gdComponent/gdinf';
import Gad from '../component/gdComponent/gad';

import '../static/gdetails.scss';

class Gdetails extends Component{
    constructor(){
        super();
        this.state={
            det:[{
                pic:'https://goods8.juancdn.com/tao/190618/f/f/5d083ff933b089205717504e_800x800.jpg?imageMogr2/quality/88!/format/jpg'
            },{
                pic:'https://goods5.juancdn.com/tao/190618/9/0/5d083fec33b0891bb56b7139_800x800.jpg?iopcmd=convert&Q=88&dst=jpg'
            },{
                pic:'https://goods4.juancdn.com/tao/190618/7/0/5d083feeb6f8ea64316c3940_800x800.jpg?imageMogr2/quality/88!/format/jpg'
            }]
        }
    }

    render(){
        return(
            <div className="gdetails">
            {/* 商品轮播图 */}
            <Gdlunbo/>
            {/* 商品信息 */}
            <Gdinf/>
            {/* 购买选择 */}
            <Gad/>
            </div>
   
        )
    }
}

export default Gdetails;