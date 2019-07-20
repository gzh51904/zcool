import React, { Component } from 'react';

import MyContext from '../../context/index';

import './list.scss';

class List extends Component {
    render() {
        return <div className="list">
                <div className="list_item">
                    <a href="javascript:;">
                        <div className="list_item_content">
                            <div className="list_img">
                                <img src="https://goods7.juancdn.com/goods/190717/d/c/5d2e8d78b6f8ea15aa575cce_800x800.jpg?iopcmd=thumbnail&type=11&height=310&width=310" alt="a" />
                            </div>
                            <div className="list_price">
                                <span className="list_newprice">￥ 89</span><span className="list_oldprice">￥ 399</span>
                            </div>
                            <div className="list_title">气质名媛时尚套装潮</div>
                        </div>
                    </a>
                </div>
            </div>
    }
}

export default List;