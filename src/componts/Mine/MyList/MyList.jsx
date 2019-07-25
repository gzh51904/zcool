import React from 'react'
import './MyList.scss'

function MyList() {
    return(
        <div className="mylist clearfix">
            <a href="javascript:;" className="user-item">
                <span className="my_my">我的优惠卷</span>
            </a>
            <a href="javascript:;"className="user-item "> 
                <span className="my_my" >我的收藏</span>
            </a>
            <a href="javascript:;" className="user-item ">
                <span className="my_my">我的拼团</span>
            </a>
            <a href="javascript:;" className="user-item ">
                <span className="my_my">我的免单券</span>
                <span className="label fr">0张</span>
            </a>
            <a href="javascript:;" className="user-item ">
                <span className="my_my">借钱</span>
                <span className="label fr">新用户免费领1000元</span>
            </a>
        </div>
    )
}



export default MyList