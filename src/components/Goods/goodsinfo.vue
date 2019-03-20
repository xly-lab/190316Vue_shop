<template>
    <div class="goodsinfo-container">
      <!--动画小球-->
      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter">
        <div class="ball" v-show="ballShow" ref="Ball"></div>
      </transition>
      <!-- 商品轮播图区域 -->
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <Swiper :LunbotuList="img_url" :isfull="false"/>
          </div>
        </div>
      </div>


      <!-- 商品购买区域 -->
      <div class="mui-card">
        <div class="mui-card-header">{{good.title|| '没有气不气'}} </div>
        <div class="mui-card-content">
          <div class="mui-card-content-inner extra-inner">
            <p class="price">
              市场价：<del>￥{{good.sell_price|| '没有气不气'}}</del>&nbsp;&nbsp;销售价：<span class="now_price">￥{{good.market_price|| '没有气不气'}}</span>
            </p>
            <p>购买数量:<numbox @getcount="getSelectedCount" :max="good.stock_quantity"></numbox></p>
            <p>
              <mt-button type="primary" size="small" >立即购买</mt-button>
              <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
              <!-- 分析： 如何实现加入购物车时候，拿到 选择的数量 -->
              <!-- 1. 经过分析发现： 按钮属于 goodsinfo 页面， 数字 属于 numberbox 组件 -->
              <!-- 2. 由于涉及到了父子组件的嵌套了，所以，无法直接在 goodsinfo 页面zhong 中获取到 选中的商品数量值-->
              <!-- 3. 怎么解决这个问题：涉及到了 子组件向父组件传值了（事件调用机制） -->
              <!-- 4. 事件调用的本质： 父向子传递方法，子调用这个方法， 同时把 数据当作参数 传递给这个方法 -->
            </p>
          </div>
        </div>
      </div>


      <!-- 商品参数区域 -->
      <div class="mui-card">
        <div class="mui-card-header">商品参数</div>
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <p>商品货号：</p>
            <p>库存情况：{{good.stock_quantity|| '没有气不气'}}件</p>
            <p>上架时间：{{good.add_time|| '没有气不气'}}</p>
          </div>
        </div>
        <div class="mui-card-footer">
          <mt-button type="primary" size="large" plain @click="goDesc(good.id)">图文介绍</mt-button>
          <mt-button type="danger" size="large" plain @click="goComment(good.id)">商品评论</mt-button>
        </div>
      </div>
    </div>
</template>

<script>
  import Swiper from '../suncomponents/swiper.vue'
  import numbox from '../suncomponents/goodsinfo_numbox.vue'
  export default {
      data(){
        return{
            good:this.$route.params.good || '没有气不气',
            selectedCount:1,
          ballShow:false,
            img_url:[
              {
                url:'',
                img:'https://paimgcdn.baidu.com/CF12B6519A4FF238?src=http%3A%2F%2Fms.bdimg.com%2Fdsp-image%2F1382924626.jpg&rz=bxt_2_968_600&v=0'},
              {
                url:'',
                img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1416313143,2626441215&fm=27&gp=0.jpg'
              }
            ]
        }
      },
    methods:{
      goDesc(id) {
        // 点击使用编程式导航跳转到 图文介绍页面
        this.$router.push({ name: "goodsdesc", params: { id } });
      },
      goComment(id) {
        // 点击跳转到 评论页面
        this.$router.push({ name: "goodscomment", params: { id } });
      },
      getSelectedCount(count) {
        // 当子组件把 选中的数量传递给父组件的时候，把选中的值保存到 data 上
        this.selectedCount = count;
        // console.log("父组件拿到的数量值为： " + this.selectedCount);
      },
      addToShopCar() {
        // 添加到购物车
        this.ballShow = !this.ballShow;
      },
      beforeEnter(el) {
        el.style.transform = "translate(0, 0)";
      },
      enter(el, done) {
        el.offsetWidth;

        // 小球动画优化思路：
        // 1. 先分析导致 动画 不准确的 本质原因： 我们把 小球 最终 位移到的 位置，已经局限在了某一分辨率下的 滚动条未滚动的情况下；
        // 2. 只要分辨率和 测试的时候不一样，或者 滚动条有一定的滚动距离之后， 问题就出现了；
        // 3. 因此，我们经过分析，得到结论： 不能把 位置的 横纵坐标 直接写死了，而是应该 根据不同情况，动态计算这个坐标值；
        // 4. 经过分析，得出解题思路： 先得到 徽标的 横纵 坐标，再得到 小球的 横纵坐标，然后 让 y 值 求差， x 值也求 差，得到 的结果，就是横纵坐标要位移的距离
        // 5. 如何 获取 徽标和小球的 位置？？？   domObject.getBoundingClientRect()

        // 获取小球的 在页面中的位置
        const ballPosition = this.$refs.Ball.getBoundingClientRect();
        const badgePosition = document.getElementById('badge').getBoundingClientRect();
        const xDist = badgePosition.left - ballPosition.left;
        const yDist = badgePosition.top - ballPosition.top;


        el.style.transform = `translate(${xDist}px, ${yDist}px)`;
        el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.18)";
        done();
      },
      afterEnter(el) {
        this.ballShow = !this.ballShow;
      },
    },
      components:{
        Swiper,numbox

      }
    }

</script>

<style lang="scss" scoped>
  .goodsinfo-container {
     background-color: #eee;
     overflow: hidden;
     margin-top: 40px;

     /*position: relative;*/
     .now_price {
       color: red;
       font-size: 16px;
       font-weight: bold;
     }

     .mui-card-footer {
       display: block;
       button {
         margin: 15px 0;
       }
     }

     .ball {
       width: 15px;
       height: 15px;
       border-radius: 50%;
       background-color: red;
       position: absolute;
       z-index: 99;
       top: 390px;
       left: 146px;
     }
   }
  .extra-inner{
    top:0px;
  }
  .goodsinfo-container .ball[data-v-6934d3ea] {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    z-index: 99;
    top: 390px;
    left: 140px;
  }

</style>
