import React,{Component}from 'react';
import {Icon} from 'antd';
import '../static/cate.scss';

import Catehead from '../component/cateComponent/catehead';
import Catexuan from '../component/cateComponent/catexuan';
import Catelist from '../component/cateComponent/catelist';

class Cate extends Component{

    constructor(){
        super();
        this.state={
            hidden:false
        };
    }

      componentWillMount(){
        //   console.log('dd',this)
        let vus = this.props.location.pathname;
        if(vus === "/cate"){
            
            this.state.hidden=true;
            console.log(this.state.hidden)
            console.log(this.props.location.pathname)
        }else{
            this.state.hidden=false;
        }
      }

    render(){
        return(
            <div className="cate">
    {/* 类目头部 */}
    <Catehead/>
    {/* 类目筛选栏 */}
    <Catexuan/>
    {/* 类目商品表 */}
    <Catelist/>
    </div>

    
)
        

    }
}

export default Cate;