import React,{Component} from 'react';
import { Icon} from 'antd-mobile';


class ListSearch extends Component{
    constructor(){
        super();
        this.state={
            imgs:'../../assets/img/listsearch.png'
        }
    }
    render(){
        return <div className="searchbox">
            <a href="javascript:;">
            <div className="box-search">
            <input className="sousuo" type="search" placeholder="搜索商品"/>
            </div>
            <button className="search-submit">
                <img className="imgs" src="//jp.juancdn.com/jpwebapp_v1/images_v1/icon/search.png?f4e07c7d-1&sv=449ce9ee" alt=""/>
                {/* <Icon type="search" /> */}
            </button>
            </a>
            

        </div>
    }

}

export default ListSearch;