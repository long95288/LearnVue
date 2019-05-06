import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/test'
import Test2 from '@/components/test2'
Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/test',
            component:Test
        },
        {
            path:'/test2',
            component:Test2
        }
    ]
})