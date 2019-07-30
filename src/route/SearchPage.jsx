import React, { Component } from 'react';
import { SearchBar } from 'antd-mobile';
import './SearchPage.scss';

class SearchPage extends Component {
    constructor() {
        super();
        this.state = {

        }
        this.searchFN = this.searchFN.bind(this);
    }
    searchFN(value){
        let nan = {
            keyword:value,
            user_groupids:'p8_c4_l4_222',
            is_ajax:1
        }
        this.props.history.push({ pathname: "/cate", query: { name: nan,path : 'https://m.juanpi.com/search' } });
    }
    render() {
        return <div className="searchpage">
            <SearchBar
                // value={this.state.value}
                placeholder="搜索商品"
                onSubmit={value =>this.searchFN(value)}//回车
                // onClear={value => console.log(value, 'onClear')}//清除 
                onCancel={value => this.props.history.goBack(-1)}//取消
                // onFocus={() => console.log('onFocus')}//聚焦
                showCancelButton
                onChange={this.onChange}
            />
            <div className="search">
                <p className="search_title">热搜</p>
                <div className="search-history">
                    <p className="search_title">搜索历史</p>
                    <ul className="search_ul">
                        <a href="javascript:;">123</a>
                        <a href="javascript:;">456</a>
                    </ul>
                </div>
            </div>
        </div>
    }
}

export default SearchPage;