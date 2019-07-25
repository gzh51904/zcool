import React, { Component } from 'react';
import axios from 'axios';
import { array, number } from 'prop-types';

class Catelist extends Component {

    constructor(props) {
        super();
        this.state = {
            datalist: [],
            pages :1
        }
        // this.goto = this.goto.bind(this)
    }

    async  componentDidMount() {
        let { data } = await axios.get('http://localhost:3001/catelist', {
            params: {
                URL: 'https://shop.juanpi.com/gsort',
                type: {
                    key: '%7B%22cdt%22%3A%7B%22is_show_presale%22%3A%220%22%2C%22hot_show_type%22%3A1%2C%22fcate%22%3A%2259%22%2C%22sale_type%22%3A2%7D%2C%22order%22%3A%7B%22show_stime%22%3A%22desc%22%2C%22sales%22%3A%22desc%22%2C%22fav%22%3A%22desc%22%2C%22sort%22%3A%22desc%22%7D%7D',
                    type: 50,
                    zhouyi_ids: 'p8_c4_l4',
                    machining: 'danpin',
                    page: 20,
                    rows: 10,
                    dtype: 'JSONP',
                    price_range: '',
                    cat_threeids: '',
                    filter_id: '',
                    callback: 'gsort_callback'
                }
            }
        })
        let l = '(';
        let r = ')';
        var firstIndex = data.indexOf(l);
        var lastIndex = data.lastIndexOf(r);
        var jsonStr = data.substring(firstIndex, lastIndex + 1);
        var jsonObj = eval("(" + jsonStr + ")");
        console.log(jsonObj);
        var pas = jsonObj.page;
        pas = 1;
        var datalists = jsonObj.list;
        this.state.datalist = datalists;
    }
    // async goto() {
    //     this.setState(this.state = {page : this.state.pages +1})
    //     let pages = this.state.pages;
    //     let { data } = await axios.get('http://localhost:3001/catelist', {
    //         params: {
    //             URL: 'https://shop.juanpi.com/gsort',
    //             type: {
    //                 key: '%7B%22cdt%22%3A%7B%22is_show_presale%22%3A%220%22%2C%22hot_show_type%22%3A1%2C%22fcate%22%3A%2259%22%2C%22sale_type%22%3A2%7D%2C%22order%22%3A%7B%22show_stime%22%3A%22desc%22%2C%22sales%22%3A%22desc%22%2C%22fav%22%3A%22desc%22%2C%22sort%22%3A%22desc%22%7D%7D',
    //                 type: 50,
    //                 zhouyi_ids: 'p8_c4_l4',
    //                 machining: 'danpin',
    //                 page: pages,
    //                 rows: 10,
    //                 dtype: 'JSONP',
    //                 price_range: '',
    //                 cat_threeids: '',
    //                 filter_id: '',
    //                 callback: 'gsort_callback'
    //             }
    //         }
    //     })
    // }
    render() {
        let dbs = this.props.database
        return (
            //类目商品表
            <div className="categoods" >
                <ul className="goodslist">
                    {
                        dbs.map((item) => {

                            return (
                                <li key={item.goods_id}>
                                    <a className="goodsa" href="javascript:;">
                                        <img src={item.pic_url} alt="" />
                                    </a>
                                    <a className="clickjs" href="javascript:;">
                                        <div className="listprice">
                                            <span className="pricenew ">
                                                <i>￥</i>
                                                {item.cprice}
                                            </span>
                                            <i className="del">¥{item.oprice}</i>
                                            <span className="onlytime">上新</span>
                                        </div>
                                        <h3 className="long"> {item.title}</h3>
                                    </a>
                                </li>)
                        })
                    }


                </ul>

            </div>
        )


    }
}

export default Catelist;