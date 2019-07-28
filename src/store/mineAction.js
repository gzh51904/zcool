export const CHANGE_TO_MINE = 'CHANGE_TO_MINE';
export const SETNUMBER_TO_MINE = 'SETNUMBER_TO_MINE';
export const REMNUMBER_TO_MINE = 'REMNUMBER_TO_MINE';

export function changeAction(database) {//改变登录状态
    return {
        type : CHANGE_TO_MINE,
        payload : database
    }
}

export function setNumAction(number){//设置登录用户名
    return {
        type :SETNUMBER_TO_MINE,
        payload : number
    }
}

export function removeNum(number){//移除用户名
    return {
        type : REMNUMBER_TO_MINE,
        payload : number
    }
}



export default{
    changeAction,
    setNumAction
}