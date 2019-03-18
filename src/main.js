// 入口文件
import Vue from 'vue'
import App from './App.vue'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import router from './router.js'
import moment from 'moment'
import {Header,Swipe,SwipeItem,Button} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.filter('dateFormat',function (dateStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dateStr).format(pattern)
})
import VueResouce from 'vue-resource'
Vue.use(VueResouce)
//设置请求的根路径
Vue.http.options.root = 'http://vue.studyit.io'
new Vue({
  el:'#app',
  render:p=>p(App),
  router
})
