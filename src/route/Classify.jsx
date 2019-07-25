<<<<<<< HEAD
import React,{Component} from 'react';

class Classify extends Component{
    render(){
        return (<div>Classify</div>
        
        )
        
    }
}

=======
import React,{Component} from 'react';

import {Route,NavLink,Switch,Redirect} from 'react-router-dom'
import '../assets/css/list.scss'

//搜索栏
import ListSearch from '../component/listComponent/list-search';
import Goo1 from '../component/listComponent/Goo1';
import Goo2 from '../component/listComponent/Goo2';

class Classify extends Component{
    constructor(){
        super();

        //列表侧栏选项
        this.state={
            menus:[{
                name:'sp1',
                path:'/goo1',
                title:'女装',
                activeStyle:true
            },{
                name:'sp2',
                path:'/goo2',
                title:'男装',
                activeStyle:false
            },{
                name:'sp3',
                path:'/goo3',
                title:'母婴',
                activeStyle:false
            },{
                name:'sp4',
                path:'/goo4',
                title:'鞋子',
                activeStyle:false
            },{
                name:'sp5',
                path:'/goo5',
                title:'箱包',
                activeStyle:false
            },{
                name:'sp6',
                path:'/goo6',
                title:'居家百货',
                activeStyle:false
            },{
                name:'sp7',
                path:'/goo7',
                title:'家电数码',
                activeStyle:false
            },{
                name:'sp8',
                path:'/goo8',
                title:'内衣配饰',
                activeStyle:false
            },{
                name:'sp9',
                path:'/goo9',
                title:'美妆',
                activeStyle:false
            },{
                name:'sp10',
                path:'/goo10',
                title:'运动户外',
                activeStyle:false
            },{
                name:'sp11',
                path:'/goo11',
                title:'美食',
                activeStyle:false
            },{
                name:'sp12',
                path:'/goo12',
                title:'车品文娱',
                activeStyle:false
            },{
                name:'sp13',
                path:'/goo13',
                title:'通讯旅游',
                activeStyle:false
            }]
        }
        this.goto=this.goto.bind(this);

    }



    goto(){
        // console.log('sf',this.props)
        

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
                         
                          <NavLink className="wenzi" to={url+item.path} key={item.name} style={{color:"#333"}} activeStyle={{color:"#FF464E",background:"#FFF",border:"none",borderLeft:"2px solid #FF464E"}}>{item.title}</NavLink>
                          
                      )
                  })
              }
              </nav>
              
            </ul>
            </div>
            {/* 列表右侧*/}
            {/* <Listright/> */}
            <Switch>
              <Route path={path+ "/goo1"} component={Goo1}/>
              <Route path={path+ "/goo2"} component={Goo2}/>
              <Route path={path+ "/goo3"} component={Goo1}/>
              <Route path={path+ "/goo4"} component={Goo2}/>
              <Route path={path+ "/goo5"} component={Goo1}/>
              <Route path={path+ "/goo6"} component={Goo2}/>
              <Route path={path+ "/goo7"} component={Goo1}/>
              <Route path={path+ "/goo8"} component={Goo2}/>
              <Route path={path+ "/goo9"} component={Goo1}/>
              <Route path={path+ "/goo10"} component={Goo2}/>
              <Route path={path+ "/goo11"} component={Goo1}/>
              <Route path={path+ "/goo12"} component={Goo2}/>
              <Route path={path+ "/goo13"} component={Goo1}/>
              </Switch>
      
                   
        </div>

        

        
    }
}

>>>>>>> f879e2e6609ae8fc0d04ab0dcb2a4da9fb24a15a
export default Classify;