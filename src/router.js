import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 3. 创建路由对象

// 导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import Newslist from './components/news/Newslist.vue'
import Newsinfo from './components/news/Newsinfo.vue'
import Photos from './components/Photos/Photos.vue'
import PhotoInfo from './components/Photos/PhotoInfo.vue'
import GoodsList from './components/Goods/goodslist.vue'
import GoodsInfo from './components/Goods/goodsinfo.vue'
import GoodsDesc from './components/Goods/GoodsDesc.vue'
import comment from './components/suncomponents/comment.vue'
// 3. 创建路由对象
var router = new VueRouter({
  routes: [ // 配置路由规则
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomeContainer },
    { path: '/member', component: MemberContainer },
    { path: '/shopcar', component: ShopcarContainer },
    { path: '/search', component: SearchContainer },
    { path: '/home/newslist', component: Newslist },
    { path: '/home/newsinfo/:id', component: Newsinfo },
    { path: '/home/photolist', component: Photos },
    { path: '/home/photoinfo/:id', component: PhotoInfo },
    { path: '/home/goodslist', component: GoodsList },
    { path: '/home/goodsinfo/:id', component: GoodsInfo ,name:'goodsinfo'},
    { path: '/home/goodsdesc/:id', component: GoodsDesc ,name:'goodsdesc'},
    { path: '/home/comment/:id', component: comment ,name:'goodscomment'},


  ],
  linkActiveClass: 'mui-active' // 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
})

// 把路由对象暴露出去
export default router
