<template>
    <div class="news_container">
      <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
          <router-link :to="'/home/newsinfo/' + item.id">
            <img class="mui-media-object mui-pull-left" :src="item.img_url">
            <div class="mui-media-body">
              <h1>{{ item.title }}</h1>
              <p class='mui-ellipsis'>
                <span>发表时间：{{ item.add_time | dateFormat}}</span>
                <span>点击：{{item.click}}次</span>
              </p>
            </div>
          </router-link>
        </li>
      </ul>

    </div>
</template>

<script>
  import {Toast} from 'mint-ui'

    export default {
      data(){
        return{
          newslist:[
            {
              id:13,
              title:'奥接电话我库和我我哈萨克电脑卡刷卡数',
              add_time:'2019-04-12 05:45',
              img_url:'asd',
              click:23
            },
            {
              id:3,
              title:'奥斯卡接电哈萨克电脑卡刷卡机分段函数',
              add_time:'2019-04-12 07:05',
              img_url:'asd',
              click:3
            },{
              id:1,
              title:'奥我我哈萨克电脑卡刷卡机分段函数',
              add_time:'2019-01-12 04:45',
              img_url:'asd',
              click:2
            },{
              id:2,
              title:'奥斯卡接我库和我我',
              add_time:'2018-04-12 05:45',
              img_url:'asd',
              click:13
            },{
              id:17,
              title:'奥sf f 数',
              add_time:'2019-09-12 05:45',
              img_url:'asd',
              click:90
            },{
              id:5,
              title:'库沙发上分段函数',
              add_time:'2019-09-12 05:45',
              img_url:'asd',
              click:51
            },{
              id:45,
              title:'奥说法发送的大三阿达阿萨德阿萨德啊',
              add_time:'2019-09-12 05:45',
              img_url:'asd',
              click:510
            },{
              id:25,
              title:'奥说法发送的大三阿达阿萨德阿萨德啊',
              add_time:'2019-09-12 05:45',
              img_url:'asd',
              click:201
            },{
              id:44,
              title:'奥说法发送的大三阿达阿萨德阿萨德啊',
              add_time:'2019-09-12 05:45',
              img_url:'asd',
              click:30
            }
          ]
        }
      },
      created(){
        this.getNewsList()
      },
      methods:{
        getNewsList(){
          this.$http.get('/api/getnewslist').then(result=>{
            if(result.body.status===0){
              this.newslist=result.body.message
            }else{
                Toast('获取失败')
            }
          })
        }
      }
    }

</script>

<style lang="scss" scoped>
  .news_container{
    margin-top: 40px;
    .mui-table-view {
      li {
        h1 {
          font-size: 14px;
        }
        .mui-ellipsis {
          font-size: 12px;
          color: #226aff;
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }


</style>
