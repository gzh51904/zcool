import React, { Component } from 'react';

import { get } from '../request';
import { NavBar, Icon } from 'antd-mobile';

class Fengqiang extends Component {
    async componentDidMount() {
        let data = await get('http://localhost:8081/find', {
            params: {
                URL: 'https://shop.juanpi.com/gsort?key=%7B%22cdt%22%3A%7B%22is_show_presale%22%3A%220%22%2C%22hot_show_type%22%3A1%2C%22fcate%22%3A%2259%22%2C%22sale_type%22%3A2%7D%2C%22order%22%3A%7B%22show_stime%22%3A%22desc%22%2C%22sales%22%3A%22desc%22%2C%22fav%22%3A%22desc%22%2C%22sort%22%3A%22desc%22%7D%7D&type=50&zhouyi_ids=p8_c4_l4&machining=danpin&page=1&rows=10&dtype=JSONP&price_range=&cat_threeids=&filter_id=&callback=gsort_callback',
                page: '10'
            }
        });
    }
    render() {
        return <div className="fengqiang">
            <NavBar
                mode="light"
                icon={<Icon type="left" style={{color:'#000'}}/>}
                onLeftClick={() => console.log('onLeftClick')}
                rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '16px',color:'#000'}} />,
                    <Icon key="1" type="ellipsis" style={{color:'#000'}}/>,
                ]}
            >T恤</NavBar>
        </div>
    }
}

export default Fengqiang;