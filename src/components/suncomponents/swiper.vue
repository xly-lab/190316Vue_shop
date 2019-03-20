<template>
    <div>
      <!-- 轮播图区域 -->
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(lunbotu ,index) in LunbotuList ":key="index">
          <a :href="lunbotu.url"><img :src="lunbotu.img" alt="" :class="{'full':isfull}"></a>
        </mt-swipe-item>

      </mt-swipe>
    </div>
</template>

<script>
    export default {
      props:{
        LunbotuList:Array,
        isfull:Boolean
      }
    }

</script>

<style lang="scss" scoped>
  .mint-swipe{
    height: 200px;
    .mint-swipe-item{
      text-align: center;
      a{
        text-align: center;
        img{

          height: 100%;
          background-size: cover;
        }
      }
    }
  }
  .full{
    width: 100%;
  }
</style>
