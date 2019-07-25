import axios from 'axios';

// let instance = axios.create({
//     baseURL: ''
// })

export function get(url = "",params = {}) {
    return axios.get(url,params)
}

export function post(url='',data={},params={}){
    return axios.post(url,data,params)
}

export default {
    get,
    post
}