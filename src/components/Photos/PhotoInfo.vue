<template>
    <div class="pho_inf_container">
      <h2>{{this.msgContent.title}}</h2>
      <div class="title_container">
        <span>发表时间：{{this.msgContent.add_time}}</span>
        <span>点击：{{this.msgContent.click}}次</span>
      </div>
      <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
      <div class="text_con">{{this.msgContent.content}}</div>
      <comments :id="id"/>
    </div>
</template>

<script>
  import Mock from 'mockjs'
  import comments from '../suncomponents/comment.vue'
    export default {
    components:{
      comments
    },
      data(){
        return{
          id:this.$route.params.id,
          msgContent:{},
          slide1: [
            {
              src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
              msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
              alt: 'picture1',
              title: 'Image Caption 1',
              w: 600,
              h: 400
            },
            {
              src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
              msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
              alt: 'picture2',
              title: 'Image Caption 2',
              w: 1200,
              h: 900
            }
          ]
        }
      },
      created(){
        this.getPhotoInfo()
      },
      methods:{
        getPhotoInfo(){
          //模拟数据
          var msg=Mock.Random.cparagraph(5,10)
          var title=Mock.Random.name()
          var Time=Mock.Random.datetime('yyyy-MM-dd hh:mm:ss')
          var data = Mock.mock({
            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
            'message': {
              // 属性 id 是一个自增数，起始值为 1，每次增 1
              'id|1-100': 1,
              'title':title,
              'click|1-1000':1,
              'content':msg,
              'add_time':Time
          }
        })
          this.msgContent=data.message
          this.$http.get("api/getthumimages/"+this.id).then(result=>{
            if(result.body.status===0){
              this.msgContent = result.body.message
            }else{

            }
          });
        },
        handleClose () {
          console.log('close event')
        }
      }
    }

</script>

<style lang="scss" scoped>
.pho_inf_container{
  margin-top: 40px;
  .title_container{
    border-bottom: 2px solid #CCC;
    justify-content: space-between;
    display: flex;
    padding: 0 3px;
    span{
      font-size: 13px;
      color: #a8a2b4;
    }
  }
  .text_con{
    font-size: 15px;
    color: #727278;
  }
}

</style>
