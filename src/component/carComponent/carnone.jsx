import React,{Component} from 'react';

class Carnone extends Component{
    constructor(props){
        super();
        this.state={

        }
    }

    gotohome(){
        this.props.gotohome();
    }

    render(){
        return(
            <div className="my-bag">
                    <div className="item-empty">
                        <img src="//jp.juancdn.com/jpwebapp_v1/images_v1/shopping/empty-cart.png" alt=""/>
                        <div className="b-title">看到喜欢的就带回家吧</div>
                        <a onClick={this.gotohome.bind(this)} className="bc" href="javascript:;">今日推荐</a>
                    </div>
                </div>
        )
    }

 
}

export default Carnone;