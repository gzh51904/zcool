import React,{Component} from 'react';

import {Route,NavLink,Switch,Redirect} from 'react-router-dom'
import '../assets/css/list.scss'

//搜索栏
import ListSearch from '../component/listComponent/list-search';
import Listright from '../component/listComponent/list-right';


class Classify extends Component{
    constructor(){
        super();

        //列表侧栏选项
        this.state={
            menus:[{
                name:'sp1',
                path:'/nvzhuang',
                title:'女装',
                activeStyle:true
            },{
                name:'sp2',
                path:'/male1',
                title:'男装',
                activeStyle:false
            },{
                name:'sp3',
                path:'/female2',
                title:'母婴',
                activeStyle:false
            },{
                name:'sp4',
                path:'/male3',
                title:'鞋子',
                activeStyle:false
            },{
                name:'sp5',
                path:'/female4',
                title:'箱包',
                activeStyle:false
            },{
                name:'sp6',
                path:'/male5',
                title:'居家百货',
                activeStyle:false
            },{
                name:'sp7',
                path:'/female6',
                title:'家电数码',
                activeStyle:false
            },{
                name:'sp8',
                path:'/male7',
                title:'内衣配饰',
                activeStyle:false
            },{
                name:'sp9',
                path:'/female8',
                title:'美妆',
                activeStyle:false
            },{
                name:'sp10',
                path:'/female9',
                title:'运动户外',
                activeStyle:false
            },{
                name:'sp11',
                path:'/female10',
                title:'美食',
                activeStyle:false
            },{
                name:'sp12',
                path:'/female11',
                title:'车品文娱',
                activeStyle:false
            },{
                name:'sp13',
                path:'/female12',
                title:'通讯旅游',
                activeStyle:false
            }]
        }
        this.goto=this.goto.bind(this);

    }
    goto(){
        console.log('sf',this.props)

    }


    render(){
        let {url,path} = this.props.match;
        return <div className="cate-list">
            {/* 搜索栏 */}
            <ListSearch></ListSearch>
            {/* 列表左侧 */}
            <div className="list-left">
            <ul>
                <nav>
              {
                  this.state.menus.map(item=>{
                      return (
                          <NavLink className="liss" to={url+item.path} key={item.name} activeStyle={{color:"#58bc58"}}>{item.title}</NavLink>
                      )
                  })
              }
              </nav>
              
            </ul>
            </div>
            {/* 列表右侧*/}
            {/* <Listright/> */}
            <Switch>
              <Route path={path+ "/nvzhuang"} render={()=>{
                  return <Listright/>
              }}/>
              </Switch>
      
                   
        </div>

        

        
    }
}

export default Classify;