import React,{Component} from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import Gdlunbo from '../component/gdComponent/gdlunbo';
import Gdinf from '../component/gdComponent/gdinf';
import Gad from '../component/gdComponent/gad';
import axios from 'axios';

import '../static/gdetails.scss';

class Gdetails extends Component{
    constructor(){
        super();
        this.state={
            det:'',
            skuqu:'',
            skumas:'',
            skupic:''
        }
    }

  async componentDidMount(){
        let {id} = this.props.match.params;
        let datas = await axios.get('http://localhost:3001/gdetails',{
          params: {
              URL: 'https://webservice.juanpi.com/api/getMemberAboutInfo',
              type: {
                  goods_id:id
              }
          }
  
        });
        
        this.setState({det:datas.data.skudata.info});
        let sku = datas.data.skudata.sku
        let skus = datas.data.skudata.sku.length;
        const skuzu = [];
        const skuma = [];
        const skuparr = [];
        
        for(let i = 0; i < skus; i++){
            skuzu.push(sku[i].av_zvalue)
            skuma.push(sku[i].av_fvalue)
            skuparr.push(sku[i].av_zpic)
        const skuquarr = Array.from(new Set(skuzu)) 
        const skumaarr = Array.from(new Set(skuma))
        const skupiarr = Array.from(new Set(skuparr))  
        this.setState({skuqu:skuquarr});
        this.setState({skumas:skumaarr})  
        this.setState({skupic:skupiarr})
        }   
        console.log('fssf',this.state.skupic)
        
    }

    render(){
        return(
            <div className="gdetails">
            {/* 商品轮播图 */}
            <Gdlunbo tupian={this.state.skupic}/>
            {/* 商品信息 */}
            <Gdinf data={this.state.det}/>
            {/* 购买选择 */}
            <Gad data={this.state.det} 
            yanse={this.state.skuqu} 
            mashu={this.state.skumas}
            pics={this.state.skupic}/>
            </div>
   
        )
    }
}

export default Gdetails;