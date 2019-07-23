import React,{Component}from 'react';
import axios from 'axios';

class Catelist extends Component{

    constructor(){
        super();
        this.state={
            datalist:[]
        }
    }

  async  componentWillMount(){
   let {data} =  await axios.get('http://localhost:1904')
      console.log('xxx',data);
   

    }

    render(){
        return(
    //类目商品表
    <div className="categoods">
        <ul className="goodslist">
            <li>
                <a className="goodsa" href="javascript:;">
                    <img src="https://goods4.juancdn.com/bao/170606/6/1/593697e3a43d1f2e7a34d79c_800x800.jpg?imageMogr2/thumbnail/310x310!/quality/88!/format/jpg" alt=""/>
                </a>
                <a className="clickjs" href="javascript:;">
                    <div className="listprice">
                        <span className="pricenew ">
                            <i>￥</i>
                            29
                        </span>
                        <i className="del">¥198</i>
                        <span className="onlytime">上新</span>
                    </div>
                    <h3 className="long"> 妈妈装花色时尚T恤</h3>
                </a>
            </li>

        </ul>

    </div>
)
        

    }
}

export default Catelist;