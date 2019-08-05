export const REMOV_FROM_CAR = 'REMOV_FROM_CAR';

export function carNumFn(num){
    return{
        type:REMOV_FROM_CAR,
        playload:num
    }
}

export default {carNumFn}

