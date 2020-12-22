import Vue from 'vue'
import VueRouter from 'vue-router'
import Content from '../views/Content.vue'
import CarBuy from '../views/CarBuy.vue'
import UserNews from '../views/UserNews.vue'
import Choosefoods from '../views/Content/BuyFunc/Choosefoods'
import Evaluate from '../views/Content/BuyFunc/Evaluate'
import Business from '../views/Content/BuyFunc/Business'
import UserInfor from '../views/UserNews/UserInfor'
import Where from '../views/UserNews/UserWhere'
import Server from '../views/UserNews/CustomerServer'
import Rule from '../views/UserNews/UserRule'
import Coin from '../views/UserNews/Goldcoinmall'
import Order from '../views/UserNews/OrderNews'
import Login from '../views/Login'
import Register from '../views/Register'

Vue.use(VueRouter)

const routes = [
  //  /login
  {
    path: '/login',
    component: Login,
  },  //  /register
  {
    path: '/register',
    component: Register,
  },  //  /content
  {
    path: '/content',
    component: Content,
    children: [
      {
        path: 'choosefoods',
        component: Choosefoods
      }, {
        path: 'evaluate',
        component: Evaluate
      }, {
        path: 'business',
        component: Business
      }, {
        path: '',
        redirect: '/content/choosefoods'
      }
    ]
  },  //   //carbuy
  {
    path: '/carbuy',
    component: CarBuy
  },  //  /user
   {
    path: '/user',
    component: UserNews,
    children: [
      {
        path: 'infor',
        component: UserInfor,
      },
      {
        path: 'order',
        component: Order,
      },
      {
        path: 'where',
        component: Where,
      },
      {
        path: 'server',
        component: Server,
      },
      {
        path: 'rule',
        component: Rule,
      },
      {
        path: 'coin',
        component: Coin,
      },
      {
        path: '',
        name: 'userInfor',
        redirect: '/user/infor'
      },
    ]
  }, {
    path: '*',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    redirect: '/login'
  },
]

const router = new VueRouter({
  // mode: 'history',
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
