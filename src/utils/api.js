// 请求模块
import axios from 'axios';
import qs from 'qs';

// 设置头部信息
axios.defaults.headers.post['Content-type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

export function get(url,params)
{
    return new Promise((resolve, reject) =>{
        axios.get(url, {
            params: params
        }).then( res => {
            console.log(res);
        }).catch(err => {
            console.log("出错"+err);
        });     
    });
}
export function post(url,params) {
    return new Promise((resolve, reject) =>{
        axios.post(url,qs.stringify(params))
        .then( res => {
            // 
            console.log(res);
        })
        .catch(err =>{
            // 
            console.log(err);
        })
    });
}