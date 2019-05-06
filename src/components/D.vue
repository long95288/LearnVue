<template>
    <div id="D">
        这是D中的内容
        <p>测试内嵌路由</p>
        <router-link to="test">测试</router-link>
        <router-link to="test2">测试2</router-link>
        <router-view/>
    </div>
</template>
<script>
//import Vue from 'vue'
//import Router from 'vue-router'
//import Test from './test.vue'
//import Test2 from './test2.vue'
//Vue.use(Router)
// var router = new Router({
//     routes:[
//         {
//             path:'/test',
//             component:Test
//         },
//         {
//             path:'/test2',
//             component:Test2
//         }
//     ]
// })
// 引用D文件夹中的路由文件
import router from '@/D/D'
// console.log(router)
//Vue.use(router)
export default {
    router
}
</script>
<style>

</style>
