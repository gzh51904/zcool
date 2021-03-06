import React, { Component } from 'react';

import { Route } from 'react-router-dom';
import { TabBar } from 'antd-mobile';

import './Index.scss';

import Home from './Home';
import Car from './Car';
import Classify from './Classify';
import Mine from './Mine';

class Indexs extends Component {
    constructor(props) {
        super();
        this.state = {
            selectedTab: 'blueTab',
            hidden: false,
        }
    }
    componentDidMount(){
        console.log(this.props);
        
    }

           //获取Cookie的方法
           getCookie(name) {
            var str = document.cookie;
            var arr = str.split("; ");
            for (var i = 0; i < arr.length; i++) {
                //console.log(arr[i]);
                var newArr = arr[i].split("=");
                if (newArr[0] == name) {
                    return newArr[1];
                }
            }
        }
    render() {
        let guser = this.getCookie('username');
        return (
            <>
            <div id="content" style={{paddingBottom:'50px'}}>
                <Route path="/indexs/home" component={Home} />
                <Route path="/indexs/classify" component={Classify} />
                <Route path="/indexs/car" component={Car} />
                <Route path="/indexs/mine" component={Mine} />
            </div>
            <div style={{ position: 'fixed', width: '100%', left:0,bottom: 0, zIndex: 99999 }}>
                <TabBar
                    unselectedTintColor="#333333"
                    tintColor="#ff464e"
                    barTintColor="white"
                    tabBarPosition="bottom"
                    hidden={this.state.hidden}
                    prerenderingSiblingsNumber={0}
                    noRenderContent={true}
                >
                    <TabBar.Item
                        title="首页"
                        key="Life"
                        icon={<div style={{
                            width: '30px',
                            height: '30px',
                            background: 'url(https://goods4.juancdn.com/bao/171127/6/0/5a1bce9a8150a16b4e766a8d_72x72.png) center center /  21px 21px no-repeat'
                        }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '30px',
                            height: '30px',
                            background: 'url(http://s2.juancdn.com/bao/171127/7/0/5a1bce9f8150a16b8658e657_72x72.png) center center /  21px 21px no-repeat'
                        }}
                        />
                        }
                        selected={this.props.location.pathname === '/indexs/home'}
                        onPress={() => {
                            this.props.history.push('/indexs/home');
                            this.setState({
                                selectedTab: 'blueTab',
                            });
                        }}
                        data-seed="logId"
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '30px',
                                height: '30px',
                                background: 'url(https://goods5.juancdn.com/bao/171127/9/6/5a1bcef08150a176c87f92be_72x72.png) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '30px',
                                height: '30px',
                                background: 'url(https://goods7.juancdn.com/bao/171127/c/3/5a1bcef5a9fcf842f140cb1d_72x72.png) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        title="分类"
                        key="Koubei"
                        selected={this.props.location.pathname === '/indexs/classify'}
                        onPress={() => {
                            this.props.history.push('/indexs/classify');
                            this.setState({
                                selectedTab: 'redTab',
                            });
                        }}
                        data-seed="logId1"
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '30px',
                                height: '30px',
                                background: 'url(http://s2.juancdn.com/bao/170411/3/a/58ecaebaa43d1f6f166e6882_72x72.png) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '30px',
                                height: '30px',
                                background: 'url(https://goods4.juancdn.com/bao/170411/7/3/58ecaebba43d1f5e6b2f0d02_72x72.png) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        title="购物车"
                        key="Friend"
                        selected={this.props.location.pathname === '/car'}
                        onPress={() => {
                            if(guser){
                                this.props.history.push('/car');
                                this.setState({
                                    selectedTab: 'greenTab',
                                });
                            }else{
                                this.props.history.push('/indexs/mine');
                            }
                      
                        }}
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<div style={{
                            width: '30px',
                            height: '30px',
                            background: 'url(http://s2.juancdn.com/bao/170411/9/7/58ecaec4a43d1f5e7c6dc860_72x72.png) center center /  21px 21px no-repeat'
                        }}
                        />}
                        selectedIcon={<div style={{
                            width: '30px',
                            height: '30px',
                            background: 'url(https://goods1.juancdn.com/bao/170411/0/d/58ecaec6a43d1f5e7a188a96_72x72.png) center center /  21px 21px no-repeat'
                        }}
                        />}
                        title="我的卷皮"
                        key="my"
                        selected={this.props.location.pathname === '/indexs/mine'}
                        onPress={() => {
                            this.props.history.push('/indexs/mine');
                            this.setState({
                                selectedTab: 'yellowTab',
                            });
                        }}
                    >
                    </TabBar.Item>
                </TabBar>
            </div>
            </>)
    }
}

export default Indexs;