import {ADD_TO_MIAOSHA,CHANGE_TO_MIAOSHA_PAGE} from './miaosahAction';//秒杀页
import {ADD_TO_CLASSIFY_GOODSLIST} from './classifyAction';
import {SET_TO_CATE,ADD_TO_CATE,CHANGE_TO_STATUS} from './cateAction';

//初始化仓库
let initStore = {
    miaoshaGoodsList : {//秒杀页商品数据
        goods : [],//商品数据
        page : 1//目前显示页面
    },  
    ClassifyGoodList : [],//class页数据
    cateGoodsList : {//cate页数据
        status : '推荐',
        goods : []
    }
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
        case CHANGE_TO_MIAOSHA_PAGE://秒杀页显示页码
            return {
                ...state,
                miaoshaGoodsList : {
                    ...state.miaoshaGoodsList,
                    page : action.payload
                }
            }
        case ADD_TO_CLASSIFY_GOODSLIST ://clasily页面显示分类商品
            return {
                ...state,
                ClassifyGoodList : [...action.payload]
            }
        case SET_TO_CATE : //覆盖cate数据
            return {
                ...state,
                cateGoodsList : {
                    ...state.cateGoodsList,
                    goods : [...action.payload]
                }
            }
        case ADD_TO_CATE : {//添加cate数据
            return {
                ...state,
                cateGoodsList : {
                    ...state.cateGoodsList,
                    goods : [...state.cateGoodsList.goods,...action.payload]
                }
            }
        }
        case CHANGE_TO_STATUS :{
            return {
                ...state,
                cateGoodsList : {
                    ...state.cateGoodsList,
                    status : action.payload
                }
            }
        }
        default :
            return state;
    }

}

export default reducer;