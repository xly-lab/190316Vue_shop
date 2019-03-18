<template>
    <div class="com_container">
      <h3>Hello I'm COMMENTS</h3>
      <hr>
      <textarea  placeholder="可以输入任何你想输的内容(120字以内)" name="" id="" cols="10" rows="3" maxlength="120" v-model="textContainer"></textarea>
      <mt-button  type="primary" size="large"> 发送评论</mt-button>
      <div class="cmt_container">
        <div class="cmt_item" v-for="(comment,index) in comments" :key="index">
          <div class="cmt_header">
            第{{index+1}}楼&nbsp;&nbsp;用户：{{comment.user_name}}&nbsp;&nbsp;发表时间：{{comment.add_time | dateFormat}}&nbsp;&nbsp;
          </div>
          <div class="cmt_content">
            {{comment.content}}
          </div>
        </div>
      </div>
      <mt-button  type="danger" plain size="large" @click="getMore"> 加载更多</mt-button>
    </div>
</template>

<script>
  import {Toast} from 'mint-ui'
  export default {
    props:{
      id:String
    },
    data(){
      return{
        comments:[
          {
            user_name:'xly',
            add_time:'2019-03-05 12:55:12',
            content:'There are have comment'
          },{
            user_name:'发过火框架',
            add_time:'2019-03-15 11:45:12',
            content:'好几款foxmail.com'
          },{
            user_name:'将导入后一个班',
            add_time:'2019-05-05 12:35:52',
            content:'我下次成一个 '
          },{
            user_name:'地方㾙',
            add_time:'2019-08-05 15:55:12',
            content:'我两色入不友好'
          }
        ],
        textContainer:[],
        pageIndex:1
      }
    },
    created(){
      this.getComments()
    },
    methods:{
      getComments(){
        this.$http.get('api/getcomments/:'+this.id+'?'+'pageindex='+this.pageIndex).then(result=>{
          if(result.status===0){
            this.comments=this.comments.concat(result.body.message)
          }else{
            Toast('获取评论失败')
          }
        })
      },
      getMore(){
        this.pageIndex++
        this.getComments()
      }
    }

  }

</script>

<style lang="scss" scoped>
.com_container{
  h3{
    font-size: 16px;
  }
  textarea{
    font-size: 12px;
    margin: 0;
  }
  .cmt_container{
    .cmt_item{
      margin: 5px 0;
      .cmt_header{
        border-radius: 3px;
        font-size: 10px;
        background-color: #9ae4ff;
      }
      .cmt_content{
        margin: 5px 5px;
        text-indent: 2em;
      }
    }
  }
}

</style>
