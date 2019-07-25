export const ADD_TO_MIAOSHA = 'ADD_TO_MIAOSHA';
export const CHANGE_TO_MIAOSHA_PAGE = 'CHANGE_TO_MIAOSHA_PAGE';

//这里写自定义修改store方法
export function addmiaosha(goods){
    return {
        type : ADD_TO_MIAOSHA,
        payload : goods
    }
}
export function changepage(qty){//改变当前页码
    return {
        type : CHANGE_TO_MIAOSHA_PAGE,
        payload : qty
    }
}

export default {
    addmiaosha,
    changepage
}