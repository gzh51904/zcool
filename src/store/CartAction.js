export const REMOV_FROM_CAR = 'REMOV_FROM_CAR';

export function removeGood({gid,yans,mas}){
    return{
        type:REMOV_FROM_CAR,
        playload:{gid,yans,mas}
    }
}

export default [
    removeGood
]

