import React,{Component} from 'react';



class ListSearch extends Component{
    render(){
        return <div className="searchbox">
            <a href="javascript:;">
            <div className="box-search">
            <input className="sousuo" type="search" placeholder="搜索商品"/>
            </div>
            <button className="search-submit">
                <img src='' alt=""/>
            </button>
            </a>
            

        </div>
    }

}

export default ListSearch;