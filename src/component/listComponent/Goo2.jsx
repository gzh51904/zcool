import React,{Component} from 'react';
import { Row, Col } from 'antd';
import { Flex, WhiteSpace } from 'antd-mobile';



class Goo2 extends Component{
    constructor(){
        super();
        this.state={
            menus:[{
                pic:'//s2.juancdn.com/bao/190528/7/d/5cecdd8b33b08951d6492de9_200x200.png?iopcmd=convert&dst=webp',
                title:'套装',
                keys:'s1'
            },
            {
                pic:'//s2.juancdn.com/bao/190528/2/a/5cecd8c9b6f8ea5ae1362821_200x200.png?iopcmd=convert&dst=webp',
                title:'T恤',
                keys:'s2'
            },{
                pic:'//s2.juancdn.com/bao/190528/d/e/5cecdc3833b08955c532a6a4_200x200.png?iopcmd=convert&dst=webp',
                title:'男士衬衫',
                keys:'s3'
            },{
                pic:'//s2.juancdn.com/bao/170815/a/9/5992e3d18150a12e9903fc68_200x200.png?iopcmd=convert&dst=webp',
                title:'夹克',
                keys:'s4'
            },{
                pic:'//s2.juancdn.com/bao/171011/7/c/59ddcb028150a1342d541a29_200x200.png?iopcmd=convert&dst=webp',
                title:'卫衣',
                keys:'s5'
            },{
                pic:'//s2.juancdn.com/bao/190528/1/5/5cecd984b6f8ea5ca8567b37_200x200.png?iopcmd=convert&dst=webp',
                title:'POLO衫',
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

export default Goo2;