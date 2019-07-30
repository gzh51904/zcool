import React, { Component } from 'react';

import { get } from '../request';
import { NavBar, Icon } from 'antd-mobile';

class Fengqiang extends Component {
    async componentDidMount() {
        let data = await get('http://localhost:3001/find', {
            params: {
                URL: 'https://shop.juanpi.com/gsort',
                type: {
                    key: 'zuihoufengqiang',
                    type: 1,
                    zhouyi_ids: 'p8_c4_l4',
                    machining: 'hotcoupon',
                    page: 1,
                    rows: 10,
                    dtype: 'JSONP',
                    price_range: '',
                    cat_threeids: '',
                    filter_id: '',
                    cm: 1,
                    cm_channel: 4,
                    callback: 'gsort_callback'
                }
            }
        });
        console.log(data);
    }
    render() {
        return <div className="fengqiang">
            <NavBar
                mode="light"
                icon={<Icon type="left" style={{ color: '#000' }} />}
                onLeftClick={() => console.log('onLeftClick')}
                rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '16px', color: '#000' }} />,
                    <Icon key="1" type="ellipsis" style={{ color: '#000' }} />,
                ]}
            >T恤</NavBar>
        </div>
    }
}

export default Fengqiang;