import Vue from 'vue'
import VueRouter from 'vue-router'
import Content from '../views/Content.vue'
import CarBuy from '../views/CarBuy.vue'
import UserNews from '../views/UserNews.vue'
import Choosefoods from '../views/Content/BuyFunc/Choosefoods'
import Evaluate from '../views/Content/BuyFunc/Evaluate'
import Business from '../views/Content/BuyFunc/Business'

Vue.use(VueRouter)

const routes = [  
  {
    path: '/content',
    component: Content,
    children : [
      {
        path: 'choosefoods',
        component: Choosefoods
      },{
        path: 'evaluate',
        component: Evaluate
      },{
        path: 'business',
        component: Business
      },{
        path: '',
        redirect :'/content/choosefoods'
      }
    ]
  },{
    path: '/carbuy',
    component: CarBuy
  },{
    path: '/user',
    component: UserNews
  },{
    path: '*',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    redirect :'/content/choosefoods'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
