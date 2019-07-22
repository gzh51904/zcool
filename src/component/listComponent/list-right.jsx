import React,{Component} from 'react';
import { Row, Col } from 'antd';
import { Flex, WhiteSpace } from 'antd-mobile';



class Listright extends Component{
    constructor(){
        super();
        this.state={
            imgs:'../../assets/img/listsearch.png'
        }
    }
    render(){
        return (
            <div className="list-right">
        <div className="wraper">
       
        
            <div className="third-cate">
     
            <Row gutter={16} justify="center">
            
           
                <Col span={8} className="cate-second">
                <a href="javascript:;">
                <img className="imgs" src="//s2.juancdn.com/bao/170502/3/2/5908496ca43d1f7f665137b7_200x200.png?iopcmd=convert&dst=webp" alt=""/>
                <span>T恤</span>
                </a>
                </Col>

                <Col span={8} className="cate-second">
                <a href="javascript:;">
                <img className="imgs" src="//s2.juancdn.com/bao/170502/3/2/5908496ca43d1f7f665137b7_200x200.png?iopcmd=convert&dst=webp" alt=""/>
                <span>T恤</span>
                </a>
                </Col>

                <Col span={8} className="cate-second">
                <a href="javascript:;">
                <img className="imgs" src="//s2.juancdn.com/bao/170502/3/2/5908496ca43d1f7f665137b7_200x200.png?iopcmd=convert&dst=webp" alt=""/>
                <span>T恤</span>
                </a>
                </Col>
         
            </Row>
            
           
      


            </div>
            
           
         
        
           
        </div>
    </div>

    
        )      
    }

}

export default Listright;