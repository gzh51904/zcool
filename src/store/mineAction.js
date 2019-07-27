export const CHANGE_TO_MINE = 'CHANGE_TO_MINE';
export const SETNUMBER_TO_MINE = 'SETNUMBER_TO_MINE';
export const REMNUMBER_TO_MINE = 'REMNUMBER_TO_MINE';

export function changeAction(database) {
    return {
        type : CHANGE_TO_MINE,
        payload : database
    }
}

export function setNumAction(number){
    return {
        type :SETNUMBER_TO_MINE,
        payload : number
    }
}

export function removeNum(number){
    return {
        type : REMNUMBER_TO_MINE,
        payload : number
    }
}



export default{
    changeAction,
    setNumAction
}