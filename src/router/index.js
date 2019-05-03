import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Page1 from '@/components/Page1'
import Page2 from '@/components/Page2'
import World from '@/components/World'
import Page1inner from '@/components/Page1inner'
import Page2inner from '@/components/Page2inner'
import A from '@/components/A'
import B from '@/components/B'
import C from '@/components/C'
import D from '@/components/D'


Vue.use(Router)
// 路由配置文件
export default new Router({
  routes: [
    {
      path: '/', // 根目录的路由
      component: HelloWorld
    },
    {
      name: 'Hello2',
      path:'/Hello',
      component: HelloWorld,
      children: [ // 配置Hello的内嵌路由
        {
          path: '/Page1',
          component: Page1,
          children: [
            {
              path:'/Page1inner',
              component: Page1inner
            }
          ]
        },
        {
          path: '/Page2',
          component: Page2,
          children: [
            {
              path:'/Page2inner',
              component: Page2inner
            }
          ]
        }
      ]
    },
    {
      name: 'World',
      path: '/World',
      component: World,
      children:[
        {
          path: '',
          components:
          {
            A: A,
            B: B
          },
          children: [
            {
              path: '/C', // 配置C的路由
              components:{
               Aview: C   // C组件渲染到A中name为Aview的router-view中
              } 
            },
            {
              path: '/D',
              components: {
                Aview: D
              } 
            }
          ]
        },
       
      ]
    }
  ]
})
