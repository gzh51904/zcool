import React,{Component} from 'react';

import {Route,NavLink,Switch,Redirect} from 'react-router-dom'
import '../assets/css/list.scss'

//搜索栏
import ListSearch from '../component/listComponent/list-search';

class Classify extends Component{
    constructor(){
        super();

        //列表侧栏选项
        this.state={
            menus:[{
                name:'sp1',
                path:'/female',
                title:'女装'
            },{
                name:'sp2',
                path:'/male',
                title:'男装'
            },{
                name:'sp3',
                path:'/female',
                title:'母婴'
            },{
                name:'sp4',
                path:'/male',
                title:'鞋子'
            },{
                name:'sp5',
                path:'/female',
                title:'箱包'
            },{
                name:'sp6',
                path:'/male',
                title:'居家百货'
            },{
                name:'sp7',
                path:'/female',
                title:'家电数码'
            },{
                name:'sp8',
                path:'/male',
                title:'内衣配饰'
            },{
                name:'sp9',
                path:'/female',
                title:'美妆'
            },{
                name:'sp10',
                path:'/female',
                title:'运动户外'
            },{
                name:'sp11',
                path:'/female',
                title:'美食'
            },{
                name:'sp12',
                path:'/female',
                title:'车品文娱'
            },{
                name:'sp13',
                path:'/female',
                title:'通讯旅游'
            }]
        }

    }


    render(){
        return <div className="cate-list">
            {/* 搜索栏 */}
            <ListSearch></ListSearch>
            {/* 列表左侧 */}
            <div className="list-left">
                <ul className="list-title">
                    {
                        this.state.menus.map(item=>{
                            return <li key={item.name} className="bc">{item.title}</li>
                        })
                    }
                </ul>
            </div>



        </div>
    }
}

export default Classify;