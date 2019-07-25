import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import '../../static/iconfont.css';
import './search.scss';

class Search extends Component {
    constructor(props){
        super();
        this.state = {

        }
        this.gotoSearch = this.gotoSearch.bind(this);
    }
    gotoSearch(){
        this.props.history.push('/searchpage')
    }
    render() {
        return <div className="search">
            <div className="search_con">
                <a onClick={this.gotoSearch.bind(this)} href="javascript:;" className="search_left">
                    <span className="search_icon"><i className="iconfont icon-sousuo"></i></span>
                    <span className="search_img"><img src="http://s2.juancdn.com/bao/170926/8/2/59ca3863a9fcf823cd42cfcb_84x60.png" alt="a"/></span>
                    <span className="search_txt">搜索</span>
                </a>
                <a className="search_right" href="javascript:;">
                    <img src="https://goods3.juancdn.com/bao/170421/4/9/58f9f3bca43d1f15ff678b8c_132x132.png" alt="a"/>
                </a>
            </div>
        </div>
    }
}

Search = withRouter(Search);
export default Search;