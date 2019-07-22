import React,{Component} from 'react';
import { Row, Col } from 'antd';
import { Flex, WhiteSpace } from 'antd-mobile';



class Goo1 extends Component{
    constructor(){
        super();
        this.state={
            menus:[{
                pic:'//s2.juancdn.com/bao/170502/3/2/5908496ca43d1f7f665137b7_200x200.png?iopcmd=convert&dst=webp',
                title:'T恤',
                keys:'s1'
            },
            {
                pic:'//s2.juancdn.com/bao/190528/4/d/5cecb17433b089435d52d0ab_200x200.png?iopcmd=convert&dst=webp',
                title:'女士裙装',
                keys:'s2'
            },{
                pic:'//s2.juancdn.com/bao/190527/f/b/5cebb63333b08946b820e6dc_200x200.png?iopcmd=convert&dst=webp',
                title:'衬衫雪纺',
                keys:'s3'
            },{
                pic:'//s2.juancdn.com/bao/180510/f/6/5af4305c33b08974b25d97c5_200x200.png?iopcmd=convert&dst=webp',
                title:'休闲裤',
                keys:'s4'
            },{
                pic:'//s2.juancdn.com/bao/190527/5/f/5cebb8a233b0893ffe22ca3e_200x200.png?iopcmd=convert&dst=webp',
                title:'女士外套',
                keys:'s5'
            },{
                pic:'//s2.juancdn.com/bao/190219/f/d/5c6b8188b6f8ea14bc1d2890_200x200.jpg?iopcmd=convert&dst=webp',
                title:'懒人套装',
                keys:'s6'
            }]
        }
    }
    render(){
  
        return (
            <div className="listright">
        <div className="wraper">
            <div className="third-cate">
                {
                    this.state.menus.map(item=>{
                        return(
                    
                            <div  key={item.title} className="catesecond">
                                <a  href="javascript:;">
                           <img className="imgs" src={item.pic} alt=""/>
                           <span>{item.title}</span>
                           </a>
                           </div>
                         
                           
                        )
                    })
                    
                }
                  <div className="catebottom"></div>
            </div>
            
           
         
        
           
        </div>
    </div>

    
        )      
    }

}

export default Goo1;