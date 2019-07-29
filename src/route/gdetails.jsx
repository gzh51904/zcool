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
            picobj:'',
            gid:''
        }
        this.gotoshop=this.gotoshop.bind(this);
        this.gotohome=this.gotohome.bind(this);
        this.gotomine=this.gotomine.bind(this);
    }

  async componentDidMount(){
        let {id} = this.props.match.params;
        // console.log('fsdfs',this.props)
        let datas = await axios.get('http://localhost:3001/gdetails',{
          params: {
              URL: 'https://webservice.juanpi.com/api/getMemberAboutInfo',
              type: {
                  goods_id:id
              }
          }
          
  
        });
        let dets = datas.data.skudata.info;
        this.setState({gid:id});
        
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
        
    }

          //获取Cookie的方法
          getCookie(name) {
            var str = document.cookie;
            var arr = str.split("; ");
            for (var i = 0; i < arr.length; i++) {
                //console.log(arr[i]);
                var newArr = arr[i].split("=");
                if (newArr[0] == name) {
                    return newArr[1];
                }
            }
        }

    gotoshop(){
        let guser = this.getCookie('username');
        if(guser){
            var {history} = this.props;
            var shop = "/car";
            history.push(shop);
            // console.log('dfsfs',this.props.history);
        }
        else{
            var {history} = this.props;
        var mine = "/indexs/mine";
        history.push(mine);
        }
       
    }

    gotohome(){
        var {history} = this.props;
        var home = "/indexs/home";
        history.push(home);
        // console.log('dfsfs',this.props.history);
    }

    gotomine(){
        var {history} = this.props;
        var mine = "/indexs/mine";
        history.push(mine);
        // console.log('dfsfs',this.props.history);
    }


    

    render(){
        return(
            <div className="gdetails">
            {/* 商品轮播图 */}
            <Gdlunbo lunbo={this.state.skupic}/>
            {/* 商品信息 */}
            <Gdinf data={this.state.det}/>
            {/* 购买选择 */}
            <Gad
            gotomine={this.gotomine}
            gotoshop={this.gotoshop}
            gotohome={this.gotohome}
            gid={this.state.gid}
            data={this.state.det} 
            yanse={this.state.skuqu} 
            mashu={this.state.skumas}
            pics={this.state.skupic}/>
            </div>
   
        )
    }
}

export default Gdetails;