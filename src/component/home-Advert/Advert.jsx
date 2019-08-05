import React, { Component } from 'react';

import './advert.scss';

class Advert extends Component {
    constructor(){
        super();
        this.state = {
            img1 : require('../../img/adv1.gif'),
        }
    }
    render() {
        return <div className="advert">
            <div className="activity">
                <div>
                    <a href="javascript:;"></a>
                </div>
            </div>
            <div className="recomm">
                <div className="recomm_l">
                    <a href="javascript"></a>
                </div>
                <div className="recomm_r">
                    <a href="javascript" className="recomm_r_t"></a>
                    <a href="javascript" className="recomm_r_b"></a>
                </div>
            </div>
            <div className="zhuanchang">
                <a href="javascript:;"></a>
            </div>
            <div className="advert_title">
                <div>
                    <a href="javascript:;"></a>
                </div>
            </div>
        </div>
    }
}

export default Advert;