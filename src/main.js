// 入口文件
import Vue from 'vue'
import App from './App.vue'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import lazyload from 'vue-lazyload'
import loading from './images/loading.gif'
import router from './router.js'
import moment from 'moment'
import './lib/mui/js/mui.js'
import {Header,Swipe,SwipeItem,Button,Switch} from 'mint-ui'
import 'mint-ui/lib/switch/index.js'
import Vuex from 'vuex'
Vue.use(Vuex);
Vue.component(Header.name,Header);
Vue.component(Switch.name, Switch);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.filter('dateFormat',function (dateStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dateStr).format(pattern)
})
import VueResouce from 'vue-resource'
Vue.use(VueResouce)
Vue.use(lazyload,{
  loading
})
import VuePreview from 'vue-preview'
// defalut install
Vue.use(VuePreview)
Vue.use(VuePreview, {
  mainClass: 'pswp--minimal--dark',
  barsSize: {top: 0, bottom: 0},
  captionEl: false,
  fullscreenEl: false,
  shareEl: false,
  bgOpacity: 0.85,
  tapToClose: true,
  tapToToggleControls: false
})
// var Cart = JSON.parse(localStorage.getItem('car'))||'[]';
var store = new Vuex.Store({
  state:{
    good:[],
    cart:[],
    goodLsit:[],
    number:0
  },
  mutations:{
    addTocart(state,goodsInfo){
      var flag = false;
      if(state.cart)
      {
        state.cart.some(item=>{
          if(item.id===goodsInfo.id){
            item.count+=parseInt(goodsInfo.count)
            flag=true;
            return true
          }
        });
        if(!flag){
        state.cart.push(goodsInfo)
        }
      }
      else state.cart.push(goodsInfo)

      // localStorage.setItem('car',JSON.stringify(state.cart))
    },
    addGoodList(state,goodList){
      state.goodLsit=goodList
    },
    changeNumber(state,number){
      state.number=number
    },
    updataGoodInfo(state,goodinfo){
      state.cart.some(item=>{
        if(item.id===goodinfo.id){
          item.count=parseInt(goodinfo.count)
          return true
        }
      })
    }
  },
  getters:{
    getAllCount(state){
      var a =0
      if(state.cart){
        for(var i= 0;i<state.cart.length;i++){
          a+=state.cart[i].count
        }
      }
      return a
    }
  }
})

//设置请求的根路径
Vue.http.options.root = 'http://vue.studyit.io'
Vue.http.options.emulateHSON = true
new Vue({
  el:'#app',
  render:p=>p(App),
  router,
  store
})
