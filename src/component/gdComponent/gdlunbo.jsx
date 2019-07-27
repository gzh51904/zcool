import React,{Component} from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import { Icon } from 'antd-mobile';
import {withRouter} from 'react-router-dom';

class Gdlunbo extends Component{
    constructor(props){
     
        super();
        this.state={
          det:[{},{}]
        }
        this.gobacks = this.gobacks.bind(this)
    }

    // componentDidUpdate(){
    //   // console.log(this.props.lunbo.length)
    //  let lubs =  this.props.lunbo.length
    //   for(let i = 0; i < lubs; i++){
    //     this.setState({det:i*'a'})
    //   }

    // }

    gobacks(){
        this.props.history.goBack(-1);
    }
    render(){
      let pist = this.props.lunbo;
        return(
        
                <section className="p1">
                    <div className="gdMLpp">
                        <Icon onClick={this.gobacks.bind(this)} style={{background:'#000',position:'absolute',top:'20px',left:'20px',zIndex:'6666',borderRadius:'20px',opacity:'0.5'}} size={'lg'} type="left" />
      <WingBlank>
        <Carousel
          autoplay={false}
          infinite
          // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          // afterChange={index => console.log('slide to', index)}
        >
          {this.state.det.map((item,idx) => (
            <a
              key={idx}
              // href="javascript:;"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={pist[idx]}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  // this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
                    </div>
               
           

                </section>
        )
    }
}
Gdlunbo = withRouter(Gdlunbo)
export default Gdlunbo;