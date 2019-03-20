<template>
    <div class="goods-list">
      <div  tag="div" class="goods-item" v-for="(good ,index) in goodsList" :key="index" @click="gotoItem(good.id,good)" >
        <img v-lazy="src" alt="">
        <h1>{{good.title}}</h1>
        <div class="info">
          <p class="price">
            <span class="now">￥{{good.sell_price}}</span>
            <span class="old">￥{{good.market_price}}</span>
          </p>
          <p class="sell">
            <span >热卖中</span>
            <span >剩余{{good.stock_quantity}}件</span>
          </p>
        </div>

      </div>
      <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
  import Mock from 'mockjs'
    export default {
      data(){
        return{
          goodsList:[],
          pageNumber:1,
          src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552974211123&di=40f1faf8e90048b326c975c52742c29d&imgtype=0&src=http%3A%2F%2Fimage.it168.com%2Fn%2F0x0%2F8%2F8259%2F8259719.jpg'
        }
      },
      created(){
        this.getGoodsList()
      },
      methods:{
        gotoItem(id,good){
          this.$router.push({name:'goodsinfo',params:{id,good}})
        },
        getMore(){
            this.pageNumber++;
            this.getGoodsList()
        },
        getGoodsList(){
          var msg=Mock.Random.cparagraph(5,10)
          var title=Mock.Random.name()
          var Time=Mock.Random.datetime('yyyy-MM-dd hh:mm:ss')
          var zhaiyao=Mock.Random.cparagraph(1,3)
          var data = Mock.mock({
            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
            'message|10': [{
              // 属性 id 是一个自增数，起始值为 1，每次增 1
              'id|1-100': 1,
              'title': title,
              'click|1-1000': 1,
              'content': msg,
              'add_time': Time,
              'zhaiyao':zhaiyao,
              'sell_price|1200-1300':1200,
              'market_price|1300-1400':1300,
              'stock_quantity|20-1000':50
            }]
          })
          this.goodsList=this.goodsList.concat(data.message)
          this.$http.get('api/getgoods?pageindex='+this.pageNumber).then(result=>{
            if(result.body.status===0)
            {
              this.goodsList = result.body.message
            }else{}
          })
        }
      }
    }

</script>

<style lang="scss" scoped>
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    padding: 7px;
    justify-content: space-between;
    margin-top: 40px;
    .goods-item {
      width: 49%;
      border: 1px solid #ccc;
      box-shadow: 0 0 8px #ccc;
      margin: 4px 0;
      padding: 2px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 293px;
      img {
        width: 100%;
      }
      h1{
        font-size: 14px;
      }
      .title {
        font-size: 14px;
      }

      .info {
        background-color: #eee;
        p {
          margin: 0;
          padding: 5px;
        }
        .price {
          .now {
            color: red;
            font-weight: bold;
            font-size: 16px;
          }
          .old {
            text-decoration: line-through;
            font-size: 12px;
            margin-left: 10px;
          }
        }
        .sell {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
        }
      }
    }
  }


</style>
