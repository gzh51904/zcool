export const ADD_TO_CLASSIFY_GOODSLIST = 'ADD_TO_CLASSIFY_GOODSLIST';

export function addClassifyGoods(goods){ //添加商品
    return {
        type : ADD_TO_CLASSIFY_GOODSLIST,
        payload : goods
    }
}

export default {
    addClassifyGoods
}

