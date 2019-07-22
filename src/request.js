import axios from 'axios';

let instance = axios.create({
    baseURL: 'https://webservice.juanpi.com'
})

export function get(url = "", params = {}) {
    return instance.get(url, params)
}

export function post(url='',data={},params={}){
    return instance.get(url,data,params)
}

export default {
    get,
    post
}