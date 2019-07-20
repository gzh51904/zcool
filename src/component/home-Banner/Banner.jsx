import React, { Component } from 'react';

import './banner.scss';

import { Carousel, WingBlank } from 'antd-mobile';

class Banner extends Component {
    constructor() {
        super();
        this.state = {
            data: ['1', '2', '3'],
        }
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['https://goods8.juancdn.com/jas/190719/e/2/5d316ddcb6f8ea6bf62767bb_1080x418.jpg',
                    'https://goods8.juancdn.com/jas/190715/f/5/5d2c3bbdb6f8ea3a474ee05e_1080x418.png',
                    'https://goods8.juancdn.com/jas/190719/f/a/5d316d1e33b08961bc3f6168_1080x418.jpg',
                    'https://goods4.juancdn.com/jas/190719/6/2/5d317a04b6f8ea70237181b3_1080x418.jpg',
                    'https://goods1.juancdn.com/jas/190717/1/e/5d2ed90bb6f8ea1b0327b908_1080x418.jpg',
                    'https://goods5.juancdn.com/jas/190422/8/2/5cbd6608b6f8ea54ff237631_1080x418.png'],
            });
        }, 100);
    }
    render() {
        return <div className="banner">
            <WingBlank>
                <Carousel
                    autoplay={true}
                    infinite
                    slideWidth={1}
                >
                    {this.state.data.map(val => (
                        <a
                            key={val}
                            href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%' }}
                        >
                            <img
                                src={val}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
            </WingBlank>
        </div>
    }
}

export default Banner;