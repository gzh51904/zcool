import React,{Component} from 'react';



class Gdinf extends Component{
    constructor(props){
        super();
        this.state={
        
        }
    }

    render(){
      let shuju = this.props.data;
        return(
     
          <section className="p2">
            <div className="infbox">
              <div className="infT">
                <div className="infTL">
                  <span className="infTLS">
                    <span className="Price">
                      <span>￥</span>{shuju.cprice}
                    </span>
                    <span className="cikhXQ">
                      ￥{shuju.oprice}
                    </span>
                  </span>
                  <span className="eCpHpu">包邮</span>
                </div>
                <span className="infTR">{shuju.join_number}</span>
              </div>
              <div className="infB">
                <p className="eiWZln">{shuju.goods_title}</p>
                <button className="djnbop"></button>
              </div>

            </div>
          </section>
    
    
        )
    }
}

export default Gdinf;