import React,{Component} from 'react';

import {Route,NavLink,Switch,Redirect} from 'react-router-dom'
import '../assets/css/list.scss'

//搜索栏
import ListSearch from '../component/listComponent/list-search';
import { Tabs, WhiteSpace } from 'antd-mobile';

const tabs = [
    { title: '女装', key: 't1' },
    { title: '男装', key: 't2' },
    { title: '母婴', key: 't3' },
    { title: '鞋子', key: 't4' }
  ];


class Classify extends Component{
    constructor(){
        super();

        //列表侧栏选项
        this.state={
            menus:[{
                name:'sp1',
                path:'/female',
                title:'女装',
                activeStyle:true
            },{
                name:'sp2',
                path:'/male',
                title:'男装',
                activeStyle:false
            },{
                name:'sp3',
                path:'/female',
                title:'母婴',
                activeStyle:false
            },{
                name:'sp4',
                path:'/male',
                title:'鞋子',
                activeStyle:false
            },{
                name:'sp5',
                path:'/female',
                title:'箱包',
                activeStyle:false
            },{
                name:'sp6',
                path:'/male',
                title:'居家百货',
                activeStyle:false
            },{
                name:'sp7',
                path:'/female',
                title:'家电数码',
                activeStyle:false
            },{
                name:'sp8',
                path:'/male',
                title:'内衣配饰',
                activeStyle:false
            },{
                name:'sp9',
                path:'/female',
                title:'美妆',
                activeStyle:false
            },{
                name:'sp10',
                path:'/female',
                title:'运动户外',
                activeStyle:false
            },{
                name:'sp11',
                path:'/female',
                title:'美食',
                activeStyle:false
            },{
                name:'sp12',
                path:'/female',
                title:'车品文娱',
                activeStyle:false
            },{
                name:'sp13',
                path:'/female',
                title:'通讯旅游',
                activeStyle:false
            }]
        }
        this.goto=this.goto.bind(this);

    }
    goto(){
        console.log('sf',this)
        // this="colorRed";
    }


    render(){
        return <div className="cate-list">
            {/* 搜索栏 */}
            <ListSearch></ListSearch>
            {/* 列表左侧 */}               
    <div className='list-left' style={{ height: 200 }}>
  
    <ul className="uls">
    <Tabs className="" tabs={tabs}
      initialPage={'t2'}
      tabBarPosition="left"
      tabDirection="vertical"
      tabBarBackgroundColor="#f9f9f9;"
      tabBarActiveTextColor="red"
      tabBarInactiveTextColor="#333333"
    >
      <div  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
        Content of first tab
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
        Content of second tab
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
        Content of third tab
      </div>
    </Tabs>
    </ul>
 
  </div>
                            {/* <li key={item.name} onClick={this.goto.bind(this)} className={item.activeStyle} className="bc">{item.title}</li> */}
                        
                    
               
       



        </div>
    }
}

export default Classify;