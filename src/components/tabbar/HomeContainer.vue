<template>
  <div>

    <!-- 轮播图区域 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(lunbotu ,index) in LunbotuList ":key="index">
        <a :href="lunbotu.url"><img :src="lunbotu.img" alt=""></a>
      </mt-swipe-item>

    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../images/menu1(1).png" alt="">
        <div class="mui-media-body">新闻资讯</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../images/menu2.png" alt="">
        <div class="mui-media-body">图片欣赏</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../images/menu3.png" alt="">
        <div class="mui-media-body">商品购买</div></a></li>
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
Vue.component(Toast.name,Toast)
export default {
  data(){
    return{
      LunbotuList:[
        {
          url:"http://www.itcast.cn/subject/phoneweb/index.html",
          img:"http://ofv795nmp.bkt.clouddn.com/vuelogobanner1.jpg"
        },
        {
          url:"http://www.itcast.cn/subject/phoneweb/index.html",
          img:"http://ofv795nmp.bkt.clouddn.com/vuelogobanner2-1.jpg"
        }
      ]
    }
  },
}

</script>

<style lang="scss" scoped>
  .mint-swipe{
    margin-top: 40px;
    height: 200px;
    .mint-swipe-item{
      &:nth-child(1){
        background: -webkit-linear-gradient(
        top,white,cyan, #af33ff
        );
      }
      &:nth-child(2){
        background: -webkit-linear-gradient(
          top, #1835ff, #a8e4ff, #ff1b48
        )
      }
    }
  }
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
