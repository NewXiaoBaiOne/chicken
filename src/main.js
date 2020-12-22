import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import { Button, Select, Rate } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/iconfont/iconfont.css'

Vue.config.productionTip = false
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Rate.name, Rate);
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
