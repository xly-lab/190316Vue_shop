<template>
  <div class="home_container">

    <!-- 轮播图区域 -->
    <Swiper :LunbotuList="LunbotuList" :isfull="true"/>
    <router-view></router-view>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
        <img src="../../images/menu1(1).png" alt="">
        <div class="mui-media-body">新闻资讯</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
        <img src="../../images/menu2.png" alt="">
        <div class="mui-media-body">图片欣赏</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
        <img src="../../images/menu3.png" alt="">
        <div class="mui-media-body">商品购买</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../images/menu4.png" alt="">
        <div class="mui-media-body">留言反馈</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../images/menu5.png" alt="">
        <div class="mui-media-body">视频专区</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../images/menu6.png" alt="">
        <div class="mui-media-body">联系我们</div></a></li>
    </ul>

  </div>
</template>

<script>
  import Vue from 'vue'
import {Toast} from 'mint-ui'
  import Swiper from '../suncomponents/swiper.vue'
Vue.component(Toast.name,Toast)
export default {
  data(){
    return{
      LunbotuList:[
        {
          url:"http://www.itcast.cn/subject/phoneweb/index.html",
          img:"http://img1.imgtn.bdimg.com/it/u=2735633715,2749454924&fm=26&gp=0.jpg"
        },
        {
          url:"http://www.itcast.cn/subject/phoneweb/index.html",
          img:"http://pic3.huitu.com/res/20120531/721_20120531125839525174_1.jpg"
        }
      ]
    }
  },

  components:{
    Swiper
  }
}

</script>

<style lang="scss" scoped>

  .mui-grid-view.mui-grid-9{
    background-color: white;
    border: none;
    img{
      height: 60px;
      width: 60px;
    }
    .mui-media-body{
      font-size: 12px;
    }
  }

  .mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: none;
  }
</style>
