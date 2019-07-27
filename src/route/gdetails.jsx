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
            skupic:'',
            picobj:''
        }
    }

  async componentDidMount(){
        let {id} = this.props.match.params;
        console.log('fsdfs',this.props)
        let datas = await axios.get('http://localhost:3001/gdetails',{
          params: {
              URL: 'https://webservice.juanpi.com/api/getMemberAboutInfo',
              type: {
                  goods_id:id
              }
          }
          
  
        });
        let dets = datas.data.skudata.info;
        
        this.setState({det:dets});
        let sku = datas.data.skudata.sku
        let skus = datas.data.skudata.sku.length;
        const skuzu = [];
        const skuma = [];
        const skuparr = [];
        const pico = [];
        
        for(let i = 0; i < skus; i++){
            skuzu.push(sku[i].av_zvalue)
            skuma.push(sku[i].av_fvalue)
            skuparr.push(sku[i].av_zpic)
            pico.push(sku[i].av_zpic)
        const skuquarr = Array.from(new Set(skuzu)) 
        const skumaarr = Array.from(new Set(skuma))
        const skupiarr = Array.from(new Set(skuparr))
        const picos =  new Set(pico)
        this.setState({skuqu:skuquarr});
        this.setState({skumas:skumaarr})  
        this.setState({skupic:skupiarr})
        this.setState({picobj:picos})
        }   
        console.log(this.state.skupic)
        
    }
    

    render(){
        return(
            <div className="gdetails">
            {/* 商品轮播图 */}
            <Gdlunbo lunbo={this.state.skupic}/>
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