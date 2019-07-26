export const SET_TO_CATE = 'SET_TO_CATE' ;
export const ADD_TO_CATE = 'ADD_TO_CATE' ;
export const CHANGE_TO_STATUS = 'CHANGE_TO_STATUS' ;

export function setcateGoods(goods){//覆盖方法
    return {
        type : SET_TO_CATE,
        payload : goods
    }
}

export function addcateGoods(goods){//添加方法
    return {
        type : ADD_TO_CATE,
        payload : goods
    }
}

export function changeStatus(goods){//添加方法
    return {
        type : CHANGE_TO_STATUS,
        payload : goods
    }
}

export default {
    setcateGoods,
    addcateGoods,
    changeStatus
}
