import React,{Component} from 'react';
import { Carousel, WingBlank } from 'antd-mobile';


class Gdlunbo extends Component{
    constructor(){
        super();
        this.state={
            det:[{
                pic:'https://goods8.juancdn.com/tao/190618/f/f/5d083ff933b089205717504e_800x800.jpg?imageMogr2/quality/88!/format/jpg'
            },{
                pic:'https://goods5.juancdn.com/tao/190618/9/0/5d083fec33b0891bb56b7139_800x800.jpg?iopcmd=convert&Q=88&dst=jpg'
            },{
                pic:'https://goods4.juancdn.com/tao/190618/7/0/5d083feeb6f8ea64316c3940_800x800.jpg?imageMogr2/quality/88!/format/jpg'
            }]
        }
    }

    render(){
        return(
        
                <section className="p1">
                    <div className="gdMLpp">
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
                src={item.pic}
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

export default Gdlunbo;