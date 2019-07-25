import React, { Component } from 'react';

import Search from '../component/home-Search/Search';
import Banner from '../component/home-Banner/Banner';
import Nav from '../component/home-Nav/Nav';
import Advert from '../component/home-Advert/Advert';
import Goods from '../component/home-Goods/Goods';


class Home extends Component {
    constructor() {
        super();
        this.state = {

        }
        
    }
    
    render() {
        return <div id="home">
            <header>
                <Search />
            </header>
            <Banner />
            <nav>
                <Nav />
            </nav>
            <main>
                <Advert />
                <Goods />
            </main>
        </div>
    }
}

export default Home;