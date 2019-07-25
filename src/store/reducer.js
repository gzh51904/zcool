import {ADD_TO_MIAOSHA,CHANGE_TO_MIAOSHA_PAGE} from './miaosahAction';//秒杀页

//初始化仓库
let initStore = {
    miaoshaGoodsList : {//秒杀页商品数据
        goods : [],//商品数据
        page : 1//目前显示页面
    },  
}
let reducer = (state=initStore,action) => {
    switch(action.type){
        case ADD_TO_MIAOSHA://添加秒杀页商品数据
            return {
                ...state,
                miaoshaGoodsList : {
                    ...state.miaoshaGoodsList,
                    goods:[action.payload,...state.miaoshaGoodsList.goods]
                }
            }
        case CHANGE_TO_MIAOSHA_PAGE:
            return {
                ...state,
                miaoshaGoodsList : {
                    ...state.miaoshaGoodsList,
                    page : action.payload
                }
            }
        default :
            return state;
    }

}

export default reducer;