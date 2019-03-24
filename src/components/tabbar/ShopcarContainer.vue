<template>
  <div class="shop_container">
    <!--购物车列表-->
    <div class="cart_list">
      <div class="mui-card" >
        <div class="mui-card-content" >
          <div class="mui-card-content-inner" v-for="(cart ,index) in carts" :key="index">
            <mt-switch ></mt-switch>
            <img src="http://img1.imgtn.bdimg.com/it/u=1451277612,507956227&fm=26&gp=0.jpg"
                 alt="">
            <div class="right">
              <h1>{{cart.title}}</h1>
              <div class="right_bot">
                <p class="price">￥{{cart.price}}</p>
                <numbox :cart='cart.count' :id="cart.id"></numbox>
                <p class="delete">删除</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--结算区-->
    <div class="computed_con">
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import numbox from '../Goods/shapcart_numbox.vue'
  export default {
    data(){
      return{
        value:false,
        carts:this.$store.state.cart
      }
    },
    methods:{
      showSwitch(){
        this.value=!this.value
      }
    },
    computed:{

    },
    components:{
      numbox
    }
  }
</script>

<style lang="scss" scoped>
  .shop_container{
    margin-top: 40px;
    background-color: aliceblue;
    overflow: hidden;
    .cart_list{
      .mui-card-content-inner{
        display:flex ;
        align-items: center;
        .right{
          h1{
            font-size: 13px;
            margin: 5px 10px;
          }
          .right_bot{
            display:flex ;
            justify-content: center;
            .price{
              color: red;
              font-weight: bold;
              margin-right: 10px;
            }
            .delete{
              margin-left: 10px;
              font-size: 10px;
            }
          }
        }

      }
      img{
        width: 60px;
        height: 60px;
      }
    }
  }
</style>
