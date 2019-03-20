<template>
    <div class="com_container">
      <h3>Hello I'm COMMENTS</h3>
      <hr>
      <textarea  placeholder="可以输入任何你想输的内容(120字以内)" name="" id="" cols="10" rows="3" maxlength="120" v-model="textContainer"></textarea>
      <mt-button  type="primary" size="large" @click="postComments"> 发送评论</mt-button>
      <div class="cmt_container">
        <div class="cmt_item" v-for="(comment,index) in comments" :key="index">
          <div class="cmt_header">
            <span>第{{index+1}}楼用户：{{comment.user_name}}&nbsp;</span>
            <span>发表时间：{{comment.add_time | dateFormat}}</span>
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
        textContainer:'',
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
      },
      postComments(){

        if(this.textContainer.length===0)
        {
          return Toast('评论内容不能为空')
        }
        //以下七行代码模拟实现评论添加功能，因数据接收接口无法访问
        var cmt={
          user_name:"ad斯诺克",
          add_time:Date.now(),
          content:this.textContainer
        };
        this.comments.unshift(cmt);
        this.textContainer=''

        this.$http.post('api/postcomment/'+this.$route.params.id,{content:this.textContainer.trim()}).then(function (result) {
            if(result.body.status===0){
              var cmt={
                user_name:"ad斯诺克",
                add_time:Date.now(),
                content:this.textContainer
              };
              this.comments.unshift(cmt);
              this.textContainer=''
            }
        })
      }
    }

  }

</script>

<style lang="scss" scoped>
.com_container{
  margin-top: 50px;
  h3{
    font-size: 18px;
  }
  textarea{
    font-size: 12px;
    margin: 0;
  }
  .cmt_container{
    .cmt_item{
      margin: 5px 0;
      .cmt_header{
        text-align: left;
        border-radius: 3px;
        font-size: 10px;
        background-color: #9ae4ff;
        span:nth-child(1){
          border-right:1px solid black ;
        }
      }
      .cmt_content{
        margin: 5px 5px;
        text-indent: 2em;
      }
    }
  }
}

</style>
