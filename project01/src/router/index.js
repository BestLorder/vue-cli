import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import A from '@/components/A'
import B from '@/components/B'
import C from '@/components/C'
import D from '@/components/D'
import E from '@/components/E'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
    mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default:HelloWorld,
          left:C,
          right:D
      }
    },
      {
          path: '/Hi',
          name: 'Hi',
          component: Hi,
          children:[
              // {path:'/',component:Hi},
              {path:'A/:username',name:'A',component:A},
              {path:'B',name:'B',component:B,alias:'BBB'}
          ]
      },
      {
        path:'/E/:id(\\d*)',
          name:'E',
          component:E,
          beforeEnter:(to,from,next)=>{
            console.log(to);
            console.log(from);
            next();
          }
      },
      {
          path:'/F',
          redirect:'/'
      },
      {
          path:'/goE/:id',
          redirect:'/E/:id'
      },
      {
          path:'*',
          component:Error
      }
  ]
})
