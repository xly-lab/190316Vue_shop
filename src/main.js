// 入口文件
import Vue from 'vue'
import App from './App.vue'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import router from './router.js'
import {Header,Swipe,SwipeItem} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import VueResouce from 'vue-resource'
Vue.use(VueResouce)
new Vue({
  el:'#app',
  render:p=>p(App),
  router
})
