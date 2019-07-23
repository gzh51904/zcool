import axios from 'axios';

// let instance = axios.create({
//     baseURL: 'https://webservice.juanpi.com'
// })

export function get(url = "", params = {}) {
    return axios.get(url, params)
}

export function post(url='',data={},params={}){
    return axios.get(url,data,params)
}

export default {
    get,
    post
}