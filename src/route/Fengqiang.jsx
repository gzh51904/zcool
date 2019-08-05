import React, { Component } from 'react';

import { get } from '../request';
import { NavBar, Icon } from 'antd-mobile';
import Catelist from '../component/cateComponent/catelist';

import '../static/cate.scss';

class Fengqiang extends Component {
    constructor(){
        super();
        this.state = {
            
        }
        this.clickFn = this.clickFn.bind(this)
    }
    clickFn(){
        this.props.history.goBack(-1);
    }
    render() {
        return <div className="fengqiang" style={{clear:'both'}}>
            <NavBar style={{position : 'relative',zIndex : '999999'}}
                mode="light"
                icon={<Icon onClick={this.clickFn.bind(this)} type="left" style={{ color: '#000' }} />}
                rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '16px', color: '#000' }} />,
                    <Icon key="1" type="ellipsis" style={{ color: '#000' }} />,
                ]}
            >T恤</NavBar>
            <Catelist/>
        </div>
    }
}

export default Fengqiang;