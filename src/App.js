import React,{Component} from 'react';

// import logo from './logo.svg';
import './App.css';
import './static/base.css';
import {Route,Redirect} from 'react-router-dom';

import Home from './route/Home';
import Car from './route/Car';
import Classify from './route/Classify';
import Mine from './route/Mine';
import Cate from './route/Cate';
import Gdetails from './route/gdetails';
import SearchPage from './route/SearchPage';
import Indexs from './route/Indexs';
import Fengqiang from './route/Fengqiang';
import Miaosha from './route/Miaosha';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
      }



    render(){return <div className="App">
            <Route path="/indexs/cate" component={Cate}/>
            <Route path="/indexs/gdetails" component={Gdetails}/>
            <Route path="/searchpage" component={SearchPage}/>
            <Route path="/indexs" component={Indexs}/>
            <Route path="/fengqiang" component={Fengqiang}/>
            <Route path="/miaosha" component={Miaosha}/>
            <Redirect from="/indexs" to="/indexs/home" exact/>
            <Redirect from="/" to="/indexs/home" exact/>
        </div>
    }

    // componentDidUpdate(){
    //     //   console.log(this.props.location.pathname)
    //     // this.state.hidden=true;
    //     let luu =this.props.location.pathname;
    //     if(luu === "/cate"){
    //         console.log(222222)
    //         // console.log(this.props.location.pathname)
    //         this.state.hidden=true;
    //         console.log(this.state.hidden)
    //     }else{
    //         this.state.hidden=false;
    //     }
    //   }

}

export default App;
