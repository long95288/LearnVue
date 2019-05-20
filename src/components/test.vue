<template>
    <div id="test">
        这是测试内嵌路由界面
        学习axios
        <el-button @click="clickbtn" size="medium">发送请求</el-button>
        <el-button @click="clickbtn2" size="medium">发送第二个请求</el-button>
        <p>
            {{ text }}
        </p>
        <img :src="img"/>
    </div>
</template>
<script>
import axios from 'axios';
import qs from 'qs';
import {get,post} from '@/utils/api';

// 判定开发模式
if (process.env.NODE_ENV == 'development')
{
    console.log('开发模式');
    // axios.defaults.baseURL = '/api';
}else if (process.env.NODE_ENV == 'debug')
{
    // axios.defaults.baseURL = 'http://';
}else if (process.env.NODE_ENV == 'production')
{
    // axios.defaults.baseURL = 'http://111.231.133.2229:8080/testServelet';
}
// 设置头部信息
axios.defaults.headers.post['Content-type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 设置全局超时时间
axios.defaults.timeout = 10000;

// 设置请求拦截
// axios.interceptors.request.use((config) => {
//     // 判断请求
//     return config;
// },(error) => {
//     // 请求出错
//     return Promise.reject(error);
// });

// 响应拦截
// axios.interceptors.response.use(
// (response) =>{
//     if(response.statu === 200)
//     {
//         console.log(response.data);
//     }
//     else{

//     }
// },
// (error)=>{
//     // 处理响应出错
//     return Promise.reject(error);
// });


export default {
    data(){
        return {
            text: "测试文件",
            img: '',
        }
    },
    methods: {
        clickbtn(){
            console.log('点击了按钮');
            // 请求成功
            axios.post('http://111.231.133.229:8888/LongReturnData/ReturnMyCard')
            .then( re =>{
                var data = re.data;
                data.forEach(element => {
                    console.log(element.headimg);
                    this.img = element.headimg;
                });
                console.log(re.data);
                this.text = re.data;
            })
            .catch( err => {
                console.log(err);
            });
            //console.log(resp);
        },
        clickbtn2(){
            //post('http://111.231.133.229:8888/LongReturnData/ReturnMyCard');

        }
    }
}
</script>
<style>

</style>


